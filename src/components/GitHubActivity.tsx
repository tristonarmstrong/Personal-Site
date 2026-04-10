import { signal, onMount, For } from "kiru";

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

function getEventIcon(type: string): string {
	switch (type) {
		case "PushEvent":
			return "→";
		case "PullRequestEvent":
			return "◈";
		case "IssuesEvent":
			return "◎";
		case "CreateEvent":
			return "+";
		case "DeleteEvent":
			return "×";
		case "WatchEvent":
			return "★";
		case "ForkEvent":
			return "⑂";
		default:
			return "•";
	}
}

function getEventDescription(event: GitHubEvent): string {
	const repoName = event.repo.name.replace("tristonarmstrong/", "");

	switch (event.type) {
		case "PushEvent": {
			const commits = event.payload.commits?.length || 0;
			return `pushed ${commits} commit${commits !== 1 ? "s" : ""} to ${repoName}`;
		}
		case "PullRequestEvent": {
			const action = event.payload.action || "";
			const title = event.payload.pull_request?.title || "";
			return `${action} PR "${title.slice(0, 30)}${title.length > 30 ? "..." : ""}" in ${repoName}`;
		}
		case "IssuesEvent": {
			const action = event.payload.action || "";
			const title = event.payload.issue?.title || "";
			return `${action} issue "${title.slice(0, 30)}${title.length > 30 ? "..." : ""}" in ${repoName}`;
		}
		case "CreateEvent": {
			const refType = event.payload.ref_type || "";
			return `created ${refType} in ${repoName}`;
		}
		case "DeleteEvent": {
			const refType = event.payload.ref_type || "";
			return `deleted ${refType} in ${repoName}`;
		}
		case "WatchEvent": {
			return `starred ${repoName}`;
		}
		case "ForkEvent": {
			return `forked ${repoName}`;
		}
		default:
			return `${event.type.replace("Event", "").toLowerCase()} in ${repoName}`;
	}
}

export function GitHubActivity() {
	const events = signal<GitHubEvent[]>([]);
	const loading = signal(true);
	const error = signal<string | null>(null);
	const lastUpdated = signal<Date | null>(null);

	async function fetchGitHubActivity() {
		try {
			const response = await fetch(
				"https://api.github.com/users/tristonarmstrong/events/public?per_page=6",
			);
			if (!response.ok) throw new Error("Failed to fetch");
			const data = await response.json();
			events.value = data;
			lastUpdated.value = new Date();
			loading.value = false;
		} catch (err) {
			error.value = err instanceof Error ? err.message : "Unknown error";
			loading.value = false;
		}
	}

	onMount(() => {
		fetchGitHubActivity();

		// Poll every 60 seconds for real-time updates
		const intervalId = setInterval(() => {
			fetchGitHubActivity();
		}, 60000);

		return () => clearInterval(intervalId);
	});

	return () => {
		if (loading.value) {
			return (
				<div className="flex items-center gap-2 text-gray-500 text-xs py-2">
					<span className="animate-pulse">Loading activity...</span>
				</div>
			);
		}

		if (error.value) {
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
			);
		}

		if (events.value.length === 0) {
			return (
				<div className="text-gray-500 text-xs py-2">No recent activity</div>
			);
		}

		return (
			<div className="flex flex-col gap-1">
				<For each={events}>
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
					{lastUpdated.value && (
						<span className="text-gray-600 text-[10px] block mt-1">
							Updated {formatTimeAgo(lastUpdated.value.toISOString())}
						</span>
					)}
				</div>
			</div>
		);
	};
}
