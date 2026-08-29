import { Link, useFileRouter } from "kiru/router";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
	const { state } = useFileRouter();
	const path = state.pathname.value;

	return (
		<nav
			className="relative flex items-center justify-center gap-1 sm:gap-3 py-2"
			aria-label="Main"
		>
			<NavLink to="/" active={path === "/"}>
				Home
			</NavLink>
			<Dot />
			<NavLink to="/thangs" active={path === "/thangs"}>
				Thangs
			</NavLink>
			<Dot />
			<NavLink
				to="/blog"
				active={path === "/blog" || path.startsWith("/blog/")}
			>
				Blog
			</NavLink>
			<div className="absolute right-0 top-1/2 -translate-y-1/2">
				<ThemeToggle />
			</div>
		</nav>
	);
}

function Dot() {
	return (
		<span className="text-ink-faint select-none" aria-hidden="true">
			·
		</span>
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
			aria-current={active ? "page" : undefined}
			className={`
				relative px-2 py-1 font-hand transition-colors duration-200
				${active ? "text-accent-deep" : "text-ink-soft hover:text-accent"}
			`}
			style="font-size: 1.5rem; line-height: 1.2; text-decoration: none;"
			transition
		>
			{active && (
				<svg
					className="absolute -inset-x-2 -inset-y-1 h-[calc(100%+0.5rem)] w-[calc(100%+1rem)]"
					viewBox="0 0 100 40"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<path
						d="M50 4 C 22 2, 5 8, 4 20 C 3 32, 28 38, 56 37 C 84 36, 97 30, 96 19 C 95 8, 72 4, 46 5"
						fill="none"
						stroke="var(--color-accent)"
						stroke-width="2.5"
						stroke-linecap="round"
						opacity="0.8"
					/>
				</svg>
			)}
			<span className="relative">{children}</span>
		</Link>
	);
}
