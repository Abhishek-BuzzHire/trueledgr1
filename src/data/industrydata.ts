export interface Industry {
    slug: string;
    heroSec: {
        title: string;
        head: string;
        info: string[];
        img: string;
    };
    secTwo: {
        head: string;
        subhead: string;
        para: string[];
        points: {
            head: string;
            info: string;
        }[],
        bhead: string;
        binfo: string;
    };

    threeSec: {
        head: string;
        topics: {
            left1: string[],
            left2: string[],
            left3: string[],
            right1: string[],
            right2: string[],
        }
    };

    midPhoto: {
        para: string[];
        info: string;
    }

    getMonth: {
        id: string;
        head: string
        subhead: string;
        info: string[];
        points: string[];
    }[];

    indusWork: {
        info: string;
        card: {
            serial: string,
            img: string,
            head: string;
            info: string;
        }[];
    }

    sixSec: {
        subhead: string;
        info: string;
        points: {
            head: string;
            info: string;
        }[]
    }

    faqs: {
        id: string;
        q: string;
        a: string;
    }[]
}

export const industryData: Industry[] = [
    {
        slug: "distributors",
        heroSec: {
            title: "Clean Books, Smarter Inventory, Stronger Profits",
            head: "Stone Distributors & Suppliers Bookkeeping & Accounting Services in USA",
            info: ["Trueledgr expertly handles bookkeeping, receivables & payables, payroll, and tailored financial reporting as a specialised bookkeeping service for stone distributors & suppliers.", "Our industry-specific insights provide financial clarity and control, empowering you to make informed decisions, boost profitability, and scale your business with confidence."],
            img: "heroIndustry1.svg",
        },

        secTwo: {
            head: "Clean Books. Accurate Costs. Stronger Margins.",
            subhead: "Track landed costs, control inventory, and stop margin leaks with expert bookkeeping for stone distributors & suppliers.",
            para: [
                "You're importing containers, chasing reps, managing holds, and trying to track slabs across Stone Profit Systems.",
                "But when bookkeeping falls behind, everything slips. Your costs become inaccurate, your margins shrink, and cash continues to leak without warning. This leads to reordering blindly, overpaying on low-margin sales, and scrambling at tax time with no clear reports or real visibility.",
            ],
            points: [
                {
                    head: "Messy Books Leave You Without Real Clarity",
                    info: "Without timely reconciliation, data piles up, leaving partial ledgers, wrong balances, and no accurate financial picture.",
                },
                {
                    head: "Cash feels tight, even when sales are up",
                    info: "Without inventory ageing and periodic analysis , dead stock keeps piling up while hot items go out of stock.",
                },
                {
                    head: "Old slabs block space and freeze capital",
                    info: "Without inventory ageing or slab movement reports, dead stock keeps piling up while hot items go out of stock.",
                },
                {
                    head: "Blind Reordering Drains Cash and Inventory",
                    info: "There's no sync between sales and purchase planning. You lose cash to overstock while missing high-demand stones.",
                },
                {
                    head: "Untracked Landed Costs Make Margins Disappear",
                    info: "Without proper freight, duty, CHA your per-slab cost is a mystery and so is your margin.",
                },
                {
                    head: "Commissions are paid, but is the rep profitable?",
                    info: "Sales reps earn big, but you don't know if their deals are driving profit or just top-line growth with thin margins.",
                },
                {
                    head: "You're scrambling at tax time, with no clean reports.",
                    info: "At filing season, your CPA's chasing missing numbers. There's no clean GL, no payroll summaries, and no categorised expenses.",
                },
                {
                    head: "Old sales orders and holds jam your pipeline",
                    info: "Nothing's moving. Stale orders block new ones. You're unable to tell what's real, what's held, and what's dead.",
                },
            ],
            bhead: "Trueledgr was built to fix exactly this.",
            binfo: "We go beyond bookkeeping giving you financial control, real-time visibility, and clean decision-making reports built for how stone distribution works.",
        },
        threeSec: {
            head: "What we do for Stone Distributors & Suppliers",
            topics: {
                left1: [
                    "Recording all daily sales, purchases, payroll, and overheads in QuickBooks",
                    "Categorising expenses by department: freight, import, warehouse, showroom, sales",
                    "Reconciling all bank and credit card accounts monthly",
                    "Matching received inventory with vendor bills and tracking landed cost components",
                    "Maintaining digital records of receipts, invoices, and key contracts",
                    "Posting monthly accruals, prepaids, adjusting journal entries, and finalising books",
                    "Detecting duplicate entries and fixing errors to deliver clean ledgers",
                    "Tracking and reconciling petty cash usage (warehouse/showroom)",
                ],
                left2: [
                    "Cross-checking SPS invoices with sales orders for accuracy",
                    "Maintaining AR ageing buckets (30/60/90+ days) for visibility and control",
                    "Sharing client account statements for timely reconciliation and follow-up",
                    "Flagging overdue balances to assigned sales reps or managers",
                    "Reconciling short-pays, bounced checks, credit notes, and advances",
                    "Generating rep-wise DSO reports and highlighting high-risk accounts",
                ],
                left3: [
                    "Posting final journal entries and closing the books monthly",
                    "Reconciling revenue, purchases, and expenses across all accounts",
                    "Locking all bank reconciliations and verifying AR/AP balances",
                    "Validating invoice-level landed cost via SPS audits",
                    "Preparing monthly P&L, Balance Sheet, and Cash Flow statements",
                    "Filing DR-15 sales tax returns with the correct state (e.g. Florida)",
                    "Reviewing GL for duplicates, misclassifications, or financial spikes",
                    "Coordinating with CPAs on 1120/1065 filings and storing year-end docs",
                ],
                right1: [
                    "Processing payroll biweekly/monthly via Gusto, ADP, or Paychex",
                    "Collecting and reviewing timecards, commissions, PTO, and overtime",
                    "Importing payroll journals and reconciling with GL and system records",
                    "Ensuring compliance with state and federal tax laws",
                    "Finalising year-end payroll summaries and generating W2s/1099s",
                    "Maintaining audit-ready payroll documentation for employees, contractors, and fabricators",
                ],
                right2: [
                    "Recording bills from domestic and international vendors (CHA, freight, suppliers)",
                    "Maintaining AP ageing by vendor type and due date (30/60/90+ days)",
                    "Reconciling debit notes, vendor advances, and delivery discrepancies",
                    "Validating vendor statements to support reconciliations",
                    "Preparing weekly payment schedules to avoid late fees and protect trust",
                    "Segmenting AP reports by vendor category and liability type",
                ],
            },
        },

        midPhoto: {
            para: [
                "You've seen what we handle. From SPS to QuickBooks, landed costs to sales tax, we manage the backend - so you get financial clarity, clean books, and decision-ready reports.",
                "Let's walk you through exactly how Trueledgr Professional Stone Distributor's bookkeeping service works.",
            ],
            info: "Want to see what clean books and full financial control look like?",
        },

        getMonth: [
            {
                id: "1",
                head: "Profit & Loss",
                subhead: "Know what you're earning, where profits are leaKked.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "2",
                head: "Cash Flow Statement",
                subhead: "Profit ≠ cash - Understand exactly how your cash moved last month.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "3",
                head: "Aged Receivables & Payables",
                subhead: "Track what you're owed and what you owe with ageing to get total clarity.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "4",
                head: "Monthly Fund Requirement Forecast",
                subhead: "See exactly how much cash you'll need each week and why.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "5",
                head: "Container Landed Cost Report",
                subhead: "Know your real cost per slab—freight to warehouse.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "6",
                head: "Inventory Ageing Report",
                subhead: "Spot stuck slabs and unlock blocked capital.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "7",
                head: "Buying Recommendation Report",
                subhead: "Reorder what's working, hold what's not—based on real data.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "8",
                head: "Sales Performance & Client Retention Report",
                subhead: "Know which reps — and which clients — are truly growing your business.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "9",
                head: "Sales Reps Commission",
                subhead: "Make sure you're paying for performance, not just promises.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "10",
                head: "Sales Rep Scorecard",
                subhead: "Is your sales rep driving real results — or just racking up payroll?",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "11",
                head: "KPI Dashboard",
                subhead: "Every business has its own success metrics — we'll define yours, and track them with precision.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
        ],

        indusWork:
        {
            info: "From initial setup to ongoing support, we tailor bookkeeping solutions for stone distributors & suppliers at every stage to fit your business and keep your finances in order.",
            card: [
                {
                    serial: "1",
                    img: "1.svg",
                    head: "Seamless Onboarding",
                    info: "We begin with a quick consultation, connect to your financial tools (Stone Profit System, QuickBooks, Gusto/ADP), and set up your books with clean, accurate records from day one.",
                },
                {
                    serial: "2",
                    img: "2.svg",
                    head: "Streamlined Communication",
                    info: "Your dedicated accounts manager stays in touch through weekly check-ins. You'll get clear updates, resolve flagged items quickly, and avoid back-and-forth.",
                },
                {
                    serial: "3",
                    img: "3.svg",
                    head: "Monthly Reports That Matter",
                    info: "Your books are reconciled and closed by the 5th of every month. We deliver clean P&L, Balance Sheet, Cash Flow, and Key reports that drive better business decisions.",
                },
            ],
        },

        sixSec: {
            subhead: "We bring years of stone industry finance experience into your workflow, helping you buy smarter, sell faster, and grow stronger with every financial decision.",
            info: "We've seen what holds distributors back, and we fix it fast, with precision and clarity. Here's what sets us apart and makes us the best choice for outsourced bookkeeping services for stone distributors & suppliers:",
            points: [
                {
                    head: "Deep experience in the stone industry",
                    info: "We've spent 5+ years solving financial challenges for stone distributors & suppliers, importers, and showrooms."
                },
                {
                    head: "Clean Bookkeeping & Always CPA-Ready",
                    info: "Every entry is reconciled and reviewed to ensure your books stay tax-ready, audit-ready, and always ready for your CPA.",
                },
                {
                    head: "Reports That Drive Action",
                    info: "Track landed cost breakdowns to sales rep ROI, get monthly custom reports & dashboards that guide real decisions.",
                },
                {
                    head: "One Structured Pod, One Point of Contact",
                    info: "Get a dedicated account manager + finance team (bookkeeping, account payables and receivables, reporting).",
                },
                {
                    head: "Built Into Your Workflow",
                    info: "We work seamlessly within Stone Profit Systems, QuickBooks, Gusto, ADP, Expensify and your existing tools, making no extra setup required.",
                },
                {
                    head: "Complete Confidentiality with Enterprise-Grade Data Security",
                    info: "We secure your financial data with 256-bit encryption, strict 2FA access controls, regular audits, and ISO-aligned systems to keep financial data safe.",
                },
            ],
        },

        faqs: [
            {
                id: "1",
                q: "Why do stone distributors need specialized bookkeeping services?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "2",
                q: "How does Trueledgr handle landed cost calculations?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "3",
                q: "What types of reports do stone distributors receive every month?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "4",
                q: "How much does stone distributor bookkeeping cost with Trueledgr?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "5",
                q: "Can Trueledgr integrate with Stone Profit Systems (SPS)?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "6",
                q: "How do you manage accounts receivable for stone distributors?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "7",
                q: "Do you also manage accounts payable for stone distributors?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "8",
                q: "Will my books be CPA and tax-ready every month?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "9",
                q: "How do you ensure commissions are paid fairly to sales reps?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "10",
                q: "How secure is my financial data?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "11",
                q: "How fast can you onboard a stone distributor?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
            {
                id: "12",
                q: "Do you serve both small and large stone distributors?",
                a: "Stone distribution has unique financial challenges — landed cost allocation, slab inventory ageing, container tracking, and rep commissions. Generic bookkeeping misses these details. At Trueledgr, we integrate directly with Stone Profit Systems (SPS) and QuickBooks to deliver accurate landed costs, real-time margins, and cash clarity tailored to stone distributors.",
            },
        ],
    },

    {
        slug: "fabricators",
        heroSec: {
            title: "Clean Books, Job-Wise Clarity, Stronger Margins",
            head: "Stone Fabricators Bookkeeping & Accounting Services in USA",
            info: [
                "Trueledgr expertly handles bookkeeping, receivables, payables, payroll, and tailored financial reporting as a specialised bookkeeping service for stone fabricators.",
                "Our industry-specific insights provide financial clarity and control, empowering you to make informed decisions, boost profitability, and scale your business with confidence.",
            ],
            img: "heroIndustry2.svg",
        },

        secTwo: {
            head: "Clean Books. Job-Level Clarity. Stronger Cash Flow.",
            subhead: "Track slabs, control costs, and know every job’s profit with expert bookkeeping for stone fabricators.",
            para: [
                "You’re juggling in-house installations, slab holds, sales team commissions, contractor payments, and new installs. At the same time, you need to track slabs in SPS and keep every job on schedule. When your books fall behind, everything gets harder.",
                "Costs get out of sync. Margins shrink. Materials go unbilled. Payroll stacks up. Cash keeps getting stuck in accounts receivable. Instead of knowing your numbers, you scramble at month-end with no clear reports or job-level profit.",
            ],
            points: [
                {
                    head: "Messy Books Leave You Without Real Clarity",
                    info: "Without timely reconciliation, data piles up, leaving partial ledgers, wrong balances, and no accurate financial picture.",
                },
                {
                    head: "Unpredictable Cash Flow With No Collections",
                    info: "Late or incomplete invoices delay payments, and without structured billing or AR follow-up, cash flow remains unpredictable.",
                },
                {
                    head: "Dead Slabs Block Space, Capital, and Margins",
                    info: "Old holds, stale selections, and periodic analysis or ageing reports cause inventory to pile up shrinking margins and freezing working capital.",
                },
                {
                    head: "You don't know if jobs are profitable",
                    info: "Revenue looks fine, but without job costing, time tracking, or labor utilization, project-level profit stays hidden and quietly destroys margins.",
                },
                {
                    head: "You're scrambling at tax time, with no clean reports.",
                    info: "At filing season, your CPA's chasing missing numbers. There's no clean GL, no payroll summaries, and no categorised expenses.",
                },
                {
                    head: "Running Blind With No Dashboards or Reports",
                    info: "No dashboards or monthly visibility - receivables, WIP, and burn rates go untracked, leaving decisions based on guesswork.",
                },
            ],
            bhead: "Trueledgr was made to solve these problems.",
            binfo: "We go beyond bookkeeping giving you financial control, real-time insight, and clear reports designed for the way stone fabrication works.",
        },
        threeSec: {
            head: "What we do for Stone Fabricators",
            topics: {
                left1: [
                    "Recording showroom, installer, and contractor sales by job or client",
                    "Reconciling all bank, credit card, and petty cash accounts monthly",
                    "Categorising slab purchases, CNC expenses, and OPEX using job/project codes",
                    "Allocating labour and material costs for job-wise margin visibility",
                    "Posting monthly accruals, prepaids, adjusting journal entries, and finalising books",
                    "Reviewing GL, AR, and AP for CPA-ready books and audit compliance",
                    "Maintaining digital records of receipts, invoices, and key contracts",
                    "Detecting duplicate entries and fixing errors to deliver clean ledgers",
                    "Tracking and reconciling petty cash usage (warehouse/showroom)",
                ],
                left2: [
                    "Cross-checking SPS invoices with sales orders for accuracy",
                    "Creating milestone or retainer-based invoices tied to fabrication jobs",
                    "Maintaining AR ageing buckets (30/60/90+ days) for visibility and control",
                    "Sharing client account statements for timely reconciliation and follow-up",
                    "Flagging overdue balances to assigned sales reps or managers",
                    "Reconciling short-pays, bounced checks, credit notes, and advances",
                    "Generating rep-wise DSO reports and highlighting high-risk accounts",
                ],
                left3: [
                    "Posting final journal entries and closing the books monthly",
                    "Reconciling revenue, purchases, and expenses across all accounts",
                    "Locking all bank reconciliations and verifying AR/AP balances",
                    "Verifying all job-level costs and matching to sales invoices",
                    "Preparing monthly P&L, Balance Sheet, and Cash Flow statements",
                    "Filing DR-15 sales tax returns with the correct state (e.g. Florida)",
                    "Reviewing GL for duplicates, misclassifications, or financial spikes",
                    "Coordinating with CPAs on 1120/1065 filings and storing year-end docs",
                ],
                right1: [
                    "Processing payroll biweekly/monthly via Gusto, ADP, or Paychex",
                    "Collecting and reviewing timecards, commissions, PTO, reimbursements & OT ",
                    "Importing payroll journals and reconciling with GL and system records",
                    "Ensuring compliance with state and federal tax laws",
                    "Finalising year-end payroll summaries and generating W2s/1099s",
                    "Maintaining audit-ready payroll documentation for all payees",
                ],
                right2: [
                    "Recording bills from slab suppliers, vendors, CNC maintenance and rentals",
                    "Maintaining AP ageing by vendor type and due date (30/60/90+ days)",
                    "Reconciling debit notes, vendor advances, and delivery discrepancies",
                    "Validating vendor statements to support reconciliations",
                    "Preparing weekly payment schedules to avoid late fees and protect trust",
                    "Segmenting AP reports by vendor category and liability type",
                ],
            },
        },

        midPhoto: {
            para: [
                "We look after your Stone profit systems, QuickBooks, payroll, retainers, and job tracking. You get organized books, reliable numbers, and decision-ready reports.",
                "Let's walk you through exactly how Trueledgr professional Stone Fabricator's bookkeeping service works.",
            ],
            info: "Want to see what clean books and full financial control look like?",
        },

        getMonth: [
            {
                id: "1",
                head: "Profit & Loss",
                subhead: "Know what you're earning, where profits are leaKked.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "2",
                head: "Cash Flow Statement",
                subhead: "Profit ≠ cash - Understand exactly how your cash moved last month.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "3",
                head: "Aged Receivables & Payables",
                subhead: "Track what you're owed and what you owe with ageing to get total clarity.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "4",
                head: "Monthly Fund Requirement Forecast",
                subhead: "See exactly how much cash you'll need each week and why.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "5",
                head: "Budget vs Actual Report",
                subhead: "What you planned vs. what you spent — see the gap before it widens.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "6",
                head: "Project Profitability Report",
                subhead: "Know exactly which fabrication jobs protected margin — and which ones bled it.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "7",
                head: "Inventory Ageing Report",
                subhead: "Know which slabs are moving, which are stuck and what it's costing you and unlock blocked capital.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "8",
                head: "Sales Rep Commission & Scorecard",
                subhead: "Make sure your reps earn based on collected revenue and job margins — not just closing deals.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "9",
                head: "KPI Dashboard",
                subhead: "Every business has its own success metrics — we'll define yours, and track them with precision.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
        ],

        indusWork:
        {
            info: "From initial setup to ongoing support, we tailor bookkeeping solutions for stone fabricators. at every stage to fit your business and keep your finances in order.",
            card: [
                {
                    serial: "1",
                    img: "1.svg",
                    head: "Seamless Onboarding",
                    info: "We start with a quick consultation. We connect to your financial tools like Stone Profit System, QuickBooks, and Gusto/AD. Your books are set up with clean, accurate records from day one.",
                },
                {
                    serial: "2",
                    img: "2.svg",
                    head: "Streamlined Communication",
                    info: "Your dedicated account manager checks in weekly. You get simple updates, quick answers for any flagged items.",
                },
                {
                    serial: "3",
                    img: "3.svg",
                    head: "Monthly Reports That Matter",
                    info: "We reconcile and close your books by the 5th of each month. You get clean P&L, Balance Sheet, Cash Flow, and key reports—so you can make better business decisions.",
                },
            ],
        },

        sixSec: {
            subhead: "With years of handling stone industry finances, we fit right into your workflow. We help you make smarter purchases, speed up sales, and grow your business with every decision.",
            info: "We solve problems quickly for stone fabricators and get you back on track. Here's why our outsourced bookkeeping services for stone fabricators stand out:",
            points: [
                {
                    head: "Deep experience in the stone industry",
                    info: "We've spent 5+ years solving financial challenges for stone fabricators."
                },
                {
                    head: "Clean Bookkeeping & Always CPA-Ready",
                    info: "Every entry is reconciled and reviewed to ensure your books stay tax-ready, audit-ready, and always ready for your CPA.",
                },
                {
                    head: "Reports That Drive Action",
                    info: "Track Job wise cost & profitability, to sales rep ROI, comparing budget vs actual, get monthly custom reports & dashboards that guide real decisions.",
                },
                {
                    head: "One Structured Pod, One Point of Contact",
                    info: "Get a dedicated account manager + finance team (bookkeeping, account payables and receivables, reporting).",
                },
                {
                    head: "Built Into Your Workflow",
                    info: "We work seamlessly within Stone Profit Systems, QuickBooks, Gusto, ADP, Expensify and your existing tools, making no extra setup required.",
                },
                {
                    head: "Complete Confidentiality with Enterprise-Grade Data Security",
                    info: "We secure your financial data with 256-bit encryption, strict 2FA access controls, regular audits, and ISO-aligned systems to keep financial data safe.",
                },
            ],
        },

        faqs: [
            {
                id: "1",
                q: "Why do stone fabricators need specialized bookkeeping services?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "2",
                q: "How does Trueledgr handle job costing for fabrication projects?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "3",
                q: "What reports do stone fabricators get every month?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "4",
                q: "How much do bookkeeping services cost for stone fabricators?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "5",
                q: "Can Trueledgr integrate with Stone Profit Systems (SPS)?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "6",
                q: "How do you handle accounts receivable for fabricators?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "7",
                q: "Do you also manage accounts payable for fabrication shops?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "8",
                q: "Will my books be CPA and tax-ready?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "9",
                q: "How do you ensure payroll accuracy for installers and contractors?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "10",
                q: "How secure is my financial data with Trueledgr?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "11",
                q: "How fast can you onboard a stone fabricator?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
            {
                id: "12",
                q: "Do you support both small and large fabrication shops?",
                a: "Fabricators deal with unique challenges — job costing, slab holds, installer payroll, and project-based invoicing. Generic bookkeeping misses these details. Trueledgr integrates with Stone Profit Systems (SPS) and QuickBooks to give you accurate job-wise costs, slab-level tracking, and clear margins.",
            },
        ],
    },

    {
        slug: "architects-designers",
        heroSec: {
            title: "Clean Books, Project-Level Clarity, Confident Growth",
            head: "Architects & Designers Bookkeeping & accounting Services in USA",
            info: [
                "Trueledgr is a specialised bookkeeping service for architects and designers, handling bookkeeping, receivables, payables, payroll, and customised financial reports.",
                "Our industry-specific insights deliver cost clarity, cash control, and project-wise visibility, empowering you to make informed decisions, boost profitability, and scale your business with confidence.",
            ],
            img: "heroIndustry3.svg",
        },

        secTwo: {
            head: "Clean Books. Job-Level Clarity. Confident Growth.",
            subhead: "Track budgets, time, and cash flow - and know every project's true profit with bookkeeping built for architects & designers.",
            para: [
                "You're managing projects, tracking milestones, coordinating with consultants, and juggling client demands across multiple timelines.",
                "But when your books fall behind, everything slips. Your cash flow dries up, invoices go missing, and job profitability becomes a mystery. This leads to overservicing without charging, missing time entries, budget overruns, and last-minute scrambling at tax time with no clean reports or real visibility.",
            ],
            points: [
                {
                    head: "Messy Books Leave You Without Real Clarity",
                    info: "Without timely reconciliation, data piles up, leaving partial ledgers, wrong balances, and no accurate financial picture.",
                },
                {
                    head: "You don't know which projects are profitable",
                    info: "Revenue looks strong, but without job costing or tracked hours, profitability by project stays hidden, leading to blind decisions",
                },
                {
                    head: "Missed Invoices Leave Cash Stuck",
                    info: "No system for milestone billing, retainers, or hourly tracking - invoices go late, incomplete, and cash waits for months.",
                },
                {
                    head: "You're scrambling at tax time, with no clean reports",
                    info: "At filing season, your CPA's chasing missing numbers. There's no clean GL, no payroll summaries, and no categorised expenses.",
                },
                {
                    head: "Unpredictable Cash Flow With No Collections",
                    info: "Sales are strong, but invoices sit unpaid - without structured AR follow-up, cash flow stays unpredictable and frustrating.",
                },
                {
                    head: "Running Blind With No Dashboards or Reports",
                    info: "No dashboards or monthly visibility - receivables, WIP, and burn rates go untracked, leaving decisions based on guesswork",
                },
            ],
            bhead: "Trueledgr was built to fix exactly this.",
            binfo: "We go beyond bookkeeping giving you clean financials, clear project profitability, and decision-ready reports all tailored to how your design business works.",
        },
        threeSec: {
            head: "What we do for Architects & Designers",
            topics: {
                left1: [
                    "Recording all income, purchases, payroll, and overhead project-wise",
                    "Categorising transactions using job codes for clean cost tracking",
                    "Reconciling bank and credit card accounts every month without fail",
                    "Allocating labour costs to jobs via synced time tracking tools",
                    "Posting accruals, prepaids, and adjusting entries to finalise books",
                    "Maintaining digital records of receipts, bills, and approvals",
                    "Reviewing GL, AR, and AP to deliver clean, CPA-ready financials",
                ],
                left2: [
                    "Creating milestone-based, retainer, or hourly invoices as per the contract",
                    "Applying payments to invoices and reconciling against bank records",
                    "Maintaining AR ageing buckets (0-30, 31-60, 61-90+ days) for visibility",
                    "Highlighting short-pays, bounced checks, and tracking collection issues",
                    "Sharing client statements and overdue follow-ups with project managers",
                    "Generating DSO reports, Monitoring AR trends and flagging high-risk accounts monthly",
                ],
                left3: [
                    "Posting accruals, prepaids, and final journal entries to close books",
                    "Reconciling revenue, purchases, and operating expenses",
                    "Locking bank accounts and verifying AR/AP balances for accuracy",
                    "Reviewing GL to fix misclassifications, duplicates, or spikes",
                    "Preparing P&L, Balance Sheet, and Cash Flow reports",
                    "Highlight spending anomalies, margin shifts, and trends",
                    "Filing DR-15 or sales tax returns with the right state authorities",
                    "Maintaining contractor W-9s and finalising records for CPAs",
                    "Coordinating with CPAs for 1065/1120 filings and tax prep annually",
                ],
                right1: [
                    "Setting up salaried staff and 1099 contractors with proper classifications",
                    "Tracking PTO, reimbursements, bonuses, and time entries by job",
                    "Processing payroll via Gusto/ADP with correct benefits and deductions",
                    "Allocating labour cost by project for job costing accuracy",
                    "Filing all federal/state payroll taxes and issuing W-2s/1099s",
                    "Maintaining audit-ready payroll records and year-end summaries",
                ],
                right2: [
                    "Recording subcontractor, consultant, rent, and admin bills with correct tagging",
                    "Matching invoices to POs and ensuring approval before payment",
                    "Maintaining AP ageing by vendor and due date to prevent penalties",
                    "Routing bills through structured approval workflows with audit trails",
                    "Sharing weekly payment schedules with leadership for cash planning",
                    "Tracking advances and reconciling vendor statements for accuracy",
                ],
            },
        },

        midPhoto: {
            para: [
                "You've seen what we handle. From QuickBooks to payroll, retainers to project-level tracking - we manage the backend so you get financial clarity, clean books, and decision-ready reports.",
                "Let us show you how Trueledgr professional Stone Fabricator's bookkeeping service works.",
            ],
            info: "Want to see what clean books and full project-level clarity look like?",
        },

        getMonth: [
            {
                id: "1",
                head: "Profit & Loss",
                subhead: "Know what you're earning, where profits are leaKked.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "2",
                head: "Cash Flow Statement",
                subhead: "Profit ≠ cash - Understand exactly how your cash moved last month.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "3",
                head: "Aged Receivables & Payables",
                subhead: "Track what you're owed and what you owe with ageing to get total clarity.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "4",
                head: "Monthly Fund Requirement Forecast",
                subhead: "See exactly how much cash you'll need each week and why.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "5",
                head: "Budget vs Actual Report",
                subhead: "What you planned vs. what you spent — see the gap before it widens.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "6",
                head: "Project Profitability Report",
                subhead: "Know exactly which fabrication jobs protected margin — and which ones bled it.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
            {
                id: "9",
                head: "KPI Dashboard",
                subhead: "Every business has its own success metrics — we'll define yours, and track them with precision.",
                info: [
                    "This report breaks down your monthly revenue vs. expenses and syncs directly with your landed cost entries. It compares current numbers to previous months, flags outlier trends (like sudden expense spikes or revenue dips), and highlights which departments are impacting your bottom line."
                ],
                points: [
                    "Monitor monthly margins with accurac",
                    "Catch abnormal spending or cost increases early",
                    "Track profitability by business department",
                    "Understand why your profit dipped or grew this month",
                ]
            },
        ],

        indusWork:
        {
            info: "From initial setup to ongoing support, we tailor bookkeeping solutions for architects & designers at every stage to fit your business and keep your finances in order.",
            card: [
                {
                    serial: "1",
                    img: "1.svg",
                    head: "Seamless Onboarding",
                    info: "We kick things off with a brief call, connect to your financial tools, and have your books set up accurately.",
                },
                {
                    serial: "2",
                    img: "2.svg",
                    head: "Streamlined Communication",
                    info: "Expect regular check-ins from your own account manager. Issues are flagged and resolved fast, so you always know what's happening.",
                },
                {
                    serial: "3",
                    img: "3.svg",
                    head: "Monthly Reports That Matter",
                    info: "Your books are closed and ready by the 5th of each month. Receive straightforward reports on P&L, Balance Sheet and Cash Flow.",
                },
            ],
        },

        sixSec: {
            subhead: "We bring years of stone industry finance experience into your workflow, helping you buy smarter, sell faster, and grow stronger with every financial decision.",
            info: "We've seen what holds architects & designers back and we fix it fast, with precision and clarity. Here's what sets us apart and makes us the best choice for outsourced bookkeeping services for the architects & Designers:",
            points: [
                {
                    head: "Deep experience in the stone industry",
                    info: "We've spent 5+ years solving financial challenges for architects & designers."
                },
                {
                    head: "Clean Bookkeeping & Always CPA-Ready",
                    info: "Every entry is reconciled and reviewed to ensure your books stay tax-ready, audit-ready, and always ready for your CPA.",
                },
                {
                    head: "Reports That Drive Action",
                    info: "Track Job wise cost & profitability, comparing budget vs actual, get monthly custom reports & dashboards that guide real decisions.",
                },
                {
                    head: "One Structured Pod, One Point of Contact",
                    info: "Get a dedicated account manager + finance team (bookkeeping, account payables and receivables, reporting).",
                },
                {
                    head: "Built Into Your Workflow",
                    info: "We work seamlessly within Stone Profit Systems, QuickBooks, Gusto, ADP, Expensify and your existing tools, making no extra setup required.",
                },
                {
                    head: "Complete Confidentiality with Enterprise-Grade Data Security",
                    info: "We secure your financial data with 256-bit encryption, strict 2FA access controls, regular audits, and ISO-aligned systems to keep financial data safe.",
                },
            ],
        },

        faqs: [
            {
                id: "1",
                q: "Why do architects and designers need specialised bookkeeping services?",
                a: "Creative firms face unique challenges like milestone billing, project budgeting, retainers, and consultant costs. Generic bookkeeping can't track profitability at the project level. Trueledgr builds financial clarity around projects — so you know which clients and jobs are profitable, and where costs are slipping.",
            },
            {
                id: "2",
                q: "Can Trueledgr track profitability per project or client?",
                a: "Creative firms face unique challenges like milestone billing, project budgeting, retainers, and consultant costs. Generic bookkeeping can't track profitability at the project level. Trueledgr builds financial clarity around projects — so you know which clients and jobs are profitable, and where costs are slipping.",
            },
            {
                id: "3",
                q: "Do you handle milestone and retainer billing?",
                a: "Creative firms face unique challenges like milestone billing, project budgeting, retainers, and consultant costs. Generic bookkeeping can't track profitability at the project level. Trueledgr builds financial clarity around projects — so you know which clients and jobs are profitable, and where costs are slipping.",
            },
            {
                id: "4",
                q: "How much does bookkeeping for architects and designers cost?",
                a: "Creative firms face unique challenges like milestone billing, project budgeting, retainers, and consultant costs. Generic bookkeeping can't track profitability at the project level. Trueledgr builds financial clarity around projects — so you know which clients and jobs are profitable, and where costs are slipping.",
            },
            {
                id: "5",
                q: "What monthly reports do architecture and design firms receive?",
                a: "Creative firms face unique challenges like milestone billing, project budgeting, retainers, and consultant costs. Generic bookkeeping can't track profitability at the project level. Trueledgr builds financial clarity around projects — so you know which clients and jobs are profitable, and where costs are slipping.",
            },
            {
                id: "6",
                q: "How do you handle payroll for salaried staff and 1099 contractors?",
                a: "Creative firms face unique challenges like milestone billing, project budgeting, retainers, and consultant costs. Generic bookkeeping can't track profitability at the project level. Trueledgr builds financial clarity around projects — so you know which clients and jobs are profitable, and where costs are slipping.",
            },
            {
                id: "7",
                q: "Will my books be CPA and tax-ready every month?",
                a: "Creative firms face unique challenges like milestone billing, project budgeting, retainers, and consultant costs. Generic bookkeeping can't track profitability at the project level. Trueledgr builds financial clarity around projects — so you know which clients and jobs are profitable, and where costs are slipping.",
            },
            {
                id: "8",
                q: "How secure is my firm's financial data with Trueledgr?",
                a: "Creative firms face unique challenges like milestone billing, project budgeting, retainers, and consultant costs. Generic bookkeeping can't track profitability at the project level. Trueledgr builds financial clarity around projects — so you know which clients and jobs are profitable, and where costs are slipping.",
            },
            {
                id: "9",
                q: "How quickly can Trueledgr onboard an architecture or design firm?",
                a: "Creative firms face unique challenges like milestone billing, project budgeting, retainers, and consultant costs. Generic bookkeeping can't track profitability at the project level. Trueledgr builds financial clarity around projects — so you know which clients and jobs are profitable, and where costs are slipping.",
            },
            {
                id: "10",
                q: "Do you support both small boutique studios and large design firms?",
                a: "Creative firms face unique challenges like milestone billing, project budgeting, retainers, and consultant costs. Generic bookkeeping can't track profitability at the project level. Trueledgr builds financial clarity around projects — so you know which clients and jobs are profitable, and where costs are slipping.",
            },
        ],
    },
]