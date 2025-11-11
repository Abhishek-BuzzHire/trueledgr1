import LaunchpadHeroSec from "@/components/launchpadHeroSec";
import Pricing2 from "@/components/Pricing2";
import TestimonialSec from "@/components/TestimonialSec";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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

const faqs: { id: string, q: string, a: string }[] = [
    {
        id: "1",
        q: "What is the Startup LaunchPad by Trueledgr?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "2",
        q: "Why do most startups fail because of poor financial management?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "3",
        q: "How is Trueledgr different from hiring a freelance bookkeeper or CPA?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "4",
        q: "What's included in the $15/hour LaunchPad plan?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "5",
        q: "Do I need LaunchPad if my startup is pre-revenue?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "6",
        q: "How does Trueledgr keep my startup's financial data secure?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "7",
        q: "Can Trueledgr integrate with my existing tools?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "8",
        q: "How quickly can I get started with LaunchPad?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "9",
        q: "Do I still need a CPA if I use Trueledgr LaunchPad?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "10",
        q: "What happens after the free 15-day trial?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "11",
        q: "Can I scale the service as my startup grows?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
    {
        id: "12",
        q: "How is communication handled with the Trueledgr team?",
        a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
    },
]

const secEight: { word: string, list: string[] } = {
    word: "startups",
    list: [
        "Tailored finance support built for early-stage founders.",
        "We've supported 100+ startups like yours.",
        "No contracts. No pressure. Just clean clarity.",
    ]
}

const secSix: { left: string[], right: string[] } = {
    left: [
        "Dedicated bookkeepers",
        "AP/AR specialists",
        "Payroll processors",
        "Reporting analysts",
        "One proactive account manager who runs it all for you",
    ],
    right: [
        "Accrual-basis monthly bookkeeping",
        "Clean P&L, balance sheet  and cash flow statement",
        "Payroll, AP/AR, and chart of accounts setup",
        "Tax return prep + filing (federal, state, and local)",
        "Business banking, credit card, and cap table setup",
        "Access to US-based finance experts ",
        "Custom KPI dashboard and key metrics",
    ]
}

const secFive: { head: string, info: string }[] = [
    {
        head: "Enterprise-Grade Data Security",
        info: "End-to-end encryption, role-based access, audit trails, and daily backups -  fully aligned with ISO 27001 protocols.",
    },
    {
        head: "CPA-Level Accuracy with Triple Review",
        info: "Every deliverable is prepared using SOPs, compliance checklists, and triple-reviewed for CPA-level accuracy and consistency.",
    },
    {
        head: "U.S. Hours, Proactive Communication",
        info: "We align with your time zone and communicate via Zoom, Meet, and email ensuring seamless communication and full accountability.",
    },
    {
        head: "Seamless Integration Into Your Existing Workflow",
        info: "Our team works directly inside your stack - QuickBooks, Xero, UltraTax, Zoho, and more — with zero disruption or learning curve.",
    },
    {
        head: "One Account Manager. A Team Built Around You",
        info: "You get a single point of contact who handles training , quality, oversight, performance, and team composition tailored to your firm.",
    },
    {
        head: "Only the Top 5% Make the Cut",
        info: "Each team member is screened across 7 layers - screened, tested, interviewed, and background-verified,  ensuring consistent, reliable delivery from day one.",
    },
]

const secFour: { img: string, head: string, info: string[] }[] = [
    {
        img: "1.svg",
        head: "Bookkeeping Setup",
        info: [
            "Historical catch-up (if needed)",
            "Chart of accounts cleanup",
            "Monthly reconciliations & entries",
            "Clean P&L, BS & Cash Flow reports",
        ],
    },
    {
        img: "2.svg",
        head: "Payroll Setup + Compliance",
        info: [
            "Set up with Gusto, ADP, or your platform",
            "Process salaries, bonuses, PTO, and contractors",
            "Pay cycle structuring (monthly, biweekly, etc.)",
            "File W-2s, 1099s, and all tax returns",
        ],
    },
    {
        img: "3.svg",
        head: "AP/AR Management",
        info: [
            "Vendor & customer master data cleanup",
            "weekly payments, billing, and follow-ups",
            "Track overdue invoices & vendor payment cycles",
            "Clean AP/AR ageing with full reconciliation",
        ],
    },
    {
        img: "4.svg",
        head: "Cash Flow + KPI Dashboard",
        info: [
            "Track cash flow & burn rate",
            "Monitor weekly/monthly spend and collections",
            "Get key startup KPIs & metrics in one dashboard",
            "Weekly email summaries plus dashboard access",
        ],
    },
    {
        img: "5.svg",
        head: "Sales Tax Setup + CPA Coordination",
        info: [
            "State & local sales tax prep + filings",
            "Tax deadline reminders",
            "Coordinate with your CPA for year-end compliance",
            "Ensure books are tax-ready and properly mapped",
        ],
    },
    {
        img: "6.svg",
        head: "Founder Success Toolkit",
        info: [
            "Access to Experts — Get your finance + GTM questions answered",
            "Business Banking & Credit Card — We'll connect you with top providers",
            "Cap Table Setup — Full setup + guided onboarding",
        ],
    },
]

const wrong: string[] = [
    "Spreadsheets don’t scale",
    "Inaccurate books lead to bad decisions",
    "Payroll, payables & receviables, and taxes can derail your runway",
    "Over 95% of startups don’t fail due to sales or product, but due to poor financial management",
];

const correct: { head: string, info: string }[] = [
    {
        head: "Clarity",
        info: "Know where your money is going"
        ,
    },
    {
        head: "Control",
        info: "Track cash, burn, payroll, and payables — all in one place"
        ,
    },
    {
        head: "Confidence",
        info: "Clean, audit-ready books that investors trust"
        ,
    },
    {
        head: "Freedom",
        info: "Make bold decisions backed by real numbers, not fixing past mistakes"
        ,
    },
]

const LaunchpadPage = () => {
    return (
        <>
            <LaunchpadHeroSec title="Built for Founders. Designed to Scale." head="Bookkeeping & Accounting for Startups" info={["Trueledgr Startup LaunchPad is your all-in-one financial starter kit, built for founders. We handle bookkeeping & accounting for startups, payroll setup, accounts payable and receivable (AP/AR) management, and financial reporting so you can focus on building the future and stop juggling with multiple vendors."]} img="launchpadHero.svg" bline="No credit card required — 100% free, no obligation " />

            <div className="py-20" style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url('/why-choose-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="mx-auto max-w-[1348px] space-y-4">
                    <div className="space-y-4">
                        <p className="text-4xl max-w-5xl font-bold capitalize">Why Most Founders Regret Delaying Their Finance Setup And What You Can Do Differently</p>
                        <p className="text-xl font-semibold">You didn't launch to manage spreadsheets. You launched to build something that matters. Let us handle the numbers.</p>
                    </div>
                    <div className="flex gap-20 justify-between items-center">
                        <div className="space-y-4">
                            <p>You left the comfort zone behind to build something bigger. Starting a business is the hardest step, and you've already done it. But most founders wait too long to fix their finances, and by then, it's already cost them time, cash flow chaos and investor trust.</p>
                            <p>Now let us walk beside you.</p>
                            <p>Let Trueledgr become your financial co-partner and provide bookkeeping and accounting solutions for startups. We'll handle the numbers, while you focus on building the vision.</p>
                            <div className="space-y-4">
                                <p className="font-semibold text-xl">Here's why fixing your finances early matters:</p>
                                {wrong.map((w, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Image src="/cross.svg" alt="" width={18} height={18} />
                                        <p>{w}</p>
                                    </div>
                                ))}
                                <p className="text-lg">That's why we created LaunchPad for startups — a bundled setup for founders who want clarity from Day One</p>
                            </div>
                            <div className="space-y-4 mt-8">
                                <p className="font-semibold text-xl">What LaunchPad for Startups Gives You:</p>
                                {correct.map((c, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Image src="/right-tick.svg" alt="" width={18} height={18} />
                                        <p className=""><span className="font-semibold">{c.head}</span> - {c.info}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="italic text-chart-3 mt-8 text-lg">100+ founders using Trueledgr LaunchPad for Startups</p>
                        </div>
                        <div className="space-y-16">
                            <div className="bg-white rounded-xl shadow-xl/20 p-20 ">
                                <Image src="/launchpad/3/3.svg" alt="" width={450} height={397.11} />
                            </div>
                            <Button className="cursor-pointer text-md uppercase p-6 px-12 font-semibold shadow-md/30 bg-chart-3 rounded-sm mt-6">Start Smart — Book Your Free Finance Consultation No</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20" style={{
                backgroundImage: "linear-gradient(rgba(7,63,129,0.6), rgba(7,63,129,0.6)), url('/aboutbg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="mx-auto max-w-[1348px]">
                    <div className="bg-white rounded-lg flex gap-20 justify-between p-12 px-24">
                        <Image src="/launchpad/2/2.svg" alt="" width={392.94} height={341.77} />
                        <div className="space-y-4 max-w-3xl text-md">
                            <p className="text-4xl font-bold capitalize">The Easiest Way to Stay Compliant, and in Control - Without Hiring a Full Team</p>
                            <p>Running a startup is hard but your finances shouldn't be the part that slows you down.Most founders don't fail because of bad ideas. They fail because they make decisions too late, with numbers they can't trust.</p>
                            <p>That's where we come in.</p>
                            <p>With our Startup LaunchPad, you get the best bookkeeping and accounting service for startups, along with payroll management, and clear financial insights - tailored to your startup's stage, without building a finance team from scratch.</p>
                            <p>No more messy spreadsheets and missed deadlines. Just a reliable partner who keeps your books clean and your cash flow clear.</p>
                            <p>Start smart with Trueledgr Startup LaunchPad -  the simplest, most effective way to take control of your startup finances.</p>
                            <div className="space-y-6">
                                <Button className="h-full cursor-pointer text-md uppercase p-4 px-12 font-semibold shadow-md/30 bg-chart-3 rounded-sm mt-6">Book Your Free Startup LaunchPad Consultation Now</Button>
                                <p className="font-semibold italic">Limited LaunchPad slots available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="space-y-8 mx-auto max-w-[1348px]">
                    <div className="text-center space-y-4">
                        <p className="text-4xl font-bold capitalize">What's Included in Your LaunchPad Finance Pod</p>
                        <p className="text-xl font-semibold">Everything You Need. Nothing You Don't.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {secFour.map((card, i) => (
                            <div key={i} className="p-8 space-y-4">
                                <Image src={`/partner/${card.img}`} alt="" width={72} height={72} />
                                <p className="text-xl font-semibold">{card.head}</p>
                                <div className="text-md space-y-2">
                                    {card.info.map((l, i) => (
                                        <div key={i} className="flex gap-4 items-center"><div className="w-2 h-2 bg-gray-500 rounded-full"></div>{l}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Button className="h-full cursor-pointer text-md uppercase p-4 px-12 font-semibold shadow-md/30 bg-chart-3 rounded-sm mt-6">Want to learn more? Talk to us.</Button>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="py-20 bg-[linear-gradient(to_left,_#E3F2FD_65%,_transparent_0%)]">
                    <div className="space-y-8 mx-auto max-w-[1348px] flex gap-24 justify-between">
                        <div className="flex items-center">
                            <div className="p-8 py-24 rounded-xl shadow-xl bg-white">
                                <Image src={"/trustTrue.svg"} alt="" width={500} height={500} />
                            </div>
                        </div>
                        <div className="max-w-3xl">
                            <div className="space-y-6">
                                <p className="text-4xl font-bold capitalize">Why Founders Trust Trueledgr as Their Offshore Extension?</p>
                                <div className="mt-6 space-y-4 text-lg">
                                    <p>Trueledgr isn't just a service - it's your dedicated finance team understanding the daily pressures and time constraints you face. Trueledgr is designed to operate like an in-house team, giving startups seamless support without added overhead.</p>
                                    <p>We go beyond outsourcing - we give you security, control and quality.</p>
                                </div>
                                <div className="space-y-8">
                                    {secFive.map((p, i) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <Image src={"/right-tick.svg"} alt="" width={22} height={22} className="mt-2" />
                                            <div className="space-y-2">
                                                <p className="text-xl font-semibold">{p.head}</p>
                                                <p className="text-md">{p.info}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button className="h-full cursor-pointer text-md uppercase p-4 px-12 font-semibold shadow-md/30 bg-chart-3 rounded-sm mt-6">Talk to a Finance Expert Today</Button>
                                <p className="font-semibold italic">Real humans. Real answers. Real growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="mx-auto max-w-[1348px]">
                    <div className=" flex justify-between gap-16 items-end">
                        <div className="max-w-4xl">
                            <div className="space-y-4">
                                <p className="text-4xl font-bold capitalize">What You Get And For How Much</p>
                                <div className="space-y-2">
                                    <p className="text-xl font-semibold">A Full Finance Pod. Just $15/hour.</p>
                                    <p className="text-md">We built LaunchPad for ambitious founders who need a complete finance team, not just a bookkeeper.</p>
                                </div>
                                <p className="font-semibold">What you get in a full finance pod:</p>
                                <div className="space-y-2 mb-8 max-w-xl">
                                    {secSix.left.map((l, i) => (
                                        <div key={i} className="py-4 border-b border-gray-300 flex gap-3 items-center">
                                            <div className="w-5 h-5 bg-chart-3 rounded-full"></div>
                                            <p className="font-semibold text-xl">{l}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <p>Your plan covers up to 100 hours/month, is valid for 12 full months, and starts with a 15-day free trial - so you can experience the impact before committing.</p>
                                    <p>No hidden fees. No long contracts. Just clean execution</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-chart-1 p-10 rounded-lg space-y-8 min-w-lg">
                            <p className="text-xl font-semibold">What's you get in LaunchPad:</p>
                            {secSix.right.map((l, i) => (
                                <div key={i} className="flex gap-3 items-center ">
                                    <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                                    <p className="text-lg font-normal">{l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Button className="h-full cursor-pointer text-md uppercase p-4 px-8 font-semibold shadow-md/30 bg-chart-3 rounded-sm mt-6">Book Your Free Consultation</Button>
                        <p className="font-semibold italic">Limited slots availability.</p>
                    </div>
                </div>
            </div>

            <Pricing2 info={["We handle bookkeeping, AR/AP, and payroll - from reconciliations to vendor payments and compliant payroll runs. Get clean financials, custom reports, and KPI dashboards with insights on inventory, sales reps, cash flow, budgeting, and forecasting."]} word="launch-pad" />

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
                            url('/launchpadmidphoto.png')
                            `,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="space-y-6 mx-auto max-w-[1348px] text-chart-4">
                    <div className="space-y-4 max-w-4xl text-xl">
                        <p className="text-4xl font-bold capitalize">Let's Make Your Books the Least of Your Problems</p>
                        <p>Most {secEight.word} don't struggle because of sales or operations. They struggle because their finances are messy, unclear, or delayed.</p>
                        <p>Trueledgr LaunchPad helps you clean it all up fast, simple, and without disrupting your team. Even one short call could reveal gaps you didn't know were there.</p>
                    </div>
                    <div className="space-y-4">
                        {secEight.list.map((p, i) => (
                            <div key={i} className="flex gap-4 items-center">
                                <div className="bg-chart-2 border-10 border-[#1D6ECE]/30 rounded-full flex justify-center w-18 h-18">
                                    <Image src={"/launchpad/1/1.svg"} alt="" width={24} height={24} />
                                </div>
                                <p className="text-xl">{p}</p>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <Button className="h-full cursor-pointer text-md uppercase p-4 px-8 font-semibold shadow-md/30 bg-chart-5 rounded-sm mt-6">Let's Talk — Schedule Your Free Consultation Now</Button>
                        <p className="font-semibold italic text-[#FBBC05]">It's free. It's useful. And it might just save your startup a lot.</p>
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

            <div className="pb-20">
                <div className="mx-auto max-w-[1348px] space-y-8">
                    <p className="text-5xl font-bold capitalize text-center">Frequently Asked Questions</p>
                    <div>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full px-32"
                        >
                            {faqs.map((item) => (
                                <AccordionItem key={item.id} value={item.id}>
                                    <AccordionTrigger className="transition-opacity duration-200 hover:no-underline">
                                        <div className="font-medium sm:py-1 lg:py-2 lg:text-xl">
                                            {item.q}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="sm:mb-1 lg:mb-2">
                                        <div className="lg:text-lg">
                                            {item.a}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LaunchpadPage;