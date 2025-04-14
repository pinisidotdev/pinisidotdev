'use client'
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "@phosphor-icons/react";

export default function Page(){
  return <>
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
        <Image src={"/icon.png"} alt="Pinisi Studio" width={0} height={0} className="w-12" unoptimized/>
        <div className="text-center">
          <h1 className="text-6xl font-medium">From Archipelago To Algorithm.</h1>
          <h2 className="text-2xl mt-4">Just a bunch of devs making cool stuff.</h2>
        </div>
        <button className="flex items-center gap-2 border-b-2 border-[#00AEEF] py-1">
          <span>explore</span>
          <ArrowDown/>
        </button>
      </div>
    </div>
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute -top-72"><path fill="#00AEEF" fillOpacity="1" d="M0,128L60,154.7C120,181,240,235,360,234.7C480,235,600,181,720,181.3C840,181,960,235,1080,261.3C1200,288,1320,288,1380,288L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full absolute -top-64 opacity-40 -z-1"><path fill="#00AEEF" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,117.3C384,149,480,203,576,197.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="w-full h-[60rem] flex flex-col justify-center items-center bg-[#00AEEF]">
        <div className="flex flex-col items-center gap-8 text-white">
          <div className="text-center">
            <h1 className="text-6xl font-medium">Meet the Captain of the Voyage.</h1>
            <h2 className="text-2xl mt-4">The legend of the ocean conqueror.</h2>
          </div>
          <button className="flex items-center gap-2 border-b-2 border-white py-1">
            <span>see more</span>
            <ArrowUpRight weight="bold"/>
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
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-6xl font-medium">Discover a Dazzling Array of Masterpieces.</h1>
          <h2 className="text-2xl mt-4">There's no need to overdo it, it's just an art.</h2>
        </div>
        <button className="flex items-center gap-2 border-b-2 border-[#00AEEF] py-1">
          <span>see more</span>
          <ArrowUpRight/>
        </button>
      </div>
    </div>
  </>
}