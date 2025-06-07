import React from "react";
import { Link } from "react-router";
// import { Button } from "@/components/ui/button";
// import { Mail, BarChart2, Zap, ShieldCheck, UploadCloud, FileText } from "lucide-react";

const HomePage = () => {
    return (
        <div className="bg-gradient-to-br from-[#edf4ff] to-[#f8fcff] min-h-screen">
            <header className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
                <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight">PingToHR</h1>
                <nav className="space-x-6">
                    <a href="#features" className="text-blue-700 font-medium hover:underline">Features</a>
                    <a href="#how-it-works" className="text-blue-700 font-medium hover:underline">How it Works</a>
                    <Link to={"/signin"} className="text-blue-700 font-medium hover:underline">Login</Link>
                </nav>
            </header>

            <main className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-20">
                <div className="flex-1">
                    <h2 className="text-5xl font-extrabold text-gray-900 leading-snug mb-6">
                        Supercharge Your <span className="text-blue-600">Job Search</span> Effortlessly
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Seamlessly connect your Gmail to send highly personalized cold emails to HRs. Monitor performance, automate follow-ups, and attach your resume and cover letter — all from one sleek dashboard.
                    </p>
                    <Link to="/dashboard" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 text-lg rounded-lg shadow">
                        Connect Gmail & Get Started
                    </Link>
                </div>
                <div className="flex-1">
                    <img
                        src="https://illustrations.popsy.co/gray/email-marketing.svg"
                        alt="Email Outreach Dashboard"
                        className="w-full max-w-md mx-auto"
                    />
                </div>
            </main>

            <section id="features" className="max-w-7xl mx-auto px-6 py-20">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-14">Everything You Need to Get Noticed</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <FeatureCard
                        title="Bulk Gmail Sending"
                        description="Send hundreds of personalized cold emails using your own Gmail with just a few clicks."
                    />
                    <FeatureCard
                        title="Real-Time Email Analytics"
                        description="Track email opens, replies, bounces and get insight-driven metrics to improve success."
                    />
                    <FeatureCard
                        title="Follow-Up Automation"
                        description="Create smart follow-up sequences for unopened or unanswered emails."
                    />
                    <FeatureCard
                        title="Secure Gmail Integration"
                        description="OAuth-based Gmail connection with full data privacy and security in place."
                    />
                    <FeatureCard
                        title="Resume & Cover Letter Upload"
                        description="Attach your resume, cover letter, or any job-specific documents to every email."
                    />
                    <FeatureCard
                        title="Upload CSV of HR Emails"
                        description="Upload a CSV or JSON list of emails and launch a campaign in seconds."
                    />
                </div>
            </section>

            <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-16">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">How It Works</h3>
                <ol className="list-decimal text-gray-700 text-lg space-y-4 px-6">
                    <li>Connect your Gmail account securely using Google OAuth.</li>
                    <li>Upload your list of HR contacts (CSV/JSON supported).</li>
                    <li>Compose or select a cold email template.</li>
                    <li>Attach your resume and cover letter (optional).</li>
                    <li>Send the campaign and track opens, clicks, and replies.</li>
                    <li>Let follow-ups run automatically based on behavior.</li>
                </ol>
            </section>

            <footer className="text-center text-gray-500 text-sm py-10 border-t border-gray-200">
                © { new Date().getFullYear() } PingToHR. Built with ❤️ by Ritik.
            </footer>
        </div>
    );
};

const FeatureCard = ( { title, description }: { title: string, description: string } ) => (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
        {/* Optional Icon slot */ }
        <h4 className="font-semibold text-xl text-gray-800 mb-3">{ title }</h4>
        <p className="text-gray-600 text-sm">{ description }</p>
    </div>
);

export default HomePage;
