import type { Icon } from "lucide-react"
import { Icons } from "@/components/Icons"
import { Variants } from "framer-motion"
import { contactFormSchema } from "@/lib/validations/auth";

export type contactFormData = z.infer<typeof contactFormSchema>;

export type NavLinkType = {
    title: string
    href: string
    disabled?: boolean
    icon?: keyof typeof Icons
}[] 

export type ServiceType = {
    title: string
    icon?: keyof typeof Icons
    content: string
}

export type ProductType = {
    name: string
    description: string
    image: string | StaticImport
    price: string
}

export type FeedbackType = {
    content: string
    name: string
    title: string
    image?: string | StaticImport
}

export type StatsType = {
    title: string,
    value: string
}[]

export type FooterLinkType = {
    title: string
    links: {
        name: string
        link: string
    }[]
}[]

export type SocialMediaType = {
    id: string
    icon?: keyof typeof Icons
    link: string
}[]

export type ClientType = {
    name: string
    logo: string
}[]

export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
}
