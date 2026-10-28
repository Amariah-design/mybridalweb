import Icon from "./Icon";

export default function GownCard({ gown, onEnquire }) {
    return (
        <article className="group min-w-0">
            <button
                type="button"
                onClick={() => onEnquire(gown, "purchase")}
                className="relative block w-full overflow-hidden bg-[#f0ede5] text-left"
                aria-label={`View enquiry options for ${gown.name}`}
            >
                <img
                    src={gown.image}
                    alt={gown.name}
                    loading="lazy"
                    className="aspect-3/4 w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                <span className="absolute left-3 top-3 bg-[#faf8f3]/95 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-[#514b40]">
                    {gown.label}
                </span>
                <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center bg-[#faf8f3] text-[#302d27] transition group-hover:bg-[#b49a68] group-hover:text-white">
                    <Icon name="arrow" size={18} />
                </span>
            </button>

            <div className="pt-4">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#a18755]">
                    {gown.origin}
                </p>
                <h3 className="mt-2 font-serif text-xl">{gown.name}</h3>
                <p className="mt-2 text-xs leading-6 text-[#777166]">
                    {gown.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#e9e3d8] pt-3">
                    <div>
                        <p className="text-[9px] uppercase tracking-wider text-[#8c8375]">
                            Purchase
                        </p>
                        <p className="mt-1 text-sm font-medium">{gown.price}</p>
                    </div>
                    <button
                        onClick={() => onEnquire(gown, "rental")}
                        className="border border-[#b49a68] px-3 py-2.5 text-[10px] uppercase tracking-wider transition hover:bg-[#b49a68] hover:text-white"
                    >
                        Ask to rent
                    </button>
                </div>
            </div>
        </article>
    );
}
