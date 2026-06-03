"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
    return (
        <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cyan-950 overflow-hidden"
        >
            <div className="relative flex flex-col items-center">
                {/* Glowing Background Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.4 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 -z-10 h-32 w-32 rounded-full bg-cyan-500/30 blur-3xl"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image
                        src="/logo-bank-nova.png"
                        alt="Nova Bank Logo"
                        width={100}
                        height={100}
                        className="w-24 h-auto object-contain brightness-0 invert"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-6 flex flex-col items-center"
                >
                    <h1 className="text-4xl font-bold tracking-tight text-white">
                        Nova Bank
                    </h1>
                    
                    {/* Modern Loading Indicator */}
                    <div className="mt-5 flex items-center gap-2">
                        <motion.div
                            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                            className="h-2 w-2 rounded-full bg-cyan-400"
                        />
                        <motion.div
                            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                            className="h-2 w-2 rounded-full bg-cyan-400"
                        />
                        <motion.div
                            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                            className="h-2 w-2 rounded-full bg-cyan-400"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}