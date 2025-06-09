import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageMeta from "../../components/common/PageMeta";
import { Link } from "react-router";
import AutoScrollMockups from "../../components/AutoScrollMockups";




export default function LandingPage() {
    const [ isOpen, setIsOpen ] = useState( false );


    return (
        <>
            <PageMeta title="PingToHR – Supercharge Your Job Outreach with Smart Email Automation"
                description="PingToHR is your all-in-one HR contact manager and cold email assistant. Automate outreach, track engagement, and boost your job search—all directly from your Gmail inbox." />

            <div className="bg-gradient-to-b from-[#0B0F1A] to-[#121722] text-white font-sans min-h-screen">

                {/* Header */ }
                <header className="relative bg-transparent z-50">
                    <div className="flex justify-between items-center p-6 max-w-7xl mx-auto md:gap-8">
                        <div className="flex-1 flex justify-center md:justify-start">
                            <div className="text-2xl font-bold text-white">PingToHR</div>
                        </div>

                        <nav className="hidden md:flex space-x-8 text-lg">
                            <a href="#features" className="hover:text-white/80 transition">Features</a>
                            <a href="#benefits" className="hover:text-white/80 transition">Benefits</a>
                            <a href="#pricing" className="hover:text-white/80 transition">Pricing</a>
                        </nav>

                        <div className="flex items-center gap-4">
                            <Link to="/signin" className="hidden md:block bg-gradient-to-br from-[#1e253a] via-[#171c2f] to-[#0b101c] border border-white/20 text-white px-5 py-2 rounded font-semibold shadow-lg hover:from-[#252c47] hover:to-[#131923] transition">
                                Get Started
                            </Link>
                            <button className="md:hidden text-white" onClick={ () => setIsOpen( true ) }>
                                <svg className="w-8 text-white" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 7L7 7M20 7L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M20 17H17M4 17L13 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M4 12H7L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Sidebar */ }
                    <AnimatePresence>
                        { isOpen && (
                            <motion.div
                                initial={ { x: '100%' } }
                                animate={ { x: 0 } }
                                exit={ { x: '100%' } }
                                transition={ { type: 'spring', stiffness: 300, damping: 30 } }
                                className="fixed top-0 right-0 h-full w-64 bg-[#0B0F1A] text-white shadow-lg z-50"
                            >
                                <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
                                    <span className="text-lg font-bold">Menu</span>
                                    <button onClick={ () => setIsOpen( false ) }>
                                        <svg className="w-6" viewBox="0 0 24 24" fill="none">
                                            <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <nav className="flex flex-col p-6 space-y-4 text-lg">
                                    <a href="#features" onClick={ () => setIsOpen( false ) }>Features</a>
                                    <a href="#benefits" onClick={ () => setIsOpen( false ) }>Benefits</a>
                                    <a href="#pricing" onClick={ () => setIsOpen( false ) }>Pricing</a>
                                    <Link to={"/signin"} className="mt-6 bg-gradient-to-br from-[#1e253a] via-[#171c2f] to-[#0b101c] border border-white/20 text-white px-5 py-2 rounded font-semibold shadow hover:from-[#252c47] hover:to-[#131923] transition">
                                        Get Started
                                    </Link>
                                </nav>
                            </motion.div>
                        ) }
                    </AnimatePresence>
                </header>

                {/* Hero Section */ }
                <motion.section
                    className="text-center py-24 px-6"
                    initial={ { opacity: 0, y: 40 } }
                    animate={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.6 } }
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.h1
                            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
                            initial={ { opacity: 0, y: 20 } }
                            animate={ { opacity: 1, y: 0 } }
                            transition={ { delay: 0.2 } }
                        >
                            Reach More HRs, Faster
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-10 max-w-xl mx-auto text-white/70"
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            transition={ { delay: 0.4 } }
                        >
                            Manage HR contacts, automate cold emails, track responses, and boost your outreach with PingToHR — all from your own Gmail.
                        </motion.p>
                        <Link to={ "/signin" }>
                            <motion.button
                                whileHover={ { scale: 1.05 } }
                                whileTap={ { scale: 0.95 } }
                                className="bg-gradient-to-br from-[#161b2b] via-[#1f2541] to-[#121828] border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:from-[#222a43] hover:to-[#171f3a] transition"
                            >
                                Start Emailing Smarter
                            </motion.button>
                        </Link>
                    </div>
                </motion.section>


                {/* Responsive Image */ }
                <motion.img
                    initial={ { opacity: 0, y: 30 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.7 } }
                    viewport={ { once: true } }
                    src="./images/dashboard.png"
                    alt="Dashboard Preview"
                    className="w-[90%] max-w-7xl mx-auto rounded-3xl border border-white/10 shadow-2xl"
                />

                {/* No changes made to remaining sections – they're untouched structure-wise */ }
                <section id="about" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto bg-gradient-to-tr from-[#0B0F1A] to-[#121722] rounded-xl shadow-lg border border-white/10 p-8">
                        <h2 className="text-xl mb-8 text-center font-semibold uppercase tracking-wide text-white/70">About PingToHR</h2>
                        <p className="text-3xl font-semibold leading-relaxed text-center max-w-3xl mx-auto text-white/90">
                            PingToHR is your personal HR contact manager and outreach assistant. Import contacts, generate email permutations, validate in bulk, and schedule cold emails with built-in tracking and follow-ups — all synced directly with your Gmail.
                        </p>
                    </div>
                </section>

                <section id="features" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-14 text-white/90">Powerful Outreach Tools</h2>
                        <div className="grid md:grid-cols-3 gap-12 text-center">
                            { [
                                {
                                    title: 'Bulk Emailing',
                                    desc: 'Send cold emails in bulk from your Gmail with smart scheduling.',
                                    src: './images/bulk-email-sending.svg'
                                },
                                {
                                    title: 'Follow-up Automation',
                                    desc: 'Automatically follow up with HRs who didn’t respond.',
                                    src: './images/followup-automation.svg',
                                },
                                {
                                    title: 'Email Permutation Generator',
                                    desc: 'Find the right email format for any company with one click.',
                                    src: "./images/email-permutation-generation.svg"
                                },
                                {
                                    title: 'Bulk Email Validation',
                                    desc: 'Clean up your list with bulk validation and avoid bounces.',
                                    src: './images/bulk-email-validation.svg'
                                },
                                {
                                    title: 'Mail Tracking',
                                    desc: 'Track opens, clicks, and responses — know who’s engaging.',
                                    src: './images/email-tracking.svg',
                                },
                                {
                                    title: 'Contact Management',
                                    desc: 'Import, tag, and manage HR contact lists with ease.',
                                    src: "./images/contact-management.svg"
                                },
                            ].map( ( { title, desc, src }, i ) => (
                                <div
                                    key={ i }
                                    className="p-8 bg-gradient-to-tr from-[#121722] to-[#0B0F1A] rounded-lg shadow-lg border border-white/10 hover:shadow-purple-700 transition"
                                >
                                    <h3 className="text-2xl font-semibold mb-3 text-white/90">{ title }</h3>
                                    <p className="text-white/70">{ desc }</p>
                                    <img src={ src } alt="" className="mt-8 w-52 mx-auto" />
                                </div>
                            ) ) }
                        </div>
                    </div>
                </section>


                <section className=" py-20 px-6 ">
                    <div className="relative max-w-7xl mx-auto bg-gradient-to-br from-[#121722] via-[#0B0F1A] to-[#171c2f] border border-white/10 rounded-3xl text-white py-16 px-10 mt-10 shadow-lg">
                        {/* Background Image Layer */ }
                        <div className="absolute inset-0 bg-[url('/images/shape/grid-01.svg')] bg-top bg-cover bg-no-repeat opacity-10 pointer-events-none z-0" />
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <p className="text-xl max-w-2xl text-white/70">
                                Whether you're job hunting or building your HR network, PingToHR helps you scale your outreach efforts and stand out in the inbox.
                            </p>
                            <button className="bg-gradient-to-br from-[#161b2b] via-[#1f2541] to-[#121828] border border-white/30 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:from-[#222a43] hover:to-[#171f3a] transition">
                                Start Free Today
                            </button>
                        </div>
                    </div>
                </section>

                <section className="bg-[#0B0F1A] text-white py-20 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.h2
                            className="text-4xl font-bold mb-4"
                            initial={ { opacity: 0, y: 30 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { duration: 0.6 } }
                        >
                            Use PingToHR On the Go
                        </motion.h2>

                        <motion.p
                            className="text-white/70 text-lg md:text-xl mb-12"
                            initial={ { opacity: 0, y: 20 } }
                            whileInView={ { opacity: 1, y: 0 } }
                            transition={ { delay: 0.2, duration: 0.6 } }
                        >
                            Enjoy a seamless experience across all devices—access PingToHR anytime, anywhere.
                        </motion.p>

                        <AutoScrollMockups />
                    </div>
                </section>


                <section id="benefits" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto bg-gradient-to-tr from-[#0B0F1A] to-[#121722] rounded-xl mt-10 shadow-inner border border-white/10 p-10">
                        <h2 className="text-4xl font-bold text-center mb-16 text-white/90">Why You'll Love It</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-gradient-to-tr from-[#121722] to-[#0B0F1A] p-8 rounded-xl shadow-md border border-white/10 hover:shadow-purple-700 transition">
                                <h3 className="text-2xl font-semibold mb-4 text-white/90">Personal Gmail Integration</h3>
                                <p className="text-white/70">Send emails from your own inbox, keeping it personal and authentic.</p>
                            </div>
                            <div className="bg-gradient-to-tr from-[#121722] to-[#0B0F1A] p-8 rounded-xl shadow-md border border-white/10 hover:shadow-purple-700 transition">
                                <h3 className="text-2xl font-semibold mb-4 text-white/90">Boost Response Rates</h3>
                                <p className="text-white/70">Smart follow-ups and tracking tools help you land more replies.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative py-28 overflow-hidden">
                    <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center px-6 text-center md:text-left">
                        {/* Left Column: Text Content */ }
                        <div>
                            <h4 className="text-white text-lg uppercase font-semibold mb-4">Performance</h4>
                            <h2 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-white tracking-tight mb-6">
                                Trusted by Job Seekers
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed max-w-md">
                                PingToHR empowers job seekers to supercharge their outreach with real results —
                                from bulk emailing to smart follow-ups, all directly from your Gmail.
                            </p>
                        </div>

                        {/* Right Column: 2x2 Metrics Grid */ }
                        <div className="grid grid-cols-2 gap-8">
                            <div
                                className="flex flex-col items-right justify-center p-6"
                            >
                                <h3 className="text-7xl text-blue-500">200K</h3>
                                <p className="text-white mt-3 text-lg">Emails Sent via Gmail</p>
                            </div>
                            <div
                                className="flex flex-col items-right justify-center p-6"
                            >
                                <h3 className="text-7xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                                    95%
                                </h3>
                                <p className="text-white mt-3 text-lg">Email Delivery Rate</p>
                            </div>
                            <div
                                className="flex flex-col items-right justify-center p-6"
                            >
                                <h3 className="text-8xl text-purple-500">3X</h3>
                                <p className="text-white mt-3 text-lg">Higher HR Reply Rates</p>
                            </div>
                            <div
                                className="flex flex-col items-right justify-center p-6"
                            >
                                <h3 className="text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-white text-transparent bg-clip-text">
                                    50K+
                                </h3>
                                <p className="text-white mt-3 text-lg">Contacts Managed</p>
                            </div>

                        </div>
                    </div>
                </section>





                <section id="how-it-works" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#121722] via-[#0B0F1A] to-[#1a1f33] rounded-3xl shadow-xl border border-white/10 p-12">
                        <h2 className="text-4xl font-bold text-center mb-14 text-white/90">How It Works</h2>
                        <div className="grid md:grid-cols-4 gap-10 text-center text-white/80">
                            { [
                                {
                                    step: "1. Connect Gmail",
                                    desc: "Securely sync your Gmail account to start sending emails instantly.",
                                },
                                {
                                    step: "2. Import HR Contacts",
                                    desc: "Upload CSV files or add contacts manually to manage your outreach list.",
                                },
                                {
                                    step: "3. Generate & Validate",
                                    desc: "Create email permutations, validate them in bulk to avoid bounces.",
                                },
                                {
                                    step: "4. Automate Outreach",
                                    desc: "Send emails and schedule follow-ups — track engagement in real-time.",
                                },
                            ].map( ( { step, desc }, i ) => (
                                <div
                                    key={ i }
                                    className="p-6 bg-gradient-to-tr from-[#1a1f33] to-[#0B0F1A] rounded-xl shadow-md border border-white/10 hover:shadow-purple-700 transition"
                                >
                                    <h3 className="text-xl font-semibold mb-3">{ step }</h3>
                                    <p className="text-white/70">{ desc }</p>
                                </div>
                            ) ) }
                        </div>
                    </div>
                </section>

                <footer className="text-center py-12 border-t border-purple-700 mt-20 text-white/60 px-6">
                    <div className="max-w-7xl mx-auto">
                        <p>&copy; { new Date().getFullYear() } PingToHR. All rights reserved.</p>
                    </div>
                </footer>

            </div>
        </>
    );
}
