import { useState } from "react";
import { gowns, categories } from "../data";
import GownCard from "../components/GownCard";

export default function Collections({ navigate, onEnquire }) {
    const [category, setCategory] = useState("All");

    const filtered = gowns.filter(
        (gown) => category === "All" || gown.category === category,
    );

    return (
        <>
            <section className="bg-[#f0ece3] px-5 py-16 md:px-14 md:py-20">
                <div className="mx-auto max-w-360">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#a18755]">
                        Explore the atelier
                    </p>
                    <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">
                        Bridal, in all its beautiful forms.
                    </h1>
                    <p className="mt-5 max-w-2xl text-sm leading-8 text-[#777166]">
                        Discover styles inspired by different cultures, classic
                        silhouettes and modern bridal design. Choose a category
                        to begin exploring.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-360 px-5 py-12 md:px-10 md:py-16 lg:px-14">
                <div className="flex flex-wrap gap-2">
                    {categories.map((item) => (
                        <button
                            key={item}
                            onClick={() => setCategory(item)}
                            className={`border px-4 py-3 text-xs transition ${
                                category === item
                                    ? "border-[#302d27] bg-[#302d27] text-white"
                                    : "border-[#dfd8ca] hover:border-[#b49a68]"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="mt-9 flex items-center justify-between border-b border-[#e9e3d8] pb-4">
                    <p className="text-sm text-[#777166]">
                        {filtered.length} designs displayed
                    </p>
                    <button
                        onClick={() => setCategory("All")}
                        className="text-xs underline underline-offset-4"
                    >
                        Clear filter
                    </button>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filtered.map((gown) => (
                        <GownCard
                            key={gown.id}
                            gown={gown}
                            onEnquire={onEnquire}
                        />
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="py-16 text-center text-sm text-[#777166]">
                        No designs in this category yet. Please check back soon.
                    </p>
                )}
            </section>

            <section className="border-t border-[#e9e3d8] px-5 py-14 text-center">
                <p className="font-serif text-3xl">
                    Looking for something different?
                </p>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[#777166]">
                    Enquire about a particular silhouette, cultural design or
                    custom gown.
                </p>
                <button
                    onClick={() => navigate("/appointments")}
                    className="mt-6 border border-[#b49a68] px-6 py-3 text-xs uppercase tracking-wider hover:bg-[#b49a68] hover:text-white"
                >
                    Discuss a custom gown
                </button>
            </section>
        </>
    );
}
