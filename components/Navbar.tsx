import Link from "next/link";
import Image from "next/image";

const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/produk" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
];

const navLink =
    "relative font-medium text-gray-700 transition-colors duration-300 hover:text-blue-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b">
            <div className="mx-8 flex  items-center justify-between px-6 py-4 lg:px-8">
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo-bank-nova.png"
                            alt="Vendora Logo"
                            width={180}
                            height={40}
                            className="object-cover"
                            priority
                        />
                    </Link>

                    {/* Menu */}
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


                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="rounded-md bg-white px-3 py-2 text-slate-500 border border-slate-200 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="rounded-md bg-blue-500 px-3 py-2 text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}