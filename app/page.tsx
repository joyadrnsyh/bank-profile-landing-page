"use client";

import {
  ArrowUpRight,
  CreditCard,
  Landmark,
  ShieldOff,
  Fingerprint,
  BookKey,
} from "lucide-react";
import Image from "next/image";
import RevenueChart from "@/components/Chart";
import { motion, Variants, AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import { useState, useEffect } from "react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* HERO */}
          <section className="relative flex min-h-screen items-center bg-slate-100 py-20 lg:py-0">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6 lg:flex-row lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex w-full flex-col justify-center lg:w-1/2 lg:pr-10"
          >
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
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 hidden w-full items-center justify-center rounded-[40px] bg-blue-300 sm:flex sm:h-[400px] lg:mt-0 lg:h-[520px] lg:w-1/2"
          >
            <div className="h-72 w-72 rounded-full bg-white/30 blur-2xl" />

            <Image
              src="/Hero-Animasi.png"
              alt="Hero Illustration"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* FUTURE PAYMENT */}
      <section className="flex min-h-screen items-center bg-white py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-bl-[45px] rounded-tr-[45px] bg-cyan-700 px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
            >
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
                  Design a financial operating system that works for your
                  business and streamlined cash flow management.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  icon: <CreditCard size={56} className="text-slate-700" />,
                  title: "Free Transfers",
                  desc: "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
                },
                {
                  icon: <Landmark size={56} className="text-slate-700" />,
                  title: "Multiple Account",
                  desc: "Run your operations with cash from your account and generate yield on funds stored in your account.",
                },
                {
                  icon: <ShieldOff size={56} className="text-slate-700" />,
                  title: "Unmatched Security",
                  desc: "Securely manage your finance with organization-wide MFA, card-locking, and account-level controls.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="rounded-br-[25px] rounded-tl-[25px] bg-white px-6 py-8 md:last:col-span-2 lg:last:col-span-1"
                >
                  {item.icon}

                  <h1 className="mt-4 text-xl font-bold text-slate-700 md:text-2xl">
                    {item.title}
                  </h1>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-600">
              WHY US
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Why they prefer Nova
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 lg:grid-cols-2"
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-10 shadow-sm"
            >
              <h3 className="text-7xl font-bold text-cyan-600">3K+</h3>

              <p className="mt-6 max-w-xs text-2xl font-medium text-slate-900">
                Businesses already running on Nova
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-10 shadow-sm"
            >
              <h3 className="max-w-sm text-3xl font-semibold text-slate-900">
                Instant Withdraw your funds at any time
              </h3>

              <div className="mt-10 flex items-center justify-center gap-8">
                <Fingerprint size={48} className="text-cyan-600" />
                <div className="text-3xl text-slate-300">↔</div>
                <BookKey size={48} className="text-cyan-600" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 rounded-3xl bg-white p-10 shadow-sm"
          >
            <div className="grid gap-10 lg:grid-cols-[350px_1fr]">
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-slate-900">
                  No asset volatility
                </h3>

                <p className="mt-4 leading-relaxed text-slate-500">
                  Generate returns on your cash reserves without making any
                  investments.
                </p>
              </div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-3xl bg-slate-50 p-6"
              >
                <RevenueChart />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STEP */}
      <section className="flex min-h-screen items-center bg-cyan-900 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Step
            </p>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight">
              Maximize your returns with a Reserve account that generates.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 grid gap-8 md:grid-cols-3"
          >
            {[
              {
                number: "1",
                title: "Open your account",
                desc: "Sign up to Nova Bank and set up your account from the dashboard.",
              },
              {
                number: "2",
                title: "Transfer your money",
                desc: "Move money from to another account info and start to earning up.",
              },
              {
                number: "3",
                title: "Watch your balance grow",
                desc: "Accessed instantly and remain insulated from market volatility.",
              },
            ].map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="rounded-bl-2xl rounded-tr-2xl bg-cyan-600 px-8 py-8"
              >
                <h1 className="text-8xl font-bold">{step.number}</h1>

                <h2 className="mt-4 text-2xl font-bold">{step.title}</h2>

                <p className="mt-3 text-white/80">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-slate-900">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-600">
              Our Mission
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              We help innovative companies grow faster
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
              Hundreds of businesses across different industries have made big
              improvements with us.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-14 grid gap-6 text-center sm:grid-cols-3"
          >
            {[
              {
                value: "24%",
                label: "Revenue Business",
              },
              {
                value: "180K",
                label: "Annual Revenue",
              },
              {
                value: "10+",
                label: "Months of Runway",
              },
            ].map((stat) => (
              <motion.div
                key={stat.value}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-slate-50 p-8"
              >
                <h3 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                  {stat.value}
                </h3>

                <p className="mt-3 text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-24">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-slate-500"
            >
              Choose Plan
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-bl-xl rounded-tr-xl bg-slate-100 p-8 transition sm:p-10"
              >
                <h3 className="text-3xl font-bold text-cyan-900">Plus</h3>

                <button className="mt-16 flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 text-left text-xl font-bold text-cyan-900 transition hover:bg-slate-50 sm:text-2xl">
                  <span>$2.99/month</span>
                  <ArrowUpRight size={28} />
                </button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-bl-xl rounded-tr-xl bg-cyan-950 p-8 text-white transition sm:p-10"
              >
                <h3 className="text-3xl font-bold">Premium</h3>

                <button className="mt-16 flex w-full items-center justify-between rounded-2xl bg-white/10 px-5 py-4 text-left text-xl font-bold transition hover:bg-white/15 sm:text-2xl">
                  <span>$2.99/month</span>
                  <ArrowUpRight size={28} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="grid items-center gap-8 rounded-[32px] bg-cyan-950 p-8 text-white md:grid-cols-2 md:p-12 lg:p-16"
          >
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Try It Now
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Ready to level up your payment process?
              </h2>

              <p className="mt-6 max-w-lg leading-relaxed text-cyan-100">
                Support small businesses with simple invoicing, powerful
                integration, and cash flow management tools.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <button className="rounded-full bg-white px-8 py-4 text-center font-semibold text-cyan-950 transition hover:bg-cyan-50">
                Get Started Now
              </button>

              <button className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                Learn More
                <ArrowUpRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
      )}
    </>
  );
}