'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
    Search,
    FileText,
    Car,
    Home,
    Heart,
    Shield,
    ChevronDown,
    ChevronRight,
    BookOpen,
    Filter
} from 'lucide-react'

const glossaryCategories = [
    {
        id: 'auto',
        title: 'Auto Insurance Terms',
        icon: Car,
        color: 'primary',
        terms: [
            {
                term: 'Damage to Property',
                definition: 'If your car damages someone else\'s vehicle, home, fence, or belongings, your insurance may help pay to fix or replace that property.'
            },
            {
                term: 'Medical Costs',
                definition: 'Covers medical bills if you or others are hurt in a covered accident. These costs can add up quickly and include hospital visits, ambulance fees, etc.'
            },
            {
                term: 'Potential for Lawsuit',
                definition: 'If you\'re involved in an accident, the other party might sue you. Insurance can help protect your personal assets by covering legal defense and settlements.'
            },
            {
                term: 'Bodily Injury Liability',
                definition: 'Pays for injuries or death you cause to others in an accident. This includes hospital bills, lost income, and pain and suffering. Required in most states.'
            },
            {
                term: 'Collision Coverage',
                definition: 'Pays to repair or replace your car after a collision (e.g., hitting another vehicle or object), no matter who\'s at fault.'
            },
            {
                term: 'Commercial Vehicle Insurance',
                definition: 'Needed if you use your vehicle for business purposes (like deliveries, client visits, or transport). Personal auto policies usually don\'t cover business use.'
            },
            {
                term: 'Comprehensive Coverage',
                definition: 'Covers non-collision damage like theft, fire, vandalism, falling objects, or weather (e.g., hail, flood, tornado).'
            },
            {
                term: 'Hired and Non-Owned Auto Liability',
                definition: 'For businesses: covers accidents involving rented vehicles or employees\' personal vehicles used for work.'
            },
            {
                term: 'Liability Coverage',
                definition: 'Basic coverage that pays for damage or injuries you cause to others. Includes bodily injury and property damage.'
            },
            {
                term: 'Medical Payments Coverage (MedPay)',
                definition: 'Pays medical/funeral expenses for you and your passengers after an accident, regardless of who\'s at fault.'
            },
            {
                term: 'Personal Injury Protection (PIP)',
                definition: 'Broader than MedPay. Pays for medical costs, lost wages, and more for you and passengers after an accident, regardless of fault. Required in no-fault states.'
            },
            {
                term: 'Property Damage Liability',
                definition: 'Covers damage your vehicle causes to another person\'s property (like a car, building, or mailbox).'
            },
            {
                term: 'Uninsured / Underinsured Motorist Coverage',
                definition: 'Covers your injuries and damages if the at-fault driver has no insurance or not enough to pay your costs.'
            }
        ]
    },
    {
        id: 'home',
        title: 'Homeowners, Renters, and Condo Insurance Terms',
        icon: Home,
        color: 'secondary',
        terms: [
            {
                term: 'Loss of Use Coverage',
                definition: 'Covers temporary living expenses if your home is uninhabitable.'
            },
            {
                term: 'Master Policy',
                definition: 'Covers common areas in a condo complex.'
            },
            {
                term: 'Named Perils',
                definition: 'Covers events specifically listed in the policy (e.g., fire, theft, flood, vandalism).'
            },
            {
                term: 'Replacement Cost Coverage',
                definition: 'Pays to repair/replace property to original value without depreciation.'
            },
            {
                term: 'Scheduled Property',
                definition: 'Additional coverage for high-value items (e.g., jewelry, art, tools).'
            }
        ]
    },
    {
        id: 'life',
        title: 'Life Insurance Terms',
        icon: Heart,
        color: 'accent',
        terms: [
            {
                term: 'Purpose of Life Insurance',
                definition: 'Transfers the financial risk of premature death from the insured to the insurer.'
            },
            {
                term: 'Benefit of Life Insurance',
                definition: 'Instantly creates an estate (funds) for the beneficiary upon the insured\'s death.'
            },
            {
                term: 'Face Amount',
                definition: 'The death benefit paid to beneficiaries.'
            },
            {
                term: 'Cash Value',
                definition: 'Savings/investment component in permanent policies that grows tax-deferred. Represents the amount received if the policy is surrendered. Early premiums mostly cover death protection costs; later premiums increasingly build cash value. Policy loans can be taken against cash value but accrue interest. The amount depends on face amount, premium payments, and policy duration.'
            },
            {
                term: 'Surrender Value',
                definition: 'Amount received if the policy is canceled before death or maturity.'
            },
            {
                term: 'Maturity Date',
                definition: 'Typically age 100, when the policy\'s face amount equals cash value.'
            },
            {
                term: 'Term Life Insurance',
                definition: 'Provides temporary, pure protection for a specific period (term), paying a death benefit only if the insured dies during that term. Offers maximum death benefit for lowest initial cost. Does not build cash value. Term can be defined by years (e.g., 10, 20 years) or age (e.g., until age 65). If the insured survives the term, the policy expires with no payout.'
            },
            {
                term: 'Whole Life Insurance',
                definition: 'Permanent life insurance that provides lifelong coverage with fixed premiums and a guaranteed death benefit. Combines pure death protection with a cash value savings element that grows over time and can be accessed by the policy owner. Coverage lasts for the insured\'s entire life, typically until age 100. The death benefit remains constant, premiums are fixed for life, and cash value accumulates with guaranteed interest.'
            },
            {
                term: 'Temporary Life Insurance (Term Life)',
                definition: 'Provides pure, temporary protection with the maximum coverage at the lowest initial premium. No cash value or equity. Types include: Level Term (fixed death benefit for set period), Increasing Term (death benefit increases periodically), Decreasing Term (death benefit decreases over time, e.g., mortgage redemption insurance), Credit Life (covers debtor\'s loan balance if they die before loan repayment). Features include option to convert to permanent insurance without evidence of insurability, option to renew without evidence of insurability, step-up premiums that increase steadily, and annually renewable term (ART) allowing yearly renewals. Advantages: less expensive than permanent insurance, protects insurability, suitable for debts or supplementing permanent insurance. Disadvantages: coverage ends when term expires, premiums increase with age, no cash value.'
            },
            {
                term: 'Permanent Life Insurance (Whole Life)',
                definition: 'Provides lifetime coverage with fixed premiums and death benefits. Builds tax-deferred cash value that matures at age 100. Types include: Ordinary Whole Life (premiums paid continuously while insured is alive), Limited Payment Whole Life (premiums paid over limited time), Single Premium Whole Life (one lump sum premium; most expensive initially), Modified Whole Life (lower initial premiums that increase after introductory period), Graded Premium Whole Life (premiums increase annually early on, then level off), Enhanced Whole Life (low premium, participating policy), Indexed Whole Life (death benefit increases with inflation/Consumer Price Index), Equity Indexed Whole Life (policyholder shares gains from indexed investments with guaranteed minimums).'
            },
            {
                term: 'Adjustable Whole Life Insurance',
                definition: 'Combines term and permanent insurance; flexible premiums and death benefits.'
            },
            {
                term: 'Universal Life (UL) Insurance',
                definition: 'Flexible premiums, adjustable death benefits, tax-deferred cash value with guaranteed interest. Coverage lasts as long as premiums or cash value cover the cost of insurance. Policy can be surrendered for cash value. Offers two death benefit options: Option A (death benefit = cash value + decreasing pure insurance) and Option B (death benefit = face amount + cash value/level pure insurance).'
            },
            {
                term: 'Equity Index Universal Life Insurance',
                definition: 'Combines traditional life insurance features with potential interest earnings linked to an equity index.'
            },
            {
                term: 'Ordinary Whole Life',
                definition: 'Premiums paid continuously while insured is alive.'
            },
            {
                term: 'Limited Payment Whole Life',
                definition: 'Premiums paid over a limited time.'
            },
            {
                term: 'Single Premium Whole Life',
                definition: 'One lump sum premium; most expensive initially.'
            },
            {
                term: 'Modified Whole Life',
                definition: 'Lower initial premiums that increase after an introductory period.'
            },
            {
                term: 'Graded Premium Whole Life',
                definition: 'Premiums increase annually early on, then level off.'
            },
            {
                term: 'Enhanced Whole Life',
                definition: 'Low premium, participating policy.'
            },
            {
                term: 'Indexed Whole Life',
                definition: 'Death benefit increases with inflation (Consumer Price Index).'
            },
            {
                term: 'Equity Indexed Whole Life',
                definition: 'Policyholder shares gains from indexed investments with guaranteed minimums.'
            },
            {
                term: 'Credit Life',
                definition: 'Covers a debtor\'s loan balance if they die before loan repayment.'
            },
            {
                term: 'Annually Renewable Term (ART)',
                definition: 'Allows yearly renewals with step-up premiums that increase steadily.'
            },
            {
                term: 'Universal Life Insurance',
                definition: 'Flexible premiums and adjustable death benefit. Allows for additional premium contributions (subject to IRS rules). Offers policy transparency via annual financial reports.'
            },
            {
                term: 'Variable Life (VL) Insurance',
                definition: 'Permanent life insurance with fixed premiums. Guaranteed minimum death benefit. Death benefit and cash value vary based on investment performance. Cash value invested in a separate account in securities. Policyowner controls the investment portion.'
            },
            {
                term: 'Variable Universal Life (VUL) Insurance',
                definition: 'Hybrid of Universal Life (UL) and Variable Life (VL). Flexible premiums and adjustable death benefit. Policyowner controls the investment aspect. Combines investment features with flexible premiums.'
            },
            {
                term: 'Modified Endowment Contract (MEC)',
                definition: 'Result from overfunded whole life policies failing the IRS seven-pay test (premium limits in first 7 years). Single premium whole life policies are automatically MECs. MECs lose favorable tax treatment. Withdrawals taxed as gains first (LIFO), even if used for hardship. Withdrawals before age 59½ incur a 10% penalty tax. Once a policy is MEC, it cannot revert to ordinary life insurance status unless materially changed and retested.'
            },
            {
                term: 'Credit Insurance',
                definition: 'Pays off loans if the insured dies.'
            },
            {
                term: 'Industrial (Home Service) Life Insurance',
                definition: 'Small face amounts (e.g., $1,000), premiums collected weekly or monthly at the policy owner\'s home. Often marketed as burial insurance; may include accidental death benefits. Also called home service or debit companies, which assign agent to geographic areas (debits). Monthly debit ordinary life insurance is a hybrid of industrial and ordinary life insurance with higher face amounts and premiums. Industrial life insurance was once common but has declined due to higher wages, better life insurance awareness, and employer group coverage.'
            },
            {
                term: 'Face Amount Plus Cash Value',
                definition: 'Pays face amount plus cash value upon death; requires higher premiums; uncommon.'
            },
            {
                term: 'Accidental Death and Dismemberment (AD&D)',
                definition: 'Pays benefits for accidental death, limb loss, blindness, or paralysis.'
            },
            {
                term: 'Non-Medical Life Insurance',
                definition: 'No medical exam required, usually more expensive.'
            },
            {
                term: 'Minimum Deposit Life Insurance',
                definition: 'Financing method for high-tax-bracket individuals; allows policy loans to pay premiums annually.'
            },
            {
                term: 'Participating Policies',
                definition: 'Pay dividends from insurer\'s profits (common in mutual companies).'
            },
            {
                term: 'Non-Participating Policies',
                definition: 'Do not pay dividends.'
            },
            {
                term: 'Stranger-Owned Life Insurance (STOLI)',
                definition: 'Policy bought to be sold to third parties without insurable interest; generally illegal.'
            },
            {
                term: 'Investor-Owned Life Insurance (IOLI)',
                definition: 'Investors purchase policies on unrelated individuals. Considered fraudulent and generally prohibited.'
            },
            {
                term: 'Family Policy',
                definition: 'Insures entire family under one policy. Primary insured (breadwinner) has whole life coverage. Spouse and children have level term coverage via rider. Children\'s coverage often convertible to whole life without insurability proof. New children added automatically at no extra cost.'
            },
            {
                term: 'Family Income & Maintenance',
                definition: 'Provide monthly income plus death benefit.'
            },
            {
                term: 'Family Income Policies',
                definition: 'Combination of whole life and decreasing term insurance. Provides monthly income to beneficiary if insured dies within a specified period after policy purchase. Decreasing term portion supplies income payments. If insured dies after specified period, only whole life face value is paid.'
            },
            {
                term: 'Family Maintenance Policies',
                definition: 'Combines whole life and level term insurance. Provides income to beneficiary for a set number of years starting at insured\'s death (if before a set period). At end of income period, beneficiary receives the whole life face amount. If insured dies after the period, only whole life face amount is paid.'
            },
            {
                term: 'Family Plan Policy',
                definition: 'Insures all family members under one policy.'
            },
            {
                term: 'Family Maintenance Policy',
                definition: 'Combines whole life and level term insurance; provides income for a set period after insured\'s death.'
            },
            {
                term: 'Joint Life Policy',
                definition: 'Covers two or more people; pays on the first death.'
            },
            {
                term: 'Last to Die (Survivor) Policy',
                definition: 'Covers multiple people; pays on the last death.'
            },
            {
                term: 'Juvenile Life Insurance',
                definition: 'Insures a minor\'s life with any ordinary life policy.'
            },
            {
                term: 'Endowment Policy',
                definition: 'Rapid cash value growth, matures before age 100. Higher premiums than whole life. Pays death benefit if insured dies or survives the endowment period.'
            },
            {
                term: 'Monthly Debit Ordinary Life Insurance',
                definition: 'Combination of industrial and ordinary life insurance.'
            },
            {
                term: 'Face Amount Plus Cash Value Policy',
                definition: 'Pays the sum of face amount plus cash value upon insured\'s death.'
            },
            {
                term: 'Joint Life (First-to-Die)',
                definition: 'Covers two or more lives with permanent insurance. Pays death benefit on first death ("first to die"). Survivors can buy individual policies without evidence of insurability. Premium based on averaged ages, generally cheaper than separate policies.'
            },
            {
                term: 'Survivorship Life (Last-to-Die)',
                definition: 'Pays death benefit after the last surviving insured dies ("second to die"). Useful for estate planning and paying taxes on assets. Premium is lower than combined individual policies.'
            },
            {
                term: 'Juvenile Insurance',
                definition: 'Life insurance on minors; owned and paid by adult (parent/guardian). Minor\'s consent not required; insurable interest needed only at application. Coverage often converts ownership when child comes of age. Age of maturity typically 15 or 16 depending on state.'
            },
            {
                term: 'Jumping Juvenile Insurance (Estate Builder)',
                definition: 'Starts with low coverage amount (e.g., $1,000). Coverage "jumps" to a higher amount at a specified age (like 21) without new insurability proof or premium increase. Used to protect child\'s insurability and start savings.'
            },
            {
                term: 'Endowment Contracts',
                definition: 'Policies with rapidly growing cash value that mature ("endow") before age 100. Pay death benefit if insured dies during endowment period; if insured survives, pay face amount at maturity. Used for retirement or education funding. Premiums are high due to accelerated cash value growth. Variants include Semi-endowment (pays 100% on death, 50% if survives), Pure endowment (pays only if survives), and Juvenile endowment (matures when child reaches a certain age). Less common today due to tax law changes.'
            },
            {
                term: 'Modified Endowment Contract (MEC)',
                definition: 'Result from overfunded whole life policies failing the IRS seven-pay test (premium limits in first 7 years). Single premium whole life policies are automatically MECs. MECs lose favorable tax treatment. Withdrawals taxed as gains first (LIFO), even if used for hardship. Withdrawals before age 59½ incur a 10% penalty tax. Once a policy is MEC, it cannot revert to ordinary life insurance status unless materially changed and retested.'
            },
            {
                term: 'Level Term',
                definition: 'Term life insurance where the death benefit and premiums stay constant throughout the term.'
            },
            {
                term: 'Decreasing Term',
                definition: 'Term life insurance where the death benefit decreases over time, commonly used to cover declining debts like mortgages or loans (e.g., Mortgage Redemption Insurance, Credit Life Insurance).'
            },
            {
                term: 'Increasing Term',
                definition: 'Term life insurance where the death benefit increases over time, often to keep up with income growth or inflation.'
            },
            {
                term: 'Renewable Term',
                definition: 'Term life insurance that allows renewal without evidence of insurability, but premiums increase with age.'
            },
            {
                term: 'Convertible Term',
                definition: 'Term life insurance that allows conversion to permanent life insurance without a medical exam, usually before a specified age.'
            },
            {
                term: 'Annually Renewable Term',
                definition: 'Provides one-year coverage renewable annually with premiums that increase each year.'
            },
            {
                term: 'Whole Life (Straight/Ordinary)',
                definition: 'Permanent life insurance with fixed premiums, grows cash value, and matures at age 100.'
            },
            {
                term: 'Limited Pay Life',
                definition: 'Permanent life insurance where you pay premiums for a set period (e.g., 20 years) but coverage lasts for life.'
            },
            {
                term: 'Modified Life',
                definition: 'Permanent life insurance with lower initial premiums that increase after a set period.'
            },
            {
                term: 'Endowment Contracts',
                definition: 'Permanent life insurance that pays the face value at a specified time or on death.'
            },
            {
                term: 'Paid-Up Life',
                definition: 'Permanent life insurance where the policy is fully paid after a certain number of years.'
            }
        ]
    },
    {
        id: 'risk',
        title: 'Types of Risk',
        icon: Shield,
        color: 'accent',
        terms: [
            {
                term: 'Pure Risk',
                definition: 'Only the chance of loss; insurable.'
            },
            {
                term: 'Speculative Risk',
                definition: 'Chance of loss or gain; not insurable.'
            }
        ]
    },
    {
        id: 'insurable-risk',
        title: 'Elements of Insurable Risk',
        icon: Shield,
        color: 'primary',
        terms: [
            {
                term: 'Accidental',
                definition: 'Not intentional.'
            },
            {
                term: 'Definite and Measurable',
                definition: 'Specific time, place, and dollar amount.'
            },
            {
                term: 'Predictable',
                definition: 'Losses can be estimated.'
            },
            {
                term: 'Non-Catastrophic',
                definition: 'No war/nuclear events.'
            },
            {
                term: 'Numerous',
                definition: 'Large group to spread risk.'
            },
            {
                term: 'Randomly Selected',
                definition: 'Avoid adverse selection.'
            }
        ]
    },
    {
        id: 'loss',
        title: 'Loss vs. Loss Exposure',
        icon: FileText,
        color: 'secondary',
        terms: [
            {
                term: 'Loss Exposure',
                definition: 'Possibility of financial loss.'
            },
            {
                term: 'Loss',
                definition: 'The actual damage or injury incurred.'
            }
        ]
    },
    {
        id: 'loss-exposure',
        title: 'Types of Loss Exposure',
        icon: FileText,
        color: 'accent',
        terms: [
            {
                term: 'Property Loss Exposure',
                definition: 'Damage/loss of property or use.'
            },
            {
                term: 'Liability Loss Exposure',
                definition: 'Legal responsibility for injury/damage to others.'
            }
        ]
    },
    {
        id: 'perils-hazards',
        title: 'Perils & Hazards',
        icon: Shield,
        color: 'primary',
        terms: [
            {
                term: 'Peril',
                definition: 'Cause of loss (e.g., fire, theft).'
            },
            {
                term: 'Hazard',
                definition: 'Condition increasing chance/severity of loss. Types: Physical, Moral, Morale, Legal.'
            }
        ]
    },
    {
        id: 'insurance-basics',
        title: 'Insurance Basics',
        icon: Shield,
        color: 'secondary',
        terms: [
            {
                term: 'Insurance',
                definition: 'Transfers risk from insured to insurer via premiums. Based on risk pooling.'
            },
            {
                term: 'Self-Insurer',
                definition: 'Pays for own losses, doesn\'t transfer risk.'
            },
            {
                term: 'Surplus Lines Insurance',
                definition: 'Covers unusual/high-risk situations not in standard markets.'
            },
            {
                term: 'Risk Retention Group',
                definition: 'Group-owned insurer for liability risks of members.'
            }
        ]
    },
    {
        id: 'benefits-society',
        title: 'Benefits of Insurance to Society',
        icon: Shield,
        color: 'accent',
        terms: [
            {
                term: 'Loss Control',
                definition: 'e.g., fire alarms.'
            },
            {
                term: 'Loss Payments',
                definition: 'Indemnity.'
            },
            {
                term: 'Securing Credit',
                definition: 'e.g., mortgage lenders require insurance.'
            }
        ]
    },
    {
        id: 'risk-management',
        title: 'Risk Management Concepts',
        icon: Shield,
        color: 'primary',
        terms: [
            {
                term: 'Risk',
                definition: 'Chance of loss (e.g., damage, injury).'
            },
            {
                term: 'Risk Retention',
                definition: 'Pay out-of-pocket.'
            },
            {
                term: 'Risk Sharing',
                definition: 'Spread among group.'
            },
            {
                term: 'Risk Avoidance',
                definition: 'Eliminate risk.'
            },
            {
                term: 'Risk Reduction',
                definition: 'Minimize risk.'
            },
            {
                term: 'Risk Transfer',
                definition: 'Use insurance.'
            }
        ]
    },
    {
        id: 'indemnity',
        title: 'Indemnity / Pay on Behalf Of',
        icon: FileText,
        color: 'secondary',
        terms: [
            {
                term: 'Indemnity',
                definition: 'Restores insured to pre-loss state. No profit allowed.'
            },
            {
                term: 'Pay on Behalf Of',
                definition: 'Insurer may pay directly to third parties on your behalf.'
            }
        ]
    },
    {
        id: 'adverse-selection',
        title: 'Adverse Selection',
        icon: FileText,
        color: 'accent',
        terms: [
            {
                term: 'Adverse Selection',
                definition: 'High-risk individuals getting insurance at lower premiums due to misrepresentation. Insurers use underwriting to prevent.'
            }
        ]
    },
    {
        id: 'law-large-numbers',
        title: 'Law of Large Numbers',
        icon: FileText,
        color: 'primary',
        terms: [
            {
                term: 'Law of Large Numbers',
                definition: 'More policyholders = more accurate predictions of losses. Helps insurers stabilize rates.'
            }
        ]
    },
    {
        id: 'reinsurance',
        title: 'Reinsurance',
        icon: FileText,
        color: 'secondary',
        terms: [
            {
                term: 'Reinsurance',
                definition: 'Reinsurer insures the insurer. Used to manage catastrophic losses or expand capacity.'
            },
            {
                term: 'Ceding Company',
                definition: 'Original insurer.'
            },
            {
                term: 'Assuming Company',
                definition: 'Reinsurer.'
            },
            {
                term: 'Cession',
                definition: 'Transfer of risk.'
            }
        ]
    },
    {
        id: 'rate-filing',
        title: 'Rate Filing & Form Services',
        icon: FileText,
        color: 'accent',
        terms: [
            {
                term: 'ISO (Insurance Services Office)',
                definition: 'Provides standard policy forms, offers data, actuarial tools, anti-fraud support. Used industry-wide, but state laws may override forms.'
            }
        ]
    }
]

// Flatten all terms for alphabetical search
const allTerms = glossaryCategories.flatMap(category =>
    category.terms.map(term => ({
        ...term,
        category: category.title,
        categoryId: category.id
    }))
).sort((a, b) => a.term.localeCompare(b.term))

// Group terms by first letter
const termsByLetter = allTerms.reduce((acc, term) => {
    const firstLetter = term.term.charAt(0).toUpperCase()
    if (!acc[firstLetter]) {
        acc[firstLetter] = []
    }
    acc[firstLetter].push(term)
    return acc
}, {} as Record<string, typeof allTerms>)

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function InsuranceGlossary() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const [selectedLetter, setSelectedLetter] = useState<string>('')
    const [viewMode, setViewMode] = useState<'category' | 'alphabetical'>('category')
    const [expandedCategories, setExpandedCategories] = useState<string[]>(['auto'])

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        )
    }

    const resetFilters = () => {
        setSearchTerm('')
        setSelectedCategory('all')
        setSelectedLetter('')
    }

    // Filter terms based on search and selected filters
    const filteredTerms = useMemo(() => {
        let filtered = allTerms

        if (searchTerm) {
            filtered = filtered.filter(term =>
                term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                term.definition.toLowerCase().includes(searchTerm.toLowerCase())
            )
        }

        if (selectedCategory !== 'all') {
            filtered = filtered.filter(term => term.categoryId === selectedCategory)
        }

        if (selectedLetter) {
            filtered = filtered.filter(term =>
                term.term.charAt(0).toUpperCase() === selectedLetter
            )
        }

        return filtered
    }, [searchTerm, selectedCategory, selectedLetter])

    const filteredCategories = useMemo(() => {
        let filtered = glossaryCategories.map(category => ({
            ...category,
            terms: category.terms.filter(term =>
                term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                term.definition.toLowerCase().includes(searchTerm.toLowerCase())
            )
        })).filter(category => category.terms.length > 0)

        // Apply category filter if selected
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(category => category.id === selectedCategory)
        }

        return filtered
    }, [searchTerm, selectedCategory])

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-full border border-primary-200 mb-6">
                        <BookOpen className="h-4 w-4 text-primary-600 mr-2" />
                        <span className="text-primary-700 text-sm font-medium">
                            Insurance Glossary
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Understanding <span className="gradient-text">Insurance Terms</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Insurance terminology can be confusing. We've simplified the most common terms
                        to help you understand your coverage better.
                    </p>
                </motion.div>

                {/* Search and Filter Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl mx-auto mb-8"
                >
                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search for insurance terms..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-300"
                        />
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                        <div className="flex bg-white rounded-xl p-1 shadow-sm border">
                            <button
                                onClick={() => setViewMode('category')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${viewMode === 'category'
                                    ? 'bg-primary-500 text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                By Category
                            </button>
                            <button
                                onClick={() => setViewMode('alphabetical')}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${viewMode === 'alphabetical'
                                    ? 'bg-primary-500 text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                Alphabetical
                            </button>
                        </div>

                        {/* Category Filter */}
                        {viewMode === 'category' && (
                            <div className="flex items-center gap-2">
                                <Filter className="h-4 w-4 text-gray-500" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                >
                                    <option value="all">All Categories</option>
                                    {glossaryCategories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Letter Filter */}
                        {viewMode === 'alphabetical' && (
                            <div className="flex items-center gap-2">
                                <Filter className="h-4 w-4 text-gray-500" />
                                <select
                                    value={selectedLetter}
                                    onChange={(e) => setSelectedLetter(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                >
                                    <option value="">All Letters</option>
                                    {alphabet.map(letter => (
                                        <option key={letter} value={letter}>
                                            {letter}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Reset Button */}
                        {(searchTerm || selectedCategory !== 'all' || selectedLetter) && (
                            <button
                                onClick={resetFilters}
                                className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>

                    {/* Results Count */}
                    <div className="text-center text-gray-600 text-sm">
                        {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
                    </div>
                </motion.div>

                {/* Glossary Content */}
                {viewMode === 'category' ? (
                    /* Category View */
                    <div className="space-y-6">
                        {filteredCategories.map((category, categoryIndex) => {
                            const IconComponent = category.icon
                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                                    className="bg-white rounded-2xl shadow-soft overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleCategory(category.id)}
                                        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${category.color === 'primary' ? 'bg-primary-100' :
                                                category.color === 'secondary' ? 'bg-secondary-100' : 'bg-accent-100'
                                                }`}>
                                                <IconComponent className={`h-6 w-6 ${category.color === 'primary' ? 'text-primary-600' :
                                                    category.color === 'secondary' ? 'text-secondary-600' : 'text-accent-600'
                                                    }`} />
                                            </div>
                                            <div className="text-left">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {category.title}
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    {category.terms.length} term{category.terms.length !== 1 ? 's' : ''}
                                                </p>
                                            </div>
                                        </div>
                                        {expandedCategories.includes(category.id) ? (
                                            <ChevronDown className="h-5 w-5 text-gray-400" />
                                        ) : (
                                            <ChevronRight className="h-5 w-5 text-gray-400" />
                                        )}
                                    </button>

                                    {expandedCategories.includes(category.id) && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-gray-100"
                                        >
                                            <div className="p-6 space-y-4">
                                                {category.terms.map((term, termIndex) => (
                                                    <motion.div
                                                        key={term.term}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: termIndex * 0.05 }}
                                                        className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200"
                                                    >
                                                        <h4 className="font-semibold text-gray-900 mb-2">
                                                            {term.term}
                                                        </h4>
                                                        <p className="text-gray-700 leading-relaxed">
                                                            {term.definition}
                                                        </p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            )
                        })}
                    </div>
                ) : (
                    /* Alphabetical View */
                    <div className="space-y-8">
                        {alphabet.map(letter => {
                            const letterTerms = filteredTerms.filter(term =>
                                term.term.charAt(0).toUpperCase() === letter
                            )

                            if (letterTerms.length === 0) return null

                            return (
                                <motion.div
                                    key={letter}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-white rounded-2xl shadow-soft overflow-hidden"
                                >
                                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-6">
                                        <h3 className="text-2xl font-bold">{letter}</h3>
                                        <p className="text-primary-100 text-sm">
                                            {letterTerms.length} term{letterTerms.length !== 1 ? 's' : ''}
                                        </p>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        {letterTerms.map((term, termIndex) => (
                                            <motion.div
                                                key={term.term}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: termIndex * 0.05 }}
                                                className="border-b border-gray-100 pb-4 last:border-b-0"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0">
                                                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                                            <span className="text-primary-600 font-semibold text-sm">
                                                                {termIndex + 1}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="font-semibold text-gray-900 mb-2">
                                                            {term.term}
                                                        </h4>
                                                        <p className="text-gray-700 leading-relaxed mb-2">
                                                            {term.definition}
                                                        </p>
                                                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                            {term.category}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                )}

                {/* No Results Message */}
                {filteredTerms.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-12"
                    >
                        <div className="bg-white rounded-2xl shadow-soft p-8 max-w-md mx-auto">
                            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                No terms found
                            </h3>
                            <p className="text-gray-600">
                                Try adjusting your search terms or filters to find what you're looking for.
                            </p>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    )
} 