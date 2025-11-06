import { Code, Database, Braces, Infinity ,ShieldCheck, Router } from "lucide-react";

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
    title: "Bookkeeping Service",
  },
  {
    // icon: Code,
    title: "Payroll Service",

  },
  {
    // icon: Braces,
    title: "Receivable & Payable Services",
  },
  {
    // icon: Infinity,
    title: "Catch-Up Bookkeeping Services",
  },
];

export const industrySec: { title: string; href: string; description: string }[] = [
    {
        title: "Industry Services - Distributors",
        href: "bytebuzz",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: " Industry Services - Fabricators",
        href: "buzzhire",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: " Industry Services - Architects & Designers",
        href: "jobs",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
]