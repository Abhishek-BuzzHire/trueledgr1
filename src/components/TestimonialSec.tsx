"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const avatars = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
    "/google.svg",
];

const testimonials = [
    {
        name: "Genevieve",
        role: "Managing Director",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Trueledgr's bookkeeping and custom reports have transformed our business. They manage landed costs, commissions, and reconciliations seamlessly, giving us financial clarity and confidence to scale Kiva Stones without blind spots.",
    },
    {
        name: "Alex Carter",
        role: "Operations Head",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Trueledgr's bookkeeping and custom reports have transformed our business. They manage landed costs, commissions, and reconciliations seamlessly, giving us financial clarity and confidence to scale Kiva Stones without blind spots.",
    },
    {
        name: "Sophia Miller",
        role: "Finance Lead",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Trueledgr's bookkeeping and custom reports have transformed our business. They manage landed costs, commissions, and reconciliations seamlessly, giving us financial clarity and confidence to scale Kiva Stones without blind spots.",
    },
    {
        name: "Ravi Sharma",
        role: "CEO, BuildCore",
        img: "https://randomuser.me/api/portraits/men/15.jpg",
        text: "Trueledgr's bookkeeping and custom reports have transformed our business. They manage landed costs, commissions, and reconciliations seamlessly, giving us financial clarity and confidence to scale Kiva Stones without blind spots.",
    },
];


const TestimonialSec = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleSlideChange = (index: number) => {
        setCurrent(index);
    };


    return (
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
                    <Link href={"/"}>
                        <Button className="p-6 px-16 bg-chart-3 rounded-sm font-semibold uppercase text-md">View All Feedback</Button>
                    </Link>
                </div>
                <div className="space-y-6 max-w-2xl">
                    <div className="relative bg-white border border-black/10 px-10 overflow-visible transition-all duration-500 rounded-md shadow-md">
                        <Image src={testimonials[current].img} alt={testimonials[current].name} width={100} height={100} className="rounded-full absolute -top-12 left-10" />
                        <div className="pt-24 pb-14 border-b-2 border-chart-3 space-y-6">
                            <p className="italic text-lg">{testimonials[current].text}</p>
                            <div className="space-y-1">
                                <p className="text-2xl font-semibold">{testimonials[current].name}</p>
                                <p>{testimonials[current].role}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleSlideChange(i)}
                            className={`transition-all duration-300 rounded-full ${current === i
                                    ? "w-4 h-4 bg-chart-3"
                                    : "w-3 h-3 bg-chart-3/50 hover:bg-chart-3/70"
                                }`}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TestimonialSec