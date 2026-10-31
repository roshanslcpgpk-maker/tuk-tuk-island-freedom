import hero from "@/assets/hero.jpg";
import ella from "@/assets/dest-ella.jpg";
import sigiriya from "@/assets/dest-sigiriya.jpg";
import mirissa from "@/assets/dest-mirissa.jpg";
import galle from "@/assets/dest-galle.jpg";
import kandy from "@/assets/dest-kandy.jpg";
import arugam from "@/assets/dest-arugam.jpg";
import tukRow from "@/assets/tuk-row.jpg.asset.json";
import tukHills from "@/assets/tuk-hills.jpg.asset.json";
import tukCoast from "@/assets/tuk-coast.jpg.asset.json";
import tukTea from "@/assets/tuk-tea.jpg.asset.json";
import tukGreen from "@/assets/tuk-green.jpg.asset.json";
import motoSunset from "@/assets/moto-sunset.jpg.asset.json";
import motoCouple from "@/assets/moto-couple.jpg.asset.json";
import motoRider from "@/assets/moto-rider.jpg.asset.json";
import motoJungle from "@/assets/moto-jungle.jpg.asset.json";
import motoCoast from "@/assets/moto-coast.jpg.asset.json";

export const IMG = {
  hero,
  tukRow: tukRow.url,
  tukHills: tukHills.url,
  tukCoast: tukCoast.url,
  tukTea: tukTea.url,
  tukGreen: tukGreen.url,
  motoSunset: motoSunset.url,
  motoCouple: motoCouple.url,
  motoRider: motoRider.url,
  motoJungle: motoJungle.url,
  motoCoast: motoCoast.url,
};

export const DESTINATIONS = [
  { name: "Ella", region: "Hill Country", img: ella, note: "Misty tea hills, Nine Arch Bridge and winding mountain roads." },
  { name: "Sigiriya", region: "Cultural Triangle", img: sigiriya, note: "The ancient Lion Rock rising above endless jungle." },
  { name: "Mirissa", region: "South Coast", img: mirissa, note: "Palm-fringed bays, sunsets and slow beach days." },
  { name: "Galle", region: "South Coast", img: galle, note: "Colonial ramparts, lighthouse views and old-town lanes." },
  { name: "Kandy", region: "Central Highlands", img: kandy, note: "Sacred temples beside a serene lake in the hills." },
  { name: "Arugam Bay", region: "East Coast", img: arugam, note: "Laid-back surf town with legendary point breaks." },
];
