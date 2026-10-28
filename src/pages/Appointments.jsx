import { useState } from "react";
import Icon from "../components/Icon";

export default function Appointments({
    initialGown = null,
    initialMode = "purchase",
}) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        weddingDate: "",
        service: initialMode,
        gown: initialGown?.name || "",
        style: "",
        budget: "",
        notes: "",
    });

    const [ready, setReady] = useState(false);

    function update(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    function submit(event) {
        event.preventDefault();
        setReady(true);
    }

    function sendWhatsApp() {
        // Replace with the real business number, including country code.
        const businessNumber = "2349060976683";

        const message = [
            "Hello Maison de Mariée, I would like to enquire about a bridal appointment.",
            "",
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Phone: ${form.phone}`,
            `Wedding date: ${form.weddingDate || "Not decided"}`,
            `Interested in: ${form.service}`,
            `Gown: ${form.gown || "Open to suggestions"}`,
            `Preferred style: ${form.style || "Not decided"}`,
            `Budget: ${form.budget || "Not specified"}`,
            `Additional details: ${form.notes || "None"}`,
        ].join("\n");

        window.open(
            `https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`,
            "_blank",
            "noopener,noreferrer",
        );
    }

    const fieldClass =
        "mt-2 w-full border border-[#e1d9cb] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b49a68]";

    return (
        <>
            <section className="bg-[#f0ece3] px-5 py-16 md:px-14 md:py-20">
                <div className="mx-auto max-w-360">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#a18755]">
                        Your bridal experience
                    </p>
                    <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">
                        Let's find the gown for your day.
                    </h1>
                    <p className="mt-5 max-w-xl text-sm leading-8 text-[#777166]">
                        Share a few details about your wedding and what you have
                        in mind. We'll use your enquiry to start the
                        conversation.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-360 gap-12 px-5 py-14 md:grid-cols-[0.7fr_1.3fr] md:px-14 md:py-20">
                <aside>
                    <h2 className="font-serif text-3xl">
                        A fitting, made personal.
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#777166]">
                        Let us know your wedding date, preferred style and
                        whether you are looking to buy, rent or explore a custom
                        design.
                    </p>

                    <div className="mt-8 space-y-5">
                        {[
                            [
                                "calendar",
                                "Your wedding date",
                                "Helps us understand your timeline.",
                            ],
                            [
                                "heart",
                                "Your preferred style",
                                "Tell us about the silhouettes or traditions you love.",
                            ],
                            [
                                "ruler",
                                "The right fit",
                                "Discuss sizing and possible alterations.",
                            ],
                        ].map(([icon, title, description]) => (
                            <div key={title} className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#dfd3bc] text-[#a18755]">
                                    <Icon name={icon} size={19} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-xs leading-6 text-[#777166]">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

                <form
                    onSubmit={submit}
                    className="border border-[#e9e3d8] bg-[#fdfbf7] p-5 sm:p-8 lg:p-10"
                >
                    <h2 className="font-serif text-3xl">Appointment enquiry</h2>
                    <p className="mt-2 text-xs leading-6 text-[#777166]">
                        Fields marked with * are required.
                    </p>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                        <label className="text-xs">
                            Full name *
                            <input
                                name="name"
                                value={form.name}
                                onChange={update}
                                required
                                placeholder="Your full name"
                                className={fieldClass}
                            />
                        </label>

                        <label className="text-xs">
                            Email address *
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={update}
                                required
                                placeholder="you@example.com"
                                className={fieldClass}
                            />
                        </label>

                        <label className="text-xs">
                            Phone number *
                            <input
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={update}
                                required
                                placeholder="Your phone number"
                                className={fieldClass}
                            />
                        </label>

                        <label className="text-xs">
                            Wedding date
                            <input
                                name="weddingDate"
                                type="date"
                                value={form.weddingDate}
                                onChange={update}
                                min={new Date().toISOString().split("T")[0]}
                                className={fieldClass}
                            />
                        </label>

                        <label className="text-xs">
                            I'm interested in *
                            <select
                                name="service"
                                value={form.service}
                                onChange={update}
                                required
                                className={fieldClass}
                            >
                                <option value="purchase">
                                    Purchasing a gown
                                </option>
                                <option value="rental">Renting a gown</option>
                                <option value="custom design">
                                    Custom design
                                </option>
                                <option value="fitting and alterations">
                                    Fitting and alterations
                                </option>
                                <option value="bridal consultation">
                                    Bridal consultation
                                </option>
                            </select>
                        </label>

                        <label className="text-xs">
                            Estimated budget
                            <select
                                name="budget"
                                value={form.budget}
                                onChange={update}
                                className={fieldClass}
                            >
                                <option value="">Choose a budget</option>
                                <option>Under ₦100,000</option>
                                <option>₦100,000 – ₦300,000</option>
                                <option>₦300,000 – ₦600,000</option>
                                <option>₦600,000 – ₦1,000,000</option>
                                <option>Above ₦1,000,000</option>
                                <option>Not decided</option>
                            </select>
                        </label>

                        <label className="text-xs sm:col-span-2">
                            Gown or collection of interest
                            <input
                                name="gown"
                                value={form.gown}
                                onChange={update}
                                placeholder="e.g. Mermaid gown, African traditional bridal attire..."
                                className={fieldClass}
                            />
                        </label>

                        <label className="text-xs sm:col-span-2">
                            Tell us more
                            <textarea
                                name="notes"
                                value={form.notes}
                                onChange={update}
                                rows={4}
                                placeholder="Preferred style, colour, size, guest fitting requirements or questions..."
                                className={`${fieldClass} resize-y`}
                            />
                        </label>
                    </div>

                    {!ready ? (
                        <button
                            type="submit"
                            className="mt-7 flex w-full items-center justify-center gap-3 bg-[#302d27] px-6 py-4 text-xs uppercase tracking-[0.13em] text-white hover:bg-[#8d7954]"
                        >
                            Prepare my enquiry <Icon name="arrow" size={16} />
                        </button>
                    ) : (
                        <div className="mt-7 border border-[#dfd3bc] bg-[#f0ece3] p-5">
                            <div className="flex items-center gap-2">
                                <Icon name="check" size={19} />
                                <p className="text-sm font-medium">
                                    Your enquiry is ready.
                                </p>
                            </div>
                            <p className="mt-2 text-xs leading-6 text-[#777166]">
                                Continue to WhatsApp to send your details. No
                                appointment has been confirmed yet.
                            </p>
                            <button
                                type="button"
                                onClick={sendWhatsApp}
                                className="mt-4 w-full bg-[#302d27] px-5 py-4 text-xs uppercase tracking-wider text-white hover:bg-[#8d7954]"
                            >
                                Continue to WhatsApp
                            </button>
                            <button
                                type="button"
                                onClick={() => setReady(false)}
                                className="mt-4 w-full text-xs underline underline-offset-4"
                            >
                                Edit my details
                            </button>
                        </div>
                    )}
                </form>
            </section>
        </>
    );
}
