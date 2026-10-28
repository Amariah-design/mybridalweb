import { useCallback, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import About from "./pages/About";
import Appointments from "./pages/Appointments";

const validPages = [
  "/",
  "/collections",
  "/shop",
  "/services",
  "/about",
  "/appointments",
];

function readRoute() {
  const route = window.location.hash.slice(1);
  return validPages.includes(route) ? route : "/";
}

export default function App() {
  const [page, setPage] = useState(readRoute);
  const [enquiry, setEnquiry] = useState({
    gown: null,
    mode: "purchase",
  });

  const navigate = useCallback((path) => {
    const safePath = validPages.includes(path) ? path : "/";
    window.location.hash = safePath;
    setPage(safePath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    function handleHashChange() {
      setPage(readRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const onEnquire = useCallback(
    (gown, mode = "purchase") => {
      setEnquiry({ gown, mode });
      navigate("/appointments");
    },
    [navigate],
  );

  let content;

  switch (page) {
    case "/collections":
      content = <Collections navigate={navigate} onEnquire={onEnquire} />;
      break;

    case "/shop":
      content = <Shop navigate={navigate} onEnquire={onEnquire} />;
      break;

    case "/services":
      content = <Services navigate={navigate} />;
      break;

    case "/about":
      content = <About navigate={navigate} />;
      break;

    case "/appointments":
      content = (
        <Appointments
          key={`${enquiry.gown?.id || "new"}-${enquiry.mode}`}
          initialGown={enquiry.gown}
          initialMode={enquiry.mode}
        />
      );
      break;

    default:
      content = <Home navigate={navigate} onEnquire={onEnquire} />;
  }

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#302d27]">
      <Navbar page={page} navigate={navigate} />

      <main>{content}</main>

      <Footer navigate={navigate} />
    </div>
  );
}
