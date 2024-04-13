import { Dispatch, SetStateAction, useEffect } from "react";
import ShortenedLink from "./ShortenedLink";
import { AnimatePresence, animate, motion } from "framer-motion";

interface ShortenedLinkProps {
  linkEls: any[];
  shortened: Promise<string> | string;
  resolvedShortened: string | null;
  onResolvedShortened: (resolvedShortened: string) => void;
  onLinkEls: Dispatch<SetStateAction<any[]>>;
}

export default function ShortenedLinksList({
  shortened,
  resolvedShortened,
  onResolvedShortened,
  linkEls,
  onLinkEls,
}: ShortenedLinkProps) {
  useEffect(() => {
    if (typeof shortened === "object" && "then" in shortened) {
      // If shortened is a promise, wait for it to resolve
      shortened.then((result: string) => {
        onResolvedShortened(result);
      });
    } else {
      // If shortened is not a promise, it's already resolved
      onResolvedShortened(shortened as string);
    }
    console.log(resolvedShortened);
  }, [shortened, resolvedShortened, onResolvedShortened]);

  // if (resolvedShortened === undefined)
  //   return (
  //     <p className="text-center text-sm text-red">
  //       Oops, cannot shorten this link!
  //     </p>
  //   );

  if (!resolvedShortened && !linkEls)
    return <p className="text-center text-sm text-green-400">Loading...</p>;

  return (
    <motion.section className="flex flex-col mx-auto w-full -translate-y-[72px] mt-8 space-y-4">
      <AnimatePresence>
        {linkEls?.map((linkItem) => (
          <ShortenedLink
            key={linkItem.id}
            linkEntered={linkItem.url}
            linkItem={linkItem}
            resolvedShortened={linkItem.shortenURL}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              initial: { duration: 0.1 },
              animate: { duration: 0.2 },
              exit: { duration: 0.3 },
            }}
            onLinkEls={onLinkEls}
          />
        ))}
      </AnimatePresence>
    </motion.section>
  );
}
