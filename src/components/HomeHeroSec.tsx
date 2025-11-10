import Image from "next/image"
import { Button } from "./ui/button";

const avatars = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
    "/google.svg",
];

interface HomeHeroSecProps {
    title: string;
    head: string;
    info1: string;
    info: string[];
    img: string;
}

const HomeHeroSec = ({ title, head, info1, info, img }: HomeHeroSecProps) => {
    return (
        <div className='relative bg-chart-2 flex justify-center py-20 overflow-hidden text-chart-4'>
            <div className="absolute bg-[#013D84] size-[1146] rounded-full blur-[200px] -bottom-70 -left-20"></div>
            <div className="max-w-[1348px] flex gap-16 justify-between items-end z-2">
                <div className="max-w-[700px] rounded-md space-y-8 pr-20">
                    <div className="space-y-4">
                        <p className="font-semibold text-2xl">{title}</p>
                        <p className="text-5xl/14 font-bold">{head}</p>
                    </div>
                    <div className="space-y-4">
                        <p>{info1}</p>
                        <div className="space-y-1">
                        {info.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
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
                    <div className="space-y-6">
                        <Button className="p-6 px-12 bg-chart-3 rounded-sm font-semibold uppercase text-lg shadow-md/30">Book a Free finance strategy call</Button>
                        <p className="font-semibold italic text-[#FBBC05]">No credit card required — 100% free, no obligation</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute bg-[#23538B] size-[922] rounded-full blur-[200px] -bottom-90 -right-95 -z-10 "></div>
                    <Image src={`/${img}`} alt={""} width={543.2} height={360.21} className="z-1" />

                </div>
            </div>
        </div>
    )
}

export default HomeHeroSec