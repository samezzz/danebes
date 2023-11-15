import { ClientType, FeedbackType, FooterLinkType, NavLinkType, ServiceType, SiteConfig, SocialMediaType, StatsType } from "@/types";
import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../../public/assets";

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