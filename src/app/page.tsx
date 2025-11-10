import HomeHeroSec from "@/components/HomeHeroSec";
import ServiceHeroSec from "@/components/ServiceHeroSec";
import ServicePage from "@/components/ServicePage";
import TestimonialSec from "@/components/TestimonialSec";
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
      <div className="pt-12">
        <div className="space-y-8 mx-auto max-w-[1348px] flex gap-8 justify-between">
          <div className="max-w-3xl">
            <div className="space-y-4">
              <p className="text-4xl font-bold capitalize">Trueledgr LaunchPad: a simpler way to manage all your financial needs</p>
              <div className="mt-6 space-y-2">
                <p className="text-xl">You've seen what we do - now imagine getting it all, effortlessly handled in one place.</p>
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
          <Image src={"/homelaunchpad.svg"} alt="" width={480.05} height={484.21} />
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
