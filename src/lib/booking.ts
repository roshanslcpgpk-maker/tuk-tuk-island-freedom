import { z } from "zod";

export const bookingSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your full name").max(100),
    email: z.string().trim().email("Please enter a valid email address").max(255),
    whatsapp: z
      .string()
      .trim()
      .regex(/^\+?[0-9\s-]{7,20}$/, "Please enter a valid WhatsApp number with country code"),
    vehicle: z.enum(["Tuk Tuk", "Motorbike"], { errorMap: () => ({ message: "Please choose a vehicle type" }) }),
    pickupDate: z.string().min(1, "Please choose a pickup date"),
    returnDate: z.string().min(1, "Please choose a return date"),
    location: z.string().trim().min(2, "Please enter a pickup location").max(150),
    message: z.string().trim().max(1000).optional().or(z.literal("")),
  })
  .refine((d) => !d.pickupDate || !d.returnDate || d.returnDate >= d.pickupDate, {
    path: ["returnDate"],
    message: "Return date must be on or after the pickup date",
  });

export type Booking = z.infer<typeof bookingSchema>;

export function bookingMessage(b: Booking) {
  return [
    "Hello Windy Tour! I'd like to make a booking inquiry.",
    "",
    `Name: ${b.name}`,
    `Email: ${b.email}`,
    `WhatsApp: ${b.whatsapp}`,
    `Vehicle: ${b.vehicle}`,
    `Pickup date: ${b.pickupDate}`,
    `Return date: ${b.returnDate}`,
    `Pickup location: ${b.location}`,
    b.message ? `Message: ${b.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
