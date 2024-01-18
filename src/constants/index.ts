import {
	ClientType,
	FeedbackType,
	FooterLinkType,
	NavLinkType,
	ProductType,
	ServiceType,
	SiteConfig,
	SocialMediaType,
	StatsType,
} from "@/types";

export const navLinks: NavLinkType = [
	{
		title: "Home",
		href: "#home",
		icon: "home",
	},
	{
		title: "Services",
		href: "#services",
		icon: "services",
	},
	{
		title: "Products",
		href: "#product",
		icon: "product",
	},
	{
		title: "Clients",
		href: "#clients",
		icon: "clients",
	},
];

export const services: ServiceType[] = [
	{
		icon: "services",
		title: "Tailored Services",
		content:
			"Benefit from personalized Biomedical Engineering services crafted to meet your unique needs. Our experts work closely with you to deliver solutions that align with your goals and requirements.",
	},
	{
		icon: "product",
		title: "Cutting-Edge Equipment",
		content:
			"Explore our range of state-of-the-art Biomedical Engineering equipment, designed to elevate precision, efficiency, and innovation in healthcare solutions.",
	},
	{
		icon: "clients",
		title: "Biomedical Consultancy",
		content:
			"Engage with our team for expert advice on biomedical strategies and advancements. Whether it's optimizing processes, implementing new technologies, or staying compliant with industry standards, our consultancy services guide you towards excellence in Biomedical Engineering.",
	},
];

export const feedback: FeedbackType[] = [
	{
		content:
			"Impressed by the precision of the equipment provided by Danebes. The haematology analyzer has significantly enhanced our diagnostic capabilities, and the expert guidance received on its usage has been invaluable.",
		name: "Herman Jensen",
		title: "Founder & Leader",
	},
	{
		content:
			"Danebes has been our go-to for biomedical consultancy. Their insights into emerging technologies and their practical applications have been instrumental in advancing our research projects. Highly recommend their services!",
		name: "Steve Mark",
		title: "Founder & Leader",
	},
	{
		content:
			"The centrifuges provided by Danebes have been a game-changer in our lab. Reliable, easy to use, and with a quick turnaround time, they've significantly optimized our sample processing workflows.",
		name: "Kenn Gallagher",
		title: "Founder & Leader",
	},
];

export const productsCat1: ProductType[] = [
	{
		name: "N-126 MICROSCOPE",
		description:
			"Explore the unseen world with the N-126 Microscope. This powerful instrument offers precise magnification, allowing you to dive into the details of biological specimens and uncover the mysteries that lie beyond the naked eye.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705592097/N-126_MICROSCOPE_fpkvit.png",
	},
	{
		name: "L-420 CENTRIFUGE",
		description:
			"The L-420 Centrifuge is a laboratory workhorse designed to spin samples with accuracy and efficiency. Its robust design ensures reliable separation of substances, making it an indispensable tool for various scientific and medical applications.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705592077/L-420_CENTRIFUGE_ewgiqa.png",
	},
	{
		name: "DH-36 HEMATLOGY ANALYZER",
		description:
			"Achieve comprehensive blood analysis with the DH-36 Hematology Analyzer. This advanced instrument provides quick and accurate results, enabling healthcare professionals to diagnose and monitor various blood-related conditions.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705592074/dh36-hematology-analyzer-3_pwxxmu.png",
	},
	{
		name: "CARETIUM ELECTROLYTE ANALYZER",
		description:
			"The Caretium Electrolyte system is a cutting-edge solution for analyzing electrolyte levels in biological samples. Its precision and speed make it an essential component for laboratories focused on maintaining optimal patient health.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705592066/caretium-electrolyte-analyzer_qp2zd4.png",
	},
];

export const productsCat2: ProductType[] = [
	{
		name: "EDAN ECG",
		description:
			"Capture the heart's rhythm with precision using the Edan ECG. This electrocardiogram machine ensures accurate cardiac assessments, aiding healthcare providers in diagnosing and managing heart-related conditions.",
		image: "https://res.cloudinary.com/dbdvyklpz/image/upload/v1705592098/edan-ecg_uqxc56.png",
	},
	{
		name: "DISTILLED WATER MACHINE",
		description:
			"Ensure purity in your lab processes with the Distilled Water Machine. This equipment produces high-quality distilled water, free from impurities, making it ideal for various scientific applications and experiments.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705592081/distilled-water-machine_zvouak.png",
	},
	{
		name: "DEIONISE WATER MACHINE",
		description:
			"The Deionized Water Machine is a key player in achieving ultra-pure water for your laboratory needs. By removing ions and impurities, it guarantees the highest standards in water quality for critical experiments and analyses.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705592066/deinoise_water_machine_cxgxee.png",
	},
	{
		name: "AS-160 FULLY AUTO CHEMISTRY ANALYZER",
		description:
			"Revolutionize your laboratory workflow with the AS-160 Fully Auto Chemistry Analyzer. This automated system streamlines the analysis of various biochemical parameters, providing accurate and timely results for enhanced diagnostics.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705592075/as-160-auto-chemistry_ghqpez.png",
	},
];

export const stats: StatsType = [
	{
		title: "Services offered",
		value: "200+",
	},
	{
		title: "Trusted by Company",
		value: "100+",
	},
	{
		title: "Products sold",
		value: "500+",
	},
];

export const footerLinks: FooterLinkType = [
	{
		title: "Useful Links",
		links: [
			{
				name: "Content",
				link: "https://www.hoobank.com/content/",
			},
			{
				name: "How it Works",
				link: "https://www.hoobank.com/how-it-works/",
			},
			{
				name: "Create",
				link: "https://www.hoobank.com/create/",
			},
			{
				name: "Explore",
				link: "https://www.hoobank.com/explore/",
			},
			{
				name: "Terms & Services",
				link: "https://www.hoobank.com/terms-and-services/",
			},
		],
	},
	{
		title: "Community",
		links: [
			{
				name: "Help Center",
				link: "https://www.hoobank.com/help-center/",
			},
			{
				name: "Partners",
				link: "https://www.hoobank.com/partners/",
			},
			{
				name: "Suggestions",
				link: "https://www.hoobank.com/suggestions/",
			},
			{
				name: "Blog",
				link: "https://www.hoobank.com/blog/",
			},
			{
				name: "Newsletters",
				link: "https://www.hoobank.com/newsletters/",
			},
		],
	},
	{
		title: "Partner",
		links: [
			{
				name: "Our Partner",
				link: "https://www.hoobank.com/our-partner/",
			},
			{
				name: "Become a Partner",
				link: "https://www.hoobank.com/become-a-partner/",
			},
		],
	},
];

export const socialMedia: SocialMediaType = [
	{
		id: "social-media-1",
		icon: "product",
		link: "https://www.instagram.com/",
	},
	{
		id: "social-media-2",
		icon: "product",
		link: "https://www.facebook.com/",
	},
	{
		id: "social-media-3",
		icon: "product",
		link: "https://www.twitter.com/",
	},
	{
		id: "social-media-4",
		icon: "product",
		link: "https://www.linkedin.com/",
	},
];

export const clients: ClientType = [
	{
		name: "client-1",
		logo: "user",
	},
	{
		name: "client-2",
		logo: "user",
	},
	{
		name: "client-3",
		logo: "user",
	},
	{
		name: "client-4",
		logo: "user",
	},
];

export const siteConfig: SiteConfig = {
	name: "Danebes",
	description: "Danebes Biomedical Service",
	url: "https://danebes.vercel.app",
	ogImage: "",
};
