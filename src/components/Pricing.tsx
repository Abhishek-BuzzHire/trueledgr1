import { Button } from "./ui/button"

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

const PricingPage = () => {
    return (
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
    )
}

export default PricingPage