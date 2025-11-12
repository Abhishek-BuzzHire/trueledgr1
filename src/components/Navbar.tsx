"use client";

import { MenuIcon } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";

// import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";

export interface ServiceSec {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  title: string;
  description?: string;
  items?: string[];
  slug?: string;
  image?: string;
}

export const serviceSec: ServiceSec[] = [
  {
    // icon: Database,
    slug: "bookkeeping-service",
    title: "Bookkeeping Services",
    description: "We take the stress out of bookkeeping with expert support, clean monthly reports, and CPA-ready financials."
  },
  {
    // icon: Code,
    slug: "payroll-service",
    title: "Payroll Services",
    description: "We run payroll accurately, file taxes on time, and keep your business 100% compliant without stress."
  },
  {
    // icon: Braces,
    slug: "receivable-payable-service",
    title: "Receivable & Payable Services",
    description: "From chasing invoices to paying vendors, we manage AR/AP smoothly - improving cash flow and eliminating late payment stress."
  },
  {
    // icon: Infinity,
    slug: "catchup-bookkeeping-service",
    title: "Catch-Up Bookkeeping Services",
    description: "Behind on books? We clean, reconcile, and deliver accurate, audit-ready financials fast - no more messy backlog."
  },
];

export const industrySec: { title: string; href: string; description?: string }[] = [
    {
        title: "Services - Distributors",
        href: "distributors",
    },
    {
        title: "Services - Fabricators",
        href: "fabricators",
    },
    {
        title: "Services - Architects & Designers",
        href: "architects-designers",
    },
]

const NavBar = () => {
    const services = serviceSec;

    return ( 
        <section className="sticky top-0 z-50 bg-background flex justify-center bg-navbg" >
            <div className="container py-4">
                <nav className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex gap-2">

                        <Image
                            src="/logo1.svg"
                            className="max-w-52"
                            alt="trueledgr"
                            width={253.83}
                            height={50}
                        />
                    </Link>
                    <NavigationMenu className="hidden lg:block text-chart-2">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[600px] grid-cols-2 p-3">
                                        {services.map((service, index) => (
                                            <NavigationMenuLink
                                                href={`/services/${service.slug}`}
                                                key={index}
                                                className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                            >
                                                <div key={service.title}>
                                                    <p className="mb-1 font-semibold text-foreground">
                                                        {service.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Industry</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[600px] grid-cols-2 p-3">
                                        {industrySec.map((industry, index) => (
                                            <NavigationMenuLink
                                                href={`/industry/${industry.href}`}
                                                key={index}
                                                className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                            >
                                                <div key={industry.title}>
                                                    <p className="mb-1 font-semibold text-foreground">
                                                        {industry.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {industry.description}
                                                    </p>
                                                </div>
                                            </NavigationMenuLink>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Blog
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/about"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    About Us
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    href="/contact"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    Contact Us
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="hidden items-center gap-4 lg:flex">
                        {/* <Button variant="outline">Contact</Button> */}
                        {/* <ThemeToggle /> */}
                        <Link href="/cpa">
                            <Button variant={"secondary"} className="cursor-pointer border-2 border-chart-3 text-chart-3 shadow-md rounded-sm text-md uppercase p-6 px-10 font-semibold">For CPA Firms</Button>
                        </Link>
                        <Link href="/">
                            <Button className="cursor-pointer text-md uppercase p-6 px-10 font-semibold shadow-md bg-chart-5 rounded-sm ">Get Started</Button>
                        </Link>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="max-h-screen overflow-auto">
                            <SheetHeader>
                                <SheetTitle>
                                    <SheetClose asChild>
                                        <Link
                                            href="/"
                                            className="flex gap-1"
                                        >
                                            <Image
                                                src="/logo1.svg"
                                                className="max-w-7"
                                                alt="trueledgr"
                                                width={252.83}
                                                height={50}
                                            />
                                        </Link>
                                    </SheetClose>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                                <div className="flex flex-col gap-4">
                                    <SheetClose asChild>
                                        <Link href="/" className="font-medium">
                                            Home
                                        </Link>
                                    </SheetClose>

                                    <div className="flex flex-col">
                                        <Accordion type="single" collapsible className="">
                                            <AccordionItem value="solutions" className="border-none">
                                                <AccordionTrigger className="text-base hover:no-underline">
                                                    Services
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="grid md:grid-cols-2">
                                                        {services.map((service, index) => (
                                                            <SheetClose asChild key={index}>
                                                                <Link
                                                                    href={`/services/${service.slug}`}
                                                                    className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                                                >
                                                                    <div key={service.title}>
                                                                        <p className="mb-1 font-semibold text-foreground">
                                                                            {service.title}
                                                                        </p>
                                                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                                                            {service.description}
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            </SheetClose>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        <Accordion type="single" collapsible className="">
                                            <AccordionItem value="solutions" className="border-none">
                                                <AccordionTrigger className="text-base hover:no-underline">
                                                    Industry
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="grid md:grid-cols-2">
                                                        {industrySec.map((industry, index) => (
                                                            <SheetClose asChild key={index}>
                                                                <Link
                                                                    href={`/careers/${industry.href}`}
                                                                    className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                                                >
                                                                    <div key={industry.title}>
                                                                        <p className="mb-1 font-semibold text-foreground">
                                                                            {industry.title}
                                                                        </p>
                                                                        <p className="text-sm text-muted-foreground">
                                                                            {industry.description}
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            </SheetClose>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>

                                    <SheetClose asChild>
                                        <Link href="/about" className="font-medium">
                                            Blog
                                        </Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/about" className="font-medium">
                                            About Us
                                        </Link>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Link href="/about" className="font-medium">
                                            Contact Us
                                        </Link>
                                    </SheetClose>
                                </div>
                                <div className="flex justify-between">
                                    <SheetClose asChild>
                                        <Link href="/contact" className="cursor-pointer">
                                            <Button>Contact</Button>
                                        </Link>
                                    </SheetClose>
                                    {/* <ThemeToggle /> */}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export { NavBar };
