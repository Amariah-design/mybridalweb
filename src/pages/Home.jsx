import { gowns } from "../data";
import GownCard from "../components/GownCard";
import Icon from "../components/Icon";

export default function Home({ navigate, onEnquire }) {
    return (
        <>
            <section className="mx-auto grid max-w-360 md:grid-cols-2">
                <div className="flex flex-col justify-center px-6 py-16 sm:px-12 md:px-14 md:py-24 lg:px-20">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#a18755]">
                        The bridal atelier
                    </p>
                    <h1 className="mt-6 max-w-xl font-serif text-5xl leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
                        A gown that feels like{" "}
                        <i className="font-normal">you.</i>
                    </h1>
                    <p className="mt-6 max-w-md text-sm leading-8 text-[#777166]">
                        Discover wedding gowns across cultures, silhouettes and
                        traditions. Find your dress to buy, rent or have made
                        specially for you.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <button
                            onClick={() => navigate("/collections")}
                            className="bg-[#302d27] px-6 py-4 text-xs uppercase tracking-wider text-white transition hover:bg-[#8d7954]"
                        >
                            Explore the collection
                        </button>
                        <button
                            onClick={() => navigate("/appointments")}
                            className="border border-[#c7b58e] px-6 py-4 text-xs uppercase tracking-wider transition hover:bg-[#eee7d9]"
                        >
                            Book a fitting
                        </button>
                    </div>
                    <div className="mt-12 flex flex-wrap gap-6 border-t border-[#e9e3d8] pt-6 text-[10px] uppercase tracking-[0.13em] text-[#777166]">
                        <span className="flex items-center gap-2">
                            <Icon name="check" size={15} /> Buy or rent
                        </span>
                        <span className="flex items-center gap-2">
                            <Icon name="ruler" size={15} /> Fittings &
                            alterations
                        </span>
                    </div>
                </div>

                <div className="relative min-h-107.5 bg-[#ece7dd] md:min-h-162.5">
                    <img
                        src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1400&q=90"
                        alt="Elegant bridal gown in an editorial setting"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    <div className="absolute bottom-5 left-5 bg-[#faf8f3]/95 px-5 py-4 sm:bottom-8 sm:left-8">
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#99835b]">
                            The collection
                        </p>
                        <p className="mt-1 font-serif text-xl">
                            Made for your moment
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y border-[#e9e3d8] bg-[#f3efe6]">
                <div className="mx-auto grid max-w-360 gap-6 px-6 py-8 sm:grid-cols-3 md:px-14">
                    {[
                        [
                            "01",
                            "Find your gown",
                            "Explore silhouettes, traditions and styles.",
                        ],
                        [
                            "02",
                            "Choose your option",
                            "Purchase, rent or discuss a custom design.",
                        ],
                        [
                            "03",
                            "Perfect the fit",
                            "Arrange a fitting and discuss alterations.",
                        ],
                    ].map(([number, title, text]) => (
                        <div key={number} className="flex gap-4">
                            <span className="font-serif text-2xl text-[#b49a68]">
                                {number}
                            </span>
                            <div>
                                <h2 className="text-sm font-medium">{title}</h2>
                                <p className="mt-2 text-xs leading-6 text-[#777166]">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-360 px-5 py-16 md:px-10 md:py-24 lg:px-14">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#a18755]">
                            A considered collection
                        </p>
                        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                            Find your kind of beautiful.
                        </h2>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-[#777166]">
                            From traditional bridal attire to clean contemporary
                            gowns, explore different ways to make the day your
                            own.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate("/collections")}
                        className="inline-flex items-center gap-2 self-start border-b border-[#b49a68] pb-2 text-xs sm:self-auto"
                    >
                        View all collections <Icon name="arrow" size={16} />
                    </button>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {gowns.slice(0, 4).map((gown) => (
                        <GownCard
                            key={gown.id}
                            gown={gown}
                            onEnquire={onEnquire}
                        />
                    ))}
                </div>
            </section>

            <section className="bg-[#eae3d6]">
                <div className="mx-auto grid max-w-360 items-center gap-0 md:grid-cols-2">
                    <div className="px-6 py-14 sm:px-12 md:px-14 lg:px-20 lg:py-24">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#8c7448]">
                            Your dress, your way
                        </p>
                        <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                            The perfect gown doesn't have to be purchased.
                        </h2>
                        <p className="mt-5 text-sm leading-8 text-[#6f675b]">
                            Rent a gown for your wedding day, purchase a design
                            to keep, or enquire about a custom creation. We can
                            help you explore the options that suit your plans.
                        </p>
                        <button
                            onClick={() => navigate("/shop")}
                            className="mt-7 inline-flex items-center gap-3 border-b border-[#8c7448] pb-2 text-xs uppercase tracking-wider"
                        >
                            Discover your options{" "}
                            <Icon name="arrow" size={16} />
                        </button>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85"
                        alt="Bride in a wedding gown"
                        loading="lazy"
                        className="h-87.5 w-full object-cover md:h-full md:min-h-140"
                    />
                </div>
            </section>

            <section className="px-5 py-20 text-center md:px-8 md:py-24">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#a18755]">
                    Your bridal appointment
                </p>
                <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl sm:text-5xl">
                    Let's find the one.
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-[#777166]">
                    Tell us about your wedding, the styles you love and what
                    matters most to you. We'll help you take the next step.
                </p>
                <button
                    onClick={() => navigate("/appointments")}
                    className="mt-8 bg-[#302d27] px-7 py-4 text-xs uppercase tracking-[0.14em] text-white hover:bg-[#8d7954]"
                >
                    Arrange an appointment
                </button>
            </section>
        </>
    );
}
