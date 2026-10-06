/* Reusable pieces for the Chinese handscroll theme (homepage only). */

export function ScrollFilters() {
	return (
		<svg
			width="0"
			height="0"
			style="position:absolute"
			aria-hidden="true"
		>
			<defs>
				<filter
					id="sealrough"
					x="-20%"
					y="-20%"
					width="140%"
					height="140%"
				>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.9"
						numOctaves="2"
						seed="7"
						result="n"
					/>
					<feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" />
				</filter>
				<filter
					id="drybrush"
					x="-20%"
					y="-20%"
					width="140%"
					height="140%"
				>
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.12"
						numOctaves="3"
						seed="3"
						result="n"
					/>
					<feDisplacementMap in="SourceGraphic" in2="n" scale="3" />
				</filter>
			</defs>
		</svg>
	);
}

export function Roller() {
	return (
		<div className="roller-row" aria-hidden="true">
			<span className="finial finial-left" />
			<div className="roller" />
			<span className="finial finial-right" />
		</div>
	);
}

export function SilkBand() {
	return <div className="silk-band" aria-hidden="true" />;
}

/** Cinnabar seal stamp with rough inked edges. Text stacks vertically. */
export function SealStamp({
	text,
	size = "sm",
	className = "",
}: {
	text: string;
	size?: "sm" | "lg";
	className?: string;
}) {
	return (
		<span className={`seal seal-${size} ${className}`} aria-hidden="true">
			<span className="seal-text">{text}</span>
		</span>
	);
}

/** A single dry-brush ink stroke used as a section divider. */
export function BrushDivider({ className = "" }: { className?: string }) {
	const id = `bd-${Math.random().toString(36).slice(2, 8)}`;
	return (
		<svg
			className={`brush-divider ${className}`}
			viewBox="0 0 400 12"
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<defs>
				<clipPath id={id}>
					<rect x="0" y="0" width="400" height="12" />
				</clipPath>
			</defs>
			<g clip-path={`url(#${id})`}>
				<path
					d="M4 7 C 70 2.5, 130 10.5, 200 6 S 330 3.5, 396 7"
					strokeWidth="3"
					filter="url(#drybrush)"
				/>
				<path
					d="M10 7.5 C 90 5, 160 8.5, 240 6 S 350 5.5, 390 7"
					strokeWidth="1.1"
					opacity="0.55"
					filter="url(#drybrush)"
				/>
			</g>
		</svg>
	);
}

/** Section heading: small seal character + calligraphy title + brush rule. */
export function SectionHeading({
	sealChar,
	title,
}: {
	sealChar: string;
	title: string;
}) {
	return (
		<div className="section-head">
			<SealStamp text={sealChar} size="sm" />
			<h2 className="font-brush">{title}</h2>
			<BrushDivider />
		</div>
	);
}

/** The avatar, mounted like a painting inset into the scroll. */
export function MountedPortrait() {
	return (
		<div className="mounted">
			<div
				className="portrait"
				style="background-image: url(/avatar.webp)"
				role="img"
				aria-label="Triston Armstrong's portrait"
				title="Triston Armstrong"
			/>
			<SealStamp text="TA" size="lg" />
		</div>
	);
}
