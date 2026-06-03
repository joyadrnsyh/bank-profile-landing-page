import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-cyan-950 pt-20 pb-10 text-slate-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">

                    {/* Brand & Description */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-white">
                            <Image
                                src="/logo-bank-nova.png"
                                alt="Nova Bank Logo"
                                width={80}
                                height={80}
                                className="h-10 w-auto object-cover brightness-0 invert"
                            />

                        </Link>
                        <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-400">
                            Design a financial operating system that works for your business.
                            Support small businesses with simple invoicing, powerful integrations,
                            and cash flow management.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-8 flex gap-4">
                            <Link href="#" className="rounded-full bg-slate-900 p-2 text-slate-400 transition hover:bg-cyan-500 hover:text-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                            </Link>
                            <Link href="#" className="rounded-full bg-slate-900 p-2 text-slate-400 transition hover:bg-cyan-500 hover:text-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </Link>
                            <Link href="#" className="rounded-full bg-slate-900 p-2 text-slate-400 transition hover:bg-cyan-500 hover:text-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                            </Link>
                            <Link href="#" className="rounded-full bg-slate-900 p-2 text-slate-400 transition hover:bg-cyan-500 hover:text-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                            </Link>
                        </div>
                    </div>

                    {/* Links - Product */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">Features</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">Pricing</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">Security</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">Integrations</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links - Company */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">About Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">Careers</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">Blog</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links - Legal */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm transition hover:text-cyan-400">Cookie Policy</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Nova Bank. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="#" className="text-sm text-slate-500 transition hover:text-white">
                            Terms
                        </Link>
                        <Link href="#" className="text-sm text-slate-500 transition hover:text-white">
                            Privacy
                        </Link>
                        <Link href="#" className="text-sm text-slate-500 transition hover:text-white">
                            Cookies
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
