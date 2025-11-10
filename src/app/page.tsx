import HomeHeroSec from "@/components/HomeHeroSec";
import ServiceHeroSec from "@/components/ServiceHeroSec";
import ServicePage from "@/components/ServicePage";
import TestimonialSec from "@/components/TestimonialSec";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const secThree: string[] = [
  "Sales are strong, but cash is always tight",
  "Vendors unpaid, clients overdue - collections are stuck",
  "Inventory a black box - no clarity on what's moving or stuck",
  "Still reconciling last quarter, already behind on this one",
  "No reports, no data - every decision feels like a guess",
  "Payroll and tax deadlines always trigger panic mode",
]

const secFour: { img: string, head: string, info: string, link: string, h: number }[] = [
  {
    img: "1.svg",
    head: "Bookkeeping Services",
    info: "We reconcile transactions, close books monthly, and deliver clean CPA-ready reports with custom insights for smarter financial decisions.",
    link: "Get Clean Monthly Books",
    h: 133.1,
  },
  {
    img: "2.svg",
    head: "Catch-Up Bookkeeping",
    info: "Behind months (or years) of bookkeeping? We fix messy records, reconcile everything, and give you stress-free accurate books.",
    link: "Get Caught Up Fast",
    h: 181.63,
  },
  {
    img: "3.svg",
    head: "Receivable & Payable Mangement",
    info: "We manage your entire cash cycle — sending invoices, tracking bills, chasing payments, and handling vendors for smooth operations.",
    link: "Fix My Cash Flow",
    h: 136,
  },
  {
    img: "4.svg",
    head: "Payroll Services",
    info: "We run payroll on time, track PTO and commissions, handle filings, and keep your business compliant without any stress.",
    link: "Run Payroll Without the Panic",
    h: 143.28,
  },
]

const secFive: { head: string, info: string }[] = [
  {
    head: "Transparent, Pay-As-You-Go Model",
    info: "Pay only for the time we work",
  },
  {
    head: "15-Day Risk-Free Trial",
    info: "Full service, zero risk",
  },
  {
    head: "Custom KPI Dashboards",
    info: "To track cash flow, burn, and key metrics",
  },
  {
    head: "CPA-Level Accuracy With Triple Review",
    info: "SOPs, checklists, and a 3-step review process",
  },
  {
    head: "Access to a Vetted Talent Pool",
    info: "Whenever you need them",
  },
  {
    head: "Enterprise-Grade Data Security",
    info: "With encrypted files and limited access",
  },
]

const secEight: { num: string, head: string, info: string }[] = [
  {
    num: "1",
    head: "Stone Distributors",
    info: "Track landed costs, inventory ageing, and sales commissions.",
  },
  {
    num: "2",
    head: "Stone Fabricators",
    info: "Manage holds, orders, showroom sales, and contractor billing.",
  },
  {
    num: "3",
    head: "Architects & Interior Designers",
    info: "Milestone billing, Project-wise expense tracking, WIP analysis, and vendor payout alignment.",
  },
  {
    num: "4",
    head: "CPAs & CPA Firms",
    info: "Milestone billing, vendor coordination, and materials reconciliation.",
  },
  {
    num: "5",
    head: "SMBs",
    info: "Payroll, AR/AP, cash flow and kpi tracking everything is clean and compliant.",
  },
  {
    num: "6",
    head: "Startups",
    info: "Payroll, AR/AP, cash flow and kpi tracking everything is clean and compliant.",
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

const offsoreWork: { serial: string, img: string, head: string, info: string }[] = [
  {
    serial: "1",
    img: "1.svg",
    head: "Onboarding Made Simple",
    info: "We kick things off with a quick call, connect your accounting tools, and get your books fully set up - fast, secure, and stress-free.",
  },
  {
    serial: "2",
    img: "2.svg",
    head: "Weekly Execution",
    info: "Each week, we record transactions, reconcile accounts, and manage your AR/AP - while sharing updates so you stay in the loop.",
  },
  {
    serial: "3",
    img: "3.svg",
    head: "Monthly Reports & CPA-Ready Books",
    info: "By the end of each month, you get clean P&L, Balance Sheet, Cash Flow, and AR/AP reports — with insights you can use.",
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

export default function Home() {

  return (
    <>
      <HomeHeroSec title="For Accuracy, Security, and Scale." head="Your Trusted Offshore Finance Partner" info1="Clean books, AR/AP, payroll, and decision-ready reports — delivered by a pre-vetted finance pod at a fraction of U.S. costs, with enterprise-grade security and CPA-level accuracy." info={["No long contracts. Transparent pricing.", "Try us risk-free - 15 days free trial with no obligation."]} img="homehero.svg" />
      <div className="py-20">
        <div className="space-y-8  mx-auto max-w-[1348px]">
          <div className="text-center space-y-4">
            <p className="text-5xl font-bold capitalize">Proven Performance. Trusted by Businesses Across the USA</p>
            <p className="text-xl font-semibold">From stone distributors, architects, and growing SMBs to established CPA firms, Trueledgr is the offshore finance partner trusted to deliver accurate books, compliant payroll, financial reports and smooth AR/AP management. Backed by real client results, CPA-level processes, enterprise-grade security, and a growing team of pre-vetted finance professionals - you can count on us.</p>
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
        <div className="mx-auto max-w-[1348px]">
          <div className="flex gap-40 justify-between items-center">
            <Image src="/home/sec3.svg" alt="" width={500} height={441.23} />
            <div className="space-y-6 max-w-3xl">
              <div className="space-y-4">
                <p className="text-4xl font-bold">Tired of Chasing Numbers Instead of Growth?</p>
                <p className="text-xl fontt-semibold">Let's be honest -running a growing business means the financial mess piles up fast.</p>
              </div>
              <div className="space-y-4">
                <p>You're chasing growth… but your books are chasing you.</p>
                <div className="space-y-4">
                  {secThree.map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                      <p className="text-lg font-semibold">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-lg mt-8">And the worst part? You're still fixing spreadsheets at midnight instead of building your business.</p>
              <Button className="h-full cursor-pointer text-md uppercase p-4 px-16 shadow-md/30 bg-chart-3 rounded-sm mt-6">Let's Clean This Up - Book Your Free Call</Button>
            </div>
          </div>
        </div>

      </div>

      <div className="py-20 bg-chart-2 text-white">
        <div className="mx-auto max-w-[1348px] space-y-20">
          <p className=" text-center text-4xl font-bold capitalize">What we Do?</p>
          <div className="grid grid-cols-2 gap-8">
            {secFour.map((card, i) => (
              <div key={i} className="bg-white rounded-lg p-8 space-y-4 text-black">
                <Image src={`/home/2/${card.img}`} alt="" width={172} height={card.h} />
                <p className="text-xl font-semibold">{card.head}</p>
                <p className="text-lg">{card.info}</p>
                <Link href={"/"}>
                  <div className="flex gap-4">
                    <p className="text-chart-3 font-semibold text-sm">{card.link}</p>
                    <Image src="/home/arrowRight.svg" alt="" width={12} height={10} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="space-y-8 mx-auto max-w-[1348px]">
          <div className="space-y-4">
            <div className="max-w-4xl">
              <p className="text-4xl font-bold capitalize">Trueledgr LaunchPad: a simpler way to manage all your financial needs</p>
              <div className="mt-6 space-y-3 text-md">
                <p className="text-xl">You've seen what we do - now imagine getting it all, effortlessly handled in one place.</p>
                <p>If you're in your first year of business, this is the smartest time to set up your finances right - before the spreadsheets pile up, vendors multiply, or you lose sight of your cash flow.</p>
                <p><span className="text-xl font-bold"> Trueledgr LaunchPad </span>isn't just monthly bookkeeping - it's your complete finance system: <br /> bookkeeping, AR/AP, payroll, and reporting, all handled by a dedicated finance pod that works like your internal team.</p>
              </div>
            </div>
            <div className="flex gap-8 justify-between items-center">
              <div className="space-y-4">
                <p className="text-lg font-bold capitalize">LaunchPad Features at a Glance:</p>
                <div className="space-y-6">
                  {secFive.map((p, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <Image src={"/right-tick.svg"} alt="" width={22} height={22} className="mt-1" />
                      <div className="space-y-1">
                        <p className="text-lg font-semibold">{p.head}</p>
                        <p className="text-md">{p.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mt-8">
                  <p className="text-lg">Ready to simplify your finances and grow with confidence?</p>
                  <p className="text-md italic font-semibold">Limited spots available - don't miss out.</p>
                </div>
              </div>
              <div className="space-y-8">
                <Image src={"/homelaunchpad.svg"} alt="" width={480.05} height={484.21} />
                <div className="space-y-4 text-center">
                  <p className="text-lg">Choose your business type below to see the tailored LaunchPad details:</p>
                  <div className="flex gap-8">
                    <Button className="h-full cursor-pointer text-md uppercase p-4 px-16 font-semibold shadow-md/30 bg-chart-5 rounded-sm ">Startup founders</Button>
                    <Button className="h-full cursor-pointer text-md uppercase p-4 px-28 font-semibold shadow-md/30 bg-chart-3 rounded-sm ">SMBS</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-chart-4">
        <div className="max-w-[1348px] mx-auto space-y-16">
          <p className="font-bold text-4xl text-center">Why Trust Trueledgr as Offshore Extension?</p>
          <div className="space-y-8">
            <div className="flex gap-8 ">
              <div className="bg-white p-2 rounded-md">
                <div className="p-12 bg-white border border-gray-100 rounded-md space-y-4">
                  <p className="text-xl font-semibold">Accuracy That Drives Growth</p>
                  <p className="pr-32">Clean books, on-time reports, and every transaction reconciled — so your decisions are based on facts, not guesswork</p>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                      <p>Monthly reconciliation, reports & key metrics</p>
                    </div>
                    <div className="flex gap-4">
                      <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                      <p>AR/AP ageing updatess</p>
                    </div>
                    <div className="flex gap-4">
                      <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                      <p>Inventory, payroll, and sales tax records all aligned</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-chart-3 rounded-md p-2 min-w-lg">
                <div className="p-8 bg-white rounded-md flex justify-center">
                  <Image src="/home/1/1.svg" alt="" width={250} height={250} />
                </div>
              </div>
            </div>
            <div className="flex gap-8 ">
              <div className="border border-chart-3 rounded-md p-2 min-w-lg">
                <div className="p-8 bg-white rounded-md flex justify-center">
                  <Image src="/home/1/3.svg" alt="" width={250} height={250} />
                </div>
              </div>
              <div className="bg-white p-2 rounded-md">
                <div className="p-12 bg-white border border-gray-100 rounded-md space-y-4">
                  <p className="text-xl font-semibold">Pre-Vetted Experts, Backed by Process</p>
                  <p className="pr-32">Work with a pre-vetted finance pod led by a dedicated account manager — so you get clear answers, weekly updates, and zero miscommunication</p>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                      <p>Dedicated finance team with expert account manager</p>
                    </div>
                    <div className="flex gap-4">
                      <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                      <p>Each member vetted through a 7-step process</p>
                    </div>
                    <div className="flex gap-4">
                      <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                      <p>Every report passes a 3-step verification review before delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8 ">
              <div className="bg-white p-2 rounded-md">
                <div className="p-12 bg-white border border-gray-100 rounded-md space-y-4">
                  <p className="text-xl font-semibold">Secure. Transparent. Always On Time.</p>
                  <p className="pr-32">Your financial data and trust are protected at every step. No surprises, no last-minute rush</p>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                      <p>Flat, fair pricing</p>
                    </div>
                    <div className="flex gap-4">
                      <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                      <p>Audit-ready deliverables</p>
                    </div>
                    <div className="flex gap-4">
                      <Image className="mt-1" src={"/right-tick.svg"} alt="" width={18} height={18} />
                      <p>Secure with 256-bit encryption, strict 2FA, ISO-aligned systems, and regular compliance audits</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-chart-3 rounded-md p-2 min-w-lg">
                <div className="p-8 bg-white rounded-md flex justify-center">
                  <Image src="/home/1/3.svg" alt="" width={250} height={250} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20">
        <div className="space-y-8 mx-auto max-w-[1348px]">
          <div className="flex mt-24 p-12 py-10 gap-20 bg-chart-3 text-chart-4 rounded-md items-center justify-center">
            <div className="space-y-4">
              <p className="text-4xl font-bold capitalize">Ready to Stop Worrying About Your Books?</p>
              <p className="text-xl font-semibold">You'll walk away with insights you can use right away. No hard sell. No strings attached.</p>
            </div>
            <Button className="h-full cursor-pointer text-md uppercase p-6 px-16 font-semibold shadow-md/30 bg-chart-5 rounded-sm ">Book a Free review call</Button>
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
                  <div className="text-xl text-white w-20 h-20 flex justify-center items-center bg-chart-3 rounded-full border-10 border-chart-1 font-semibold">{card.num}</div>
                </div>
                <div className="space-y-20">
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
            <p className="text-4xl font-bold">Trueledgr Data Security Framework</p>
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

      <div className="py-20 bg-chart-4">
        <div className="mx-auto max-w-[1348px] space-y-12">
          <div className="flex justify-between gap-8">
            <div className="space-y-4 min-w-md">
              <p className="text-chart-2 text-2xl font-semibold capitalize">Who We Serve</p>
              <p className="text-4xl font-bold">Industries We Serve</p>
            </div>
            <div className="space-y-4">
              <p className="text-xl font-semibold">At Trueledgr, we go beyond bookkeeping, payroll, and taxes. We tailor every report and metric to your industry's financial workflows - so you can move forward with clarity</p>
              <p className="text-lg">Here's how we tailor our services by industry:</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {secEight.map((card, i) => (
              <div key={i} className="bg-white p-8 shadow-lg rounded-md space-y-4">
                <div className="text-xl text-white w-18 h-18 flex justify-center items-center bg-chart-3 rounded-full border-10 border-chart-1 font-semibold">{card.num}</div>
                <p className="text-xl font-semibold">{card.head}</p>
                <p className="">{card.info}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button className="h-full cursor-pointer text-md uppercase p-4 px-16 shadow-md/30 bg-chart-3 rounded-sm ">Like Industries</Button>
          </div>
        </div>
      </div>

      <div className="bg-chart-4">
        <div className="py-20 bg-[linear-gradient(to_bottom,_#012E63_60%,_transparent_0%)] text-chart-4">
          <div className="space-y-12 mx-auto max-w-[1348px]">
            <div className="text-center space-y-4">
              <p className="text-4xl font-bold capitalize">How Offshore with Trueledgr Works</p>
              <p className="text-xl font-normal">From setup to strategy, we slot seamlessly into your workflow.</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {offsoreWork.map((box, i) => (
                <div key={i} className="p-8 bg-white rounded-md space-y-6 shadow-md">
                  <div className="relative flex justify-center">
                    <div className="absolute top-0 left-0 bg-chart-3 p-3 rounded-sm">
                      0{box.serial}
                    </div>
                    <Image src={`/solWork/${box.img}`} alt={box.head} width={206.24} height={153} />
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
  );
}
