import { Derive, ErrorBoundary, For, onCleanup, resource } from "kiru";

const GITHUB_URL = "https://api.github.com/users/tristonarmstrong/events/public?per_page=6"

export function GitHubActivity() {
	const data = resource(async ({ signal }) => {
		const res = await fetch(GITHUB_URL, { signal });
		if (!res.ok) throw new Error("Failed to fetch github data")
		const events = (await res.json()) as GitHubEvent[]
		return { events, lastUpdated: new Date() }
	})

	const intervalId = setInterval(data.refetch, 60000)
	onCleanup(() => clearInterval(intervalId))

	return () => {
		return (
			<ErrorBoundary fallback={<ViewGithubLink />}>
				<Derive from={data} fallback={<LoadingGithubFallback />}>
					{({ events, lastUpdated }, _isStale) => {
						return (
							<div className="flex flex-col gap-1">
								<For each={events} fallback={<NoGithubActivity />}>
									{(event) => (
										<a
											href={`https://github.com/${event.repo.name}`}
											target="_blank"
											rel="noopener"
											className="flex items-start gap-2 py-1.5 px-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors group"
										>
											<span className="text-yellow-500 text-xs mt-0.5 font-mono shrink-0">
												{getEventIcon(event.type)}
											</span>
											<div className="flex-1 min-w-0">
												<p className="text-gray-300 text-xs leading-snug group-hover:text-gray-100 transition-colors">
													{getEventDescription(event)}
												</p>
											</div>
											<span className="text-gray-600 text-[10px] shrink-0">
												{formatTimeAgo(event.created_at)}
											</span>
										</a>
									)}
								</For>
								<div className="pt-2 mt-1 border-t border-dashed border-white/10">
									<a
										href="https://github.com/tristonarmstrong"
										target="_blank"
										rel="noopener"
										className="text-gray-500 text-xs hover:text-yellow-500 transition-colors flex items-center justify-between"
									>
										<span>github.com/tristonarmstrong</span>
										<span>↗</span>
									</a>
									{lastUpdated && (
										<span className="text-gray-600 text-[10px] block mt-1">
											Updated {formatTimeAgo(lastUpdated.toISOString())}
										</span>
									)}
								</div>
							</div>)
					}}
				</Derive>
			</ErrorBoundary>
		)
	};
}

function ViewGithubLink() {
	return (
		<div className="text-gray-500 text-xs py-2">
			<a
				href="https://github.com/tristonarmstrong"
				target="_blank"
				rel="noopener"
				className="hover:text-yellow-500 transition-colors"
			>
				View GitHub →
			</a>
		</div>
	)
}

function LoadingGithubFallback() {
	return (
		<div className="flex items-center gap-2 text-gray-500 text-xs py-2">
			<span className="animate-pulse">Loading activity...</span>
		</div>
	)
}

function NoGithubActivity() {
	return <div className="text-gray-500 text-xs py-2">No recent activity</div>
}

function getEventIcon(type: string): string {
	const map: Record<string, string> = {
		"PushEvent": "→",
		"PullRequestEvent": "◈",
		"IssuesEvent": "◎",
		"CreateEvent": "+",
		"DeleteEvent": "×",
		"WatchEvent": "★",
		"ForkEvent": "⑂"
	}
	return map?.[type] ?? "•"
}

function getEventDescription(event: GitHubEvent): string {
	const repoName = event.repo.name.replace("tristonarmstrong/", "");
	const map: Record<string, string> = {
		"PushEvent": `pushed commits to ${repoName}`,
		"PullRequestEvent": `${event.payload.action || ""} PR in ${repoName}`,
		"IssuesEvent": `${event.payload.action || ""} issue in ${repoName}`,
		"CreateEvent": `created ${event.payload.ref_type || ""} in ${repoName}`,
		"DeleteEvent": `deleted ${event.payload.ref_type || ""} in ${repoName}`,
		"WatchEvent": `starred ${repoName}`,
		"ForkEvent": `forked ${repoName}`
	}
	return map?.[event.type] ?? `${event.type.replace("Event", "").toLowerCase()} in ${repoName}`
}

function formatTimeAgo(dateStr: string): string {
	const date = new Date(dateStr);
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffMins = Math.floor(diffMs / 60000);
	const diffHours = Math.floor(diffMs / 3600000);
	const diffDays = Math.floor(diffMs / 86400000);

	if (diffMins < 1) return "just now";
	if (diffMins < 60) return `${diffMins}m ago`;
	if (diffHours < 24) return `${diffHours}h ago`;
	if (diffDays < 7) return `${diffDays}d ago`;
	return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

interface GitHubEvent {
	id: string;
	type: string;
	actor: {
		login: string;
	};
	repo: {
		name: string;
	};
	created_at: string;
	payload: {
		action?: string;
		commits?: Array<{ message: string }>;
		ref?: string;
		ref_type?: string;
		pull_request?: {
			title: string;
			state: string;
		};
		issue?: {
			title: string;
			state: string;
		};
	};
}
