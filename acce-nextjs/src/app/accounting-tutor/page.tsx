import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubjectGuides from "@/components/SubjectGuides";
import SessionFormats from "@/components/SessionFormats";
import ConversionCtas from "@/components/ConversionCtas";
import { getGuidesForSubject } from "@/config/guides";
import { BookOpen, Users, Award, HelpCircle, TrendingUp, Check, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "Accounting Tutor for CA(SA), PGDA & CTA | ACCE Tutors",
    description: "One-on-one & group Accounting tutoring for undergrad, PGDA and CTA. Financial accounting, consolidations and IFRS: pass with ACCE Tutors.",
    alternates: {
        canonical: "/accounting-tutor/",
    },
    openGraph: {
        title: "Accounting Tutor for CA(SA), PGDA & CTA | ACCE Tutors",
        description: "One-on-one & group Accounting tutoring for undergrad, PGDA and CTA. Financial accounting, consolidations and IFRS: pass with ACCE Tutors.",
    },
    twitter: {
        title: "Accounting Tutor for CA(SA), PGDA & CTA | ACCE Tutors",
        description: "One-on-one & group Accounting tutoring for undergrad, PGDA and CTA. Financial accounting, consolidations and IFRS: pass with ACCE Tutors.",
    },
};

const FAQ_ITEMS = [
    {
        question: "What accounting topics do you focus on at undergraduate level?",
        answer: "At undergraduate level I cover the foundations: the accounting equation, double-entry mechanics, bank reconciliations, accruals and prepayments, inventory valuation (FIFO, weighted average), and introductory financial statements. As students progress through second and third year we move into partnership accounts, company financial statements, property plant and equipment under IAS 16, and an introduction to consolidated financial statements. The goal is to build accuracy at the fundamentals before the complexity of PGDA and CTA kicks in.",
    },
    {
        question: "Why do students struggle most with group statements and consolidations?",
        answer: "Consolidations require you to hold multiple entities in your head simultaneously: the parent, one or more subsidiaries, intragroup transactions, and the non-controlling interest. Most undergraduate courses introduce consolidations late in third year, which does not leave much time to build fluency before the PGDA. At CTA level the questions add goodwill impairment, step acquisitions, partial disposals, and the interaction with IFRS 3 Business Combinations. The students I work with typically have the mechanics in isolation but lose marks when they are combined in a single scenario. Structured practice on recognising which standard applies and in which order fixes most of that.",
    },
    {
        question: "Which IFRS standards are most tested at PGDA and CTA level?",
        answer: "The standards that appear most frequently in SAICA assessments and the ITC are IFRS 15 (revenue recognition, five-step model, contract modifications, variable consideration), IFRS 16 (lessee accounting, right-of-use assets, lease liability unwinding), IAS 36 (impairment of assets, including goodwill), IAS 12 (deferred tax, a common mark-loss area), and IFRS 9 (financial instruments classification and measurement). IFRS 3 Business Combinations underpins most consolidation questions. I cover all of these in depth, including the journal entries and disclosure requirements the ITC examines.",
    },
    {
        question: "Do you help with UNISA accounting modules?",
        answer: "Yes. UNISA students make up a significant portion of the students I work with, particularly at second and third year level (FAC2601, FAC2602, FAC3701, FAC3702). Distance learning means you often have to work through difficult standards without a lecturer to ask. I help UNISA accounting students understand the technical content, work through assignment questions, and prepare for the exams. I am also familiar with how UNISA structures its accounting assessments, which helps me direct session time efficiently.",
    },
    {
        question: "How does Accounting tutoring at CTA level differ from undergraduate sessions?",
        answer: "At undergraduate level we are often building or repairing the fundamentals. At CTA level the issues are different: students generally know the standards individually but struggle to apply them under time pressure in a multi-standard scenario. ITC exam questions layer several standards into a single case fact pattern and ask for a combined journal, a revised statement of financial position, or a disclosure note. CTA sessions focus on reading and decomposing exam scenarios quickly, identifying the standards at play, and producing structured, mark-earning answers rather than exhaustive technical treatises.",
    },
    {
        question: "How do I book a session?",
        answer: "The quickest way is to send a WhatsApp message to +27 71 325 5295. Tell me which level you are studying (undergrad/PGDA/CTA), the module or standard you are working on, and what you are specifically struggling with. I will confirm availability and we will schedule a time.",
    },
];

const SERVICE_DATA = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Accounting Tutoring",
    serviceType: "Academic Tutoring",
    description:
        "One-on-one and group tutoring for financial accounting, group statements, consolidations, and IFRS standards for undergraduate, PGDA and CTA students on the CA(SA) pathway.",
    areaServed: "South Africa",
    provider: {
        "@id": "https://accetutors.co.za/#organization",
    },
};

const FAQPAGE_DATA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
        },
    })),
};

export default function AccountingTutorPage() {
    const guidesHref = getGuidesForSubject("accounting").length > 0 ? "#guides" : "/guides";

    return (
        <div className="min-h-screen bg-background">
            <JsonLd id="accounting-tutor-jsonld-service" data={SERVICE_DATA} />
            <JsonLd id="accounting-tutor-jsonld-faq" data={FAQPAGE_DATA} />
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">

                    {/* Hero Header */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                                Accounting Subject
                            </span>
                            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                                Undergrad to CTA
                            </span>
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Accounting Tutoring for CA(SA) Students
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            Financial accounting is the technical backbone of the CA(SA) pathway. From your first encounter with the accounting equation to CTA-level IFRS and group statements, the depth builds quickly. I help accounting students at every stage understand the standards, apply them correctly in assessments, and stop losing marks to the same gaps.
                        </p>
                        <ConversionCtas
                            bookLabel="Book an Accounting Session"
                            guidesHref={guidesHref}
                        />
                    </div>

                    {/* Section 1: What we cover */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="w-6 h-6 text-accent" aria-hidden="true" />
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                                What we cover: financial accounting, consolidations and IFRS
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Sessions cover the full financial accounting curriculum, from first-year foundations to the multi-standard scenarios the SAICA ITC examines. These are the topics students book most often.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-card rounded-xl border border-border p-6">
                                <h3 className="font-display text-base font-semibold text-foreground mb-3">
                                    Undergraduate Foundations
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Conceptual framework and financial statement preparation",
                                        "Inventory (IAS 2) and property plant and equipment (IAS 16)",
                                        "Provisions (IAS 37)",
                                        "Partnership and company accounts",
                                        "Introduction to consolidated financial statements",
                                    ].map((topic) => (
                                        <li key={topic} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card rounded-xl border border-border p-6">
                                <h3 className="font-display text-base font-semibold text-foreground mb-3">
                                    Group Statements &amp; Consolidations
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "IFRS 3 Business Combinations",
                                        "Goodwill and impairment (IAS 36)",
                                        "Non-controlling interest",
                                        "Intragroup eliminations",
                                        "Step acquisitions and partial disposals",
                                    ].map((topic) => (
                                        <li key={topic} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card rounded-xl border border-border p-6">
                                <h3 className="font-display text-base font-semibold text-foreground mb-3">
                                    IFRS Standards in Depth
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "IFRS 15 revenue: five-step model, variable consideration, contract modifications",
                                        "IFRS 16 leases: right-of-use assets, lease liability unwinding",
                                        "IAS 12 deferred tax",
                                        "IFRS 9 financial instruments",
                                    ].map((topic) => (
                                        <li key={topic} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Who it's for */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="w-6 h-6 text-accent" aria-hidden="true" />
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                                Who it is for: undergrad, PGDA and CTA accounting students
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-card rounded-xl border border-border p-6">
                                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                                    Undergraduate Students
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    First, second and third year accounting students at South African universities including UNISA, UCT, Wits, UJ, UP, and Stellenbosch. If you are working through FAC modules at UNISA or preparing for end-of-year exams, sessions are structured around your specific module and assessment schedule.
                                </p>
                            </div>
                            <div className="bg-card rounded-xl border border-border p-6">
                                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                                    PGDA Students
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    The PGDA (Postgraduate Diploma in Accounting, also called CTA) year is where Accounting becomes significantly more complex. IFRS standards, consolidations, and deferred tax all appear at full depth. Sessions focus on building accuracy across the standards most likely to appear in SAICA internal assessments and the ITC.
                                </p>
                            </div>
                            <div className="bg-card rounded-xl border border-border p-6">
                                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                                    CTA-Level Students
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    At CTA level, accounting tutoring addresses the integration that the ITC demands: applying multiple standards in a single scenario, structuring journal entries efficiently under time pressure, and recognising what the question is actually testing. The ITC Paper 1 is heavily weighted toward financial accounting and tax; dedicated accounting preparation makes a measurable difference.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: How sessions work (shared, compact) */}
                    <SessionFormats subjectLabel="Accounting" />

                    {/* Section 4: Why ACCE */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="w-6 h-6 text-accent" aria-hidden="true" />
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                                Why ACCE: CA(SA) tutors, accounting experience, results
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            I am Priyanka, a CA(SA) who came up through the same SAICA pathway you are on: the same financial accounting curriculum, the same IFRS standards, and the ITC itself. That means I can show you not just what a standard says, but where students consistently misapply it and how the ITC Paper 1 allocates marks. Sessions focus on the sequence within a question, which standard applies, in what order, and how to structure the journal or disclosure note, because that is what the ITC is actually testing.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-card rounded-xl border border-border p-6">
                                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                    &ldquo;I had been getting consolidations wrong in every internal assessment. After four sessions focused specifically on group statements, I finally understood where my intragroup eliminations were going wrong and how to structure the worksheet properly.&rdquo;
                                </p>
                                <span className="text-accent text-sm font-medium">PGDA student, 2024</span>
                            </div>
                            <div className="bg-card rounded-xl border border-border p-6">
                                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                    &ldquo;IFRS 15 was genuinely confusing me. The five-step model made sense in isolation but I could not apply it to exam questions. Two sessions with Priyanka walking through variable consideration and contract modifications sorted it out.&rdquo;
                                </p>
                                <span className="text-accent text-sm font-medium">CTA student, 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Where this subject fits on the pathway (internal links) */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="w-6 h-6 text-accent" aria-hidden="true" />
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                                Where Financial Accounting fits on the CA(SA) pathway
                            </h2>
                        </div>
                        <div className="bg-card rounded-xl border border-border p-6">
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                For context on the full CA(SA) pathway, including how Financial Accounting fits alongside Tax, MAF and Auditing at the PGDA level, see the{" "}
                                <Link href="/cta-tutor" className="text-accent hover:underline">
                                    CTA tutor overview
                                </Link>{" "}
                                and the{" "}
                                <Link href="/pgda-tutor" className="text-accent hover:underline">
                                    PGDA tutor page
                                </Link>
                                . For the full subject list and where Accounting sits in the curriculum, visit the{" "}
                                <Link href="/subjects" className="text-accent hover:underline">
                                    subjects page
                                </Link>
                                . For the IFRS standards Accounting leans on most, see my{" "}
                                <Link href="/guides/ifrs-15" className="text-accent hover:underline">
                                    IFRS 15 study guide
                                </Link>{" "}
                                and{" "}
                                <Link href="/guides/ifrs-16" className="text-accent hover:underline">
                                    IFRS 16 study guide
                                </Link>
                                .
                            </p>
                        </div>
                    </div>

                    {/* Study guides for this subject */}
                    <div className="mb-16">
                        <SubjectGuides subject="accounting" subjectLabel="Financial Accounting" />
                    </div>

                    {/* Section 6: FAQ */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <HelpCircle className="w-6 h-6 text-accent" aria-hidden="true" />
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                                Frequently asked questions
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {FAQ_ITEMS.map((item, index) => (
                                <details
                                    key={index}
                                    className="group bg-card rounded-xl border border-border"
                                >
                                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                        <h3 className="font-display text-base font-semibold text-foreground">
                                            {item.question}
                                        </h3>
                                        <ChevronDown
                                            className="w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                                            aria-hidden="true"
                                        />
                                    </summary>
                                    <p className="text-muted-foreground text-sm leading-relaxed px-6 pb-6">
                                        {item.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
                            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                                Ready to get serious about Accounting?
                            </h2>
                            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                                Whether it is consolidations, IFRS standards, or ITC preparation, book a session and we will work on it together.
                            </p>
                            <ConversionCtas
                                bookLabel="Book a Session on WhatsApp"
                                guidesHref="/guides"
                                align="center"
                            />
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
