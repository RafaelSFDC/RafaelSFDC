"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { cn } from "@/lib/utils";

interface LottieAnimationProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function LottieAnimation({
  src,
  loop = true,
  autoplay = true,
  className,
  width,
  height,
}: LottieAnimationProps) {
  return (
    <div
      className={cn(
        "my-8 flex justify-center items-center overflow-hidden rounded-xl bg-muted/30 p-8",
        className,
      )}
    >
      <div
        style={{
          width: width ? width : "100%",
          height: height ? height : "auto",
          maxWidth: "100%",
        }}
        className="relative"
      >
        <DotLottieReact
          src={src}
          loop={loop}
          autoplay={autoplay}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
