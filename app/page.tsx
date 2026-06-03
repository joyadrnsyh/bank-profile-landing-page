"use client";

import { ArrowUpRight, CreditCard, Landmark, ShieldOff, Fingerprint, BookKey } from "lucide-react";
import Image from "next/image";
import RevenueChart from "@/components/Chart";


export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-screen bg-slate-100 px-4 py-16">

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-12">
          {/* Left Content */}
          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <div className="max-w-xl space-y-6">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
                Get paid early,{" "}
                <span className="font-medium text-slate-700">
                  save automatically all your pay.
                </span>
              </h1>

              <p className="max-w-md text-base leading-relaxed text-slate-500">
                Support small businesses with simple invoicing, powerful
                integrations, and cash flow management tools.
              </p>

              <div className="flex w-full max-w-md items-center rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
                <input
                  type="email"
                  placeholder="Your business email"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />

                <button className="flex shrink-0 items-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-cyan-800">
                  Get Started
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="hidden h-[520px] w-1/2 items-center justify-center rounded-[40px] bg-blue-300 lg:flex">
            <div className="h-72 w-72 rounded-full bg-white/30 blur-2xl" />
            <Image src="/Hero-Animasi.png"
              alt=""
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* FUTURE PAYMENT */}
      <section className="min-h-screen bg-white px-4 py-16 md:px-10">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center">
          <div className="w-full rounded-bl-[45px] rounded-tr-[45px] bg-cyan-700 px-6 py-10 md:px-10 lg:px-16">

            {/* Bagian Atas */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="w-full md:w-1/2">
                <p className="mb-3 text-sm font-medium text-white">
                  Future Payment
                </p>

                <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                  Experience that grows <br className="hidden sm:block" />
                  <span>with your scale.</span>
                </h1>
              </div>

              <div className="w-full md:w-1/2">
                <p className="text-base leading-relaxed text-white/90 md:text-lg">
                  Design a financial operating system that works for your business
                  and streamlined cash flow management.
                </p>
              </div>
            </div>

            {/* Bagian Bawah */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-br-[25px] rounded-tl-[25px] bg-white px-6 py-8">
                <CreditCard size={56} className="text-slate-700" />
                <h1 className="mt-4 text-xl font-bold text-slate-700 md:text-2xl">
                  Free Transfers
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  Create a financial experience and automate repeat purchases by
                  scheduling recurring payments.
                </p>
              </div>

              <div className="rounded-br-[25px] rounded-tl-[25px] bg-white px-6 py-8">
                <Landmark size={56} className="text-slate-700" />
                <h1 className="mt-4 text-xl font-bold text-slate-700 md:text-2xl">
                  Multiple Account
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  Run your operations with cash from your account and generate yield
                  on funds stored in your account.
                </p>
              </div>

              <div className="rounded-br-[25px] rounded-tl-[25px] bg-white px-6 py-8 md:col-span-2 lg:col-span-1">
                <ShieldOff size={56} className="text-slate-700" />
                <h1 className="mt-4 text-xl font-bold text-slate-700 md:text-2xl">
                  Unmatched Security
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  Securely manage your finance with organization-wide MFA,
                  card-locking, and account-level controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-600">
              WHY US
            </p>
            <h2 className="text-5xl font-bold text-slate-900">
              Why they prefer Nova
            </h2>
          </div>

          {/* Top Cards */}
          <div className="grid gap-6 lg:grid-cols-2">

            {/* Card 1 */}
            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <h3 className="text-7xl font-bold text-cyan-600">3K+</h3>

              <p className="mt-6 max-w-xs text-2xl font-medium text-slate-900">
                Businesses already running on Nova
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <h3 className="max-w-sm text-3xl font-semibold text-slate-900">
                Instant Withdraw your funds at any time
              </h3>

              <div className="mt-10 flex items-center justify-center gap-8">
                <Fingerprint size={48} className="text-cyan-600" />

                <div className="text-slate-300 text-3xl">
                  ↔
                </div>

                <BookKey size={48} className="text-cyan-600" />
              </div>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="mt-6 rounded-3xl bg-white p-10 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-[350px_1fr]">

              {/* Left Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-slate-900">
                  No asset volatility
                </h3>

                <p className="mt-4 leading-relaxed text-slate-500">
                  Generate returns on your cash reserves without making
                  any investments.
                </p>
              </div>

              {/* Chart */}
              <div className="rounded-3xl bg-slate-50 p-6">
                <RevenueChart />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* STEP */}
      <section className="min-h-screen bg-cyan-900 px-4 py-16">
        <div className="mx-auto flex flex-col min-h-screen max-w-7xl justify-center text-white">
          <h1 className="mb-5">STEP</h1>
          <h2 className="text-4xl w-1/2">Maximize your returns with a Reserve account that generates.</h2>

          <div className="flex gap-8 mt-10 text-white lg:grid-cols-2">
            <div className="flex flex-col gap-2 rounded-xl bg-white/20 text-white w-1/2 px-8 py-8">
              <h1 className="text-8xl font-bold">1</h1>
              <h1 className="text-2xl font-bold">Open your account</h1>
              <p>Sign up to Nova Bank and set up your account from the dashboard.</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl bg-white/20 w-1/2 px-8 py-8">
              <h1 className="text-8xl font-bold">2</h1>
              <h1 className="text-2xl font-bold">Transfer your money</h1>
              <p>Move money from to another account info and start to earning up.</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl bg-white/20 w-1/2 px-8 py-8">
              <h1 className="text-8xl font-bold">3</h1>
              <h1 className="text-2xl font-bold">Watch your balance grow</h1>
              <p>Accessed instantly and remain insulated from market volatility</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}