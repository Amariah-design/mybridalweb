import Icon from "../components/Icon";

export default function About({ navigate }) {
    return (
        <>
            <section className="bg-[#f0ece3] px-5 py-16 md:px-14 md:py-20">
                <div className="mx-auto max-w-360">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#a18755]">
                        About the atelier
                    </p>
                    <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">
                        Bridal style should feel personal.
                    </h1>
                    <p className="mt-5 max-w-xl text-sm leading-8 text-[#777166]">
                        We believe every bride deserves the space to discover a
                        gown that reflects her taste, traditions and the day she
                        has imagined.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-360 items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-14 md:py-24">
                <img
                    src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=85"
                    alt="Bridal fashion and wedding-day details"
                    loading="lazy"
                    className="h-87.5 w-full object-cover sm:h-125"
                />
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#a18755]">
                        Our approach
                    </p>
                    <h2 className="mt-4 font-serif text-4xl leading-tight">
                        A thoughtful way to find your wedding gown.
                    </h2>
                    <p className="mt-5 text-sm leading-8 text-[#777166]">
                        Maison de Mariée is imagined as a bridal destination
                        where different traditions, silhouettes and personal
                        styles belong in the same collection.
                    </p>
                    <p className="mt-4 text-sm leading-8 text-[#777166]">
                        From a classic white gown to traditional bridal attire,
                        we want every bride to have the opportunity to explore
                        her preferences, consider her budget and find an option
                        that works for her.
                    </p>
                    <p className="mt-4 text-sm leading-8 text-[#777166]">
                        Our approach is simple: thoughtful guidance, clear
                        communication and attention to the details that make a
                        bridal experience feel special.
                    </p>
                </div>
            </section>

            <section className="bg-[#f3efe6] px-5 py-16 md:px-14 md:py-20">
                <div className="mx-auto max-w-360">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#a18755]">
                        What guides us
                    </p>
                    <h2 className="mt-3 font-serif text-4xl">
                        The details matter.
                    </h2>

                    <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Personal style",
                                text: "Helping brides explore gowns that suit their preferences rather than follow one definition of bridal beauty.",
                            },
                            {
                                title: "Cultural expression",
                                text: "Making room for different bridal traditions, modest styles and contemporary interpretations.",
                            },
                            {
                                title: "Practical choices",
                                text: "Offering a way to discuss buying, renting, alterations and custom designs based on individual needs.",
                            },
                        ].map((item) => (
                            <article
                                key={item.title}
                                className="border border-[#e3dac9] bg-[#faf8f3] p-6 sm:p-7"
                            >
                                <Icon
                                    name="heart"
                                    size={22}
                                    className="text-[#a18755]"
                                />
                                <h3 className="mt-5 font-serif text-2xl">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-[#777166]">
                                    {item.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 py-16 text-center md:py-20">
                <h2 className="font-serif text-4xl">Your story starts here.</h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#777166]">
                    Tell us what your dream gown looks like and let's explore
                    your options together.
                </p>
                <button
                    onClick={() => navigate("/appointments")}
                    className="mt-7 bg-[#302d27] px-7 py-4 text-xs uppercase tracking-wider text-white hover:bg-[#8d7954]"
                >
                    Arrange a fitting
                </button>
            </section>
        </>
    );
}
