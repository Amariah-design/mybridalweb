import Icon from "./Icon";

export default function Footer({ navigate }) {
    return (
        <footer className="bg-[#302d27] text-[#f8f5ee]">
            <div className="mx-auto grid max-w-360 gap-10 px-5 py-14 sm:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-14 lg:py-16">
                <div className="sm:col-span-2">
                    <button
                        onClick={() => navigate("/")}
                        className="text-left font-serif text-3xl"
                    >
                        Maison de Mariée
                    </button>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-[#c9c1b2]">
                        A thoughtful collection of bridal gowns for different
                        traditions, personal styles and wedding-day dreams.
                    </p>
                </div>

                <div>
                    <h3 className="text-xs uppercase tracking-[0.18em] text-[#c5ab79]">
                        Explore
                    </h3>
                    {[
                        ["Collections", "/collections"],
                        ["Shop & Rent", "/shop"],
                        ["Our Services", "/services"],
                        ["About Us", "/about"],
                    ].map(([label, path]) => (
                        <button
                            key={path}
                            onClick={() => navigate(path)}
                            className="mt-4 block text-sm text-[#d8d0c2] transition hover:text-white"
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div>
                    <h3 className="text-xs uppercase tracking-[0.18em] text-[#c5ab79]">
                        Visit the Atelier
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#d8d0c2]">
                        By appointment
                        <br />
                        Add your boutique address
                        <br />
                        Add your business phone
                    </p>
                    <button
                        onClick={() => navigate("/appointments")}
                        className="mt-4 inline-flex items-center gap-2 text-sm text-white underline underline-offset-4"
                    >
                        Arrange a fitting <Icon name="arrow" size={15} />
                    </button>
                </div>
            </div>

            <div className="border-t border-white/10 px-5 py-5 md:px-10 lg:px-14">
                <div className="mx-auto flex max-w-360 flex-col gap-2 text-xs text-[#b9b0a2] sm:flex-row sm:justify-between">
                    <p>© {new Date().getFullYear()} Maison de Mariée.</p>
                    <p>Considered design. Personal service. Every bride.</p>
                </div>
            </div>
        </footer>
    );
}
