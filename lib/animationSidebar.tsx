// lib/animationSidebar.tsx

import { Path } from "./animationConstants"; // Impor Path dari file baru

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => (
	<button
		type="button"
		style={{
			outline: "none",
			border: "none",
			cursor: "pointer",
			width: 50,
			height: 50,
			borderRadius: "50%",
			background: "transparent",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		}}
		aria-label="Toggle menu"
		onClick={toggle}
	>
		<svg width="23" height="23" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" }
				}}
				animate={isOpen ? "open" : "closed"}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 }
				}}
				transition={{ duration: 0.1 }}
				animate={isOpen ? "open" : "closed"}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" }
				}}
				animate={isOpen ? "open" : "closed"}
			/>
		</svg>
	</button>
);

export {
	MenuToggle
};
