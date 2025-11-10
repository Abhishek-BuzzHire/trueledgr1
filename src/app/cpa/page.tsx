import CpaHeroSec from "@/components/CpaHeroSec"
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
        q: "Why should CPA firms consider offshore support with Trueledger?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "2",
        q: "What services can CPA firms outsource to Trueledger?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "3",
        q: "How is Trueledger different from other offshore accounting providers?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "4",
        q: "How does Trueledger ensure data security for CPA firms?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "5",
        q: "Can Trueledger integrate with my firm’s existing tools?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "6",
        q: "How quickly can we get started with offshore staffing?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "7",
        q: "Who manages the offshore team?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "8",
        q: "How does communication work across time zones?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "9",
        q: "What qualifications do Trueledger offshore accountants have?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "10",
        q: "Can CPA firms scale up or down based on workload?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "11",
        q: "Does outsourcing affect client confidentiality and compliance?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },
    {
        id: "12",
        q: "How much does offshore staffing with Trueledger cost?",
        a: "CPA firms face rising costs, talent shortages, and seasonal workload spikes. Offshore support with Trueledger helps firms cut costs by up to 60%, reduce hiring headaches, and free their top talent to focus on high-value client advisory instead of routine reconciliations.",
    },

]

const secSev: { head: string, info: string, tools: string }[] = [
    {
        head: "Bank-Grade Encryption - In Transit & At Rest",
        info: "All financial data is protected using AES-256 and SSL/TLS encryption - whether it’s stored, emailed, or shared",
        tools: "Zoho WorkDrive, Zoho Mail, HTTPS-secured systems",
    },
    {
        head: "Strict Access Controls with 2FA & Vaults",
        info: "Only assigned team members can access specific client files - nothing more. Every login requires 2FA and all passwords are stored in encrypted vaults",
        tools: "Zoho Vault, Role-Based Access, IP/Device Restrictions",
    },
    {
        head: "Logs, Audits & Real-Time Monitoring",
        info: "We monitor every access log and conduct regular internal reviews. Security audits are done in partnership with CERT-IN empanelled cybersecurity firms",
        tools: "SecureLayer7, Zoho Admin Logs, Audit Reports",
    },
    {
        head: "Daily Backups & Disaster Recovery",
        info: "Client data is backed up automatically every day. In case of accidental loss or breach, we can restore operations within hours",
        tools: "Acronis Backup, Zoho WorkDrive Restore, Local Redundancy",
    },
    {
        head: "Trained Staff. Documented SOPs. Zero Guesswork",
        info: "Every team member is trained in U.S. CPA confidentiality standards, phishing detection, and secure",
        tools: "With logs and SOP updates tracked quarterly",
    },
]

const sixSec: { num: string, head: string, info: string }[] = [
    {
        num: "1",
        head: "Resume Screening",
        info: "Scored across 10 skill levels using CPA-specific benchmarks.",
    },
    {
        num: "2",
        head: "Communication Testing",
        info: "English fluency for email, Zoom, and client-ready delivery.",
    },
    {
        num: "3",
        head: "Technical Assessments",
        info: "Practical tests in accounting, tax, audit, Excel, GAAP.",
    },
    {
        num: "4",
        head: "Timezone Fit",
        info: "USA hours availability (7-9 hours/day for client-facing roles).",
    },
    {
        num: "5",
        head: "Culture Match",
        info: "Professionalism, ownership mindset, & workflow adaptability.",
    },
    {
        num: "6",
        head: "Background Checks",
        info: "Education, criminal, employment, and references verified.",
    },
    {
        num: "7",
        head: "Final Interview",
        info: "Conducted by managers with USA CPA workflow experience. ",
    },
]

const fiveSec: { img: string, head: string, info: string[], w: number, h: number, }[] = [
    {
        img: "1.svg",
        head: "We Build Your Team - Based on Exactly What You Need",
        info: [
            "You tell us the roles, hours, and services - from bookkeeping and payroll to sales tax, 1099s, cleanup, and reporting.",
            "We assemble your offshore team from our pre-vetted talent pool. Your Account Manager handles hiring, onboarding, training, and performance - so you never worry about resumes, interviews, or delays."
        ],
        w: 113.59,
        h: 111.78,
    },
    {
        img: "2.svg",
        head: "Fast, Secure Onboarding - With Full SOP Alignment",
        info: [
            "We take care of tool access, role-based security, reporting formats, and documentation - fully aligned with your firm's existing workflow in QuickBooks, Zoho, UltraTax, or any other stack. Your team is trained and ready to plug in from day one.",
        ],
        w: 150,
        h: 110.63,
    },
    {
        img: "3.svg",
        head: "Review Outputs, Not People - With Full Control",
        info: [
            "A dedicated Account Manager keeps everything on track - from weekly updates and task monitoring to performance reviews and feedback loops",
            "You never have to chase work. You stay in control of what matters: deadlines, output quality, and client delivery.",
        ],
        w: 150,
        h: 111.78,
    },
    {
        img: "4.svg",
        head: "Scale Up or Down - Whenever You Need To",
        info: [
            "Need extra help during tax season? Want to reduce capacity during quieter months",
            "Our flexible engagement model lets you add or reduce roles and hours monthly - with no overhead, no HR hassle, and zero long-term lock-ins.",
        ],
        w: 110.67,
        h: 110.98,
    },
]

const fourSec: { img: string, head: string, info: string }[] = [
    {
        img: "1.svg",
        head: "Bookkeeping & Reconciliation",
        info: "Daily books, GL updates, bank recs, and month-end closes - accurate, organized, and always aligned with your CPA workflows.",
    },
    {
        img: "2.svg",
        head: "Sales Tax Filing Across States",
        info: "From identifying state tax obligations to filing accurate multi-state returns, we manage it all - on time, every time.",
    },
    {
        img: "3.svg",
        head: "Payroll Processing & Compliance",
        info: "We manage end-to-end payroll, filings, and audit readiness - delivering compliant accurate, on time & fully compliant with state and federal laws.",
    },
    {
        img: "4.svg",
        head: "1099 Form Filing & Compliance",
        info: "We track contractor payments, generate error-free 1099s, and e-file directly with the IRS - fast, accurate, and compliant.",
    },
    {
        img: "5.svg",
        head: "Audit-Ready Cleanup & Support",
        info: "We clean up books, prepare schedules, and compile reports - keeping your firm audit-ready without burdening your internal team.",
    },
    {
        img: "6.svg",
        head: "Advisory-Grade Management Reporting",
        info: "We build budgeting forecasts, cash flow reports, P&Ls, margin dashboards, and KPI trackers - so your firm delivers deeper advisory insights",
    },
]

const secThree: { img: string, head: string, info: string[], w: number, h: number }[] = [
    {
        img: "1.svg",
        head: "Enterprise-Grade Data Security - ISO-Aligned",
        info: [
            "We treat client confidentiality with the seriousness it deserves",
            "Your financial data is protected using AES-256 encryption, two-factor authentication, secure password vaults, and strict access controls in full alignment with ISO 27001 principles. We maintain daily backups, monitor activity logs, and conduct periodic security audits with CERT-IN-empanelled partners to ensure audit-readiness and business continuity.",
        ],
        w: 309.84,
        h: 150,
    },
    {
        img: "2.svg",
        head: "CPA-Level Accuracy - Backed by SOPs and 3-Layer Review",
        info: [
            "We follow rigorously documented SOPs, CPA-style review checklists, and a three-layer review process on every deliverable.	Each engagement is staffed with the US trained professionals who are not just technically sound - they're culturally aligned with how CPA firms operate. They understand the pace, pressure, and precision required during tax season and know what “review-ready” means to a CPA",
        ],
        w: 206.22,
        h: 180,
    },
    {
        img: "3.svg",
        head: "USA Hours, Proactive Communication",
        info: [
            "You'll always be in sync.",
            "Our teams operate within your working hours and communicate via email, Zoom, and Google Meet - led by a dedicated point of contact. No missed updates, no language barriers, and no offshore ambiguity - just reliable, transparent communication you can count on",
        ],
        w: 265.94,
        h: 180,
    },
    {
        img: "4.svg",
        head: "Seamless Integration with Your Firm's Workflow & Tools",
        info: [
            "We adapt to your existing accounting stack - QuickBooks, Xero, UltraTax, Zoho, and more.",
            "No need to retrain staff or migrate systems. Our onboarding ensures your firm experiences zero disruption and 100% compatibility from day one.",
        ],
        w: 233.27,
        h: 180,
    },
    {
        img: "5.svg",
        head: "Your Offshore Team - Built, Led, and Quality-Controlled by One Senior POC",
        info: [
            "Every engagement is led by a senior Account Manager responsible for team training, weekly performance check-ins, and quality control",
            "We assemble a dedicated offshore team under them tailored to your needs across bookkeeping, tax prep, financial reporting & analysis, audit support, payroll, and compliance deliverables eliminating the burden of hiring, training, and supervision."
        ],
        w: 227.05,
        h: 180,
    },
    {
        img: "6.svg",
        head: "Only the Top 5% Pass Our 7-Layer Talent Vetting System",
        info: [
            "We don't just fill roles - we qualify professionals.",
            "Each team member goes through a 7-step evaluation process including resume screening, English proficiency tests, technical assessments, timezone alignment, culture fit evaluation, background verification, and a final interview by senior managers. Only 1 in 20 candidates makes the cut - ensuring your offshore team starts sharp, trustworthy, and fully aligned with your standards.",
        ],
        w: 233.27,
        h: 180,
    },
]

const secTwo: { head: string, info: string[] }[] = [
    {
        head: "Costs Are Rising, Margins Are Falling",
        info: [
            "In-house teams come with heavy fixed costs - salaries, benefits, licenses, regular training, and overhead that adds up fast.",
            "Outsourcing for CPA firm converts these into variable costs, helping CPA firms cut expenses by up to 60% while maintaining accuracy, timeliness, and control. The result? Stronger margins, fewer surprises, and more room to reinvest in growth and client service.",
        ]
    },
    {
        head: "Hiring & Retention Are Constant Struggles",
        info: [
            "Good accountants are hard to find - and even harder to keep.",
            "Finding and retaining skilled accountants is harder than ever-especially during the tax season CPAs and CPA firms struggle to build stable, skilled teams. Outsourcing solves this with pre-vetted, U.S.-trained professionals who can plug into your firm's workflow without long onboarding or hiring delays.",
        ]
    },
    {
        head: "Your Team Is Buried in Low-Value Tasks",
        info: [
            "Reconciliations. Cleanup. Payroll runs.",
            "These aren't the tasks that grow your firm - but they consume the hours that could. By outsourcing daily bookkeeping, accounting and admin, CPAs and CPA firms keep their internal team focused on strategy, client conversations, advisories and consultancies with value-added services that actually drive firm growth.",
        ]
    },
    {
        head: "You Can't Scale Up or Down When You Need To",
        info: [
            "CPA workloads shift with seasons, clients, and deadlines — but in-house teams can't scale that easily.",
            "Outsourcing for CPA firms gives you the freedom to ramp capacity up or down based on demand, without the stress of hiring, layoffs, or burnout. It's flexible support when you need it - without long-term risk or cost.",
        ]
    },
]

const CpaPage = () => {
    return (
        <>
            <CpaHeroSec head="The Offshore Partner CPA's Trust For Accuracy, Security, and Scale" info={["Lower costs by up to 60% - without sacrificing quality, timelines, or client trust.", "Our U.S.-trained team delivers accurate books, payroll, and reporting tailored for CPA firms, with secure vaults, 2FA, and daily backups to keep your data and reputation safe."]} img="cpahero.svg" />

            <div className="py-20" style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url('/why-choose-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="space-y-12 mx-auto max-w-[1348px]">
                    <div className="space-y-4">
                        <p className="text-4xl font-bold capitalize">Why More CPA Firms Choosing Offshore Support?</p>
                        <div className="text-md">
                            <p>Margins are shrinking. Deadlines are piling up. Your top talent is stuck reconciling, not advising.</p>
                            <p>Offshore bookkeeping & accounting for CPA firms lifts the load - so your firm can move faster, grow smarter, and stay focused on what actually matters.</p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        {secTwo.map((sec, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <Image className="mt-1" src={"/right-tick.svg"} alt="" width={48} height={48} />
                                <div className="space-y-2">
                                    <p className="text-xl font-semibold">{sec.head}</p>
                                    <p className="text-lg">{sec.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="mx-auto max-w-[1348px] space-y-12">
                    <div className="text-center space-y-4">
                        <p className="text-4xl font-bold">Why Top CPA Firms Trust Trueledger as Their Offshore Extension?</p>
                        <p className="text-md px-60">We deliver the best offshore bookkeeping & accounting for CPA firms. More than an outsourcing vendor, we're a secure, compliant, and high-performance extension of your accounting practice.</p>
                    </div>
                    <div className="space-y-8">
                        {secThree.map((card, i) => (
                            <div key={i} className="bg-chart-4 p-18 flex justify-between items-center rounded-md">
                                <Image src={`/cpa/1/${card.img}`} alt="" width={card.w} height={card.h} />
                                <div className="space-y-2 max-w-3xl">
                                    <p className="text-xl font-semibold">{card.head}</p>
                                    {card.info.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20 bg-chart-2 text-white">
                <div className="mx-auto max-w-[1348px] space-y-8">
                    <div className="text-center space-y-4 px-24">
                        <p className="text-4xl font-bold capitalize">Full-Service Financial Support - Without Hiring a Full Team</p>
                        <p className="text-xl font-semibold">Here's how we help CPA firms streamline operations and increase advisory capacity across compliance, cleanup, and cashflow visibility with offshore bookkeeping & accounting for CPA Firms.</p>
                    </div>
                    <div className="grid grid-cols-3 text-black gap-8">
                        {fourSec.map((card, i) => (
                            <div key={i} className="p-8 bg-white rounded-lg space-y-4">
                                <Image src={`/cpa/2/${card.img}`} alt="" width={72} height={72} />
                                <p className="text-2xl font-semibold">{card.head}</p>
                                <p className="">{card.info}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-16">
                        <Button className="h-full cursor-pointer text-md uppercase p-4 px-16 font-semibold shadow-md/30 bg-chart-3 rounded-sm ">Request Full Services Brochure</Button>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="mx-auto max-w-[1348px] space-y-8">
                    <div className="text-center space-y-4">
                        <p className="text-4xl font-bold">How Offshore with Trueledgr Works - No Guesswork, No Delays</p>
                        <p className="text-xl font-semibold">Simple, Secure, and Scalable - Built for CPA Firms</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {fiveSec.map((card, i) => (
                            <div key={i} className="border rounded-md border-gray-200/70 p-10 space-y-4">
                                <Image src={`/cpa/3/${card.img}`} alt="" width={card.w} height={card.h} />
                                <p className="text-xl font-semibold">{card.head}</p>
                                <div className="space-y-2">
                                    {card.info.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20 bg-chart-1">
                <div className="mx-auto max-w-[1348px] space-y-8">
                    <div className="text-center space-y-4">
                        <p className="text-4xl font-bold">Our Talent Doesn't Just Pass -It's Filtered, Trained, and CPA Ready</p>
                        <p className="text-md">We don't just hire fast — we hire right. Every Trueledgr team member goes through a rigorous 7-step screening process to ensure they're CPA-ready from day one.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {sixSec.map((card, i) => (
                            <div key={i} className="bg-white p-8 shadow-lg rounded-md text-center space-y-4 max-w-xs">
                                <div className="flex justify-center">
                                    <div className="text-xl text-white w-18 h-18 p-3 bg-chart-3 rounded-full border-10 border-chart-1 font-semibold">{card.num}</div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xl font-semibold">{card.head}</p>
                                    <p className="text-md">{card.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-20">
                <div className="mx-auto max-w-[1348px] space-y-8">
                    <div className="space-y-2 text-lg">
                        <p className="text-4xl font-bold">Trueledgr Data Security Framework for CPA Firms</p>
                        <p className="text-lg font-semibold">Bank-Grade Security, CPA-Level Discipline - Built into Every System</p>
                        <p>Because trust is earned - and protected daily.</p>
                        <p>To build long-term trust with CPA firms, Trueledgr follows a multi-layered security strategy that ensures data confidentiality, minimizes risk, and aligns with ISO 27001 principles and practices. Every piece of sensitive client data is handled with the highest level of security, across both digital and physical environments.</p>
                    </div>
                    <div className="flex gap-20 items-end gap-8 justify-between">
                        <div className="max-w-2xl space-y-8">
                            {secSev.map((p, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <Image className="mt-1" src={"/right-tick.svg"} alt="" width={32} height={32} />
                                    <div className="space-y-2">
                                        <p className="text-xl font-semibold">{p.head}</p>
                                        <p className="text-md">{p.info}</p>
                                        <div className="p-2 mt-3 px-6 bg-chart-4">
                                            <span className="font-bold mr-2">Tools:</span><span>{p.tools}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-30 text-center">
                            <div className="rounded-full bg-chart-4 px-4 py-45 border-l-10 border-[#A2CEEF]">
                                <Image src="/cpa/1/1.svg" alt="" width={400} height={193.65} />
                            </div>
                            <Button className="h-full cursor-pointer text-md uppercase p-4 px-16 shadow-md/30 bg-chart-3 rounded-sm ">Talk to a finanace expert</Button>
                        </div>
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

export default CpaPage;