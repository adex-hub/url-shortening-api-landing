import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";
import OpenMenu from "@/components/header/OpenMenu";
import Hero from "@/components/Hero";
import ShortenerForm from "@/components/shortener/ShortenerForm";
import Stats from "@/components/stats/Stats";
import CallToAction2 from "@/components/CallToAction2";
import Footer from "@/components/Footer";
import ShortenedLinksList from "@/components/shortener/ShortenedLinksList";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
// import useLocalStorageState from "@/hooks/useLocalStorageState";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [linkEntered, setLinkEntered] = useState("");
  const [resolvedShortened, setResolvedShortened] = useState<string | null>(
    null
  );
  const [linkEls, setLinkEls] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const storedLinkEls = localStorage.getItem("listElements");
      return storedLinkEls ? JSON.parse(storedLinkEls) : [];
    }

    return []; //fallback for server side.
  });
  const [shortened, setShortened] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("listElements", JSON.stringify(linkEls));
  }, [linkEls]);

  function handleMenuButtonClicked(): void {
    setMenuOpen((closed) => !closed);
  }

  return (
    <>
      <Head>
        <title>Link shortener</title>
        <meta property="og:title" content="Link shortener" key="title" />
      </Head>
      <body>
        <Header toggleMenu={handleMenuButtonClicked} />
        <main>
          {menuOpen && <OpenMenu />}
          <Hero />
          <section className="bg-subtlegray mt-[156px]">
            <ShortenerForm
              linkEntered={linkEntered}
              onLinkEntered={setLinkEntered}
              resolvedShortened={resolvedShortened}
              shortened={shortened}
              onShortened={setShortened}
              onLinkEls={setLinkEls}
            />
            <ShortenedLinksList
              linkEls={linkEls}
              onLinkEls={setLinkEls}
              shortened={shortened}
              resolvedShortened={resolvedShortened}
              onResolvedShortened={setResolvedShortened}
            />
            <Stats />
          </section>
          <CallToAction2 />
        </main>
        <Footer />
      </body>
    </>
  );
}
