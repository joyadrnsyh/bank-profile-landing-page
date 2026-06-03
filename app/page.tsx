"use client";

import { ArrowUpRight, CreditCard, Landmark, ShieldOff } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-screen bg-slate-100">
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
      <section className="min-h-screen bg-white">
        {/* Luar */}
        <div className="w-auto min-h-screen flex items-center justify-center mx-10">
          {/* Bagian 1 Atas */}
          <div className="mx-10 bg-blue-500 px-8 py-8 rounded-xl">
            <div className="flex items-center justify-between mx-8 my-8 space-x-10">
              <div className="w-[500px] flex flex-col">
                <p>Future Payment</p>
                <h1 className="w-full font-bold text-[32px]">Experience that grows {" "} <br />
                  <span>
                    with your scale.
                  </span>
                </h1>
              </div>
              <div className="w-[500px]">
                <p className="w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maxime perferendis delectus voluptatem, facere nam nobis quibusdam libero? Aspernatur beatae optio odio! Eligendi numquam delectus cum beatae vitae facilis veniam!</p>
              </div>
            </div>
            {/* Bagian 2 Bawah */}
            <div className="flex flex mx-8 my-8 space-x-10">
              <div className="flex gap-8">
                <div className="bg-red-100 w-full items-center justify-center px-8 py-8 space-y-4">
                  <CreditCard size={60} />
                  <h1 className="text-2xl font-bold">Free Transfers</h1>
                  <p>Create a financial experienceay and automate repeate purchases by scheduling recurring payment</p>
                </div>
                <div className="bg-red-100 w-full items-center justify-center px-8 py-8 space-y-4">
                  <Landmark size={60} />
                  <h1 className="text-2xl font-bold">Multiple Account</h1>
                  <p>Run your operations with cash from your account and generate yield on funds stored in your account.</p>
                </div>
                <div className="bg-red-100 w-full items-center justify-center px-8 py-8 space-y-4">
                  <ShieldOff size={60} />
                  <h1 className="text-2xl font-bold">Unmatched Security</h1>
                  <p>Securely manage your finance with organized-wide MFA, card-locking, and account-level controls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}