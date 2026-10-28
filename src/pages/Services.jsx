import Icon from "../components/Icon";

const services = [
    {
        number: "01",
        icon: "bag",
        title: "Gown Purchase",
        description:
            "Explore gowns available to purchase, with guidance on style, sizing and the details that matter to you.",
    },
    {
        number: "02",
        icon: "calendar",
        title: "Bridal Gown Rental",
        description:
            "Discuss rental options, booking periods, fitting arrangements, deposits and return conditions.",
    },
    {
        number: "03",
        icon: "ruler",
        title: "Fittings & Alterations",
        description:
            "Arrange a fitting to assess the gown's fit and discuss adjustments that may be possible.",
    },
    {
        number: "04",
        icon: "heart",
        title: "Custom Gown Design",
        description:
            "Discuss a design inspired by your preferred silhouette, fabrics, cultural traditions and personal style.",
    },
    {
        number: "05",
        icon: "check",
        title: "Traditional Bridal Styling",
        description:
            "Explore bridal looks inspired by African, Albanian, Arabic, South Asian and other cultural traditions.",
    },
    {
        number: "06",
        icon: "search",
        title: "Bridal Consultation",
        description:
            "Talk through your wedding date, budget, style preferences and the best next step for your gown.",
    },
];

export default function Services({ navigate }) {
    return (
        <>
            <section className="bg-[#f0ece3] px-5 py-16 md:px-14 md:py-20">
                <div className="mx-auto max-w-360">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#a18755]">
                        Personal service
                    </p>
                    <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">
                        More than finding a dress.
                    </h1>
                    <p className="mt-5 max-w-xl text-sm leading-8 text-[#777166]">
                        Every bride has different plans. Our services are
                        designed to help you explore your options and prepare
                        for your day.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-360 px-5 py-16 md:px-10 md:py-20 lg:px-14">
                <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="border-b border-[#e9e3d8] py-8 sm:py-10"
                        >
                            <div className="flex items-start justify-between">
                                <Icon
                                    name={service.icon}
                                    size={25}
                                    className="text-[#a18755]"
                                />
                                <span className="font-serif text-2xl text-[#b49a68]">
                                    {service.number}
                                </span>
                            </div>
                            <h2 className="mt-6 font-serif text-2xl">
                                {service.title}
                            </h2>
                            <p className="mt-3 max-w-lg text-sm leading-7 text-[#777166]">
                                {service.description}
                            </p>
                            <button
                                onClick={() => navigate("/appointments")}
                                className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wider hover:text-[#a18755]"
                            >
                                Make an enquiry <Icon name="arrow" size={15} />
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-[#eae3d6] px-5 py-16 text-center md:px-10 md:py-20">
                <h2 className="mx-auto max-w-2xl font-serif text-4xl">
                    Start with a conversation.
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-8 text-[#6f675b]">
                    Tell us what you are looking for, and we can discuss the
                    services and options that fit your plans.
                </p>
                <button
                    onClick={() => navigate("/appointments")}
                    className="mt-7 bg-[#302d27] px-7 py-4 text-xs uppercase tracking-wider text-white hover:bg-[#8d7954]"
                >
                    Book your consultation
                </button>
            </section>
        </>
    );
}
