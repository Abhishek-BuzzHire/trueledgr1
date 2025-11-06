import { serviceSec } from "@/data";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";

interface FooterProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    sections?: Array<{
        title: string;
        links: Array<{ name: string; href: string }>;
    }>;
    description?: string;
    socialLinks?: Array<{
        icon: React.ReactElement;
        href: string;
        label: string;
    }>;
    copyright?: string;
    legalLinks?: Array<{
        name: string;
        href: string;
    }>;
}

const services = serviceSec;

const contacts: { image: string, detail: string }[] = [
    {
        image: "phone",
        detail: "+91 123 456 789",
    },
    {
        image: "email",
        detail: "trubookz@gmail.com",
    },
    {
        image: "map",
        detail: "Location",
    },
]

const defaultSections = [
    {
        title: "Services",
        links: [
            { name: "Monthly Bookkeeping", href: "/" },
            { name: "Catch up Bookkeeping", href: "/" },
            { name: "Payroll Services ", href: "/" },
            { name: "Accounts Receivable", href: "/" },
            { name: "Accounts Payable ", href: "/" },
        ],
    },
    {
        title: "Industry",
        links: [
            { name: "Stone Distributors & Suppliers", href: "/" },
            { name: "Stone Fabricators", href: "/" },
            { name: "Architects & Interior Designers", href: "/" },
            { name: "SMBs", href: "/" },
            { name: "Startups", href: "/" },
            { name: "CPAs & CPA Firms", href: "/" },
        ],
    },
    {
        title: "Resouces",
        links: [
            { name: "Blog", href: "/" },
            { name: "FAQ", href: "/" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "How It Works", href: "/" },
            { name: "Contact Us", href: "/contact" },
        ],
    },
];

const defaultSocialLinks = [
    { icon: <FaInstagram className="size-6" />, href: "#", label: "Instagram" },
    { icon: <FaFacebook className="size-6" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="size-6" />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin className="size-6" />, href: "#", label: "LinkedIn" },
    { icon: <FaYoutube className="size-6" />, href: "#", label: "Youtube" },
    { icon: <FaWhatsapp className="size-6" />, href: "#", label: "WhatsApp" },
];

const defaultLegalLinks = [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
];

const Footer = ({
    logo = {
        url: "/",
        src: "/logo1.svg",
        alt: "ByteBuzz.in",
        title: "ByteBuzz.in",
    },
    sections = defaultSections,
    description = "Don't let bookkeeping stress you out. let us handle it for you!",
    socialLinks = defaultSocialLinks,
    copyright = "© 2025 Trueledgr.com",
    legalLinks = defaultLegalLinks,
}: FooterProps) => {
    return (
        <section className="flex justify-center pt-20 px-10 bg-chart-2 text-chart-4"
            style={{
                backgroundImage: "linear-gradient(rgba(0,45,98,0.7), rgba(0,45,98,0.7)), url('/footerbg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="container">
                <div className="w-full space-y-8 justify-between gap-10 lg:items-start lg:text-left">
                    {/* Logo */}
                    <a href={logo.url} className="flex gap-2">
                        <Image
                            src="/WhiteLogo2.svg"
                            className="max-w-52"
                            alt="ByteBuzz.in"
                            width={252.83}
                            height={50}
                        />
                    </a>

                    <div className="flex justify-between w-full gap-6 lg:gap-20">
                        <div className="space-y-6 gap-6 lg:items-start">
                            <p className="max-w-[70%] text-sm">
                                {description}
                            </p>
                            <p className="text-2xl ">Get In Touch</p>
                            <div className="space-y-4">
                                {contacts.map((c, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Image src={`/${c.image}.svg`} alt={c.detail} width={24} height={24} />
                                        <p>{c.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {sections.map((section, i) => (
                            <div key={i} className="font-normal">
                                <h3 className="mb-4 text-2xl">{section.title}</h3>
                                <ul className="space-y-3 text-sm">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                        >
                                            <a href={link.href} className="flex gap-3"><Image src={"/arrow-right.svg"} alt="" width={10} height={1} />{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-end">
                        <Button className="bg-chart-3 p-6 rounded-sm px-8 uppercase text-md font-normal hover:bg-chart-3/90">Meet an Expert</Button>
                        <div>
                            <ul className="items-center space-y-4">
                        <p className="text-2xl">Follow us</p>
                        <div className="flex gap-6">
                            {socialLinks.map((social, idx) => (
                                <li key={idx} className="font-medium">
                                    <a href={social.href} aria-label={social.label}>
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </div>
                    </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex flex-col justify-center gap-4 border-t border-white/10 py-8 text-sm md:flex-row md:items-center md:text-left">
                    <p className="text-md">{copyright}</p>
                </div>
            </div>
        </section>
    );
};

export { Footer };
