import { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionFormats from "@/components/SessionFormats";
import ConversionCtas from "@/components/ConversionCtas";
import { BookOpen, Users, Award, HelpCircle, CheckCircle, Check, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "PGDA Tutor: Postgraduate Diploma in Accounting | ACCE",
    description: "PGDA tutoring for the Postgraduate Diploma in Accounting: Accounting, Tax, MAF and Auditing support to help you convert to CTA and CA(SA). ACCE Tutors.",
    alternates: {
        canonical: "/pgda-tutor/",
    },
    openGraph: {
        title: "PGDA Tutor: Postgraduate Diploma in Accounting | ACCE",
        description: "PGDA tutoring for the Postgraduate Diploma in Accounting: Accounting, Tax, MAF and Auditing support to help you convert to CTA and CA(SA). ACCE Tutors.",
    },
    twitter: {
        title: "PGDA Tutor: Postgraduate Diploma in Accounting | ACCE",
        description: "PGDA tutoring for the Postgraduate Diploma in Accounting: Accounting, Tax, MAF and Auditing support to help you convert to CTA and CA(SA). ACCE Tutors.",
    },
};

const FAQ_ITEMS = [
    {
        question: "What is the PGDA and who qualifies to enrol?",
        answer: "The Postgraduate Diploma in Accounting (PGDA) is the honours-equivalent postgraduate qualification that forms the theoretical foundation of the CA(SA) pathway. To enrol you typically need an accredited undergraduate accounting degree (B.Com Accounting or equivalent) recognised by SAICA. Some universities also offer a bridging or conversion programme for graduates from adjacent degrees. UNISA, UCT, Wits, UP, UJ, and Stellenbosch all offer the PGDA, and entry requirements vary slightly by institution.",
    },
    {
        question: "Is the PGDA the same as the CTA?",
        answer: "Yes. The Certificate in Theory of Accounting (CTA) and the Postgraduate Diploma in Accounting (PGDA) refer to the same qualification. Different South African universities use different names for what SAICA recognises as the CTA level. Once you complete the PGDA/CTA year and pass the university assessments, you become eligible to write the SAICA Initial Test of Competence (ITC). The two names are used interchangeably in practice.",
    },
    {
        question: "Which subjects does the PGDA cover?",
        answer: "The PGDA year covers four core subjects: Financial Accounting (IFRS standards, group statements, financial instruments), Taxation (income tax, VAT, CGT), Management Accounting and Finance or MAF (costing, budgeting, corporate finance), and Auditing (ISA standards, assurance, internal controls). The four subjects are taught concurrently and examined at honours level, often in a combined or integrated setting.",
    },
    {
        question: "I am studying with UNISA. Can you tutor PGDA by distance?",
        answer: "Yes. All sessions are conducted online via video call, so distance is not an obstacle. UNISA students make up a significant portion of the students I work with. The self-directed nature of distance study means gaps can build up quietly, and structured sessions are particularly useful for working through problem areas before assessments. I am familiar with the UNISA PGDA module structure (FAC4861, TAX4862, AUE4862, MNG4863).",
    },
    {
        question: "What does the PGDA to CA(SA) pathway look like?",
        answer: "The pathway runs in stages. You complete the PGDA/CTA year at an accredited university and pass the internal assessments. You then write the SAICA Initial Test of Competence (ITC), a two-part board exam. If you pass the ITC, you complete a three-year training contract (TOPP or TIPP or equivalent accredited route). After the training period you write the Assessment of Professional Competence (APC), which is the final qualifying exam. Passing the APC earns you the CA(SA) designation from SAICA.",
    },
    {
        question: "How does tutoring fit into the diploma year?",
        answer: "The PGDA year is intensive and covers four high-level subjects simultaneously. Tutoring adds a personalised layer on top of lectures and study groups: we identify where your understanding breaks down, work through the specific technical areas causing difficulty, and build the integration habits that carry through to the ITC. Most students use sessions to address a specific subject weakness, to prepare for an internal test, or to consolidate understanding across all four subjects before the year-end exams.",
    },
    {
        question: "How do I book a session?",
        answer: "The simplest way is to send a WhatsApp message to +27 71 325 5295. Include your institution (UNISA, UCT, Wits, or other), the subject or subjects you need help with, and your availability. I will respond to confirm a time.",
    },
];

const COURSE_DATA = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "PGDA Tutoring (Postgraduate Diploma in Accounting)",
    description:
        "One-on-one and group tutoring for the PGDA/CTA year, covering Financial Accounting, Taxation, MAF and Auditing, with support for UNISA distance students and in-person institutions across South Africa.",
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

export default function PgdaTutorPage() {
    return (
        <div className="min-h-screen bg-background">
            <JsonLd id="pgda-tutor-jsonld-course" data={COURSE_DATA} />
            <JsonLd id="pgda-tutor-jsonld-faq" data={FAQPAGE_DATA} />
            <Navbar />
            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">

                    {/* Hero Header */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                                Postgraduate
                            </span>
                            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                                CA(SA) Pathway
                            </span>
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                            PGDA Tutoring (Postgraduate Diploma in Accounting)
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            The PGDA year is the gateway to the CA(SA) designation. It is demanding, it covers four subjects at once, and the self-directed nature of programmes like UNISA means you can reach exam week with gaps you never had the chance to address. I have walked this path, and I know exactly where the diploma year tends to trip people up.
                        </p>
                        <ConversionCtas
                            bookLabel="Book a PGDA Session"
                            guidesHref="/guides"
                        />
                    </div>

                    {/* Section 1: What PGDA is */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="w-6 h-6 text-accent" aria-hidden="true" />
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                                What PGDA is
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            The Postgraduate Diploma in Accounting is a formal postgraduate qualification at honours level on the National Qualifications Framework, not simply an exam or a short course. SAICA recognises it as the theoretical foundation of the CA(SA) qualifying pathway, and it is formally equivalent to the Certificate in Theory of Accounting (CTA) named on SAICA&rsquo;s website: the two terms refer to the same qualification.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-card rounded-xl border border-border p-6">
                                <h3 className="font-display text-base font-semibold text-foreground mb-3">
                                    Where It Is Offered
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Accredited South African universities: UNISA, UCT, Wits, UP, UJ, and Stellenbosch",
                                        "UNISA is the most common choice for working professionals needing a distance-learning option",
                                        "Contact universities like UCT and Wits suit students who prefer structured lecture programmes",
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
                                    Entry Requirements
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "An accredited undergraduate accounting degree (SAICA publishes the list of accredited degrees and institutions)",
                                        "If your degree is not on the list, some universities offer a bridging or conversion programme that meets the entry standard",
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
                                    What the Year Involves
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Four core subjects taught simultaneously: Financial Accounting, Taxation, Management Accounting and Finance (MAF), and Auditing",
                                        "Year-end assessments designed to test depth, not just recall",
                                        "A substantial jump from undergraduate level, even for strong students",
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

                    {/* Section 2: Subjects we cover */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-6 h-6 text-accent" aria-hidden="true" />
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                                Subjects we cover
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            I tutor all four PGDA core subjects. Each subject page goes into the specific syllabus areas, IFRS standards, and exam techniques in more detail. Click through to the subject you need help with.
                        </p>
                        <ul className="space-y-3 text-muted-foreground leading-relaxed">
                            <li>
                                <Link href="/accounting-tutor" className="text-accent hover:underline font-medium">
                                    Financial Accounting
                                </Link>
                                : IFRS, consolidations and financial instruments at honours level, the most technically demanding subject in the year.
                            </li>
                            <li>
                                <Link href="/tax-tutor" className="text-accent hover:underline font-medium">
                                    Taxation
                                </Link>
                                : the Income Tax Act, VAT, CGT and estate duty across the diploma year.
                            </li>
                            <li>
                                <Link href="/financial-management-tutor" className="text-accent hover:underline font-medium">
                                    Management Accounting and Finance (MAF)
                                </Link>
                                : costing, budgeting and corporate finance, tricky for self-directed learners.
                            </li>
                            <li>
                                <Link href="/auditing-tutor" className="text-accent hover:underline font-medium">
                                    Auditing
                                </Link>
                                : ISAs, the audit process, internal controls and professional ethics.
                            </li>
                        </ul>
                    </div>

                    {/* Section 3: The PGDA to CTA to CA(SA) pathway */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="w-6 h-6 text-accent" aria-hidden="true" />
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                                The PGDA to CTA to CA(SA) pathway
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            The PGDA sits at the beginning of the formal CA(SA) qualifying sequence. Completing the diploma year and passing your university assessments makes you eligible for the first SAICA board exam, and each stage from there builds on the last.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-card rounded-xl border border-border p-6">
                                <h3 className="font-display text-base font-semibold text-foreground mb-3">
                                    1. ITC
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "The SAICA Initial Test of Competence, the first board exam",
                                        "Tests all four PGDA subjects together in integrated case scenarios",
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
                                    2. Training Contract
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "SAICA-accredited, typically three years",
                                        "Training Outside Public Practice (TOPP) or Training Inside Public Practice (TIPP)",
                                        "Develops practical competence across the CA(SA) competency framework",
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
                                    3. APC
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "The Assessment of Professional Competence, a comprehensive case-study exam",
                                        "Tests professional judgement, ethics, and integrated application",
                                        "The last academic requirement before SAICA grants the CA(SA) designation",
                                    ].map((topic) => (
                                        <li key={topic} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            For more detail on the ITC itself and what preparation looks like at that stage, the{" "}
                            <Link href="/cta-tutor" className="text-accent hover:underline">
                                CTA tutor page
                            </Link>{" "}
                            covers board-exam preparation, integration technique, and the specific subjects the ITC has tested in recent sittings.
                        </p>
                    </div>

                    {/* Section 4: How it works (shared, compact) */}
                    <SessionFormats subjectLabel="PGDA" />

                    {/* Section 5: Why ACCE */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="w-6 h-6 text-accent" aria-hidden="true" />
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                                Why ACCE
                            </h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            I am Priyanka, a CA(SA) qualified through SAICA, and I understand the PGDA year from the inside: juggling four subjects at honours level, navigating the UNISA self-study format without constant access to a lecturer, and realising mid-year that a gap in one subject is costing marks across everything else. The students I work with consistently say the sessions gave them a clearer structure for the year, not just answers to specific questions: understanding the PGDA as a qualification, knowing how the four subjects connect, and building study habits that carry through to the ITC.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-card rounded-xl border border-border p-6">
                                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                    &ldquo;I was studying with UNISA and struggling to keep up with the Accounting module on my own. The sessions helped me get through the backlog and understand what I was actually being assessed on.&rdquo;
                                </p>
                                <span className="text-accent text-sm font-medium">UNISA PGDA student, 2024</span>
                            </div>
                            <div className="bg-card rounded-xl border border-border p-6">
                                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                                    &ldquo;Priyanka helped me understand the PGDA pathway clearly. I had been confused about the difference between the diploma year and the ITC, and knowing exactly where I was on the route to CA(SA) made the whole year feel more manageable.&rdquo;
                                </p>
                                <span className="text-accent text-sm font-medium">PGDA student, 2025</span>
                            </div>
                        </div>
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
                                Ready to take control of your PGDA year?
                            </h2>
                            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                                Book a session and we will work out where to focus first.
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
