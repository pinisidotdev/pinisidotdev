"use client";
import { ArrowDown, ArrowUpRight, Envelope, InstagramLogo } from "@phosphor-icons/react";
import Image from "next/image";

export default function Page() {
	return (
		<>
			<nav className="fixed top-0 z-50 bg-transparent backdrop-blur-xs w-full py-4 px-8 flex justify-between items-center text-black">
				<div>
					<span className="font-medium">Pinisi Studio</span>
				</div>
				<div>
					<ul className="flex gap-8">
						<li className="cursor-pointer py-1 border-b-2 border-[#00AEEF]">Home</li>
						<li className="cursor-pointer py-1 hover:font-medium transition-all duration-300 ease-in-out">About</li>
						<li className="cursor-pointer py-1 hover:font-medium transition-all duration-300 ease-in-out">Services</li>
						<li className="cursor-pointer py-1 hover:font-medium transition-all duration-300 ease-in-out">Contact</li>
					</ul>
				</div>
			</nav>
			<div className="w-full h-screen flex justify-center items-center">
				<div className="flex flex-col items-center gap-8">
					<Image src="/icon.png" alt="Pinisi Studio" width={0} height={0} className="w-12" unoptimized />
					<div className="text-center">
						<h1 className="text-6xl font-medium">From Archipelago To Algorithm.</h1>
						<h2 className="text-2xl mt-4">Just a bunch of devs making cool stuff.</h2>
					</div>
					<button className="flex items-center gap-2 border-b-2 border-[#00AEEF] py-1">
						<span>explore</span>
						<ArrowDown />
					</button>
				</div>
			</div>
			<div className="relative">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute -top-72"><path fill="#00AEEF" fillOpacity="1" d="M0,128L60,154.7C120,181,240,235,360,234.7C480,235,600,181,720,181.3C840,181,960,235,1080,261.3C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute -top-64 opacity-40 -z-1"><path fill="#00AEEF" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,117.3C384,149,480,203,576,197.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
				<div className="w-full py-40 flex flex-col justify-center items-center bg-[#00AEEF]">
					<div className="flex flex-col items-center gap-8 text-white">
						<div className="text-center">
							<h1 className="text-6xl font-medium">Meet the Captain of the Voyage.</h1>
							<h2 className="text-2xl mt-4">The legend of the ocean conqueror.</h2>
						</div>
						<button className="flex items-center gap-2 border-b-2 border-white py-1">
							<span>see more</span>
							<ArrowUpRight weight="bold" />
						</button>
					</div>
					<div className="flex gap-8 items-end mt-24">
						<div className="flex flex-col gap-8 items-center">
							<div className="w-42 h-64 bg-white rounded-full"></div>
							<div className="flex flex-col text-white gap-1 justify-center items-center">
								<span className="font-medium text-lg">Muhamad Hazmi Alfarizqi</span>
								<span className="text-sm">Chief Technology Officer</span>
							</div>
						</div>
						<div className="flex flex-col gap-8 items-center">
							<div className="w-42 h-80 bg-white rounded-full"></div>
							<div className="flex flex-col text-white gap-1 justify-center items-center">
								<span className="font-medium text-lg">Maulana Yusuf Al Ghani</span>
								<span className="text-sm">Chief Executive Officer</span>
							</div>
						</div>
						<div className="flex flex-col gap-8 items-center">
							<div className="w-42 h-64 bg-white rounded-full"></div>
							<div className="flex flex-col text-white gap-1 justify-center items-center">
								<span className="font-medium text-lg">Muhammad Ilham Mutaqin</span>
								<span className="text-sm">Chief Operating Officer</span>
							</div>
						</div>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full"><path fill="#00AEEF" fillOpacity="1" d="M0,192L60,165.3C120,139,240,85,360,69.3C480,53,600,75,720,112C840,149,960,203,1080,213.3C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute -bottom-0 opacity-40 -z-1"><path fill="#0099ff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,106.7C672,75,768,53,864,69.3C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
			</div>
			<div className="w-full pt-20 pb-40 flex flex-col justify-center items-center">
				<div className="flex flex-col items-center gap-8">
					<div className="text-center">
						<h1 className="text-6xl font-medium">Discover a Dazzling Array of Masterpieces.</h1>
						<h2 className="text-2xl mt-4">There's no need to overdo it, it's just an art.</h2>
					</div>
					<button className="flex items-center gap-2 border-b-2 border-[#00AEEF] py-1">
						<span>see more</span>
						<ArrowUpRight />
					</button>
				</div>
				<div className="w-4/5 h-[25rem] grid grid-cols-6 gap-4 mt-16">
					<div className="col-span-1 flex flex-col gap-4">
						<div className="group h-full p-10 rounded-md hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium">eSPW</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" />
							<div className="p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
						<div className="group h-full p-10 rounded-md hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium">Sekolahku</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" />
							<div className="p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
						<div className="group h-full p-10 rounded-md hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium">Inventara</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" />
							<div className="p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
					</div>
					<div className="col-span-1">
						<div className="group p-10 rounded-md h-full hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium">Apotek XYZ</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" />
							<div className="p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
					</div>
					<div className="col-span-2">
						<div className="group p-10 rounded-md h-full hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium">Bitter Rush</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" />
							<div className="p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
					</div>
					<div className="col-span-2 flex flex-col gap-4">
						<div className="group p-10 rounded-md h-full hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
							<span className="absolute bottom-2 left-2 font-medium">E - Cash</span>
							<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" />
							<div className="p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
						</div>
						<div className="flex gap-4">
							<div className="group h-full w-full p-10 rounded-md hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
								<span className="absolute bottom-2 left-2 font-medium">X-Plore</span>
								<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" />
								<div className="p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
							</div>
							<div className="group h-full w-full p-10 rounded-md hover:scale-110 hover:bg-[#00AEEF] transition-all ease-in-out duration-300 relative hover:text-white cursor-pointer shadow-md overflow-hidden">
								<span className="absolute bottom-2 left-2 font-medium">Untolded</span>
								<ArrowUpRight className="absolute top-2 right-2 text-white group-hover:text-[#00AEEF] transition-all ease-in-out duration-300" weight="bold" />
								<div className="p-8 rounded-full bg-[#00AEEF] group-hover:bg-white transition-all ease-in-out duration-300 absolute -top-6 -right-6 -z-1"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="m-auto border-2 border-[#00AEEF] w-48"></div>
			<div className="w-full pt-40 flex flex-col justify-center items-center">
				<div className="flex flex-col items-center gap-14">
					<div className="text-center">
						<h1 className="text-6xl font-medium">What's Your Idea, Captain?</h1>
						<h2 className="text-2xl mt-4">Make your idea happen today!</h2>
					</div>
					<div className="flex gap-8">
						<button className="flex items-center gap-2 border-b-2 border-[#00AEEF] py-1">
							<Envelope />
							<span>contact@pinisi.dev</span>
							<ArrowUpRight />
						</button>
						<button className="flex items-center gap-2 border-b-2 border-[#00AEEF] py-1">
							<InstagramLogo />
							<span>@pinisi.dev</span>
							<ArrowUpRight />
						</button>
					</div>
				</div>
			</div>
			<footer className="w-full">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full -mb-1"><path fill="#00AEEF" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
				<div className="w-full p-8 bg-[#00AEEF]">
					<div className="w-4/5 m-auto grid grid-cols-4 gap-12 text-white">
						<div className="col-span-2">
							<Image src="/icon-white.png" alt="Pinisi Studio" width={0} height={0} className="w-12" unoptimized />
							<div className="mt-8 flex flex-col gap-2">
								<p className="font-semibold">Pinisi Studio</p>
								<p className="font-normal">Perum Sukamulya, No 69, RT 003, RW 002, Jalan Letnan Harun, Kelurahan Sukamulya, Kecamatan Bungursari, Kota Tasikmalaya, Jawa Barat 46151</p>
								<p className="font-semibold">contact@pinisi.dev</p>
							</div>
						</div>
						<div className="col-span-1">
							<p className="font-semibold">Pinisi Studio</p>
							<ul className="mt-8 flex flex-col gap-2">
								<li>Home</li>
								<li>About</li>
								<li>Services</li>
								<li>Contact</li>
							</ul>
						</div>
						<div className="col-span-1">
							<p className="font-semibold">Contact Us</p>
							<div className="mt-8 flex gap-4">
								<Envelope size={32} />
								<InstagramLogo size={32} />
							</div>
						</div>
					</div>
				</div>
				<div className="w-full p-8 bg-[#00AEEF]">
					<div className="w-4/5 m-auto flex justify-between items-center">
						<span className="text-white">
							&#169;
							{new Date().getFullYear()}
							{" "}
							Pinisi Studio. All rights reserved.
						</span>
						<span className="text-white">Made with &#10084; by Pinisi Studio</span>
					</div>
				</div>
			</footer>
		</>
	);
}
