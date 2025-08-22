// components/navbar.tsx

"use client";

import { CaretRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
	backgroundVariants,
	itemVariants,
	navVariants,
	sidebarVariants
} from "../lib/animationConstants";
import { MenuToggle } from "../lib/animationSidebar";

interface NavbarProps {
	activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
	const [isActive, setIsActive] = useState(false);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLUListElement>(null);

	const pathName = usePathname();
	const router = useRouter();

	const navLinks = [
		{ name: "Home", href: "/", id: "home" },
		{ name: "About", href: "/about", id: "about" },
		{ name: "Services", href: "/services", id: "services" },
		{ name: "Contact", href: "/contact", id: "contact" }
	];

	const [navBg, setNavBg] = useState(false);

	const [underlineStyle, setUnderlineStyle] = useState({ width: 0, x: 0 });

	const changeNavBg = () => {
		if (window.scrollY >= 1) {
			setNavBg(true);
		}
		else {
			setNavBg(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNavBg);
		return () => {
			window.removeEventListener("scroll", changeNavBg);
		};
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;
		if (isActive) {
			document.body.classList.add("overflow-hidden");
			document.body.addEventListener("touchmove", preventScroll, {
				passive: false
			});
		}
		else {
			document.body.classList.remove("overflow-hidden");
			document.body.removeEventListener("touchmove", preventScroll);
		}
		return () => {
			document.body.classList.remove("overflow-hidden");
			document.body.removeEventListener("touchmove", preventScroll);
		};
	}, [isActive]);

	useEffect(() => {
		if (navRef.current) {
			const activeLinkElement = navRef.current.querySelector(
				`[data-id="${activeSection}"]`
			) as HTMLElement;

			if (activeLinkElement) {
				const ulRect = navRef.current.getBoundingClientRect();
				const linkRect = activeLinkElement.getBoundingClientRect();

				setUnderlineStyle({
					width: linkRect.width,
					x: linkRect.left - ulRect.left
				});
			}
			else {
				setUnderlineStyle({ width: 0, x: 0 });
			}
		}

		const handleResize = () => {
			if (navRef.current) {
				const activeLinkElement = navRef.current.querySelector(
					`[data-id="${activeSection}"]`
				) as HTMLElement;
				if (activeLinkElement) {
					const ulRect = navRef.current.getBoundingClientRect();
					const linkRect = activeLinkElement.getBoundingClientRect();
					setUnderlineStyle({
						width: linkRect.width,
						x: linkRect.left - ulRect.left
					});
				}
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [activeSection]);

	function preventScroll(e: TouchEvent) {
		e.preventDefault();
	}

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		setIsActive(false);
	};

	return (
		<nav
			className={twMerge(
				"fixed top-0 z-50 w-full py-4 px-8 flex items-center",
				navBg ? "bg-white/80 backdrop-blur-xs" : "bg-transparent",
				"transition-all duration-300",
				"md:justify-between",
				"justify-between"
			)}
		>
			<div className="font-medium md:block flex-1 flex items-center">
				<span>Pinisi Studio</span>
			</div>
			<div className="hidden md:block relative">
				<ul ref={navRef} className="flex gap-8">
					{navLinks.map(link => (
						<li
							key={link.id}
							data-id={link.id}
							className={twMerge(
								"cursor-pointer py-1 transition-colors duration-300 ease-in-out",
								activeSection === link.id ? "font-medium" : "hover:font-medium"
							)}
							onClick={() => scrollToSection(link.id)}
						>
							{link.name}
						</li>
					))}
				</ul>
				<motion.span
					className="absolute bottom-0 h-[2px] bg-[#00AEEF] rounded-full"
					animate={underlineStyle}
					transition={{ type: "spring", stiffness: 500, damping: 30 }}
				/>
			</div>
			<div className="md:hidden flex items-center z-50">
				<MenuToggle toggle={() => setIsActive(!isActive)} isOpen={isActive} />
			</div>

			{/* Overlay tetap muncul tanpa bergantung pada scroll */}
			{isActive && (
				<div
					// initial={{ opacity: 0 }}
					// animate={{ opacity: 1 }}
					// exit={{ opacity: 0 }}
					// transition={{ duration: 0.3 }}
					className="fixed h-screen w-screen top-0 left-0 z-30 md:hidden bg-black/30 backdrop-blur-md"
					onClick={() => setIsActive(false)}
				>
				</div>
			)}

			<motion.div
				ref={sidebarRef}
				initial={false}
				animate={isActive ? "open" : "closed"}
				variants={sidebarVariants}
				style={{ pointerEvents: isActive ? "auto" : "none" }}
				className={twMerge(
					"fixed top-0 right-0 h-screen w-screen z-40 bg-transparent md:hidden overflow-hidden"
				)}
			>
				<motion.div
					className="absolute top-0 right-0 h-full w-[80vw] max-w-xs bg-white shadow-lg pointer-events-auto z-40 shadow-[0 0 40px rgba(0,0,0,0.2)]"
					variants={backgroundVariants}
				>
					<motion.ul
						variants={navVariants}
						className="flex flex-col items-start gap-8 p-8 pt-24 text-2xl font-light text-black"
					>
						{navLinks.map((link, index) => (
							<motion.li
								key={link.id}
								variants={itemVariants}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className={twMerge(
									"w-full flex items-center gap-2",
									activeSection === link.id ? "text-[#00AEEF] font-semibold" : "font-semibold"
								)}
								onClick={() => scrollToSection(link.id)}
							>
								<span
									className={twMerge(
										"transition-opacity duration-200",
										activeSection === link.id ? "opacity-100" : "opacity-0"
									)}
								>
									<CaretRight size={24} weight="bold" />
								</span>
								<a href={`${link.id}`} className="w-full block">
									{link.name}
								</a>
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			</motion.div>
		</nav>
	);
}
