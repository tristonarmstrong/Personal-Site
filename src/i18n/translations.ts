import { currentLanguage, type Language } from "../stores/language";

export type TranslationKey =
	// Navigation
	| "nav.home"
	| "nav.experience"
	| "nav.now"
	| "nav.thangs"
	| "nav.blog"
	// Home
	| "home.title"
	| "home.role"
	| "home.description.part1"
	| "home.description.part2"
	| "home.description.part3"
	| "home.description.link"
	| "home.livingSite"
	// Experience
	| "experience.title"
	| "experience.description"
	| "experience.freelance.title"
	| "experience.freelance.description"
	| "experience.yourCompany"
	| "experience.immediately"
	// Now
	| "now.title"
	| "now.description"
	| "now.projects.title"
	| "now.projects.description"
	| "now.projects.web"
	| "now.projects.tool"
	| "now.oss.title"
	| "now.oss.description"
	| "now.oss.successful"
	| "now.oss.unsuccessful"
	| "now.blogs.title"
	| "now.blogs.description"
	// Thangs
	| "thangs.title"
	| "thangs.note"
	| "thangs.tech"
	| "thangs.kitchen"
	| "thangs.day"
	| "thangs.furniture"
	| "thangs.travel"
	| "thangs.travel.empty"
	| "thangs.languages"
	| "thangs.ideaCredit"
	// Blog
	| "blog.title"
	| "blog.description"
	| "blog.backHome"
	| "blog.nextPost"
	// 404
	| "404.title"
	| "404.message"
	| "404.goHome"
	// Footer
	| "footer.madeWith"
	| "footer.poweredBy"
	// Language Toggle
	| "language.toggle";

const translations: Record<Language, Record<TranslationKey, string>> = {
	en: {
		// Navigation
		"nav.home": "Home",
		"nav.experience": "Experience",
		"nav.now": "Now",
		"nav.thangs": "Thangs",
		"nav.blog": "Blog",
		// Home
		"home.title": "Triston Armstrong",
		"home.role": "Senior Software Engineer",
		"home.description.part1": "Software Developer with",
		"home.description.part2":
			"years of experience, father to 3, and husband to 1 (not in that order) with a passion for building utility apps for myself to make my dev day-to-day easier. I also greatly enjoy,",
		"home.description.part3": "when the opportunity presents itself.",
		"home.description.link": "automating the boring stuff",
		"home.livingSite":
			'This is a "living site". I push half-baked chunks of UI to showcase its development in realtime, just... cause.. i find it interesting',
		// Experience
		"experience.title": "Experience",
		"experience.description":
			"Companies I've worked at and maybe where I'm currently working if I can convince someone to give me money in exchange for some code.",
		"experience.freelance.title": "Freelance Work",
		"experience.freelance.description":
			"My experience freelancing was cool! 10/10 would do again.",
		"experience.yourCompany": "Your Company Here",
		"experience.immediately": "Immediately",
		// Now
		"now.title": "What am I up to?",
		"now.description":
			"I greatly enjoy building utility apps/tools for myself. I build these tools to better help me in my day to day life. All of my projects are very much a work-in-progress. To be honest, I dont think I'll ever finish them!",
		"now.projects.title": "Projects",
		"now.projects.description":
			"These are projects that i actively work on. I have a graveyard too",
		"now.projects.web": "Web",
		"now.projects.tool": "Tool",
		"now.oss.title": "OSS Contribs",
		"now.oss.description":
			"I also enjoy contributing to open source projects when the opportunity presents itself! I've contributed to some, and a few that never made it through.",
		"now.oss.successful": "Successful",
		"now.oss.unsuccessful": "UnSuccessful",
		"now.blogs.title": "Blogs",
		"now.blogs.description":
			"Sometimes I have knowledge I find worth sharing, and thus I write up a little something something from time to time",
		// Thangs
		"thangs.title": "Heres some things I like and use",
		"thangs.note": "NOTE: Im still working on filling these in",
		"thangs.tech": "Tech",
		"thangs.kitchen": "Kitchen",
		"thangs.day": "Day",
		"thangs.furniture": "Furniture",
		"thangs.travel": "Travel",
		"thangs.travel.empty": "who travels these days?",
		"thangs.languages": "Languages",
		"thangs.ideaCredit": "Idea for this page completely stolen from",
		// Blog
		"blog.title": "Blog Posts",
		"blog.description":
			"Sometimes I have knowledge I find worth sharing, and thus I write up a little something something from time to time",
		"blog.backHome": "Back Home",
		"blog.nextPost": "Check out my next thang!",
		// 404
		"404.title": "404",
		"404.message": "Where do you think you're going?",
		"404.goHome": "Go Home",
		// Footer
		"footer.madeWith": "Made with ❤️ & 🍵",
		"footer.poweredBy": "Powered by",
		// Language Toggle
		"language.toggle": "EN/TH",
	},
	th: {
		// Navigation
		"nav.home": "หน้าแรก",
		"nav.experience": "ประสบการณ์",
		"nav.now": "ตอนนี้",
		"nav.thangs": "สิ่งของ",
		"nav.blog": "บล็อก",
		// Home
		"home.title": "ทริสตัน อาร์มสตรอง",
		"home.role": "วิศวกรซอฟต์แวร์อาวุโส",
		"home.description.part1": "นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์",
		"home.description.part2":
			"ปี พ่อของลูก 3 คน และสามีของภรรยา 1 คน (ไม่ได้เรียงตามลำดับ) ที่มีความหลงใหลในการสร้างแอปพลิเคชันที่มีประโยชน์สำหรับตัวเองเพื่อให้ชีวิตการทำงานด้าน dev ของฉันง่ายขึ้น ฉันยังชอบ",
		"home.description.part3": "เมื่อมีโอกาส",
		"home.description.link": "ทำให้สิ่งน่าเบื่อเป็นอัตโนมัติ",
		"home.livingSite":
			'นี่คือ "ไซต์ที่มีชีวิต" ฉันผลักดันชิ้นส่วน UI ที่ทำเสร็จครึ่งๆ เพื่อแสดงการพัฒนาแบบเรียลไทม์ เพราะ... ฉันคิดว่ามันน่าสนใจ',
		// Experience
		"experience.title": "ประสบการณ์",
		"experience.description":
			"บริษัทที่ฉันเคยทำงานและบางทีอาจเป็นที่ที่ฉันกำลังทำงานอยู่หากฉันสามารถโน้มน้าวให้ใครสักคนให้เงินฉันแลกกับโค้ด",
		"experience.freelance.title": "งานฟรีแลนซ์",
		"experience.freelance.description":
			"ประสบการณ์การทำงานฟรีแลนซ์ของฉันเจ๋งมาก! 10/10 อยากทำอีก",
		"experience.yourCompany": "บริษัทของคุณที่นี่",
		"experience.immediately": "ทันที",
		// Now
		"now.title": "ฉันกำลังทำอะไรอยู่?",
		"now.description":
			"ฉันชอบสร้างแอป/เครื่องมือที่มีประโยชน์สำหรับตัวเองมาก ฉันสร้างเครื่องมือเหล่านี้เพื่อช่วยให้ชีวิตประจำวันของฉันดีขึ้น โครงการทั้งหมดของฉันยังเป็นงานที่กำลังดำเนินการอยู่มาก ซื่อสัตย์นะ ฉันไม่คิดว่าฉันจะเสร็จสิ้นมันเลย!",
		"now.projects.title": "โครงการ",
		"now.projects.description":
			"นี่คือโครงการที่ฉันทำงานอย่างต่อเนื่อง ฉันมีสุสานโครงการด้วย",
		"now.projects.web": "เว็บ",
		"now.projects.tool": "เครื่องมือ",
		"now.oss.title": "การมีส่วนร่วม OSS",
		"now.oss.description":
			"ฉันยังชอบมีส่วนร่วมในโครงการโอเพนซอร์สเมื่อมีโอกาส! ฉันได้มีส่วนร่วมในบางโครงการ และบางโครงการที่ไม่ผ่าน",
		"now.oss.successful": "สำเร็จ",
		"now.oss.unsuccessful": "ไม่สำเร็จ",
		"now.blogs.title": "บล็อก",
		"now.blogs.description":
			"บางครั้งฉันมีความรู้ที่คิดว่าคุ้มค่าที่จะแบ่งปัน และดังนั้นฉันจึงเขียนบางสิ่งบางอย่างเป็นครั้งคราว",
		// Thangs
		"thangs.title": "นี่คือสิ่งที่ฉันชอบและใช้",
		"thangs.note": "หมายเหตุ: ฉันยังคงกำลังเติมข้อมูลเหล่านี้",
		"thangs.tech": "เทคโนโลยี",
		"thangs.kitchen": "ครัว",
		"thangs.day": "ทุกวัน",
		"thangs.furniture": "เฟอร์นิเจอร์",
		"thangs.travel": "การเดินทาง",
		"thangs.travel.empty": "ใครเดินทางกันในสมัยนี้?",
		"thangs.languages": "ภาษา",
		"thangs.ideaCredit": "ไอเดียสำหรับหน้านี้ขโมยมาอย่างสมบูรณ์จาก",
		// Blog
		"blog.title": "โพสต์บล็อก",
		"blog.description":
			"บางครั้งฉันมีความรู้ที่คิดว่าคุ้มค่าที่จะแบ่งปัน และดังนั้นฉันจึงเขียนบางสิ่งบางอย่างเป็นครั้งคราว",
		"blog.backHome": "กลับหน้าแรก",
		"blog.nextPost": "ดูโพสต์ถัดไปของฉัน!",
		// 404
		"404.title": "404",
		"404.message": "คิดว่าจะไปไหน?",
		"404.goHome": "กลับหน้าแรก",
		// Footer
		"footer.madeWith": "ทำด้วย ❤️ & 🍵",
		"footer.poweredBy": "ขับเคลื่อนโดย",
		// Language Toggle
		"language.toggle": "EN/TH",
	},
};

export function t(key: TranslationKey): string {
	return translations[currentLanguage.value][key];
}

export function getCurrentLanguage(): Language {
	return currentLanguage.value;
}
