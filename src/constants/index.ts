import { ClientType, FeedbackType, FooterLinkType, NavLinkType, ProductType, ServiceType, SiteConfig, SocialMediaType, StatsType } from "@/types";

export const navLinks: NavLinkType = [
  {
    title: "Home",
    href: "#home",
    icon: "home"
  },
  {
    title: "Services",
    href: "#services",
    icon: "services"
  },
  {
    title: "Products",
    href: "#product",
    icon: "product"
  },
  {
    title: "Clients",
    href: "#clients",
    icon: "clients"
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
		name: "Hematology Diluent",
		description:
			"Specifically designed for hematology analyzers, it's utilized to dilute blood samples, ensuring accurate cell counting and analysis by the analyzer.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705339250/ykybdmna6kehbfmf3kuq.png",
		price: "GHC999.99",
	},
	{
		name: "Chemistry Diluent",
		description:
			" These diluents are tailored for chemistry analyzers and are used in various tests such as electrolyte panels, enzyme assays, and other biochemical tests.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705339247/whoc4r5mzqr5xp1patdv.png",
		price: "GHC999.99",
	},
	{
		name: "Biochemical Reagents",
		description:
			"These encompass a wide range of chemicals including enzymes, substrates, and other compounds essential for conducting various biochemical assays, aiding in the identification and quantification of biomolecules.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705339247/whoc4r5mzqr5xp1patdv.png",
		price: "GHC999.99",
	},
	{
		name: "Hematological Reagents",
		description:
			"Utilized in blood tests, these reagents include staining solutions used in blood smears and other tests in hematology.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705339247/whoc4r5mzqr5xp1patdv.png",
		price: "GHC999.99",
	},
];

export const productsCat2: ProductType[] = [
	{
		name: "BC-150 Hematology Analyzer",
		description:
			"This analyzer is designed for small to medium-sized laboratories, offering a compact solution for routine blood analysis. It provides precise and rapid testing for various blood parameters, including red blood cells, white blood cells, and platelets. Its user-friendly interface and automated functionalities streamline workflow efficiency.",
		image: "https://res.cloudinary.com/dbdvyklpz/image/upload/v1705339247/whoc4r5mzqr5xp1patdv.png",
		price: "GHC999.99",
	},
	{
		name: "BC-430 Hematology Analyzer",
		description:
			"This analyzer is designed to handle a large volume of samples efficiently. It's equipped with advanced technology for precise blood analysis, offering a comprehensive range of tests including complete blood counts and differentiation of various blood cell types. Its automation and accuracy make it suitable for high-throughput laboratories.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705339247/whoc4r5mzqr5xp1patdv.png",
		price: "GHC999.99",
	},
	{
		name: "BA-88A Semi-Auto Biochemistry Analyzer",
		description:
			"The BC-10 is a compact and portable solution designed for point-of-care testing or smaller clinics. It offers basic blood analysis, providing essential parameters like complete blood counts quickly and accurately. Its portability and ease of use make it suitable for settings requiring immediate test results.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705339247/whoc4r5mzqr5xp1patdv.png",
		price: "GHC999.99",
	},
	{
		name: "BC-5000 Hematology Analyzer",
		description:
			"This analyzer is designed to handle a large volume of samples efficiently. It's equipped with advanced technology for precise blood analysis, offering a comprehensive range of tests including complete blood counts and differentiation of various blood cell types. Its automation and accuracy make it suitable for high-throughput laboratories.",
		image:
			"https://res.cloudinary.com/dbdvyklpz/image/upload/v1705339247/whoc4r5mzqr5xp1patdv.png",
		price: "GHC999.99",
	},
	{
		name: "BC-10",
		description:
			"The BC-10 is a compact and portable solution designed for point-of-care testing or smaller clinics. It offers basic blood analysis, providing essential parameters like complete blood counts quickly and accurately. Its portability and ease of use make it suitable for settings requiring immediate test results.",
		image: "https://res.cloudinary.com/dbdvyklpz/image/upload/v1705339247/whoc4r5mzqr5xp1patdv.png",
		price: "GHC999.99",
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
  description:
    "Danebes Biomedical Service",
  url: "https://danebes.vercel.app",
  ogImage: "",
}