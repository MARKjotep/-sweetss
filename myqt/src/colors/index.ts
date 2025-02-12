import { CSS, f } from "sweetss";
import { $$, obj, oItems } from "../@";
import BG from "./bg";
import Border from "./border";
import Col from "./column_rule";
import Gradient from "./gradient";
import Outline from "./outline";
import Text from "./text";

export default (c: CSS) => {
  const TO_OUT = [
    //
    BG,
    Border,
    Col,
    Gradient,
    Outline,
    Text,
  ];
  //
  oItems(MISC).forEach(([k, v]) => {
    TO_OUT.forEach((ff) => {
      ff(c, `_${k}`, "", v);
    });
  });

  oItems({
    blue,
    green,
    red,
    yellow,
    orange,
    purple,
    gray,
    indigo,
    pink,
    teal,
  }).forEach(([k, v]) => {
    oItems(v).forEach(([shade, val]) => {
      TO_OUT.forEach((ff) => {
        ff(c, `_${k}`, `_${shade}`, val);
      });
    });
  });
};

/*
-------------------------

-------------------------
*/
const MISC = {
  black: ["#000000", "#ffffff"],
  white: ["#ffffff", "#000000"],
  transparent: ["transparent", "transparent"],
  current: ["currentColor", "currentColor"],
};

const blue = {
  50: ["#eff6ff", "#172554"],
  100: ["#dbeafe", "#1e3a8a"],
  200: ["#bfdbfe", "#1e40af"],
  300: ["#93c5fd", "#1d4ed8"],
  400: ["#60a5fa", "#2563eb"],
  500: ["#3b82f6", "#60a5fa"],
  600: ["#2563eb", "#93c5fd"],
  700: ["#1d4ed8", "#bfdbfe"],
  800: ["#1e40af", "#dbeafe"],
  900: ["#1e3a8a", "#eff6ff"],
  950: ["#172554", "#f8fbff"],
};

const green = {
  50: ["#f0fdf4", "#052e16"],
  100: ["#dcfce7", "#14532d"],
  200: ["#bbf7d0", "#166534"],
  300: ["#86efac", "#15803d"],
  400: ["#4ade80", "#16a34a"],
  500: ["#22c55e", "#4ade80"],
  600: ["#16a34a", "#86efac"],
  700: ["#15803d", "#bbf7d0"],
  800: ["#166534", "#dcfce7"],
  900: ["#14532d", "#f0fdf4"],
  950: ["#052e16", "#f6fff9"],
};

const red = {
  50: ["#fef2f2", "#450a0a"],
  100: ["#fee2e2", "#7f1d1d"],
  200: ["#fecaca", "#991b1b"],
  300: ["#fca5a5", "#b91c1c"],
  400: ["#f87171", "#dc2626"],
  500: ["#ef4444", "#f87171"],
  600: ["#dc2626", "#fca5a5"],
  700: ["#b91c1c", "#fecaca"],
  800: ["#991b1b", "#fee2e2"],
  900: ["#7f1d1d", "#fef2f2"],
  950: ["#450a0a", "#fffbfb"],
};

const yellow = {
  50: ["#fefce8", "#422006"],
  100: ["#fef9c3", "#713f12"],
  200: ["#fef08a", "#854d0e"],
  300: ["#fde047", "#a16207"],
  400: ["#facc15", "#ca8a04"],
  500: ["#eab308", "#fde047"],
  600: ["#ca8a04", "#fef08a"],
  700: ["#a16207", "#fef9c3"],
  800: ["#854d0e", "#fefce8"],
  900: ["#713f12", "#fffaeb"],
  950: ["#422006", "#fffdf6"],
};

const orange = {
  50: ["#fff7ed", "#431407"],
  100: ["#ffedd5", "#7c2d12"],
  200: ["#fed7aa", "#9a3412"],
  300: ["#fdba74", "#c2410c"],
  400: ["#fb923c", "#ea580c"],
  500: ["#f97316", "#fdba74"],
  600: ["#ea580c", "#febc89"],
  700: ["#c2410c", "#fed7aa"],
  800: ["#9a3412", "#ffedd5"],
  900: ["#7c2d12", "#fff7ed"],
  950: ["#431407", "#fffcf5"],
};

const purple = {
  50: ["#faf5ff", "#3b0764"],
  100: ["#f3e8ff", "#581c87"],
  200: ["#e9d5ff", "#6b21a8"],
  300: ["#d8b4fe", "#7e22ce"],
  400: ["#c084fc", "#9333ea"],
  500: ["#a855f7", "#c084fc"],
  600: ["#9333ea", "#d8b4fe"],
  700: ["#7e22ce", "#e9d5ff"],
  800: ["#6b21a8", "#f3e8ff"],
  900: ["#581c87", "#faf5ff"],
  950: ["#3b0764", "#f9f1ff"],
};

const gray = {
  50: ["#f9fafb", "#030712"],
  100: ["#f3f4f6", "#111827"],
  200: ["#e5e7eb", "#1f2937"],
  300: ["#d1d5db", "#374151"],
  400: ["#9ca3af", "#4b5563"],
  500: ["#6b7280", "#9ca3af"],
  600: ["#4b5563", "#d1d5db"],
  700: ["#374151", "#e5e7eb"],
  800: ["#1f2937", "#f3f4f6"],
  900: ["#111827", "#f9fafb"],
  950: ["#030712", "#ffffff"],
};

const indigo = {
  50: ["#eef2ff", "#1e1b4b"],
  100: ["#e0e7ff", "#312e81"],
  200: ["#c7d2fe", "#3730a3"],
  300: ["#a5b4fc", "#4338ca"],
  400: ["#818cf8", "#4f46e5"],
  500: ["#6366f1", "#818cf8"], // Lighter in dark mode
  600: ["#4f46e5", "#a5b4fc"],
  700: ["#4338ca", "#c7d2fe"],
  800: ["#3730a3", "#e0e7ff"],
  900: ["#312e81", "#eef2ff"],
  950: ["#1e1b4b", "#f8fafc"],
};

const pink = {
  50: ["#fdf2f8", "#500724"],
  100: ["#fce7f3", "#831843"],
  200: ["#fbcfe8", "#9d174d"],
  300: ["#f9a8d4", "#be185d"],
  400: ["#f472b6", "#db2777"],
  500: ["#ec4899", "#f472b6"],
  600: ["#db2777", "#f9a8d4"],
  700: ["#be185d", "#fbcfe8"],
  800: ["#9d174d", "#fce7f3"],
  900: ["#831843", "#fdf2f8"],
  950: ["#500724", "#fff1f5"],
};

const teal = {
  50: ["#f0fdfa", "#042f2e"],
  100: ["#ccfbf1", "#134e4a"],
  200: ["#99f6e4", "#115e59"],
  300: ["#5eead4", "#0f766e"],
  400: ["#2dd4bf", "#0d9488"],
  500: ["#14b8a6", "#2dd4bf"],
  600: ["#0d9488", "#5eead4"],
  700: ["#0f766e", "#99f6e4"],
  800: ["#115e59", "#ccfbf1"],
  900: ["#134e4a", "#f0fdfa"],
  950: ["#042f2e", "#fafffc"],
};

export function hexToRGBA(color: string, val: any) {
  if (color === "transparent" || color === "currentColor") return color;

  return f.rgba(
    parseInt(color.slice(1, 3), 16),
    parseInt(color.slice(3, 5), 16),
    parseInt(color.slice(5, 7), 16),
    val,
  );
}
