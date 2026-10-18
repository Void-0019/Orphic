import { Bodoni_Moda, Geist } from "next/font/google";

export const displayFont = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const bodyFont = Geist({
  subsets: ["latin"],
  display: "swap",
});