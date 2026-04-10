import { Link, useFileRouter } from "kiru/router";
import { Avatar } from "./Avatar";

export function AutoHiddenAvatar() {
	const { state } = useFileRouter();

	if (state.pathname.value.includes("blog"))
		return <span className="this-element-takes-up-space" />;

	return (
		<Link style={"view-transition-name: nav"} to="/" transition>
			<Avatar />
		</Link>
	);
}
