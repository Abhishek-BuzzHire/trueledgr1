import Image from "next/image";
import HomeHeroSec from "./HomeHeroSec";
import { Button } from "./ui/button";

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

const HomePage = () => {
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
        </>
    );
}

export default HomePage;