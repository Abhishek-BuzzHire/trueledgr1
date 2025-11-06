import Image from "next/image"
import ServiceHeroSec from "./ServiceHeroSec"
import { Button } from "./ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const avatars = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
    "/google.svg",
];

const faqs:{id: string, q: string, a: string}[] = [
    {
        id: "1",
        q:"What are monthly bookkeeping services?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
    },
    {
        id: "2",
        q:"Why should I outsource bookkeeping instead of hiring in-house?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
    },
    {
        id: "3",
        q:"What's included in Trueledgr's monthly bookkeeping services?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
    },
    {
        id: "4",
        q:"Do I need bookkeeping if I already use QuickBooks or Xero?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
    },
    {
        id: "5",
        q:"How secure is my financial data with Trueledgr?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
    },
    {
        id: "6",
        q:"Will you work with my CPA during tax season?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
    },
    {
        id: "7",
        q:"How quickly can you onboard my business?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
    },
    {
        id: "8",
        q:"Can I scale bookkeeping hours as my business grows?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
    },
    {
        id: "9",
        q:"What industries does Trueledgr serve?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
    },
    {
        id: "10",
        q:"Do I need monthly bookkeeping if my business is small or new?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
    },
    {
        id: "11",
        q:"What makes Trueledgr different from other bookkeeping services?",
        a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
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

const partnerCards: { img: string, head: string, info: string }[] = [
    {
        img: "1.svg",
        head: "Accurate Bookkeeping, Backed by SOPs and 3-Layer Review",
        info: "Pre-vetted U.S.-trained professionals follow strict SOPs and CPA-style checklists with 3-layer review for accuracy.",
    },
    {
        img: "2.svg",
        head: "Dedicated Account Manager with USA Aligned Hours",
        info: "Your account manager ensures delivery, training, quality checks, and smooth communication in sync with your time zone.",
    },
    {
        img: "3.svg",
        head: "Expert Use of Leading Accounting Tools",
        info: "We handle QuickBooks, Xero, ADP, Gusto, and SPS with precision for seamless bookkeeping, payroll, and reporting.",
    },
    {
        img: "4.svg",
        head: "Financial Reports That Drive Better Decisions",
        info: "Beyond clean books, we deliver tailored P&L, Balance Sheet, Cash Flow, KPI dashboards, and custom strategic reports.",
    },
    {
        img: "5.svg",
        head: "Enterprise-Grade Data Security and Confidentiality",
        info: "Your financial data is protected with 256-bit encryption, strict 2FA, ISO-aligned systems, and regular compliance audits.",
    },
    {
        img: "6.svg",
        head: "A Scalable System That Evolves With Your Business",
        info: "From startup to scale, expand roles, insights, and reporting without switching firms or retraining new accounting vendors.",
    }
]

const priceBullets: { num: number, point: string }[] = [
    {
        num: 1,
        point: "One dedicated Account Manager — your single point of contact.",
    },
    {
        num: 2,
        point: "A structured finance pod - we assign specialists; managed by an account manager. ",
    },
    {
        num: 3,
        point: "Monthly books + custom reports, three layer review before delivery.",
    },
    {
        num: 4,
        point: "SOP-driven workflows with clear timelines & delivery accountability.",
    },
]

const launchBullets: { num: number, point: string }[] = [
    {
        num: 1,
        point: "Set up clean books, accurate cash flow, and decision-ready reports.",
    },
    {
        num: 2,
        point: "Track the right KPIs that actually drive business decisions.",
    },
    {
        num: 3,
        point: "A structured finance pod - we assign specialists; managed by an account manager.",
    },
    {
        num: 4,
        point: "Get every output triple-reviewed for CPA-level accuracy.",
    },
]

const includeCards: string[] = [
    "We categorize all income and expenses across every platform you use.",
    "We reconcile banks, credit cards, PayPal, and payment apps monthly.",
    "We track assets, loans, interest, and petty cash accurately.",
    "We maintain a clean, custom chart of accounts for your business.",
    "We match deposits, fix chargebacks, errors, and any duplicates.",
    "We send monthly P&L, Balance Sheet, and Cash Flow reports.",
    "We coordinate directly with your CPA when it’s tax season.",
    "We post journal entries and close your books every month.",
    "We deliver fully documented, audit-ready books you can rely on.",
]

const serveIndus: string[] = [
    "Stone Distributors",
    "Stone Fabricators",
    "Architects & Interior Designers",
    "SMBs",
    "Startups",
    "CPAs & CPA Firms",
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

const solWork: { serial: number, img: string, head: string, info: string }[] = [
    {
        serial: 1,
        img: "1.svg",
        head: "Seamless Onboarding",
        info: "We start with a quick call, connect tools like QuickBooks, Stripe, Gusto, or Zoho, and set up your books accurately, right from day one.",
    },
    {
        serial: 2,
        img: "2.svg",
        head: "Streamlined Communication",
        info: "You'll stay in touch with your dedicated account manager through zoom, meet or email. Ask questions, review flagged items & get clarity.",
    },
    {
        serial: 3,
        img: "3.svg",
        head: "Monthly Reports That Matter",
        info: "Your books are closed by the end of every month, fully reconciled and CPA-ready. Get clean P&L, Balance Sheet, Cash Flow Statement and custom reports.",
    },
]

const solWorkImg: string[] = [
    "1.svg", "2.svg", "3.svg",
]

const serviceCards: { img: string, head: string, info: string }[] = [
    {
        img: "1.svg",
        head: "Payroll Services",
        info: "We run payroll accurately, file taxes on time, and keep your business 100% compliant without stress.",
    },
    {
        img: "2.svg",
        head: "Accounts Receivable & Payable Services",
        info: "From chasing invoices to paying vendors, we manage AR/AP smoothly - improving cash flow and eliminating late payment stress.",
    },
    {
        img: "3.svg",
        head: "Catch-Up Bookkeeping Services",
        info: "Behind on books? We clean, reconcile, and deliver accurate, audit-ready financials fast - no more messy backlog.",
    },
]

const ServicePage = () => {
    return (
        <div className=''>
            <ServiceHeroSec info ={["Looking for the best monthly bookkeeping services in the USA?","At Trueledgr, we streamline your finances, ensure compliance, and deliver monthly reports with CPA coordination all through reliable, tailored bookkeeping solutions built around your business."]} blueHead="Leading Bookkeeping" head="Services in the USA" img="heroService1.svg" button="booking" />
            <div className="py-20">
                <div className="space-y-8  mx-auto max-w-[1348px]">
                    <div className="text-center space-y-4">
                        <p className="text-5xl font-bold capitalize">Proven Performance. Trusted by Businesses Across the USA</p>
                        <p className="text-xl font-semibold">Trusted by stone businesses, architects, and SMBs, Trueledgr delivers reliable, efficient, and effective bookkeeping solutions for financial clarity. Backed by real results, real clients, and a growing team of finance professionals, you can count on us</p>
                    </div>
                    <div className="w-full flex justify-between px-20 bg-chart-3 rounded-sm p-8 mt-10">
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
            <div className="py-20" style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url('/why-choose-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="space-y-8  mx-auto max-w-[1348px]">
                    <div className="text-center space-y-4">
                        <p className="text-5xl font-bold capitalize">Why Choose to Outsource Bookkeeping Services?</p>
                        <p className="text-xl font-semibold">Bookkeeping isn't just record-keeping - it's the foundation of smart business decisions. Without clean, timely books, you're flying blind unable to track cash flow, monitor P&L, or stay compliant at tax time.</p>
                    </div>
                    <div className="flex justify-between gap-10">
                        <div className="max-w-[787px] space-y-4 mt-8">
                            <div className="space-y-4 text-md">
                                <p>You didn't start your business to chase invoices, fix spreadsheets, or stay up late reconciling accounts  yet most founders end up doing just that, without ever gaining a clear picture of their financials.</p>
                                <p>Hiring an in-house bookkeeper means weeks of onboarding, training, and management, with no guarantee they'll catch past mistakes or build the systems you'll need as you grow.</p>
                                <p className="">That's why outsourcing full-service bookkeeping to a real partner is smarter, faster, and way less stressful.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                                <div className="space-y-2">
                                    <p className="font-semibold">Save 40+ hours/month</p>
                                    <p >No more late nights fixing spreadsheets or backlogs. We handle everything from bank syncs to monthly reconciliation.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                                <div className="space-y-2">
                                    <p className="font-semibold">No hiring, training, or micromanagement</p>
                                    <p >You get a full finance pod from a bookkeeper, reporting expert, to a manager without managing anyone yourself.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                                <div className="space-y-2">
                                    <p className="font-semibold">Decision-Ready Reports, Always On Time</p>
                                    <p >Get fully reconciled CPA-ready books , with clean P&L, Balance Sheet, and Cash Flow insights and custom reports tailored for your business.</p>
                                </div>
                            </div>
                        </div>
                        <Image src={"/why-choose.svg"} alt="" width={397.03} height={395.64} />
                    </div>
                </div>
            </div>
            <div className="py-20">
                <div className="space-y-8 mx-auto max-w-[1348px]">
                    <div className="text-center space-y-4">
                        <p className="text-5xl font-bold capitalize">What makes us a Preferred Partner For Outsourced Bookkeeping Services</p>
                    </div>
                    <div className="grid grid-cols-3 gap-y-6 gap-x-8">
                        {partnerCards.map((card, i) => (
                            <div key={i} className="p-8 rounded-sm shadow-xl space-y-4">
                                <Image src={`/partner/${card.img}`} alt="" width={72} height={72} />
                                <p className="text-xl font-semibold">{card.head}</p>
                                <p>{card.info}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex mt-24 p-12 py-10 gap-20 bg-chart-3 text-chart-4 rounded-md items-center justify-center">
                        <div className="space-y-4">
                            <p className="text-4xl font-bold capitalize">Ready to Stop Worrying About Your Books?</p>
                            <p className="text-xl font-semibold">You'll walk away with insights you can use right away. No hard sell. No strings attached.</p>
                        </div>
                        <Button className="h-full cursor-pointer text-md uppercase p-6 px-16 font-semibold shadow-md/30 bg-chart-5 rounded-sm ">Book a Free review call</Button>
                    </div>
                </div>
            </div>
            <div className="py-20 bg-chart-2">
                <div className="space-y-8 mx-auto max-w-[1348px]">
                    <div className="text-chart-4 space-y-16">
                        <p className="text-4xl font-bold capitalize">What is included in the Bookkeeping Services:</p>
                        <div className="grid grid-cols-3 gap-12 gap-x-8">
                            {includeCards.map((card, i) => (
                                <div key={i} className="flex gap-4 bg-[#1E446E] p-4 p-2 border-1 border-[#235893] rounded-sm shadow-md/30">
                                    <Image src={"/right-tick.svg"} alt="" width={32} height={32} />
                                    <p className="text-md">{card}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <Button className="h-full cursor-pointer text-md uppercase p-4 px-16 font-semibold shadow-md/30 bg-chart-5 rounded-sm ">Book your free call</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-20">
                <div className="space-y-8 mx-auto max-w-[1348px] bg-chart-3 p-16 px-20 rounded-md text-chart-4">
                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <p className="text-4xl font-bold capitalize">Transparent Pricing. Built Around You.</p>
                            <p className="text-xl font-semibold px-8">We charge based on the level of expertise and work your business actually needs. Every role is mapped to a real workload, so you only pay for what's valuable.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="rounded-lg text-black bg-chart-4 p-8 space-y-8 px-20">
                                <div className="text-chart-3 text-center">
                                    <span className="text-5xl font-bold">$15/</span><span className="text-2xl font-semibold">Hour</span>
                                </div>
                                <div className="space-y-2 text-center">
                                    <p className="text-2xl font-semibold">Bookkeeper</p>
                                    <p>Handles daily transaction entries, bank/credit card reconciliations, expense categorization, and delivers clean monthly P&L and Balance Sheet.</p>
                                </div>
                            </div>
                            <div className="rounded-lg text-black bg-chart-4 p-8 space-y-8 px-20">
                                <div className="text-chart-3 text-center">
                                    <span className="text-5xl font-bold">$25/</span><span className="text-2xl font-semibold">Hour</span>
                                </div>
                                <div className="space-y-2 text-center">
                                    <p className="text-2xl font-semibold">Reporting Analyst (Mgt Accountant)</p>
                                    <p>Handles monthly close, prepares custom reports & KPI dashboards, provides inventory & sales rep insights, plus cash flow forecasting, budgeting, and financial planning.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <div className="space-y-4">
                                <p className="text-xl font-semibold capitalize">What you get</p>
                                <div className="space-y-4">
                                    {priceBullets.map((bull, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <p className="p-2 text-xs text-center w-8 h-8 bg-chart-4 rounded-full text-chart-3">{bull.num}</p>
                                            <p className="">{bull.point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <Button className="h-full cursor-pointer text-md uppercase p-4 px-16 font-semibold shadow-md/30 bg-chart-5 rounded-sm ">Book a free discovery call</Button>
                                <p className="font-semibold italic text-[#FBBC05] text-center">We'll estimate it for you, no guesswork needed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12 bg-chart-2">
                <div className="space-y-8 mx-auto max-w-[1348px] text-chart-4 flex gap-8 justify-between">
                    <div className="max-w-3xl">
                        <div className="space-y-4">
                            <p className="text-xl capitalize font-semibold">Explore Trueledgr Launchpad - $15/ Hour, All Inclusive</p>
                            <p className="text-4xl font-bold capitalize">Looking for a simpler way to manage all your financial needs?</p>
                            <div className="mt-6 space-y-4">
                                <p>If you're in your first year of business, this is the smartest time to set up your finances right - before the spreadsheets pile up, vendors multiply, or you lose sight of your cash flow.</p>
                                <p><span className="text-xl font-bold"> Trueledgr LaunchPad </span>isn't just monthly bookkeeping - it's your complete finance system: <br /> bookkeeping, AR/AP, payroll, and reporting, all handled by a dedicated finance pod that works like your internal team.</p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xl font-semibold capitalize">From day one, we'll help you:</p>
                                <div className="space-y-4">
                                    {launchBullets.map((bull, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <p className="p-2 text-xs text-center w-8 h-8 bg-chart-4 rounded-full text-chart-3">{bull.num}</p>
                                            <p className="">{bull.point}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-md font-semibold capitalize">For first-year founders only - includes a 15-day free trial.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-8 mt-12">
                                    <Button className="h-full cursor-pointer text-md uppercase p-4 px-16 font-semibold shadow-md/30 bg-chart-5 rounded-sm ">Startup founders</Button>
                                    <Button className="h-full cursor-pointer text-md uppercase p-4 px-28 font-semibold shadow-md/30 bg-chart-3 rounded-sm ">SMBS</Button>
                                </div>
                                <p className="text-sm italic text-[#FFDD00]">Limited spots available - don't miss out.</p>
                            </div>
                        </div>
                    </div>
                    <Image src={"/launchpad.svg"} alt="" width={480.05} height={484.21} />
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

            <div className="bg-chart-4">
                <div className="py-20 bg-[linear-gradient(to_bottom,_#012E63_60%,_transparent_0%)] text-chart-4">
                    <div className="space-y-12 mx-auto max-w-[1348px]">
                        <div className="text-center space-y-4">
                            <p className="text-5xl font-bold capitalize">How do our Bookkeeping Solutions Work</p>
                            <p className="text-xl font-normal">From setup to strategy, we slot seamlessly into your workflow.</p>
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                            {solWork.map((card, i) => (
                                <div key={i} className="p-8 bg-white rounded-md space-y-6 shadow-md">
                                    <div className="relative flex justify-center">
                                        <div className="absolute top-0 left-0 bg-chart-3 p-3 rounded-sm">
                                            0{card.serial}
                                        </div>
                                        <Image src={`/solWork/${card.img}`} alt={card.head} width={206.24} height={153} />
                                    </div>
                                    <div className="text-black space-y-2 text-center">
                                        <p className="text-xl font-semibold">{card.head}</p>
                                        <p className="text-md">{card.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="py-20 bg-[linear-gradient(to_left,_#E3F2FD_35%,_transparent_0%)]">
                    <div className="space-y-8 mx-auto max-w-[1348px] flex gap-8 justify-between">
                        <div className="max-w-3xl">
                            <div className="space-y-6">
                                <p className="text-4xl font-bold capitalize">Industries We Serve</p>
                                <div className="mt-6 space-y-4">
                                    <p className="font-semibold text-xl">At Trueledgr, we go beyond bookkeeping, payroll, receivable and payables management and taxes. We create and optimize every report and metric to your industry's financial workflows, so you can move forward with clarity.</p>
                                </div>
                                <div className="space-y-8">
                                    <p className="text-md font-bold capitalize">Here's a breakdown of the industries we serve:</p>
                                    <div className="space-y-8">
                                        {serveIndus.map((bull, i) => (
                                            <div key={i} className="flex gap-3 items-center">
                                                <Image src={"/right-tick.svg"} alt="" width={22} height={22} />
                                                <p className="text-xl font-semibold">{bull}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Button className="h-full cursor-pointer text-md uppercase p-4 px-12 font-semibold shadow-md/30 bg-chart-3 rounded-sm mt-6">Book Your Free Call</Button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="p-8 rounded-4xl shadow-xl bg-white">
                                <Image src={"/serveIndus.svg"} alt="" width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="space-y-12 mx-auto max-w-[1348px]">
                    <div className="text-center space-y-4">
                        <p className="text-4xl font-bold capitalize">Get Even More Form trueledgr with these add-ons</p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 p-1">
                        {serviceCards.map((card, i) => (
                            <div key={i} className="p-2 pb-8 bg-white rounded-md space-y-6 shadow-md border border-chart-1">
                                <div className="flex justify-center w-full h-65 bg-chart-4 p-6">
                                    <Image src={`/servicesCards/${card.img}`} alt={card.head} width={252.1} height={210} />
                                </div>
                                <div className="px-4">
                                    <div className="text-black space-y-4">
                                        <p className="text-xl font-semibold">{card.head}</p>
                                        <p className="text-md">{card.info}</p>
                                    </div>
                                    <p className="text-chart-3 mt-8">Read More</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20" style={{
                backgroundImage: "linear-gradient(rgba(29,133,238,0.02), rgba(29,133,238,0.02)), url('/testimonials-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="mx-auto max-w-[1348px] flex gap-32 justify-between items-center">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <p className="text-2xl text-chart-2 font-semibold">Testimonial's</p>
                            <p className="text-4xl font-bold">Our Client's Review Inspired  Us The Most to Improve Our Services</p>
                        </div>
                        <div className="flex gap-4 items-end">
                            <div className="flex -space-x-4">
                                {avatars.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        alt={`avatar-${index}`}
                                        className="w-12 h-12 rounded-full border-2 border-white object-cover"
                                        width={43.33}
                                        height={43.33}
                                    />
                                ))}
                            </div>
                            <div>
                                <Image src={"/stars.svg"} alt="" width={100} height={20} />
                                <p>From 1K+ Reveiw</p>
                            </div>
                        </div>
                        <Button className="p-6 px-16 bg-chart-3 rounded-sm font-semibold uppercase text-md">View All Feedback</Button>
                    </div>
                    <div className="space-y-6 max-w-2xl">
                        <div className="relative bg-white border border-black/10 px-10">
                            <Image src={"https://randomuser.me/api/portraits/women/44.jpg"} alt="" width={100} height={100} className="rounded-full absolute -top-12 left-10" />
                            <div className="pt-24 pb-14 border-b-2 border-chart-3 space-y-6">
                                <p className="italic text-lg">Trueledgr's bookkeeping and custom reports have transformed our business. They manage landed costs, commissions, and reconciliations seamlessly, giving us financial clarity and confidence to scale Kiva Stones without blind spots.</p>
                                <div className="space-y-1">
                                    <p className="text-2xl font-semibold">Genevieve</p>
                                    <p>Managing Director</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-chart-3"></div>
                            <div className="w-3 h-3 rounded-full bg-chart-3/50"></div>
                            <div className="w-3 h-3 rounded-full bg-chart-3/50"></div>
                            <div className="w-3 h-3 rounded-full bg-chart-3/50"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="mx-auto max-w-[1348px] py-12 rounded-md text-chart-4 px-48 text-center" style={{
                    backgroundImage: "linear-gradient(rgba(0,45,98,0.7), rgba(0,45,98,0.7)), url('/footerbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <div className="space-y-16">
                        <div className="space-y-8">
                            <p className="text-4xl font-bold">Ready to Stop Worrying About Your Books?</p>
                            <p className="text-xl">Schedule a free, no-pressure consultation with a TruBookz expert. We'll review your books, spot blind spots, and give you clarity — even if you don't sign up.</p>
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
                                    <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
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
        </div>
    )
}

export default ServicePage