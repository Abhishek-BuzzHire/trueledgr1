import Image from "next/image"
import { Button } from "./ui/button";

const avatars = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
    "/google.svg",
];

const ServiceHeroSec = () => {
    return (
        <div className='bg-chart-2 flex justify-center py-32 overlay-hidden'>
            <div className="max-w-[1348px] flex gap-16 justify-between items-end">
            <div className="max-w-[790px] bg-chart-4 p-12 rounded-md space-y-8 pr-20">
                <p className="text-5xl/14 font-bold ">Leading <span className="text-chart-3">Bookkeeping</span> Services in the USA</p>
                <div>
                    <p className="text-md">Looking for the best monthly bookkeeping services in the USA?</p>
                    <p>At Trueledgr, we streamline your finances, ensure compliance, and deliver monthly reports with CPA coordination all through reliable, tailored bookkeeping solutions built around your business.</p>
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
                <Button className="p-6 px-12 bg-chart-3 rounded-sm font-normal uppercase text-lg">Book a Free Bookkeeping Consultation</Button>
            </div>
            <div>
                <Image src={"/heroService1.svg"} alt="" width={543.2} height={360.21} />
            </div>
            </div>
        </div>
    )
}

export default ServiceHeroSec