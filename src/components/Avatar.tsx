export function Avatar({ size }: { size?: "sm" | "lg" }) {
	let lg = "w-20 h-20";
	let sm = "w-10 h-10";
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
				className={`${sizing} rounded-full bg-center bg-cover`}
				role="img"
				aria-label="Triston Armstrong's avatar"
				title="Triston Armstrong"
			></div>
		);
	};
}
