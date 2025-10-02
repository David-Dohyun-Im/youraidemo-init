"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type VariantId = 1 | 2 | 3 | 4 | 5;

export type CTAButtonVariantProps = {
  variant: VariantId;
  label?: string;
  size?: "thumb" | "display";
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: (e: React.MouseEvent) => void;
};

const baseSizing: Record<NonNullable<CTAButtonVariantProps["size"]>, { text: string; px: string; py: string; rounded: string; font: React.CSSProperties } > = {
  thumb: {
    text: "text-sm",
    px: "px-3",
    py: "py-0",
    rounded: "rounded-2xl",
    font: { fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontWeight: 500 },
  },
  display: {
    text: "text-base",
    px: "px-4",
    py: "py-0",
    rounded: "rounded-2xl",
    font: { fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", fontWeight: 500 },
  },
};

function getVariantClasses(variant: VariantId) {
  switch (variant) {
    case 1:
      return "bg-white text-black hover:bg-white/90";
    case 2:
      return "bg-transparent text-white border border-white/70 hover:bg-white/10";
    case 3:
      return "text-white bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300";
    case 4:
      return "text-white bg-black/40 backdrop-blur-sm border border-white/20 hover:bg-black/50";
    case 5:
      return "text-white bg-orange-500 hover:bg-orange-600";
    default:
      return "bg-white text-black";
  }
}

export function CTAButtonVariant({ variant, label = "Start free exploration", size = "thumb", className, onMouseEnter, onMouseLeave, onClick, }: CTAButtonVariantProps) {
  const sizing = baseSizing[size];

  return (
    <motion.button
      className={cn(
        "inline-flex items-center justify-center cursor-pointer border-2 border-transparent transition-all h-[50px]",
        sizing.text,
        sizing.px,
        sizing.py,
        sizing.rounded,
        getVariantClasses(variant),
        className
      )}
      style={sizing.font}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
}

export default CTAButtonVariant;

