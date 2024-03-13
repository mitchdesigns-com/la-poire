"use client"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Counter({
  value,
  direction = "up",
  removeComma = false, 
}: {
  value: number;
  direction?: "up" | "down";
  removeComma?: boolean;
}) {
  // console.log('value',value)
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 1000,
    stiffness: 1000,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(() => {
    const updateTextContent = (latest: number) => {
      if (ref.current) {
        let formattedValue = Intl.NumberFormat("en-US").format(
          Number(latest.toFixed(0))
        );
        if (removeComma) {
          formattedValue = formattedValue.replace(/,/g, "");
        }
        ref.current.textContent = formattedValue;
      }
    };

    const changeListener = springValue.on("change", updateTextContent);

    return () => {
      changeListener();
    };
  }, [springValue, removeComma]);

  return (<span ref={ref} ></span>);
}
