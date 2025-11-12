export interface Launchpad {
    slug: string,
    heroSec: {
        head: string,
        info: string,
        bline: string,
    }

    secTwo: {
        one: string,
        two: string,
        three: string,
    },

    word?: string;

    secFour: {
        img: string;
        head: string,
        info: string[],
    }[]

    faqs: {
        id: string,
        q: string,
        a: string,
    }[],
}

export const launchpadData: Launchpad[] = [
    {
        slug: "startup",
        heroSec: {
            head: "Bookkeeping & Accounting for Startups",
            info: "Trueledgr Startup LaunchPad is your all-in-one financial starter kit, built for founders. We handle bookkeeping & accounting for startups, payroll setup, accounts payable and receivable (AP/AR) management, and financial reporting so you can focus on building the future and stop juggling with multiple vendors.",
            bline: "No credit card required — 100% free, no obligation",
        },
        secTwo: {
            one: "You didn't launch to manage spreadsheets. You launched to build something that matters. Let us handle the numbers.",
            two: "That's why we created LaunchPad for startups — a bundled setup for founders who want clarity from Day One",
            three: "100+ founders using Trueledgr LaunchPad for Startups",
        },

        word: "startup",
      
        secFour: [
            {
                img: "1.svg",
                head: "Bookkeeping Setup",
                info: [
                    "Historical catch-up (if needed)",
                    "Chart of accounts cleanup",
                    "Monthly reconciliations & entries",
                    "Clean P&L, BS & Cash Flow reports",
                ],
            },
            {
                img: "2.svg",
                head: "Payroll Setup + Compliance",
                info: [
                    "Set up with Gusto, ADP, or your platform",
                    "Process salaries, bonuses, PTO, and contractors",
                    "Pay cycle structuring (monthly, biweekly, etc.)",
                    "File W-2s, 1099s, and all tax returns",
                ],
            },
            {
                img: "3.svg",
                head: "AP/AR Management",
                info: [
                    "Vendor & customer master data cleanup",
                    "weekly payments, billing, and follow-ups",
                    "Track overdue invoices & vendor payment cycles",
                    "Clean AP/AR ageing with full reconciliation",
                ],
            },
            {
                img: "4.svg",
                head: "Cash Flow + KPI Dashboard",
                info: [
                    "Track cash flow & burn rate",
                    "Monitor weekly/monthly spend and collections",
                    "Get key startup KPIs & metrics in one dashboard",
                    "Weekly email summaries plus dashboard access",
                ],
            },
            {
                img: "5.svg",
                head: "Sales Tax Setup + CPA Coordination",
                info: [
                    "State & local sales tax prep + filings",
                    "Tax deadline reminders",
                    "Coordinate with your CPA for year-end compliance",
                    "Ensure books are tax-ready and properly mapped",
                ],
            },
            {
                img: "6.svg",
                head: "Founder Success Toolkit",
                info: [
                    "Access to Experts — Get your finance + GTM questions answered",
                    "Business Banking & Credit Card — We'll connect you with top providers",
                    "Cap Table Setup — Full setup + guided onboarding",
                ],
            },
        ],
        faqs: [
            {
                id: "1",
                q: "What is the Startup LaunchPad by Trueledgr?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "2",
                q: "Why do most startups fail because of poor financial management?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "3",
                q: "How is Trueledgr different from hiring a freelance bookkeeper or CPA?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "4",
                q: "What's included in the $15/hour LaunchPad plan?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "5",
                q: "Do I need LaunchPad if my startup is pre-revenue?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "6",
                q: "How does Trueledgr keep my startup's financial data secure?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "7",
                q: "Can Trueledgr integrate with my existing tools?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "8",
                q: "How quickly can I get started with LaunchPad?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "9",
                q: "Do I still need a CPA if I use Trueledgr LaunchPad?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "10",
                q: "What happens after the free 15-day trial?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "11",
                q: "Can I scale the service as my startup grows?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "12",
                q: "How is communication handled with the Trueledgr team?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
        ]
    },
    {
        slug: "SMB",
        heroSec: {
            head: "Bookkeeping & Accounting for Small & Medium Business",
            info: "Trueledgr SMB LaunchPad is your all-in-one financial starter kit, designed specifically for small and medium businesses. We take care of bookkeeping for small and medium-sized business, payroll processing, accounts payable and receivable (AP/AR) management, and financial reporting.",
            bline: "You get 15 days free — no billing, no strings, just support.",
        },
        secTwo: {
            one: "Running an SMB is tough - you juggle operations, clients, and growth every day.Let us handle the numbers.",
            two: "That's why we created LaunchPad for SMB - a bundled setup for business owners who want clarity from Day One.",
            three: "Join 100+ SMBs simplifying their finances with Trueledgr.",
        },

        word: "business",
      
        secFour: [
            {
                img: "1.svg",
                head: "Bookkeeping Setup",
                info: [
                    "Clean chart of accounts, structured from Day 1",
                    "Monthly entries, reconciliations & bank syncs",
                    "Clean P&L, Balance Sheet, and Cash Flow reports",
                    "Catch up on past months if you're starting behind",
                ],
            },
            {
                img: "2.svg",
                head: "Payroll Setup + Compliance",
                info: [
                    "Set up with Gusto, ADP, or your provider",
                    "Pay cycle structuring (monthly, biweekly, etc.)",
                    "Process salaries, bonuses, PTO, and contractors",
                    "File W-2s, 1099s, and all tax returns",
                ],
            },
            {
                img: "3.svg",
                head: "AP/AR Management",
                info: [
                    "Set up invoice formats, vendor & customer data",
                    "Run weekly payments, billing, and follow-ups",
                    "Track overdue invoices & vendor payment cycles",
                    "Clean AP/AR ageing with full reconciliation",
                ],
            },
            {
                img: "4.svg",
                head: "Cash Flow + KPI Dashboard",
                info: [
                    "Reports to help you track cash flow & key metrics",
                    "Monitor weekly/monthly spend and collections",
                    "Monthly insights into your business financial health",
                    "Custom dashboards designed for decision-making",
                ],
            },
            {
                img: "5.svg",
                head: "Sales Tax Setup + CPA Coordination",
                info: [
                    "State & local sales tax prep + filings",
                    "Tax deadline reminders",
                    "Coordinate with your CPA for year-end compliance",
                    "Ensure books are tax-ready and properly mapped",
                ],
            },
            {
                img: "6.svg",
                head: "Founder Success Toolkit",
                info: [
                    "Access to US-trained finance experts for questions",
                    "Help with business banking & credit card setup",
                    "Cash flow planning and budgeting support",
                    "Financial advice tailored for SMB growth",
                ],
            },
        ],
        faqs: [
            {
                id: "1",
                q: "What is the Trueledgr SMB LaunchPad?",
                a: "The SMB LaunchPad is an all-in-one finance solution for small and medium-sized businesses. It covers bookkeeping, payroll processing, AP/AR management, sales tax filing, and financial reporting—so you can run your business without worrying about compliance or messy books.",
            },
            {
                id: "2",
                q: "Why do SMBs need professional bookkeeping and accounting?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "3",
                q: "How is Trueledgr different from hiring an in-house accountant?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "4",
                q: "What's included in the $15/hour SMB LaunchPad plan?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "5",
                q: "Do SMBs need bookkeeping even if they have low revenue?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "6",
                q: "How does Trueledgr handle payroll and compliance?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "7",
                q: "Can Trueledgr work with my existing accounting tools?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "8",
                q: "How secure is my financial data with Trueledgr?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "9",
                q: "Do I still need a CPA if I use SMB LaunchPad?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "10",
                q: "How quickly can I get started with SMB LaunchPad?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "11",
                q: "What happens after the free 15-day trial?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "12",
                q: "Can the service scale as my SMB grows?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
            {
                id: "13",
                q: "How will I communicate with the Trueledgr team?",
                a: "The Startup LaunchPad is an all-in-one finance pod designed for early-stage founders. It includes bookkeeping, payroll setup, AP/AR management, tax coordination, cash flow dashboards, and compliance support — so you can stay investor-ready from day one without building a full in-house finance team",
            },
        ]
    }
]