// lib/animationConstants.ts

import type { Variants } from "framer-motion"; // Import Variants hanya sebagai type
import { motion } from "framer-motion";

// ========== Animasi Sidebar & Hamburger ==========
export const sidebarVariants: Variants = { // Tambahkan : Variants
	open: {
		clipPath: `circle(1200px at 90vw 10px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2
		},
		pointerEvents: "auto"
	},
	closed: {
		clipPath: "circle(30px at 110vw 10px)",
		transition: {
			delay: 0.2,
			type: "spring",
			stiffness: 400,
			damping: 40
		},
		pointerEvents: "none"
	}
};

// Untuk background sidebar (agar smooth)
export const backgroundVariants: Variants = { // Tambahkan : Variants
	open: { opacity: 1, transition: { delay: 0.1 } },
	closed: { opacity: 1 }
};

export const navVariants: Variants = { // Tambahkan : Variants
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 }
	}
};

export const itemVariants: Variants = { // Tambahkan : Variants
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
};

// Komponen Path untuk ikon hamburger
export const Path = (props: any) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 0%, 18%)"
		strokeLinecap="round"
		{...props}
	/>
);
