"use client";
import { ArrowDown, ArrowUpRight, Envelope, InstagramLogo } from "@phosphor-icons/react";
// import { gsap } from "gsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
	const homeRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const servicesRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const [activeSection, setActiveSection] = useState("home");
	const NAVBAR_HEIGHT_PX = 64;
	const wave1Ref = useRef<SVGPathElement>(null);
	const wave2Ref = useRef<SVGPathElement>(null);
	const wave3Ref = useRef<SVGPathElement>(null);
	const wave4Ref = useRef<SVGPathElement>(null);
	const wave5Ref = useRef<SVGPathElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				root: null,
				rootMargin: `-${NAVBAR_HEIGHT_PX}px 0px -20% 0px`,
				threshold: 0.3
			}
		);

		if (homeRef.current) observer.observe(homeRef.current);
		if (aboutRef.current) observer.observe(aboutRef.current);
		if (servicesRef.current) observer.observe(servicesRef.current);
		if (contactRef.current) observer.observe(contactRef.current);

		return () => {
			if (homeRef.current) observer.unobserve(homeRef.current);
			if (aboutRef.current) observer.unobserve(aboutRef.current);
			if (servicesRef.current) observer.unobserve(servicesRef.current);
			if (contactRef.current) observer.unobserve(contactRef.current);
		};
	}, []);

	useEffect(() => {
		if (wave1Ref.current) {
			gsap.to(wave1Ref.current, {
				y: -20,
				duration: 4,
				ease: "sine.inOut",
				repeat: -1,
				yoyo: true
			});
		}
		if (wave2Ref.current) {
			gsap.to(wave2Ref.current, {
				y: -15,
				duration: 3.5,
				ease: "sine.inOut",
				repeat: -1,
				yoyo: true
			});
		}

		if (wave3Ref.current) {
			gsap.to(wave3Ref.current, {
				y: -20,
				duration: 4.5,
				ease: "sine.inOut",
				repeat: -1,
				yoyo: true
			});
		}
		if (wave4Ref.current) {
			gsap.to(wave4Ref.current, {
				y: -15,
				duration: 4,
				ease: "sine.inOut",
				repeat: -1,
				yoyo: true
			});
		}

		if (wave5Ref.current) {
			gsap.to(wave5Ref.current, {
				y: 10,
				duration: 3,
				ease: "sine.inOut",
				repeat: -1,
				yoyo: true
			});
		}
	}, []);

	useEffect(() => {
		if (homeRef.current && aboutRef.current) {
			gsap.to(homeRef.current, {
				yPercent: 20,
				ease: "none",
				scrollTrigger: {
					trigger: homeRef.current,
					start: "top top",
					end: () => `+=${aboutRef.current?.offsetHeight}`,
					scrub: true
				}
			});
		}
	}, []);

	const handleScrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<>
			<Navbar activeSection={activeSection} />

			<div
				id="home"
				ref={homeRef}
				className="w-full h-screen flex flex-col justify-center items-center px-4 sm:px-8 text-center scroll-mt-16 relative z-10" // Added relative z-10
			>
				<div className="flex flex-col items-center gap-6 sm:gap-8">
					<Image src="/icon.png" alt="Pinisi Studio" width={0} height={0} className="w-10 sm:w-12" unoptimized />
					<div className="text-center">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight sm:leading-tight md:leading-tight">From Archipelago To Algorithm.</h1>
						<h2 className="text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4">Just a bunch of devs making cool stuff.</h2>
					</div>
					<button
						type="button"
						className="flex items-center gap-2 border-b-2 border-[#00AEEF] py-1 text-base sm:text-lg"
						onClick={() => handleScrollToSection("about")}
					>
						<span>explore</span>
						<ArrowDown size={20} />
					</button>
				</div>
			</div>

			<div className="relative -mt-screen-half">
				{" "}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute -top-72 sm:-top-64 md:-top-72">
					<path fill="#00AEEF" fillOpacity="1" d="M0,128L60,154.7C120,181,240,235,360,234.7C480,235,600,181,720,181.3C840,181,960,235,1080,261.3C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" ref={wave1Ref}></path>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute -top-64 sm:-top-56 md:-top-64 opacity-40 -z-1">
					<path fill="#00AEEF" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,117.3C384,149,480,203,576,197.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" ref={wave2Ref}></path>
				</svg>

				<div
					id="about"
					ref={aboutRef}
					className="w-full py-20 sm:py-32 md:py-40 flex flex-col justify-center items-center bg-[#00AEEF] scroll-mt-16 px-4 relative z-0" // Added relative z-0
				>
					<div className="flex flex-col items-center gap-6 sm:gap-8 text-white text-center">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight sm:leading-tight md:leading-tight">Meet the Captain of the Voyage.</h1>
						<h2 className="text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4">The legend of the ocean conqueror.</h2>
						<button
							type="button"
							className="flex items-center gap-2 border-b-2 border-white py-1 text-base sm:text-lg"
							onClick={() => handleScrollToSection("services")}
						>
							<span>see more</span>
							<ArrowUpRight weight="bold" size={20} />
						</button>
					</div>
					<div className="flex flex-col md:flex-row gap-8 items-center md:items-end mt-16 md:mt-24 w-full max-w-5xl px-4 md:px-0">
						{/* GAMBAR */}
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
					<path fill="#00AEEF" fillOpacity="1" d="M0,192L60,165.3C120,139,240,85,360,69.3C480,53,600,75,720,112C840,149,960,203,1080,213.3C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" ref={wave3Ref}></path>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute -bottom-0 opacity-40 -z-1">
					<path fill="#0099ff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,106.7C672,75,768,53,864,69.3C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" ref={wave4Ref}></path>
				</svg>
			</div>

			<div
				id="services"
				ref={servicesRef}
				className="w-full pt-20 pb-40 flex flex-col justify-center items-center scroll-mt-16 px-4"
			>
				<div className="flex flex-col items-center gap-6 sm:gap-8 text-center">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight sm:leading-tight md:leading-tight">Discover a Dazzling Array of Masterpieces.</h1>
					<h2 className="text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4">There's no need to overdo it, it's just an art.</h2>
					<button
						type="button"
						className="flex items-center gap-2 border-b-2 border-[#00AEEF] py-1 text-base sm:text-lg"
						onClick={() => handleScrollToSection("contact")}
					>
						<span>see more</span>
						<ArrowUpRight size={20} />
					</button>
				</div>
				<div className="w-full sm:w-4/5 max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-12 sm:mt-16">
					<div className="col-span-1 sm:col-span-1 lg:col-span-1 flex flex-col gap-4">
						<div className="group h-full p-6 sm:p-10 rounded-md hover:scale-105 sm:hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium text-base sm:text-lg">eSPW</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" size={24} />
							<div className="p-6 sm:p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
						<div className="group h-full p-6 sm:p-10 rounded-md hover:scale-105 sm:hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium text-base sm:text-lg">Sekolahku</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" size={24} />
							<div className="p-6 sm:p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
						<div className="group h-full p-6 sm:p-10 rounded-md hover:scale-105 sm:hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium text-base sm:text-lg">Inventara</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" size={24} />
							<div className="p-6 sm:p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
					</div>
					<div className="col-span-1 sm:col-span-1 lg:col-span-1">
						<div className="group p-6 sm:p-10 rounded-md h-full hover:scale-105 sm:hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium text-base sm:text-lg">Apotek XYZ</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" size={24} />
							<div className="p-6 sm:p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
					</div>
					<div className="col-span-1 sm:col-span-2 lg:col-span-2">
						<div className="group p-6 sm:p-10 rounded-md h-full hover:scale-105 sm:hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium text-base sm:text-lg">Bitter Rush</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" size={24} />
							<div className="p-6 sm:p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
					</div>
					<div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-4">
						<div className="group p-6 sm:p-10 rounded-md h-full hover:scale-105 sm:hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium text-base sm:text-lg">E - Cash</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" size={24} />
							<div className="p-6 sm:p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
						<div className="flex flex-col sm:flex-row gap-4">
							<div className="group h-full w-full p-6 sm:p-10 rounded-md hover:scale-105 sm:hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
								<span className="absolute bottom-2 left-2 font-medium text-base sm:text-lg">X-Plore</span>
								<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" size={24} />
								<div className="p-6 sm:p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
							</div>
							<div className="group h-full w-full p-6 sm:p-10 rounded-md hover:scale-105 sm:hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
								<span className="absolute bottom-2 left-2 font-medium text-base sm:text-lg">Untolded</span>
								<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" size={24} />
								<div className="p-6 sm:p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="m-auto border-2 border-[#00AEEF] w-32 sm:w-48 my-10"></div>

			<div
				id="contact"
				ref={contactRef}
				className="w-full pt-20 pb-20 sm:pt-32 sm:pb-32 md:pt-40 md:pb-40 flex flex-col justify-center items-center scroll-mt-16 px-4" // Responsive padding and scroll-mt
			>
				<div className="flex flex-col items-center gap-10 sm:gap-14 text-center">
					<div className="text-center">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight sm:leading-tight md:leading-tight">What's Your Idea, Captain?</h1>
						<h2 className="text-lg sm:text-xl md:text-2xl mt-3 sm:mt-4">Make your idea happen today!</h2>
					</div>
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full justify-center">
						<button type="button" className="flex items-center justify-center gap-2 border-b-2 border-[#00AEEF] py-1 text-base sm:text-lg px-4">
							<Envelope size={20} />
							<span>contact@pinisi.dev</span>
							<ArrowUpRight size={20} />
						</button>
						<button type="button" className="flex items-center justify-center gap-2 border-b-2 border-[#00AEEF] py-1 text-base sm:text-lg px-4">
							<InstagramLogo size={20} />
							<span>@pinisi.dev</span>
							<ArrowUpRight size={20} />
						</button>
					</div>
				</div>
			</div>

			<footer className="w-full">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full -mb-1">
					<path fill="#00AEEF" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" ref={wave5Ref}></path>
				</svg>
				<div className="w-full p-8 sm:p-10 md:p-12 bg-[#00AEEF]">
					<div className="w-full sm:w-4/5 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-white px-4 sm:px-0">
						<div className="col-span-1 sm:col-span-2 lg:col-span-2">
							<Image src="/icon-white.png" alt="Pinisi Studio" width={0} height={0} className="w-10 sm:w-12" unoptimized />
							<div className="mt-6 sm:mt-8 flex flex-col gap-2">
								<p className="font-semibold text-base sm:text-lg">Pinisi Studio</p>
								<p className="font-normal text-sm sm:text-base">Perum Sukamulya, No 69, RT 003, RW 002, Jalan Letnan Harun, Kelurahan Sukamulya, Kecamatan Bungursari, Kota Tasikmalaya, Jawa Barat 46151</p>
								<p className="font-semibold text-base sm:text-lg">contact@pinisi.dev</p>
							</div>
						</div>
						<div className="col-span-1">
							<p className="font-semibold text-base sm:text-lg">Pinisi Studio</p>
							<ul className="mt-6 sm:mt-8 flex flex-col gap-2 text-sm sm:text-base">
								<li className="cursor-pointer" onClick={() => handleScrollToSection("home")}>Home</li>
								<li className="cursor-pointer" onClick={() => handleScrollToSection("about")}>About</li>
								<li className="cursor-pointer" onClick={() => handleScrollToSection("services")}>Services</li>
								<li className="cursor-pointer" onClick={() => handleScrollToSection("contact")}>Contact</li>
							</ul>
						</div>
						<div className="col-span-1">
							<p className="font-semibold text-base sm:text-lg">Contact Us</p>
							<div className="mt-6 sm:mt-8 flex gap-4">
								<Envelope size={24} className="sm:w-8 h-8" />
								<InstagramLogo size={24} className="sm:w-8 h-8" />
							</div>
						</div>
					</div>
				</div>
				<div className="w-full p-6 sm:p-8 bg-[#00AEEF]">
					<div className="w-full sm:w-4/5 m-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 sm:gap-0">
						<span className="text-white text-sm sm:text-base">
							&#169;
							{new Date().getFullYear()}
							{" "}
							Pinisi Studio. All rights reserved.
						</span>
						<span className="text-white text-sm sm:text-base">Made with &#10084; by Pinisi Studio</span>
					</div>
				</div>
			</footer>
		</>
	);
}
