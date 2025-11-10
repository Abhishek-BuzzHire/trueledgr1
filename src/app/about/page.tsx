import TestimonialSec from "@/components/TestimonialSec";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const team: { img: string, head: string, info: string}[] = [
    {
        img:  "https://randomuser.me/api/portraits/women/44.jpg",
        head: "Durgesh Rajawat",
        info: "With 12+ years in global finance, including leadership roles at Merrill Lynch and Eagle Harbor Advisors, Durgesh brings expertise in wealth management and client strategy. At Trueledgr, he anchors client trust and relationships, ensuring proactive service and world-class execution.",
    }, 
    {
        img:  "https://randomuser.me/api/portraits/men/32.jpg",
        head: "Siddharth Singh Shekhawat",
        info: "A Chartered Accountant with 10+ years of experience, Siddharth has supported 100+ businesses in bookkeeping, accounting, budgeting, and CFO-level advisory. He specializes in clarity around cash flow, margins, and growth levers. At Trueledgr, he leads strategy, operations, and the vision for TruCFO.",
    }, 
    {
        img:  "https://randomuser.me/api/portraits/women/68.jpg",
        head: "Manish Dubey",
        info: "A Chartered Accountant and seasoned startup advisor with 10+ years of experience, Manish specializes in financial systems, bookkeeping, accounting, investment structuring, due diligence, and CFO advisory. He has accelerated the growth of numerous ventures by building scalable finance systems and guiding businesses through critical growth stages.",
    }, 
    {
        img:  "https://randomuser.me/api/portraits/women/12.jpg",
        head: "Vikram Shekhawat",
        info: "Startup advisor with 20+ years' experience in client strategy, growth, and operations. Specializes in scaling businesses through partnerships. Drives client success and long-term impact.",
    }, 
]

const Capabilities: { head: string, info: string; }[] = [
    {
        head: "Pre-Vetted Teams",
        info: "USA trained, pre-vetted accountants with CPA-style expertise."
    },
    {
        head: "7-Layer Accuracy Checks",
        info: "Every deliverable passes SOP-driven, multi-level review for error-free output.",
    },
    {
        head: "Enterprise-Grade Data Security & Confidentiality",
        info: "Protected with 256-bit encryption, strict 2FA, ISO-aligned systems, and regular compliance audits."
    },
    {
        head: "Business Continuity",
        info: "Dual presence in the U.S. & India ensures uninterrupted service delivery."
    },
    {
        head: "On-Time Delivery",
        info: "Reliable turnaround and disciplined month-end closures."
    },
    {
        head: "Scalable Finance Pods",
        info: "Structured pods that grow from 5 clients to 500 without losing quality."
    },
    {
        head: "Expert Account Manager",
        info: "Each pod is led by a dedicated manager responsible for communication, training, quality, and delivery."
    },
    {
        head: "Customised Processes",
        info: "Tailored systems for CPA firms, startups, SMBs, and stone businesses."
    },
    {
        head: "Smart Technology",
        info: "AI-aligned workflows, automation, and advanced reporting dashboards."
    },
    {
        head: "Future-Ready Vision",
        info: "Today service, tomorrow TruCFO - your AI-powered financial co-pilot."
    }
]

const fourSec: { img: string, head: string, info: string }[] = [
    {
        img: "1.svg",
        head: "Accuracy with Clarity",
        info: "Every number tells a story.",
    },
    {
        img: "2.svg",
        head: "Security First",
        info: "Bank-grade encryption and ISO-aligned systems.",
    },
    {
        img: "3.svg",
        head: "Founder Empathy",
        info: "We move fast, because you don't have time to wait.",
    },
    {
        img: "4.svg",
        head: "Scalable by Design",
        info: "From 5 clients to 500, our pods and systems grow with you.",
    },
]

const clients: string[] = [
    "xero.png",
    "stone-profit-systems.png",
    "shopify.png",
    "bill.png",
    "stripe.png",
    "gusto.png",
    "quickbooks.png",
    "adp.png",
    "expensify.png",
]

const blogCard: { img: string, head: string, info: string, slug: string }[] = [
    {
        img: "1.svg",
        head: "Tax Services",
        info: "Falling behind happens-but we're here to help you get back on track. Whether you're a few months or a few years behind.",
        slug: "tax-service",
    },
    {
        img: "2.svg",
        head: "Staffing Solution",
        info: "Falling behind happens-but we're here to help you get back on track. Whether you're a few months or a few years behind.",
        slug: "staffing-solution",
    },
    {
        img: "3.svg",
        head: "Payroll Services",
        info: "Falling behind happens-but we're here to help you get back on track. Whether you're a few months or a few years behind.",
        slug: "payroll-service",
    },
]


const acheive: { image: string, number: string, info: string }[] = [
    {
        image: "client",
        number: "50+",
        info: "Active Clients",
    },
    {
        image: "project",
        number: "100+",
        info: "Projects Completed",
    },
    {
        image: "expert",
        number: "09+",
        info: "Software Expertise",
    },
    {
        image: "year",
        number: "10+",
        info: "Years of Experience",
    },
    {
        image: "skill",
        number: "15+",
        info: "Skilled Professionals",
    },
]


const AboutPage = () => {
    return (
        <>
            <div className="flex justify-center py-24 text-center bg-chart-2 text-chart-4"
                style={{
                    backgroundImage: "linear-gradient(rgba(7,63,129,0.9), rgba(7,63,129,0.9)), url('/aboutbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <p className="text-5xl font-bold capitalize">About Us</p>
            </div>
            <div className="pt-32 pb-20">
                <div className="mx-auto max-w-[1348px]">
                    <div className="flex justfiy-between gap-38">
                        <div className="space-y-4">
                            <p className="text-4xl font-bold capitalize">Our Company</p>
                            <p>At Trueledgr, we believe finance should never be chaos - it should be clarity and control. Our values center on building systems that empower founders, SMBs, and CPA firms with accuracy, security, and growth-focused insights.</p>
                            <p>With a strong presence in the USA and a delivery hub in India, we partner with businesses across industries - from stone distributors and fabricators to startups, architects, and CPA firms. Our commitment is simple: clean books, smarter decisions, and scalable systems that help clients grow with confidence.</p>
                            <p>We aren't just an outsourcing vendor. We operate as a true extension of your finance team  blending proactive service, CPA-level accuracy, and enterprise-grade security.</p>
                        </div>
                        <Image src="/aboutcompany.svg" alt="" width={600} height={305.8} />
                    </div>
                </div>
            </div>

            <div className="py-20 bg-chart-4">
                <div className="mx-auto max-w-[1348px]">
                    <div className="space-y-12  text-center">
                        <p className="text-4xl font-bold capitalize">Our Values</p>
                        <div className="grid grid-cols-4 gap-y-6 gap-x-8 text-left">
                            {fourSec.map((card, i) => (
                                <div key={i} className="p-8 bg-white rounded-md shadow-md space-y-2">
                                    <Image src={`/partner/${card.img}`} alt="" width={72} height={72} />
                                    <p className="text-xl font-semibold">{card.head}</p>
                                    <p>{card.info}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg">These values aren't just principles - they shape how we serve every client, every month.</p>
                    </div>
                </div>
            </div>

            <div className="py-20" style={{
                backgroundImage: `
                                linear-gradient(
                                to left,
                                rgba(0, 68, 149, 0.5) 0%,
                                rgba(0, 63, 136, 0.63) 35%,
                                rgba(0, 57, 124, 0.75) 42%,
                                rgba(0, 51, 111, 0.88) 48%,
                                rgba(0, 48, 104, 0.94) 56%,
                                rgba(0, 46, 100, 0.98) 75%,
                                rgba(0, 45, 98, 1) 100%
                            ),
                            url('/midphoto-about.png')
                            `,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="space-y-6 mx-auto max-w-[1348px] text-chart-4">
                    <div className="space-y-6 max-w-4xl pr-20 text-md">
                        <div className="space-y-4 mb-10">
                            <p className="text-4xl font-bold capitalize">Our Team's Journey</p>
                            <p>Our team brings decades of combined experience in bookkeeping, payroll, AR/AP, reporting, and CFO advisory. From leading roles at global firms like Merrill Lynch to guiding 100+ startups and SMBs through growth and clarity, our founding team has lived both sides of finance as advisors and as founders.</p>
                            <p>This dual lens - deep finance expertise + founder empathy - allows us to understand what most businesses truly need: decision-ready numbers, delivered with speed and accuracy.</p>
                            <p>Every member of our team follows a structured SOP-driven approach backed by CPA-style checklists and 3-layer reviews. The result? Financial systems that are transparent, audit-ready, and built to scale with your business.</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-xl font-semibold">Global Presence, Local Expertise</p>
                            <p>With a footprint in the United States and an operations base in India, we blend global expertise with regional depth. Whether you're a U.S. CPA firm looking for scale, a startup founder chasing investor-ready numbers, or an SMB owner seeking cash flow clarity -Trueledgr aligns with your needs</p>
                            <p>Our mission is to deliver world-class outsourced finance that feels as close as in-house</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="mx-auto max-w-[1348px]">
                    <div className="flex gap-20 items-center">
                        <div className="rounded-xl border shadow-xl py-24 px-8">
                            <Image src="/aboutCap.svg" alt="" width={500} height={385.81} />
                        </div>
                        <div className="space-y-4 max-w-2xl">
                            <p className="text-5xl font-bold">Our Capabilities</p>
                            <p className="text-2xl">Why Trueledgr Stands Apart</p>
                            <div className="space-y-4">
                                {Capabilities.map((cap, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Image src={"/right-tick.svg"} alt="" width={22} height={22} className="mt-2" />
                                        <p className="text-md"><span className="text-lg font-semibold">{cap.head}</span> - {cap.info}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-chart-4">
                <div className="mx-auto max-w-[1348px]">
                    <div className="space-y-12  text-center">
                        <p className="text-4xl font-bold capitalize">The Founding Team</p>
                        <div className="grid grid-cols-4 gap-8">
                            {team.map((card, i) => (
                                <div key={i} className="space-y-4 rounded-lg bg-white shadow-xl p-2">
                                    <Image className="rounded-lg" src={`${card.img}`} alt={card.head} width={295} height={309} />
                                    <div className="space-y-4 text-left p-4">
                                        <p className="text-xl font-semibold">{card.head}</p>
                                        <p className="text-md">{card.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-md">Trueledgr: From clean books today to an AI-powered TruCFO tomorrow.</p>
                        <Button className="h-full cursor-pointer text-md uppercase p-4 px-12 font-semibold shadow-md/30 bg-chart-3 rounded-sm">Book a Free consultation</Button>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-[linear-gradient(to_bottom,_#E3F2FD_65%,_transparent_0%)]">
                <div className="space-y-12 mx-auto max-w-[1348px]">
                    <div className="flex gap-16 justify-between items-center">
                        <div className="space-y-4 max-w-[45%]">
                            <p className="text-4xl font-bold">Our Software Expertise</p>
                            <p className="text-xl font-semibold">We are proficient in all major accounting and <span className="font-bold">bookkeeping software platforms</span>, ensuring seamless integration and efficient financial management for your business.</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {
                                clients.map((img, i) => (
                                    <Image key={i} src={`/clients/${img}`} alt={img} width={178} height={58} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full flex justify-between px-20 bg-chart-2 rounded-md p-16 mt-10">
                        {acheive.map((a, i) => (
                            <div key={i} className="flex flex-col items-center text-chart-4 gap-4">
                                <Image src={`/acheive/${a.image}.svg`} alt={a.image} width={52} height={52} />
                                <p className="text-4xl font-bold">{a.number}</p>
                                <p className="text-md">{a.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <TestimonialSec />

            <div className="py-20">
                <div className="mx-auto max-w-[1348px] py-12 rounded-md text-chart-4 px-48 text-center" style={{
                    backgroundImage: "linear-gradient(rgba(0,45,98,0.7), rgba(0,45,98,0.7)), url('/footerbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <div className="space-y-16">
                        <div className="space-y-8">
                            <p className="text-4xl font-bold">Ready to Stop Worrying About Your Books?</p>
                            <p className="text-xl">Schedule a free, no-pressure consultation with a Trueledgr expert. We'll review your books, spot blind spots, and give you clarity — even if you don't sign up.</p>
                        </div>
                        <div className="space-y-12">
                            <p className="text-xl font-semibold">You'll walk away with insights you can use right away. No hard sell. No strings attached.</p>
                            <div className="space-y-6">
                                <Button className="h-full cursor-pointer text-md uppercase p-4 px-16 font-semibold shadow-md/30 bg-chart-5 rounded-sm ">Book My Free Bookkeeping Consultation</Button>
                                <p className="text-md font-semibold italic text-[#FBBC05]">Take the first step to bulletproof your startup growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-0 pb-20">
                <div className="space-y-12 mx-auto max-w-[1348px]">
                    <div className="text-center space-y-4">
                        <p className="text-4xl font-bold capitalize">Our latest Blog</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 p-1">
                        {blogCard.map((card, i) => (
                            <div key={i} className="p-2 pb-8 bg-white rounded-md space-y-6 shadow-md border border-chart-1">

                                <div className="flex justify-center w-full h-65 bg-chart-4 p-6">
                                    <Image src={`/blog/${card.img}`} alt={card.head} width={252.1} height={210} />
                                </div>

                                <div className="px-4 space-y-4">
                                    <div className="flex gap-2 font-light">
                                        <Image src='/calendar.svg' alt="" width={24} height={24} />
                                        <p className="text-lg">March 7,2025</p>
                                    </div>
                                    <div className="text-black space-y-2">
                                        <p className="text-xl font-semibold">{card.head}</p>
                                        <p className="text-md">{card.info}</p>
                                    </div>
                                    <Link href={`/blog/${card.slug}`}>
                                        <p className="text-chart-3 mt-8">Read More</p>
                                    </Link>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage;