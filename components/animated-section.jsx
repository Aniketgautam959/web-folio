"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedSection({ children, className, id }) {
  return (
    <motion.section
      id={id}
      className={cn("scroll-mt-28", className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -72px 0px", amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.section>
  );
}
