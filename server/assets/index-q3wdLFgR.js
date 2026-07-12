import { resource, createElement, ErrorBoundary, Derive, For, signal, onMount } from "kiru";
import { a as allPosts } from "./allPosts-PgEc26ba.js";
import { a as allProjects } from "./allProjects-D7jr3pfx.js";
import { Link } from "kiru/router";
import { A as Avatar } from "./Avatar-Y8blbqcW.js";
import { R as RssIcon } from "./Rss-BXsqYI7d.js";
import { S as SEO } from "./SEO-Cu9liQYw.js";
const GITHUB_URL = "https://api.github.com/users/tristonarmstrong/events/public?per_page=6";
function GitHubActivity() {
  const data = resource(async ({ signal: signal2 }) => {
    const res = await fetch(GITHUB_URL, { signal: signal2 });
    if (!res.ok) throw new Error("Failed to fetch github data");
    const events = await res.json();
    return { events, lastUpdated: /* @__PURE__ */ new Date() };
  });
  return () => {
    return /* @__PURE__ */ createElement(ErrorBoundary, { fallback: /* @__PURE__ */ createElement(ViewGithubLink, null) }, /* @__PURE__ */ createElement(Derive, { from: data, fallback: /* @__PURE__ */ createElement(LoadingGithubFallback, null) }, ({ events, lastUpdated }, _isStale) => {
      return /* @__PURE__ */ createElement("div", { className: "flex flex-col gap-1" }, /* @__PURE__ */ createElement(For, { each: events, fallback: /* @__PURE__ */ createElement(NoGithubActivity, null) }, (event) => /* @__PURE__ */ createElement(
        "a",
        {
          href: `https://github.com/${event.repo.name}`,
          target: "_blank",
          rel: "noopener",
          className: "flex items-start gap-2 py-1.5 px-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors group"
        },
        /* @__PURE__ */ createElement("span", { className: "text-yellow-500 text-xs mt-0.5 font-mono shrink-0" }, getEventIcon(event.type)),
        /* @__PURE__ */ createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ createElement("p", { className: "text-gray-300 text-xs leading-snug group-hover:text-gray-100 transition-colors" }, getEventDescription(event))),
        /* @__PURE__ */ createElement("span", { className: "text-gray-600 text-[10px] shrink-0" }, formatTimeAgo(event.created_at))
      )), /* @__PURE__ */ createElement("div", { className: "pt-2 mt-1 border-t border-dashed border-white/10" }, /* @__PURE__ */ createElement(
        "a",
        {
          href: "https://github.com/tristonarmstrong",
          target: "_blank",
          rel: "noopener",
          className: "text-gray-500 text-xs hover:text-yellow-500 transition-colors flex items-center justify-between"
        },
        /* @__PURE__ */ createElement("span", null, "github.com/tristonarmstrong"),
        /* @__PURE__ */ createElement("span", null, "↗")
      ), lastUpdated && /* @__PURE__ */ createElement("span", { className: "text-gray-600 text-[10px] block mt-1" }, "Updated ", formatTimeAgo(lastUpdated.toISOString()))));
    }));
  };
}
function ViewGithubLink() {
  return /* @__PURE__ */ createElement("div", { className: "text-gray-500 text-xs py-2" }, /* @__PURE__ */ createElement(
    "a",
    {
      href: "https://github.com/tristonarmstrong",
      target: "_blank",
      rel: "noopener",
      className: "hover:text-yellow-500 transition-colors"
    },
    "View GitHub →"
  ));
}
function LoadingGithubFallback() {
  return /* @__PURE__ */ createElement("div", { className: "flex items-center gap-2 text-gray-500 text-xs py-2" }, /* @__PURE__ */ createElement("span", { className: "animate-pulse" }, "Loading activity..."));
}
function NoGithubActivity() {
  return /* @__PURE__ */ createElement("div", { className: "text-gray-500 text-xs py-2" }, "No recent activity");
}
function getEventIcon(type) {
  const map = {
    "PushEvent": "→",
    "PullRequestEvent": "◈",
    "IssuesEvent": "◎",
    "CreateEvent": "+",
    "DeleteEvent": "×",
    "WatchEvent": "★",
    "ForkEvent": "⑂"
  };
  return map?.[type] ?? "•";
}
function getEventDescription(event) {
  const repoName = event.repo.name.replace("tristonarmstrong/", "");
  const map = {
    "PushEvent": `pushed commits to ${repoName}`,
    "PullRequestEvent": `${event.payload.action || ""} PR in ${repoName}`,
    "IssuesEvent": `${event.payload.action || ""} issue in ${repoName}`,
    "CreateEvent": `created ${event.payload.ref_type || ""} in ${repoName}`,
    "DeleteEvent": `deleted ${event.payload.ref_type || ""} in ${repoName}`,
    "WatchEvent": `starred ${repoName}`,
    "ForkEvent": `forked ${repoName}`
  };
  return map?.[event.type] ?? `${event.type.replace("Event", "").toLowerCase()} in ${repoName}`;
}
function formatTimeAgo(dateStr) {
  const date = new Date(dateStr);
  const now = /* @__PURE__ */ new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 6e4);
  const diffHours = Math.floor(diffMs / 36e5);
  const diffDays = Math.floor(diffMs / 864e5);
  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
function Home() {
  const yearsExperience = signal(5);
  const allPostsRearranged = allPosts.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  onMount(() => {
    yearsExperience.value = Math.abs((/* @__PURE__ */ new Date()).getFullYear() - 2019);
  });
  function _handleEmailClick() {
    const a = document.createElement("a");
    a.href = "mailto:triston95strong@gmail.com?subject=Reaching Out&body=Hey Triston, ...Put message here...";
    a.click();
  }
  const openSourceContribsData = openSourceData();
  return () => /* @__PURE__ */ createElement(
    "main",
    {
      className: "text-sm mt-10 flex flex-col gap-10 max-w-2xl",
      style: "view-transition-name: homepage"
    },
    /* @__PURE__ */ createElement(SEO, null),
    /* @__PURE__ */ createElement("section", { className: "relative" }, /* @__PURE__ */ createElement("div", { className: "p-4 rounded-2xl bg-[#212121] flex flex-col gap-2 z-10 relative max-w-150 mx-auto" }, /* @__PURE__ */ createElement("div", { className: "flex items-start gap-3 z-10" }, /* @__PURE__ */ createElement(Avatar, { size: "lg" }), /* @__PURE__ */ createElement("div", { className: "z-10" }, /* @__PURE__ */ createElement("h1", { className: "text-2xl font-bold tracking-tight text-yellow-500 z-10" }, "Triston Armstrong"), /* @__PURE__ */ createElement("div", { className: "flex gap-2 text-gray-500 z-10" }, /* @__PURE__ */ createElement("span", null, "Senior Software Engineer"), /* @__PURE__ */ createElement("span", null, "·"), /* @__PURE__ */ createElement("span", null, "Utah, USA")))), /* @__PURE__ */ createElement("p", { className: "text-gray-300 mt-2 max-w-lg leading-relaxed text-justify" }, "I am a Senior Software Engineer with over", " ", /* @__PURE__ */ createElement(
      "span",
      {
        className: "yearthing text-yellow-500 cursor-help",
        title: "I started programming professionally in year 2019"
      },
      yearsExperience.value,
      " years"
    ), " ", "of experience building applications in React, TypeScript, and Rust with significant experience modernizing legacy systems and delivering enterprise solutions. I’ve led frontend development efforts, migrated large codebases to TypeScript, optimized CI/CD pipelines, and worked closely with stakeholders to turn complex business requirements into clean, maintainable software.", /* @__PURE__ */ createElement("br", null), /* @__PURE__ */ createElement("br", null), "I’m known as a collaborative team player who enjoys mentoring junior developers and fostering a culture of constructive feedback."), /* @__PURE__ */ createElement("div", { className: "flex items-center gap-1 mt-3 [&>a]:bg-black/30" }, /* @__PURE__ */ createElement(
      SocialIcon,
      {
        href: "https://github.com/tristonarmstrong",
        icon: /* @__PURE__ */ createElement(GithubIcon, null),
        label: "GitHub"
      }
    ), /* @__PURE__ */ createElement(
      SocialIcon,
      {
        href: "https://x.com/triston_armstr",
        icon: /* @__PURE__ */ createElement(XIcon, null),
        label: "X"
      }
    ), /* @__PURE__ */ createElement(
      SocialIcon,
      {
        href: "https://www.linkedin.com/in/triston-armstrong-7248b229b",
        icon: /* @__PURE__ */ createElement(LinkedinIcon, null),
        label: "LinkedIn"
      }
    ), /* @__PURE__ */ createElement(
      SocialIcon,
      {
        href: "mailto:triston95strong@gmail.com",
        icon: /* @__PURE__ */ createElement(EmailIcon, null),
        label: "Email"
      }
    ), /* @__PURE__ */ createElement(SocialIcon, { href: "/feed.xml", icon: /* @__PURE__ */ createElement(RssIcon, null), label: "RSS" })))),
    /* @__PURE__ */ createElement("div", { className: "w-full border-t border-dashed border-white/10" }),
    /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("h2", { className: "text-xl font-bold tracking-tight text-gray-100 mb-4" }, "Activity"), /* @__PURE__ */ createElement(GitHubActivity, null)),
    /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("h2", { className: "text-xl font-bold tracking-tight text-gray-100 mb-4" }, "OSS"), /* @__PURE__ */ createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ createElement(
      For,
      {
        each: openSourceContribsData,
        fallback: /* @__PURE__ */ createElement("div", null, "No Open Source Contributions Yet")
      },
      (item) => /* @__PURE__ */ createElement(
        DashedLink,
        {
          label: item.label,
          meta: item.meta,
          status: item.status,
          href: item.href
        }
      )
    ))),
    /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("h2", { className: "text-xl font-bold tracking-tight text-gray-100 mb-4" }, "Projects"), /* @__PURE__ */ createElement("div", { className: "flex flex-col gap-3" }, allProjects.map((x) => /* @__PURE__ */ createElement(
      ProjectCard,
      {
        key: x.slug,
        title: x.title,
        href: `/project/${x.slug}`,
        type: x.type,
        summary: x.summary
      }
    )))),
    /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("h2", { className: "text-xl font-bold tracking-tight text-gray-100 mb-4" }, "Blog"), /* @__PURE__ */ createElement("div", { className: "flex flex-col sm:flex-row gap-3" }, allPostsRearranged.slice(0, 3).map((x) => /* @__PURE__ */ createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ createElement(
      "div",
      {
        className: "px-4 py-3 bg-white/[0.1] rounded-lg rounded-bl-none flex-1 flex flex-col justify-between gap-2"
      },
      /* @__PURE__ */ createElement("time", { className: "text-[#fff9] text-xs font-thin" }, x.date.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
      })),
      /* @__PURE__ */ createElement("h2", { className: "text-gray-400 font-bold" }, x.title),
      /* @__PURE__ */ createElement("p", { className: "text-[#fff9] font-thin text-xs" }, x.summary.slice(0, 100), "...")
    ), /* @__PURE__ */ createElement("div", { className: "flex flex-row gap-1" }, /* @__PURE__ */ createElement(
      "div",
      {
        className: `
									bg-white/[0.1] flex-1 rounded-bl-lg rounded-br-lg
									after:pointer-events-none after:block after:w-[30px] after:h-[30px] after:relative after:left-[calc(100%-0px)] after:bg-[radial-gradient(circle_at_bottom_right,transparent_0.75rem,oklab(1_0_0_/_0.1)_0.75rem,oklab(1_0_0_/_0.1))] after:[background-position:-18px_-18px] after:bg-no-repeat
									`
      }
    ), /* @__PURE__ */ createElement(
      Link,
      {
        style: "color: var(--color-yellow-500)",
        className: "text-xs ml-auto sm:ml-0 px-2 py-1 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-xl mt-1 transition",
        to: `/blog/${x.slug}`
      },
      "Read More"
    ))))), /* @__PURE__ */ createElement("div", { className: "mt-3" }, /* @__PURE__ */ createElement(
      Link,
      {
        to: "/blog",
        className: "text-xs text-gray-500 hover:text-gray-300 transition underline",
        transition: true
      },
      "View all posts"
    ))),
    /* @__PURE__ */ createElement("section", null, /* @__PURE__ */ createElement("h2", { className: "text-xl font-bold tracking-tight text-gray-100 mb-4" }, "Experience"), /* @__PURE__ */ createElement("div", { className: "flex flex-col gap-3" }, /* @__PURE__ */ createElement("div", { className: "py-2 px-3 -mx-3 rounded-xl bg-yellow-500/5 border border-yellow-500/20 border-dashed" }, /* @__PURE__ */ createElement("div", { className: "flex items-center justify-between gap-4" }, /* @__PURE__ */ createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ createElement("span", { className: "text-sm font-medium text-yellow-500" }, "Your Company Here")), /* @__PURE__ */ createElement("span", { className: "text-xs text-green-400/80 whitespace-nowrap font-medium" }, "Available"))), /* @__PURE__ */ createElement(
      DashedItem,
      {
        label: "Ventra Health",
        meta: "2023 — 2025",
        href: "https://ventrahealth.com/"
      }
    ), /* @__PURE__ */ createElement(
      DashedItem,
      {
        label: "Randstad Technologies",
        meta: "2021 — 2023",
        href: "https://www.randstadusa.com/"
      }
    ), /* @__PURE__ */ createElement(
      DashedItem,
      {
        label: "Damiano Global Corp.",
        meta: "2021",
        href: "https://damianoglobal.com/"
      }
    ), /* @__PURE__ */ createElement(DashedItem, { label: "Makers Ladder LLC", meta: "2020", href: "" })), /* @__PURE__ */ createElement("div", { className: "mt-4" }, /* @__PURE__ */ createElement(
      DashedItem,
      {
        label: "Freelance (Upwork)",
        meta: "$40k+",
        href: "https://www.upwork.com/freelancers/~018467e8cbe2f71382"
      }
    ))),
    /* @__PURE__ */ createElement("section", { className: "p-4 rounded-2xl bg-white/[0.1]" }, /* @__PURE__ */ createElement("div", { className: "flex items-start gap-3" }, /* @__PURE__ */ createElement("div", { className: "w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0" }, /* @__PURE__ */ createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        className: "text-yellow-500"
      },
      /* @__PURE__ */ createElement("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
    )), /* @__PURE__ */ createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ createElement("h2", { className: "text-lg font-bold tracking-tight text-gray-100 mb-1" }, "Let's work together"), /* @__PURE__ */ createElement("p", { className: "text-sm text-gray-400 leading-relaxed mb-3" }, "Have a project in mind or just want to chat? I'm always open to discussing new opportunities, creative ideas, or potential collaborations."), /* @__PURE__ */ createElement(
      "button",
      {
        type: "button",
        onclick: _handleEmailClick,
        className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 transition text-sm font-medium cursor-pointer"
      },
      /* @__PURE__ */ createElement(EmailIcon, null),
      /* @__PURE__ */ createElement("span", null, "Send me an email")
    )))),
    /* @__PURE__ */ createElement("div", { className: "h-20" })
  );
}
function DashedItem({
  label,
  meta,
  href,
  internal = false,
  highlight = false
}) {
  const labelClasses = highlight ? "text-gray-200 animate-pulse" : "text-gray-400 group-hover:text-gray-100";
  const content = /* @__PURE__ */ createElement("div", { className: "flex items-center justify-between gap-4 group cursor-pointer" }, /* @__PURE__ */ createElement("span", { className: `text-sm ${labelClasses} transition-colors` }, label), /* @__PURE__ */ createElement("div", { className: "border-t border-dashed border-white/10 flex-1 min-w-[2rem]" }), /* @__PURE__ */ createElement("span", { className: "text-xs text-gray-500 whitespace-nowrap" }, meta));
  if (!href) {
    return /* @__PURE__ */ createElement("div", { className: "py-1" }, content);
  }
  if (internal) {
    return /* @__PURE__ */ createElement(Link, { to: href, className: "block py-1", transition: true }, content);
  }
  return /* @__PURE__ */ createElement("a", { href, target: "_blank", rel: "noopener", className: "block py-1" }, content);
}
function DashedLink({
  label,
  meta,
  href,
  status = "default"
}) {
  const statusStyles = {
    merged: "rounded-md bg-green-500/20 text-green-400 border-none",
    rejected: "rounded-md bg-red-500/20 text-red-400 border-none",
    closed: "rounded-md bg-orange-500/20 text-orange-400 border-none",
    open: "rounded-md bg-yellow-500/20 text-yellow-400 border-none",
    default: "rounded-md bg-gray-500/20 text-gray-400 border-none"
  };
  return /* @__PURE__ */ createElement("div", { className: "flex items-center justify-between gap-4 py-1" }, /* @__PURE__ */ createElement(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener",
      className: "text-xs underline text-blue-400 hover:text-blue-500 transition-colors whitespace-nowrap"
    },
    label
  ), /* @__PURE__ */ createElement("div", { className: "border-t border-dashed border-white/10 flex-1 min-w-[2rem]" }), /* @__PURE__ */ createElement(
    "span",
    {
      className: `text-[10px] px-2 py-0.5 rounded-full border whitespace-nowrap ${statusStyles[status]}`
    },
    meta
  ));
}
function ProjectCard({
  title,
  href,
  type,
  summary
}) {
  return /* @__PURE__ */ createElement(
    Link,
    {
      to: href,
      className: "flex items-start gap-3 p-3 rounded-md bg-white/[0.1] backdrop-blur-md hover:bg-white/[0.06] transition group",
      transition: true
    },
    /* @__PURE__ */ createElement("div", { className: "w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-gray-500 text-xs font-medium shrink-0 mt-0.5" }, type.charAt(0)),
    /* @__PURE__ */ createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ createElement("h3", { className: "text-sm font-medium text-gray-200 group-hover:text-white transition-colors tracking-tight" }, title), summary && /* @__PURE__ */ createElement("p", { className: "text-xs text-gray-500 mt-0.5 leading-relaxed" }, summary))
  );
}
function SocialIcon({
  href,
  icon,
  label
}) {
  return /* @__PURE__ */ createElement(
    "a",
    {
      href,
      target: href.startsWith("http") ? "_blank" : void 0,
      rel: href.startsWith("http") ? "noopener" : void 0,
      className: "p-2 rounded-full text-gray-400 hover:text-yellow-500 hover:bg-black/40 transition",
      "aria-label": label,
      title: label
    },
    icon
  );
}
function GithubIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5"
    },
    /* @__PURE__ */ createElement("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
    /* @__PURE__ */ createElement("path", { d: "M9 18c-4.51 2-5-2-7-2" })
  );
}
function XIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5"
    },
    /* @__PURE__ */ createElement("path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" })
  );
}
function LinkedinIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5"
    },
    /* @__PURE__ */ createElement("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
    /* @__PURE__ */ createElement("rect", { width: "4", height: "12", x: "2", y: "9" }),
    /* @__PURE__ */ createElement("circle", { cx: "4", cy: "4", r: "2" })
  );
}
function EmailIcon() {
  return /* @__PURE__ */ createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5"
    },
    /* @__PURE__ */ createElement("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
    /* @__PURE__ */ createElement("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
  );
}
function openSourceData() {
  return [
    {
      label: "Far-Beyond-Pulsar/Plugin_Blueprints",
      meta: "merged",
      status: "merged",
      href: "https://github.com/Far-Beyond-Pulsar/Plugin_Blueprints/pull/7"
    },
    {
      label: "asadbek064/bincode",
      meta: "merged",
      status: "merged",
      href: "https://github.com/asadbek064/bincode/pull/1"
    },
    {
      label: "diamondburned/dissent",
      meta: "merged",
      status: "merged",
      href: "https://github.com/diamondburned/dissent/pull/371"
    },
    {
      label: "kirujs/kiru",
      meta: "merged",
      status: "merged",
      href: "https://github.com/kirujs/kiru"
    },
    {
      label: "Chai-Foundation/ChaiLauncher",
      meta: "2 PRs",
      status: "merged",
      href: "https://github.com/Chai-Foundation/ChaiLauncher/pull/13"
    },
    {
      label: "tristanpoland/Chai-MCVM",
      meta: "merged",
      status: "merged",
      href: "https://github.com/tristanpoland/Chai-MCVM/pull/1"
    },
    {
      label: "basecamp/omarchy",
      meta: "rejected",
      status: "rejected",
      href: "https://github.com/basecamp/omarchy/issues/1881"
    },
    {
      label: "microsoft/TypeScript",
      meta: "rejected",
      status: "rejected",
      href: "https://github.com/microsoft/TypeScript/pull/60269"
    },
    {
      label: "nrwl/nx",
      meta: "closed",
      status: "closed",
      href: "https://github.com/nrwl/nx/pull/31846"
    }
  ];
}
export {
  Home as default
};
