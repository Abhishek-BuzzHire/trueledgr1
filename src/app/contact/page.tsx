import { Button } from "@/components/ui/button";
import Image from "next/image";

const ContactPage = () => {
    return (
        <>
            <div className="flex justify-center py-24 text-center bg-chart-2 text-chart-4"
                style={{
                    backgroundImage: "linear-gradient(rgba(7,63,129,0.9), rgba(7,63,129,0.9)), url('/aboutbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <p className="text-5xl font-bold capitalize">Contact Us</p>
            </div>
            <div className="pt-20">
                <div className="mx-auto max-w-[1348px]">
                    <div className="flex justify-between items-start">
                        <div className="space-y-4 max-w-2xl">
                            <p className="text-4xl max-w-xl capitalize font-bold">Let's Talk Finance - Without the Jargon</p>
                            <p>At Trueledgr, we keep it simple: real conversations, real clarity, and zero pressure. Whether you're a founder, an SMB owner, or a CPA firm - if finances are slowing you down, let's fix it together.</p>
                            <p className="text-xl font-semibold">Book a Free Consultation</p>
                            <p>Schedule a quick, no-pressure call with our team. We'll review your books, spot blind spots, and give you actionable insights - even if you don't sign up</p>
                            <div className="space-y-8 mt-8">
                                <div className="flex items-start gap-8">
                                    <Image src="/contact/1.svg" alt="" width={72} height={72} />
                                    <div className="">
                                        <p className="text-gray-500 text-lg">General Inquiries</p>
                                        <p className="text-2xl font-semibold">info@trueledgr.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-8">
                                    <Image src="/contact/3.svg" alt="" width={72} height={72} />
                                    <div className="">
                                        <p className="text-gray-500 text-lg">Partnerships / CPA Collaboration</p>
                                        <p className="text-2xl font-semibold">partners@trueledgr.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-8">
                                    <Image src="/contact/2.svg" alt="" width={72} height={72} />
                                    <div className="space-y-3">
                                        <p className="text-gray-500 text-lg">Our Offices</p>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <Image src="/contact/india.svg" alt="" width={32} height={24} />
                                                <p className="uppercase text-2xl font-bold">INDIA</p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-xl font-semibold">Jaipur:</p>
                                                <p className="text-lg font-light">The Elysiun, 506, Swage Farm Rd, Jaipur - 302019, Rajasthan</p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-xl font-semibold">Gurugram:</p>
                                                <p className="text-lg font-light">B - 681, 2nd Floor, Sushant Lok-1, Sector - 43, Gurugram - 122022</p>
                                            </div>
                                        </div>
                                        <div className="space-y-6 mt-8">
                                            <div className="flex gap-4">
                                                <Image src="/contact/usa.svg" alt="" width={36} height={24} />
                                                <p className="uppercase text-2xl font-bold">USA</p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-xl font-semibold">Florida:</p>
                                                <p className="text-lg font-light">623 Edgebrook Lane, West Palm Beach, FL 33411, United States</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-chart-1 px-10 py-24 rounded-3xl">
                            <Image src="/contacthero.svg" alt="" width={500} height={374.25} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-20">
                <div className="space-y-8 mx-auto max-w-[1348px]">
                    <div className="flex mt-24 p-12 py-10 gap-20 bg-chart-3 text-chart-4 rounded-lg items-center justify-between shadow-lg/30">
                        <div className="space-y-4">
                            <p className="text-4xl font-bold capitalize">Ready to Get Started?</p>
                            <p className="text-xl">No contracts. No pressure. Just clarity.</p>
                        </div>
                        <Button className="h-full cursor-pointer text-md uppercase p-6 px-16 font-semibold shadow-md/30 bg-chart-5 rounded-sm ">Book a Free Consultation</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;