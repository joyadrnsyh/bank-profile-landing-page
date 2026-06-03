import { ArrowUpRight } from "lucide-react";

export default function EmailCTA() {
    return (
        <div className="flex items-center rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
            <input
                type="email"
                placeholder="Your business email"
                className="w-64 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-slate-400"
            />

            <button className="flex items-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-cyan-800">
                Get Started
                <ArrowUpRight size={16} />
            </button>
        </div>
    );
}