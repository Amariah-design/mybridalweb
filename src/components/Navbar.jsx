import { useState } from "react";
import Icon from "./Icon";

const links = [
    { label: "Home", path: "/" },
    { label: "Collections", path: "/collections" },
    { label: "Shop & Rent", path: "/shop" },
    { label: "Our Services", path: "/services" },
    { label: "About", path: "/about" },
];

export default function Navbar({ page, navigate }) {
    const [open, setOpen] = useState(false);

    function go(path) {
        setOpen(false);
        navigate(path);
    }

    return (
        <header className="sticky top-0 z-50 border-b border-[#e9e3d8] bg-[#faf8f3]/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-4 md:px-10 lg:px-14">
                <a
                    href="#/"
                    onClick={(e) => {
                        e.preventDefault();
                        go("/");
                    }}
                    className="shrink-0"
                >
                    <span className="block font-serif text-2xl tracking-tight">
                        Maison de Mariée
                    </span>
                    <span className="mt-1 block text-[9px] uppercase tracking-[0.3em] text-[#99835b]">
                        The Bridal Atelier
                    </span>
                </a>

                <nav className="hidden items-center gap-6 xl:flex">
                    {links.map((link) => (
                        <a
                            key={link.path}
                            href={`#${link.path}`}
                            onClick={(e) => {
                                e.preventDefault();
                                go(link.path);
                            }}
                            className={`border-b py-2 text-[12px] transition ${
                                page === link.path
                                    ? "border-[#b49a68] text-[#8e7446]"
                                    : "border-transparent text-[#655f55] hover:text-[#a18755]"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#/appointments"
                    onClick={(e) => {
                        e.preventDefault();
                        go("/appointments");
                    }}
                    className="hidden border border-[#b49a68] px-5 py-3 text-[11px] uppercase tracking-[0.13em] transition hover:bg-[#b49a68] hover:text-white lg:inline-flex"
                >
                    Book a Fitting
                </a>

                <button
                    type="button"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                    className="p-2 xl:hidden"
                >
                    <Icon name={open ? "close" : "menu"} size={24} />
                </button>
            </div>

            {open && (
                <nav className="border-t border-[#e9e3d8] bg-[#faf8f3] px-5 py-4 xl:hidden">
                    {links.map((link) => (
                        <a
                            key={link.path}
                            href={`#${link.path}`}
                            onClick={(e) => {
                                e.preventDefault();
                                go(link.path);
                            }}
                            className="block border-b border-[#eee8df] py-4 text-sm"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={() => go("/appointments")}
                        className="mt-4 w-full bg-[#302d27] px-5 py-4 text-sm text-white"
                    >
                        Book a Fitting
                    </button>
                </nav>
            )}
        </header>
    );
}
