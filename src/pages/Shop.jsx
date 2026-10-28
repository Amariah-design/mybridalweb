import { useState } from "react";
import { gowns } from "../data";
import GownCard from "../components/GownCard";
import Icon from "../components/Icon";

export default function Shop({ navigate, onEnquire }) {
    const [mode, setMode] = useState("All");

    return (
        <>
            <section className="bg-[#f0ece3] px-5 py-16 md:px-14 md:py-20">
                <div className="mx-auto max-w-360">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#a18755]">
                        Shop the collection
                    </p>
                    <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
                        Find your gown.
                    </h1>
                    <p className="mt-5 max-w-xl text-sm leading-8 text-[#777166]">
                        Whether you want a gown to keep or prefer to rent for
                        your wedding, let's find an option that works for you.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-360 px-5 py-14 md:px-10 lg:px-14">
                <div className="grid gap-4 md:grid-cols-2">
                    <button
                        onClick={() => setMode(mode === "Buy" ? "All" : "Buy")}
                        className={`border p-6 text-left transition sm:p-8 ${
                            mode === "Buy"
                                ? "border-[#b49a68] bg-[#f0ece3]"
                                : "border-[#e9e3d8] hover:bg-[#f5f1e9]"
                        }`}
                    >
                        <Icon name="bag" size={24} />
                        <h2 className="mt-5 font-serif text-2xl">
                            Purchase a gown
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-[#777166]">
                            Find a design to keep, customise or treasure beyond
                            the wedding day.
                        </p>
                        <span className="mt-5 inline-block text-xs underline underline-offset-4">
                            Explore purchase options
                        </span>
                    </button>

                    <button
                        onClick={() =>
                            setMode(mode === "Rent" ? "All" : "Rent")
                        }
                        className={`border p-6 text-left transition sm:p-8 ${
                            mode === "Rent"
                                ? "border-[#b49a68] bg-[#f0ece3]"
                                : "border-[#e9e3d8] hover:bg-[#f5f1e9]"
                        }`}
                    >
                        <Icon name="calendar" size={24} />
                        <h2 className="mt-5 font-serif text-2xl">
                            Rent a gown
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-[#777166]">
                            Enquire about rental periods, fitting appointments,
                            deposits and return arrangements.
                        </p>
                        <span className="mt-5 inline-block text-xs underline underline-offset-4">
                            Explore rental options
                        </span>
                    </button>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-[#e9e3d8] pb-5">
                    <h2 className="font-serif text-3xl">
                        {mode === "Buy"
                            ? "Gowns to purchase"
                            : mode === "Rent"
                              ? "Gowns to rent"
                              : "Explore the collection"}
                    </h2>
                    <button
                        onClick={() => setMode("All")}
                        className="text-xs underline underline-offset-4"
                    >
                        Show all
                    </button>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {gowns.map((gown) => (
                        <div key={gown.id}>
                            <GownCard
                                gown={gown}
                                onEnquire={(selected, requestedMode) =>
                                    onEnquire(
                                        selected,
                                        mode === "Rent"
                                            ? "rental"
                                            : requestedMode,
                                    )
                                }
                            />
                            <button
                                onClick={() =>
                                    onEnquire(
                                        gown,
                                        mode === "Rent" ? "rental" : "purchase",
                                    )
                                }
                                className="mt-3 flex w-full items-center justify-center gap-2 bg-[#302d27] px-4 py-3 text-xs uppercase tracking-wider text-white hover:bg-[#8d7954]"
                            >
                                {mode === "Rent"
                                    ? "Enquire about rental"
                                    : mode === "Buy"
                                      ? "Enquire to purchase"
                                      : "View buying & rental options"}
                                <Icon name="arrow" size={15} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 border border-[#e9e3d8] bg-[#f5f1e9] p-6 sm:p-10">
                    <h2 className="font-serif text-3xl">Need help choosing?</h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#777166]">
                        Book a consultation to discuss your budget, preferred
                        silhouette, sizing and wedding date.
                    </p>
                    <button
                        onClick={() => navigate("/appointments")}
                        className="mt-6 border border-[#b49a68] px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#b49a68] hover:text-white"
                    >
                        Book a consultation
                    </button>
                </div>
            </section>
        </>
    );
}
