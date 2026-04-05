import { Link, useFileRouter } from "kiru/router";
import { Avatar } from "./Avatar";

export function AutoHiddenAvatar() {
	const { state } = useFileRouter();

	if (state.pathname.value.includes("blog"))
		return <span className="w-0 h-0" />;

	return (
		<Link style={"view-transition-name: nav"} to="/" transition>
			<Avatar />
		</Link>
	);
}
