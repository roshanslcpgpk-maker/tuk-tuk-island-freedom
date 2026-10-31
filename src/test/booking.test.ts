import { describe, expect, it } from "vitest";
import { bookingSchema } from "@/lib/booking";

const base = { name: "Anna Smith", email: "anna@example.com", whatsapp: "+44 7700 900000", vehicle: "Tuk Tuk", pickupDate: "2026-12-01", returnDate: "2026-12-05", location: "Ella", message: "" };

describe("booking inquiry", () => {
  it("accepts a complete inquiry", () => expect(bookingSchema.safeParse(base).success).toBe(true));
  it("rejects a return date before pickup", () => expect(bookingSchema.safeParse({ ...base, returnDate: "2026-11-30" }).success).toBe(false));
  it("only allows Tuk Tuk or Motorbike", () => expect(bookingSchema.safeParse({ ...base, vehicle: "Car" }).success).toBe(false));
});
