import { Button } from "./ui/button"

const Pricing2 = ({ info, word }: { info: string[], word: string }) => {
    return (
        <div className='pb-20'>
            <div className="mx-auto max-w-[1348px] bg-chart-3 flex justify-between items-center p-8 rounded-md gap-8 py-16">
                <div className="space-y-6 text-chart-4">
                    <p className="text-4xl font-bold">Transparent Pricing. Built Around You.</p>
                    <div className="space-y-2 max-w-3xl">
                        {info.map((p, i) => (
                            <p className="text-xl" key={i}>{p}</p>
                        ))}
                    </div>
                </div>
                <div className="space-y-8 bg-white rounded-lg p-8">
                    <div className="text-chart-3 text-center">
                        <span className="text-5xl font-bold">$15/</span><span className="text-2xl font-semibold">Hour</span>
                    </div>
                    <Button className="h-full cursor-pointer text-md uppercase p-4 px-12 font-semibold shadow-md/30 bg-chart-5 rounded-sm mt-6">Book Your Free {word} Consultation</Button>
                </div>
            </div>
        </div>
    )
}

export default Pricing2