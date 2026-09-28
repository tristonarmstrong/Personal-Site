export function Avatar({ size }: { size?: "sm" | "lg" }) {
	const lg = "w-20 h-20";
	const sm = "w-10 h-10";
	let sizing = "";
	switch (size) {
		case "sm":
			sizing = sm;
			break;
		case "lg":
			sizing = lg;
			break;
		default:
			sizing = sm;
			break;
	}

	return () => {
		return (
			<div
				style={`view-transition-name: avatar; background-image: url(/avatar.webp)`}
				className={`${sizing} rounded-full bg-center bg-cover border-4 border-white shadow-[0_8px_24px_rgba(111,101,85,0.25)]`}
				role="img"
				aria-label="Triston Armstrong's avatar"
				title="Triston Armstrong"
			></div>
		);
	};
}
