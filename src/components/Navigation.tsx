import { Link, useFileRouter } from "kiru/router";

export function Navigation() {
	const { state } = useFileRouter();

	return (
		<nav className="flex items-center gap-6">
			<div className="flex gap-1">
				<NavLink to="/" active={state.pathname.value === "/"}>
					Home
				</NavLink>
				<NavLink to="/thangs" active={state.pathname.value === "/thangs"}>
					Thangs
				</NavLink>
				<NavLink
					to="/blog"
					active={
						state.pathname.value === "/blog" ||
						state.pathname.value.startsWith("/blog/")
					}
				>
					Blog
				</NavLink>
			</div>
		</nav>
	);
}

function NavLink({
	to,
	active,
	children,
}: {
	to: string;
	active: boolean;
	children: string;
}) {
	return (
		<Link
			to={to}
			className={`
				px-3 py-1.5 rounded-lg text-sm
				transition-all duration-200
				${
					active
						? "bg-[#1a1a1a] text-yellow-500"
						: "text-gray-400 hover:text-gray-200 hover:bg-[#141414]"
				}
			`}
			transition
		>
			{children}
		</Link>
	);
}
