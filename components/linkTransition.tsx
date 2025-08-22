"use client";
import Link from "next/link";
// import { animatePageOut } from '../../lib/animatePage'
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface Props {
	href: string;
	label: string;
}

const LinkTransition = ({ href, label }: Props) => {
	// const router = useRouter()
	const pathname = usePathname();

	// const handleClick = (e: React.MouseEvent) => {
	//   if (pathname !== href) {
	//     e.preventDefault()
	//     animatePageOut(href, router)
	//   }
	//   // Jika sama, biarkan default
	// }

	return (
		<li className="group relative cursor-pointer font-semibold  outline-none border-none">
			<span
				className={twMerge(
					"absolute -bottom-1 left-0 w-0 h-1.5 rounded-md bg-gradient-to-r from-sky-300  transition-all duration-300 ease-in-out group-hover:w-full",
					pathname === href && "w-full"
				)}
			>
			</span>
			<Link href={href} onClick={handleClick}>
				{label}
			</Link>
		</li>
	);
};

export default LinkTransition;
