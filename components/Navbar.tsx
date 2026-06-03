import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowUpRight } from "lucide-react";

const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
];

const navLink =
    "relative text-sm font-medium text-slate-700 transition-all duration-300 hover:text-cyan-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-700 after:transition-all after:duration-300 hover:after:w-full";

export default function Navbar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Left */}
                <div className="flex items-center gap-12">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo-bank-nova.png"
                            alt="Bank Nova"
                            width={170}
                            height={40}
                            priority
                        />
                    </Link>

                    <ul className="hidden items-center gap-8 md:flex">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className={navLink}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right */}
                <div className="flex items-center">
                    <Button
                        size="lg"
                        className="rounded-full bg-cyan-700 px-6 text-white transition-all duration-300 hover:bg-cyan-800"
                    ><ArrowUpRight size={18} />
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}