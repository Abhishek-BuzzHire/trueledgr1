import IndustryHeroSec from "@/components/IndustryHeroSec"
import PricingPage from "@/components/Pricing"
import TestimonialSec from "@/components/TestimonialSec"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { industryData } from "@/data/industrydata"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { use } from "react"

const left1: string[] = [
    "Recording all daily sales, purchases, payroll, and overheads in QuickBooks",
    "Categorising expenses by department: freight, import, warehouse, showroom, sales",
    "Reconciling all bank and credit card accounts monthly",
    "Matching received inventory with vendor bills and tracking landed cost components",
    "Maintaining digital records of receipts, invoices, and key contracts",
    "Posting monthly accruals, prepaids, adjusting journal entries, and finalising books",
    "Detecting duplicate entries and fixing errors to deliver clean ledgers",
    "Tracking and reconciling petty cash usage (warehouse/showroom)",
]

const left2: string[] = [
    "Cross-checking SPS invoices with sales orders for accuracy",
    "Maintaining AR ageing buckets (30/60/90+ days) for visibility and control",
    "Sharing client account statements for timely reconciliation and follow-up",
    "Flagging overdue balances to assigned sales reps or managers",
    "Reconciling short-pays, bounced checks, credit notes, and advances",
    "Generating rep-wise DSO reports and highlighting high-risk accounts",
]

const left3: string[] = [
    "Posting final journal entries and closing the books monthly",
    "Reconciling revenue, purchases, and expenses across all accounts",
    "Locking all bank reconciliations and verifying AR/AP balances",
    "Validating invoice-level landed cost via SPS audits",
    "Preparing monthly P&L, Balance Sheet, and Cash Flow statements",
    "Filing DR-15 sales tax returns with the correct state (e.g. Florida)",
    "Reviewing GL for duplicates, misclassifications, or financial spikes",
    "Coordinating with CPAs on 1120/1065 filings and storing year-end docs",
]

const right1: string[] = [
    "Processing payroll biweekly/monthly via Gusto, ADP, or Paychex",
    "Collecting and reviewing timecards, commissions, PTO, and overtime",
    "Importing payroll journals and reconciling with GL and system records",
    "Ensuring compliance with state and federal tax laws",
    "Finalising year-end payroll summaries and generating W2s/1099s",
    "Maintaining audit-ready payroll documentation for employees, contractors, and fabricators",
]

const right2: string[] = [
    "Recording bills from domestic and international vendors (CHA, freight, suppliers)",
    "Maintaining AP ageing by vendor type and due date (30/60/90+ days)",
    "Reconciling debit notes, vendor advances, and delivery discrepancies",
    "Validating vendor statements to support reconciliations",
    "Preparing weekly payment schedules to avoid late fees and protect trust",
    "Segmenting AP reports by vendor category and liability type",
]

const faqs: { id: string, q: string, a: string }[] = [
    {
        id: "1",
        q: "Why do stone distributors need specialized bookkeeping services?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "2",
        q: "How does Trueledgr handle landed cost calculations?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "3",
        q: "What types of reports do stone distributors receive every month?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "4",
        q: "How much does stone distributor bookkeeping cost with Trueledgr?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "5",
        q: "Can Trueledgr integrate with Stone Profit Systems (SPS)?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "6",
        q: "How do you manage accounts receivable for stone distributors?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "7",
        q: "Do you also manage accounts payable for stone distributors?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "8",
        q: "Will my books be CPA and tax-ready every month?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "9",
        q: "How do you ensure commissions are paid fairly to sales reps?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "10",
        q: "How secure is my financial data?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "11",
        q: "How fast can you onboard a stone distributor?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },
    {
        id: "12",
        q: "Do you serve both small and large stone distributors?",
        a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
    },

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

const trustTrue: { head: string, info: string; }[] = [
    {
        head: "Deep experience in the stone industry",
        info: "We've spent 5+ years solving financial challenges for stone distributors & suppliers, importers, and showrooms."
    },
    {
        head: "Clean Bookkeeping & Always CPA-Ready",
        info: "Every entry is reconciled and reviewed to ensure your books stay tax-ready, audit-ready, and always ready for your CPA.",
    },
    {
        head: "Reports That Drive Action",
        info: "Track landed cost breakdowns to sales rep ROI, get monthly custom reports & dashboards that guide real decisions.",
    },
    {
        head: "One Structured Pod, One Point of Contact",
        info: "Get a dedicated account manager + finance team (bookkeeping, account payables and receivables, reporting).",
    },
    {
        head: "Built Into Your Workflow",
        info: "We work seamlessly within Stone Profit Systems, QuickBooks, Gusto, ADP, Expensify and your existing tools, making no extra setup required.",
    },
    {
        head: "Complete Confidentiality with Enterprise-Grade Data Security",
        info: "We secure your financial data with 256-bit encryption, strict 2FA access controls, regular audits, and ISO-aligned systems to keep financial data safe.",
    },
]

const indusWork: { serial: string, img: string, head: string, info: string }[] = [
    {
        serial: "1",
        img: "1.svg",
        head: "Seamless Onboarding",
        info: "We begin with a quick consultation, connect to your financial tools (Stone Profit System, QuickBooks, Gusto/ADP), and set up your books with clean, accurate records from day one.",
    },
    {
        serial: "2",
        img: "2.svg",
        head: "Streamlined Communication",
        info: "Your dedicated accounts manager stays in touch through weekly check-ins. You'll get clear updates, resolve flagged items quickly, and avoid back-and-forth.",
    },
    {
        serial: "3",
        img: "3.svg",
        head: "Monthly Reports That Matter",
        info: "Your books are reconciled and closed by the 5th of every month. We deliver clean P&L, Balance Sheet, Cash Flow, and Key reports that drive better business decisions.",
    },
]

const sec2: { head: string, info: string }[] = [
    {
        head: "Messy Books Leave You Without Real Clarity",
        info: "Without timely reconciliation, data piles up, leaving partial ledgers, wrong balances, and no accurate financial picture.",
    },
    {
        head: "Cash feels tight, even when sales are up",
        info: "Without inventory ageing and periodic analysis , dead stock keeps piling up while hot items go out of stock.",
    },
    {
        head: "Old slabs block space and freeze capital",
        info: "Without inventory ageing or slab movement reports, dead stock keeps piling up while hot items go out of stock.",
    },
    {
        head: "Blind Reordering Drains Cash and Inventory",
        info: "There's no sync between sales and purchase planning. You lose cash to overstock while missing high-demand stones.",
    },
    {
        head: "Untracked Landed Costs Make Margins Disappear",
        info: "Without proper freight, duty, CHA your per-slab cost is a mystery and so is your margin.",
    },
    {
        head: "Commissions are paid, but is the rep profitable?",
        info: "Sales reps earn big, but you don't know if their deals are driving profit or just top-line growth with thin margins.",
    },
    {
        head: "You're scrambling at tax time, with no clean reports.",
        info: "At filing season, your CPA's chasing missing numbers. There's no clean GL, no payroll summaries, and no categorised expenses.",
    },
    {
        head: "Old sales orders and holds jam your pipeline",
        info: "Nothing's moving. Stale orders block new ones. You're unable to tell what's real, what's held, and what's dead.",
    },
]

const getMonth: { id: string, head: string, subhead: string, info: string[], points?: string[] }[] = [
    {
        id: "1",
        head: "Profit & Loss",
        subhead: "Know what you're earning, where profits are leaKked.",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
    {
        id: "2",
        head: "Cash Flow Statement",
        subhead: "Profit ≠ cash - Understand exactly how your cash moved last month.",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
    {
        id: "3",
        head: "Aged Receivables & Payables",
        subhead: "Track what you're owed and what you owe with ageing to get total clarity.",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
    {
        id: "4",
        head: "Monthly Fund Requirement Forecast",
        subhead: "See exactly how much cash you'll need each week and why.",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
    {
        id: "5",
        head: "Container Landed Cost Report",
        subhead: "Know your real cost per slab—freight to warehouse.",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
    {
        id: "6",
        head: "Inventory Ageing Report",
        subhead: "Spot stuck slabs and unlock blocked capital.",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
    {
        id: "7",
        head: "Buying Recommendation Report",
        subhead: "Reorder what's working, hold what's not—based on real data.",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
    {
        id: "8",
        head: "Sales Performance & Client Retention Report",
        subhead: "Know which reps — and which clients — are truly growing your business.",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
    {
        id: "9",
        head: "Sales Reps Commission",
        subhead: "Make sure you're paying for performance, not just promises.",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
    {
        id: "10",
        head: "Sales Rep Scorecard",
        subhead: "Is your sales rep driving real results — or just racking up payroll?",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
    {
        id: "11",
        head: "KPI Dashboard",
        subhead: "Every business has its own success metrics — we'll define yours, and track them with precision.",
        info: [
            "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
        ],
        points: [
            "Monitor monthly margins with accurac",
            "Catch abnormal spending or cost increases early",
            "Track profitability by business department",
            "Understand why your profit dipped or grew this month",
        ]
    },
]

const IndustryPage = ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = use(params)
        const data = industryData.find((s) => s.slug === slug);
    
        if (!data) return notFound();

    return (
        <div className=''>
            <IndustryHeroSec title={data.heroSec.title} head={data.heroSec.head} info={data.heroSec.info} img={data.heroSec.img} />
            <div className="py-20" style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url('/why-choose-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="space-y-8 mx-auto max-w-[1348px]">
                    <div className="space-y-4">
                        <p className="text-4xl font-bold capitalize">{data.secTwo.head}</p>
                        <p className="text-xl font-semibold">{data.secTwo.subhead}</p>
                        {data.secTwo.para.map((par, i) => (
                            <p key={i}>{par}</p>
                        ))}
                    </div>
                    <div className="">
                        <div className="space-y-6 mt-4">
                            <p className="text-md font-bold">Here's what you're dealing with:</p>
                            <div className="grid grid-rows-4 grid-cols-2 gap-8 pr-20">
                                {data.secTwo.points.map((sec, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                                        <div className="space-y-2">
                                            <p className="text-xl font-semibold">{sec.head}</p>
                                            <p className="text-md">{sec.info}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="font-semibold text-lg">{data.secTwo.bhead}</p>
                        <p className="text-md">{data.secTwo.binfo}</p>
                    </div>
                    <Button className="h-full cursor-pointer text-md uppercase p-4 px-12 font-semibold shadow-md/30 bg-chart-3 rounded-sm mt-6">Book Your Free Strategy Call </Button>
                </div>
            </div>

            <div className="py-20">
                <div className="space-y-12 mx-auto max-w-[1348px] px-4">
                    <div className="space-y-16">
                        <p className="text-center text-4xl font-bold capitalize">{data.threeSec.head}</p>
                        <div className="flex justify-between pr-20">
                            <div className="space-y-4">
                                <p className="text-xl font-semibold">Bookkeeping & Reconciliation:</p>
                                {data.threeSec.topics.left1.map((point, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>
                            <Image src="/indusec3/1.svg" alt="" width={361.83} height={280} />
                        </div>
                        <div className="flex justify-between pl-20">                            
                            <Image src="/indusec3/2.svg" alt="" width={336.14} height={280} />
                            <div className="space-y-4">
                                <p className="text-xl font-semibold">Payroll Management:</p>
                                {data.threeSec.topics.right1.map((point, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between pr-20">
                            <div className="space-y-4">
                                <p className="text-xl font-semibold">Accounts Receivable Management:</p>
                                {data.threeSec.topics.left2.map((point, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>
                            <Image src="/indusec3/3.svg" alt="" width={354.12} height={280} />
                        </div>
                        <div className="flex justify-between pl-20">                            
                            <Image src="/indusec3/4.svg" alt="" width={354.34} height={280} />
                            <div className="space-y-4">
                                <p className="text-xl font-semibold">Accounts Payable Management:</p>
                                {data.threeSec.topics.right2.map((point, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between pr-20">
                            <div className="space-y-4">
                                <p className="text-xl font-semibold">Month-End Closures:</p>
                                {data.threeSec.topics.left3.map((point, i) => (
                                    <div key={i} className="flex gap-4">
                                        <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>
                            <Image src="/indusec3/5.svg" alt="" width={434.69} height={248.54} />
                        </div>
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
                            url('/industry-sec-bg.png')
                            `,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="space-y-6 mx-auto max-w-[1348px] text-chart-4">
                    <div className="space-y-4 max-w-3xl pr-20 text-lg">
                        <p className="text-4xl font-bold capitalize">Looking for a better way to handle your finances?</p>
                        {data.midPhoto.para.map((par, i) => (
                            <p key={i}>{par}</p>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <Button className="h-full cursor-pointer text-md uppercase p-4 px-8 font-semibold shadow-md/30 bg-chart-5 rounded-sm mt-6">Book Your Free Finance Strategy Call</Button>
                        <p className="font-semibold italic text-[#FBBC05]">{data.midPhoto.info}</p>
                    </div>
                </div>
            </div>

            <div className="pt-20 pb-10">
                <div className="mx-auto max-w-[1348px] space-y-8">
                    <p className="text-4xl font-bold capitalize text-center">What You Get Every Month</p>
                    <div>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full px-32"
                        >
                            {data.getMonth.map((item) => (
                                <AccordionItem key={item.id} value={item.id}>
                                    <AccordionTrigger className="transition-opacity duration-200 hover:no-underline">
                                        <div className="">
                                            <div className="font-medium sm:py-1 lg:py-2 lg:text-xl">
                                                {item.head}
                                            </div>
                                            <p className="text-lg font-normal">{item.subhead}</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="sm:mb-1 lg:mb-2">
                                        <div className="space-y-4">
                                            {item.info.map((para, i) => (
                                                <p className="text-lg" key={i}>{para}</p>
                                            ))}
                                            <div className="space-y-4">
                                                <p className="text-lg font-bold">Use this to:</p>
                                                {item.points?.map((point, i) => (
                                                    <div className="flex gap-2 items-center" key={i}>
                                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                        <p className="text-lg">{point}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>

            <PricingPage />

            <div className="bg-chart-4">
                <div className="py-20 bg-[linear-gradient(to_bottom,_#012E63_60%,_transparent_0%)] text-chart-4">
                    <div className="space-y-12 mx-auto max-w-[1348px]">
                        <div className="text-center space-y-4">
                            <p className="text-5xl font-bold capitalize">How our Process Works</p>
                            <p className="text-xl font-normal">{data.indusWork.info}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                            {data.indusWork.card.map((box, i) => (
                                <div key={i} className="p-8 bg-white rounded-md space-y-6 shadow-md">
                                    <div className="relative flex justify-center">
                                        <div className="absolute top-0 left-0 bg-chart-3 p-3 rounded-sm">
                                            0{box.serial}
                                        </div>
                                        <Image src={`/indusWork/${box.img}`} alt={box.head} width={206.24} height={153} />
                                    </div>
                                    <div className="text-black space-y-2 text-center">
                                        <p className="text-xl font-semibold">{box.head}</p>
                                        <p className="text-md">{box.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="py-20 bg-[linear-gradient(to_left,_#E3F2FD_25%,_transparent_0%)]">
                    <div className="space-y-8 mx-auto max-w-[1348px] flex gap-10 justify-between">
                        <div className="max-w-4xl">
                            <div className="space-y-6">
                                <p className="text-4xl font-bold capitalize">Why Trust Trueledgr for Outsourcing Bookkeeping & Accounting Services?</p>
                                <div className="mt-6 space-y-4">
                                    <p className="font-semibold text-xl">{data.sixSec.subhead}</p>
                                    <p className="text-md">{data.sixSec.info}</p>
                                </div>
                                <div className="space-y-8">
                                    {data.sixSec.points.map((p, i) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <Image src={"/right-tick.svg"} alt="" width={22} height={22} className="mt-2" />
                                            <div className="space-y-2">
                                                <p className="text-xl font-semibold">{p.head}</p>
                                                <p className="text-md">{p.info}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button className="h-full cursor-pointer text-md uppercase p-4 px-12 font-semibold shadow-md/30 bg-chart-3 rounded-sm mt-6">Book Your Free Call</Button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="p-8 py-24 rounded-4xl shadow-xl bg-white">
                                <Image src={"/trustTrue.svg"} alt="" width={500} height={500} />
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
                            {data.faqs.map((item) => (
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

        </div>
    )
}

export default IndustryPage