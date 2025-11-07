export interface Service {
    slug: string;
    heroSec: {
        blueHead: string;
        head: string;
        info: string[];
        img: string;
        button: string;
    };
    secTwo: {
        head: string;
        info: string;
    };
    threeSec: {
        head: string;
        info: string;
        para: string[];
        points: {
            head: string;
            info: string;
        }[]
    };
    fourSec: {
        head: string;
        card: {
            img: string;
            head: string;
            info: string;
        }[]
    };
    fiveSec: {
        head: string;
        info: string;
        button: string;
    };
    sixSec:
    {
        head: string;
        card: string[];
    }[];
    serviceWork: {
        head: string;
        info: string;
        card: {
            num: string,
            img: string,
            head: string;
            info: string;
        }[]
    };
    readySec: {
        head: string;
        info1: string;
        info2: string;
        button: string;
    };
    faqs: {
        id: string;
        q: string;
        a: string;
    }[]
}

export const servicesData: Service[] = [
    {
        slug: "bookkeeping-service",
        heroSec: {
            blueHead: "Leading Bookkeeping",
            head: "Services in the USA",
            img: "heroService1.svg",
            info: ["Looking for the best monthly bookkeeping services in the USA?", "At Trueledgr, we streamline your finances, ensure compliance, and deliver monthly reports with CPA coordination all through reliable, tailored bookkeeping solutions built around your business."],
            button: "bookkeeping"
        },
        secTwo: {
            head: "Proven Performance. Trusted by Businesses Across the USA",
            info: "Trusted by stone businesses, architects, and SMBs, Trueledgr delivers reliable, efficient, and effective bookkeeping solutions for financial clarity. Backed by real results, real clients, and a growing team of finance professionals, you can count on us",
        },
        threeSec: {
            head: "Why Choose to Outsource Bookkeeping Services?",
            info: "Bookkeeping isn't just record-keeping - it's the foundation of smart business decisions. Without clean, timely books, you're flying blind unable to track cash flow, monitor P&L, or stay compliant at tax time.",
            para: [
                "You didn't start your business to chase invoices, fix spreadsheets, or stay up late reconciling accounts  yet most founders end up doing just that, without ever gaining a clear picture of their financials.",
                "Hiring an in-house bookkeeper means weeks of onboarding, training, and management, with no guarantee they'll catch past mistakes or build the systems you'll need as you grow.",
                "That's why outsourcing full-service bookkeeping to a real partner is smarter, faster, and way less stressful."
            ],
            points: [
                {
                    head: "Save 40+ hours/month",
                    info: "No more late nights fixing spreadsheets or backlogs. We handle everything from bank syncs to monthly reconciliation.",
                },
                {
                    head: "No hiring, training, or micromanagement",
                    info: "You get a full finance pod from a bookkeeper, reporting expert, to a manager without managing anyone yourself.",
                },
                {
                    head: "Decision-Ready Reports, Always On Time",
                    info: "Get fully reconciled CPA-ready books , with clean P&L, Balance Sheet, and Cash Flow insights and custom reports tailored for your business.",
                },
            ],
        },
        fourSec: {
            head: "What makes us a Preferred Partner For Outsourced Bookkeeping Services",
            card: [
                {
                    img: "1.svg",
                    head: "Accurate Bookkeeping, Backed by SOPs and 3-Layer Review",
                    info: "Pre-vetted USA-trained professionals follow strict SOPs and CPA-style checklists with 3-layer review for accuracy.",
                },
                {
                    img: "2.svg",
                    head: "Dedicated Account Manager with USA Aligned Hours",
                    info: "Your account manager ensures delivery, training, quality checks, and smooth communication in sync with your time zone.",
                },
                {
                    img: "3.svg",
                    head: "Expert Use of Leading Accounting Tools",
                    info: "We handle QuickBooks, Xero, ADP, Gusto, and SPS with precision for seamless bookkeeping, payroll, and reporting.",
                },
                {
                    img: "4.svg",
                    head: "Financial Reports That Drive Better Decisions",
                    info: "Beyond clean books, we deliver tailored P&L, Balance Sheet, Cash Flow, KPI dashboards, and custom strategic reports.",
                },
                {
                    img: "5.svg",
                    head: "Enterprise-Grade Data Security and Confidentiality",
                    info: "Your financial data is protected with 256-bit encryption, strict 2FA, ISO-aligned systems, and regular compliance audits.",
                },
                {
                    img: "6.svg",
                    head: "A Scalable System That Evolves With Your Business",
                    info: "From startup to scale, expand roles, insights, and reporting without switching firms or retraining new accounting vendors.",
                }
            ]
        },
        fiveSec: {
            head: "Ready to Stop Worrying About Your Books?",
            info: "You'll walk away with insights you can use right away. No hard sell. No strings attached.",
            button: "Book a Free review call",
        },
        sixSec: [
            {
                head: "What is included in the Bookkeeping Services:",
                card: [
                    "We categorize all income and expenses across every platform you use.",
                    "We reconcile banks, credit cards, PayPal, and payment apps monthly.",
                    "We track assets, loans, interest, and petty cash accurately.",
                    "We maintain a clean, custom chart of accounts for your business.",
                    "We match deposits, fix chargebacks, errors, and any duplicates.",
                    "We send monthly P&L, Balance Sheet, and Cash Flow reports.",
                    "We coordinate directly with your CPA when it's tax season.",
                    "We post journal entries and close your books every month.",
                    "We deliver fully documented, audit-ready books you can rely on.",
                ]
            }
        ],
        serviceWork: {
            head: "How do our Bookkeeping Solutions Work",
            info: "From setup to strategy, we slot seamlessly into your workflow.",
            card: [
                {
                    num: "1",
                    img: "1.svg",
                    head: "Seamless Onboarding",
                    info: "We start with a quick call, connect tools like QuickBooks, Stripe, Gusto, or Zoho, and set up your books accurately, right from day one.",
                },
                {
                    num: "2",
                    img: "2.svg",
                    head: "Streamlined Communication",
                    info: "You'll stay in touch with your dedicated account manager through zoom, meet or email. Ask questions, review flagged items & get clarity.",
                },
                {
                    num: "3",
                    img: "3.svg",
                    head: "Monthly Reports That Matter",
                    info: "Your books are closed by the end of every month, fully reconciled and CPA-ready. Get clean P&L, Balance Sheet, Cash Flow Statement and custom reports.",
                },
            ]
        },
        readySec: {
            head: "Ready to Stop Worrying About Your Books?",
            info1: "Schedule a free, no-pressure consultation with a Trueledgr expert. We'll review your books, spot blind spots, and give you clarity — even if you don't sign up.",
            info2: "You'll walk away with insights you can use right away. No hard sell. No strings attached.",
            button: "Book My Free Bookkeeping Consultation",
        },
        faqs: [
            {
                id: "1",
                q: "What are monthly bookkeeping services?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "2",
                q: "Why should I outsource bookkeeping instead of hiring in-house?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "3",
                q: "What's included in Trueledgr's monthly bookkeeping services?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "4",
                q: "Do I need bookkeeping if I already use QuickBooks or Xero?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "5",
                q: "How secure is my financial data with Trueledgr?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "6",
                q: "Will you work with my CPA during tax season?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "7",
                q: "How quickly can you onboard my business?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "8",
                q: "Can I scale bookkeeping hours as my business grows?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "9",
                q: "What industries does Trueledgr serve?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "10",
                q: "Do I need monthly bookkeeping if my business is small or new?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "11",
                q: "What makes Trueledgr different from other bookkeeping services?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
        ]
    },
    {
        slug: "payroll-service",
        heroSec: {
            blueHead: "Professional Payroll",
            head: "Services in the USA",
            img: "heroService2.svg",
            info: [
                "Tired of payroll errors, delayed filings , or IRS fines ? Or struggling with messy timesheets and unclear work hours? ", 
                "Trueledgr gives you clean, compliant payroll services with accurate time tracking, proper classifications, and on-time payments every cycle."
            ],
            button: "payroll"
        },
        secTwo: {
            head: "Proven Performance. Trusted by Businesses Across the USA",
            info: "From stone distributors, architects to service-based SMBs, Trueledgr is the payroll partner businesses rely on to run accurate, on-time, and compliant payroll. Backed by real client results and a growing team of payroll professionals, we deliver clarity where most businesses struggle.",
        },
        threeSec: {
            head: "Why choose to Outsource Payroll Services?",
            info: "Payroll isn't just about writing checks - it's about trust, compliance, and keeping your team happy without the stress. However, for mostbusinesses, it becomes a mess of spreadsheets, missed hours, bonus errors, and tax confusion, while your team waits, confused and frustrated.",
            para: [
                "Try doing it yourself, and you'll lose hours each month calculating payments, fixing mistakes, and stressing over deadlines.",
                "Hire someone full-time, and now you're stuck managing yet another person, with no guarantee it'll be accurate or compliant",
                "That's why outsourcing payroll to a real partner is smarter, simpler, and stress-free."
            ],
            points: [
                {
                    head: "Save hours of work and mental load",
                    info: "No more chasing timesheets or worrying if salaries went out right. You stay focused on your business payroll just happens.",
                },
                {
                    head: "No hiring, training, or micromanagement",
                    info: "You don't need one more person to manage. You need a system that just works, without taking your time",
                },
                {
                    head: "Avoid costly tax mistakes and penalties",
                    info: "State and federal payroll compliance is complex. A single error can cost more than an entire month of service.",
                },
            ],
        },
        fourSec: {
            head: "What makes us a Preferred Partner For Outsourced Payroll Services",
            card: [
                {
                    img: "1.svg",
                    head: "Payroll that's always accurate and on time",
                    info: "Every employee gets paid right and on time, and every payroll cycle you run, including bonuses, commissions.",
                },
                {
                    img: "2.svg",
                    head: "Timesheets and overtime without the spreadsheet mess",
                    info: "Track hours, approvals, PTO, and overtime without juggling messy spreadsheets or chasing your team for updates.",
                },
                {
                    img: "3.svg",
                    head: "Complete Payroll Tax Filing & Compliance Support",
                    info: "We handle all federal, state, and local payroll taxes - filed on time, fully compliant, zero worries.",
                },
                {
                    img: "4.svg",
                    head: "One dedicated payroll expert handling everything for you",
                    info: "From onboarding to final paychecks, your payroll expert manages everything - no follow-ups or repeating yourself.",
                },
                {
                    img: "5.svg",
                    head: "Customised setup for your business workflow",
                    info: "Whether you run bonuses, commissions, splits, or multi - cycle payrolls, we tailor it all to your exact workflow.",
                },
                {
                    img: "6.svg",
                    head: "Complete Confidentiality with Enterprise-Grade Data Security",
                    info: "We protect your data with encryption, role-based access, and strict protocols to keep financial data safe.",
                }
            ]
        },
        fiveSec: {
            head: "Ready to Simplify Payroll and Stay 100% Compliant?",
            info: "We'll run your payroll, file your taxes, and keep everything accurate, timely, and stress-free - so you can focus on your team, not paperwork.",
            button: "Book Your Free Payroll Efficiency Call",
        },
        sixSec: [
            {
                head: "What is included in the Payroll Services:",
                card: [
                    "We process payroll for salaried, hourly, and contract-based employees.",
                    "We track work hours, overtime, leaves, and PTO with clean timesheets.",
                    "We calculate and process commissions, bonuses, and performance-based pay.",
                    "We handle all federal, state, and local payroll tax filings.",
                    "We file W-2s and 1099s accurately and deliver them on time.",
                    "We reconcile every payroll run and maintain detailed payroll journals.",
                    "We ensure correct direct deposit, withholdings, and benefit deductions.",
                    "We provide clean, audit-ready reports for year-end or CPA use.",
                    "We support multi-state compliance and track changing local labor laws",
                ]
            }
        ],
        serviceWork: {
            head: "How Our Payroll Process Works",
            info: "From setup to strategy, we slot seamlessly into your workflow.",
            card: [
                {
                    num: "1",
                    img: "1.svg",
                    head: "Simple Onboarding & Setup",
                    info: "We connect your payroll system, add employees, configure pay schedules, and ensure all state and federal filings are ready from Day 1.",
                },
                {
                    num: "2",
                    img: "2.svg",
                    head: "Accurate Payroll Processing",
                    info: "We calculate wages, bonuses, commissions, manage timesheets, and process payments error free and always on time",
                },
                {
                    num: "3",
                    img: "3.svg",
                    head: "Reports, Filings & Full Compliance",
                    info: "You get clean reports every cycle. We handle tax filings, W-2s, 1099s, and stay fully compliant so you never miss a deadline",
                },
            ]
        },
        readySec: {
            head: "Struggling With Payroll Headaches, Deadlines, or Tax Filings?",
            info1: "Schedule a free, zero-pressure consultation with a Trueledgr payroll expert.We'll review your current payroll setup, catch compliance gaps, and show you how to simplify everything.",
            info2: "You'll walk away with clarity, recommendations, and peace of mind. No hard sell. No strings attached.",
            button: "Book My Free Payroll Consultation",
        },
        faqs: [
            {
                id: "1",
                q: "What are professional payroll services?",
                a: "Professional payroll services handle everything from wage calculation and direct deposits to tax filings and compliance. Instead of juggling spreadsheets or worrying about penalties, you get accurate, on-time payroll every cycle, with audit-ready reports.",
            },
            {
                id: "2",
                q: "Why should I outsource payroll instead of doing it in-house?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "3",
                q: "How much do payroll services cost with Trueledgr?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "4",
                q: "What's included in Trueledgr's payroll services?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "5",
                q: "Do small businesses really need payroll services?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "6",
                q: "How does Trueledgr ensure payroll tax compliance?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "7",
                q: "Can Trueledgr manage multi-state payroll?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "8",
                q: "How secure is my payroll data?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "9",
                q: "Will Trueledgr integrate with my existing payroll software?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "10",
                q: "How fast can you onboard my payroll system?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "11",
                q: "What happens if payroll errors are found?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "12",
                q: "Does Trueledgr coordinate with CPAs during tax season?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
        ]
    },
    {
        slug: "receivable-payable-service",
        heroSec: {
            blueHead: "Accounts Receivable & Payable",
            head: "Services in the USA",
            img: "heroService3.svg",
            info: [
                "Struggling with unpaid invoices or vendor payment delays?", 
                "Trueledgr gives you full control of your cash cycle with expert accounts receivable and accounts payable services - so you get paid faster, pay vendors on time, and keep your cash flow smooth and predictable."
            ],
            button: "ar/ap"
        },
        secTwo: {
            head: "Proven Performance. Trusted by Businesses Across the USA",
            info: "Trusted by stone businesses, architects, and growing SMBs, Trueledgr delivers accurate, efficient, and dependable AR/AP management services that keep your collections smooth and vendor payments on time. Backed by real results, real clients, and a growing team of finance professionals, you can count on us.",
        },
        threeSec: {
            head: "Why choose to Outsource AR/AP Management?",
            info: "Managing accounts receivable and payable isn't just about keeping vendors and customers happy — it's about making sure your cash comes in on time and bills go out without stress. But most small businesses don't have the time or the right systems to stay on top of it.",
            para: [
                "Before you know it, payments fall through the cracks, credits get missed, and you're making important decisions without a clear picture of what's owed or due. Hiring someone in-house takes weeks of onboarding and still leaves you managing the mess yourself — with no real guarantee it'll get fixed.",
                "That's why outsourcing receivables and payable management to a proven finance partner is smarter, faster, and more profitable."
            ],
            points: [
                {
                    head: "Stop Cash Leaks & Recover What's Yours",
                    info: "Fix receivables, apply missed credits, and recover unclaimed discounts — freeing up working capital.",
                },
                {
                    head: "Actionable Ageing Reports & Visibility",
                    info: "Get structured AP/AR reports, so you can clearly see who owes you and what's due — no more guessing.",
                },
                {
                    head: "No hiring, training, or micromanagement",
                    info: "We clean the backlog, rebuild your systems, and give you a finance pod that just gets it done.",
                },
            ],
        },
        fourSec: {
            head: "What Makes Us the Preferred Partner for Outsourced AR/AP Management",
            card: [
                {
                    img: "1.svg",
                    head: "Predictable Cash Flow, Month After Month",
                    info: "No more guessing who owes what or chasing payments last minute. We track receivables and payables with discipline.",
                },
                {
                    img: "2.svg",
                    head: "Clean Aging Reports & Clear Follow-Ups",
                    info: "Every invoice, bill, and due date is tracked, with structured reminders and follow-up SOPs that don't let things slip.",
                },
                {
                    img: "3.svg",
                    head: "Vendor Credits & Early-Pay Discounts Captured",
                    info: "Stop leaving money on the table. We apply supplier credits, recover lost discounts, and ensure nothing gets missed.",
                },
                {
                    img: "4.svg",
                    head: "Collections, Without the Chaos",
                    info: "We follow up with professionalism and consistency, helping you get paid faster, without straining customer relationships.",
                },
                {
                    img: "5.svg",
                    head: "One Point of Contact. All Gets Done.",
                    info: "Your account manager handles the full AR/AP cycle — no handholding, no back-and-forth, just clean execution.",
                },
                {
                    img: "6.svg",
                    head: "Enterprise-Grade Security & Compliance",
                    info: "Every payment, statement, and report is protected with encryption, access controls, and audit-ready documentation.",
                }
            ]
        },
        fiveSec: {
            head: "Ready to Stop Cash Leaks and Payment Delays?",
            info: "From receivables follow-up to vendor payouts - we'll keep your cash flow smooth, accurate, and fully under control.",
            button: "Book Your Free AR/AP Strategy Call",
        },
        sixSec: [
            {
                head: "What is included in the Accounts Receivable Services:",
                card: [
                    "We generate and send timely customer invoices via QuickBooks.",
                    "We record payments (cash, checks, cards) and post them to the GL.",
                    "We maintain AR ageing reports (30/60/90+) and track overdue balances.",
                    "We reconcile undeposited funds, chargebacks, and credit notes.",
                    "We prepare and post monthly A/R journal entries.",
                    "We review revenue classifications and track client-wise collections.",
                    "We send customer statements and follow up on open invoices.",
                    "We share weekly collection reports with trends and insights.",
                    "We set up auto-reminder workflows to reduce manual follow-ups.",
                ]
            },
            {
                head: "What is included in the  Accounts Payable Services:",
                card: [
                    "We record and categorise vendor bills by department or cost type.",
                    "We validate invoices and track upcoming due dates.",
                    "We maintain AP ageing reports (30/60/90+) to avoid late fees.         ",
                    "We reconcile payments, advances, debit notes, and vendor ledgers.",
                    "We schedule vendor payments via ACH or Bill.com based on terms.",
                    "We post accurate journal entries during the month-end close.",
                    "We maintain vendor records, W-9s, and audit-ready documents.",
                    "We share weekly payable reports with clear payment recommendations.",
                    "We track recurring bills and set up auto-payment alerts.",
                ]
            }
        ],
        serviceWork: {
            head: "How our AR/AP Process Works",
            info: "From setup to strategy, we slot seamlessly into your workflow.",
            card: [
                {
                    num: "1",
                    img: "1.svg",
                    head: "Fast, Customised Setup",
                    info: "We start with a short call to understand your cash cycle, connect your invoicing/payment tools, and set up tailored AR/AP tracking  all within days.",
                },
                {
                    num: "2",
                    img: "2.svg",
                    head: "Weekly Execution & Updates",
                    info: "Each week, we send customer invoices, follow up on payments, process vendor bills, and share aging reports - with zero stress on your team.",
                },
                {
                    num: "3",
                    img: "3.svg",
                    head: "Month & Reconciliation & Cash Visibility",
                    info: "We reconcile everything, deliver clean AR/AP aging reports, and give you full clarity on overdue receivables, upcoming payables, and projected cash flow.",
                },
            ]
        },
        readySec: {
            head: "Ready to Stop Chasing Invoices and Missing Vendor Deadlines?",
            info1: "Schedule a free, no-pressure consultation with a Trueledgr AR/AP expert. We'll review your cash cycle, spot process gaps, and show you how to fix leaks - even if you don't sign up.",
            info2: "You'll walk away with clarity, action steps, and zero pressure. No hard sell. No strings attached.",
            button: "Book My Free AR/AP Consultation",
        },
        faqs: [
            {
                id: "1",
                q: "What are accounts receivable (A/R) services?",
                a: "Accounts receivable services help you manage customer invoices, track overdue payments, and recover what's owed to your business. At Trueledgr, we prepare invoices, reconcile payments, maintain A/R aging reports, and follow up with customers — so you get paid faster without chasing.",
            },
            {
                id: "2",
                q: "What are accounts payable (A/P) services?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "3",
                q: "Why should small businesses outsource AR/AP management?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "4",
                q: "How much do AR/AP services cost with Trueledgr?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "5",
                q: "Can AR/AP outsourcing help with cash flow problems?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "6",
                q: "Do I need AR/AP services if I already use QuickBooks or Bill.com?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "7",
                q: "How fast can you onboard AR/AP for my business?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "8",
                q: "Can Trueledgr manage collections without hurting customer relationships?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "9",
                q: "How does Trueledgr ensure vendor payments are never missed?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "10",
                q: "Is my financial data secure with Trueledgr?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "11",
                q: "Can AR/AP services scale as my business grows?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "12",
                q: "Do you coordinate with CPAs during tax season?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
        ]
    },
    {
        slug: "catchup-bookkeeping-service",
        heroSec: {
            blueHead: "Catch-Up Bookkeeping",
            head: "Services in the USA",
            img: "heroService4.svg",
            info: [
                "Falling behind on your books? Whether it's 3 months or 3 years.", 
                "Trueledgr offers expert catch-up bookkeeping services to clean up your records, fix past errors, and deliver CPA and tax-ready financials fast."
            ],
            button: "catch-up"
        },
        secTwo: {
            head: "Proven Performance. Trusted by Businesses Across the USA",
            info: "Trusted by stone businesses, architects, and SMBs, Trueledgr delivers reliable, efficient, and effective catch-up bookkeeping solutions for financial clarity. Backed by real results, real clients, and a growing team of finance professionals, you can count on us.",
        },
        threeSec: {
            head: "Why Choose to Outsource Catch-up Bookkeeping Services ?",
            info: "Catch-up bookkeeping isn't just about fixing old numbers. It's how you take back control, reduce stress, and make confident, informed decisions. When your books are behind, you're not just delayed - you're flying blind. You don't know what's coming in, what's going out, or what's really going wrong. And that makes every business decision riskier than it should be.",
            para: [
                "Maybe it's been a few months. Maybe longer. But trying to fix it all yourself? That's hours of chasing old statements, fixing miscodes, and second-guessing every number.",
                "Hire in-house, and now you're training someone to clean up a mess they didn't create - with no guarantee they'll get it right.",
                "That's why outsourcing catch-up bookkeeping to a real partner is smarter, faster, and wiser choice."
            ],
            points: [
                {
                    head: "Save Weeks of Cleanup",
                    info: "Focus on scaling, not cleaning up past errors, chasing old statements, or fixing miscodes. We handle everything from bank syncs to monthly reconciliation.",
                },
                {
                    head: "No hiring, training, or micromanagement",
                    info: "You get a full finance pod from a bookkeeper, reporting expert, to a manager without managing anyone yourself.",
                },
                {
                    head: "Decision-Ready Reports, Always On Time",
                    info: "Get fully reconciled CPA-ready books , with clean P&L, Balance Sheet, and Cash Flow insights and custom reports tailored for your business.",
                },
            ],
        },
        fourSec: {
            head: "What Makes Us the Preferred Partner for Outsourced Catch-Up Bookkeeping Services",
            card: [
                {
                    img: "1.svg",
                    head: "A Month-by-Month Catch-Up System No Shortcut",
                    info: "We rebuild each month separately, so your books stay timeline-accurate, audit-proof, and easy to explain to your CPA.",
                },
                {
                    img: "2.svg",
                    head: "Deep Cleanup, Not Just Data Entry",
                    info: "We clean errors, fix misclassified entries, reconcile all accounts, and fix your chart of accounts - no duplicates, no confusion.",
                },
                {
                    img: "3.svg",
                    head: "CPA-Ready Financials for Every Missing Month",
                    info: "Get clean P&L, Balance Sheet, and Cash Flow reports - labelled, organised, and built for tax-time clarity.",
                },
                {
                    img: "4.svg",
                    head: "A Dedicated Finance Pod With Senior Review",
                    info: "Real bookkeepers handle your backlog, and senior accountants review every file before delivery.",
                },
                {
                    img: "5.svg",
                    head: "One Point of Contact Providing Total Clarity",
                    info: "Your account manager runs the process end-to-end, so you never have to manage multiple people or explain things twice.",
                },
                {
                    img: "6.svg",
                    head: "Complete Confidentiality with Enterprise-Grade Data Security",
                    info: "We protect your books with encryption, role-based access, and strict protocols to keep financial data safe.",
                }
            ]
        },
        fiveSec: {
            head: "Need to Catch Up Before Tax Filing or Compliance?",
            info: "We'll clean up your books, fix every error, and make your numbers make sense again - fast.",
            button: "Book Your Catch-Up Strategy Call",
        },
        sixSec: [
            {
                head: "What is Included in Catch-Up Bookkeeping Services:",
                card: [
                    "We gather all your missing bank, card, and gateway statements.",
                    "We clean and categorise every income, expense, and transfer properly.",
                    "We reconcile all accounts — banks, cards, loans, Stripe, PayPal, everything.",
                    "We fix misclassified entries and clean up your chart of accounts.",
                    "We post adjusting journal entries to reflect your true financial position.",
                    "We rebuild P&L, Balance Sheet, and Cash Flow month by month.",
                    "We correct past errors and align everything with accounting standards.",
                    "We deliver clean, audit-ready books for tax, loans, or compliance.",
                    "We deliver clean, audit-ready books for tax, loans, or compliance.",
                ]
            },
        ],
        serviceWork: {
            head: "How Our Catch-Up Bookkeeping Process Works",
            info: "From setup to strategy, we slot seamlessly into your workflow.",
            card: [
                {
                    num: "1",
                    img: "1.svg",
                    head: "Discovery & Document Collection",
                    info: "We start by understanding your current state, how far behind you are and what systems (if any) exist. Then we collect missing bank, credit card, and payment gateway statements.",
                },
                {
                    num: "2",
                    img: "2.svg",
                    head: "Cleanup, Categorisation & Reconciliation",
                    info: "We manually enter and categorize transactions, correct past errors, and reconcile every account, including loans and payment processors, every month.",
                },
                {
                    num: "3",
                    img: "3.svg",
                    head: "Financial Reports & Final Handoff",
                    info: "Once the books are clean, we generate a full set of P&L, Balance Sheet, and Cash Flow reports for each missing month, all CPA-ready and audit-proof.",
                },
            ]
        },
        readySec: {
            head: "Ready to Stop Worrying About Your Books?",
            info1: "Schedule a free, no-pressure consultation with a Trueledgr expert. We'll review your books, spot blind spots, and give you clarity - even if you don't sign up.",
            info2: "You'll walk away with insights you can use right away. No hard sell. No strings attached.",
            button: "Book My Free Catch up Bookkeeping Consultation",
        },
        faqs: [
            {
                id: "1",
                q: "What is catch-up bookkeeping?",
                a: "Catch-up bookkeeping is the process of cleaning up overdue or incomplete financial records — whether you're 3 months or 3 years behind. It includes categorizing transactions, fixing errors, reconciling accounts, and preparing CPA-ready reports.",
            },
            {
                id: "2",
                q: "How do I know if my business needs catch-up bookkeeping?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "3",
                q: "How much do catch-up bookkeeping services cost?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "4",
                q: "How long does it take to complete catch-up bookkeeping?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "5",
                q: "Do I need catch-up bookkeeping if I'm only 6 months behind?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "6",
                q: "Can Trueledgr fix errors made by previous bookkeepers?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "7",
                q: "Will my books be tax and CPA-ready after cleanup?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "8",
                q: "How secure is my financial data during cleanup?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "9",
                q: "Do you coordinate directly with my CPA during the process?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "10",
                q: "What if I'm years behind on bookkeeping?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
            {
                id: "11",
                q: "What happens after my books are caught up?",
                a: "Monthly bookkeeping services ensure your business finances are updated, reconciled, and CPA-ready every month. This includes recording transactions, reconciling bank/credit accounts, categorizing expenses, and generating P&L, Balance Sheet, and Cash Flow reports you can trust.",
            },
        ]
    }
]