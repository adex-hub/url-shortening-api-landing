import { useEffect } from "react";
import ShortenedLink from "./ShortenedLink";
import { ShortenedLinkElement } from "./ShortenerForm";

interface ShortenedLinkProps {
  linkEls: any[];
  shortened: Promise<string> | string;
  linkEntered: string;
  resolvedShortened: string | null;
  onResolvedShortened: (resolvedShortened: string) => void;
}

export default function ShortenedLinksList({
  shortened,
  linkEntered,
  resolvedShortened,
  onResolvedShortened,
  linkEls,
}: ShortenedLinkProps) {
  // if (!linkEls) return;

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
    console.log(resolvedShortened); // this ain't logging in for some reason.
  }, [shortened, resolvedShortened, onResolvedShortened]);

  if (resolvedShortened === undefined)
    return (
      <p className="text-center text-sm text-red">
        Oops, cannot shorten this link!
      </p>
    );

  if (!resolvedShortened && !linkEls)
    return <p className="text-center text-sm text-green-400">Loading...</p>;

  return (
    <section className="flex flex-col mx-auto w-full -translate-y-[72px] mt-8 space-y-4">
      {linkEls?.map((linkItem) => (
        <ShortenedLink
          key={linkItem.id}
          shortened={shortened}
          linkEntered={linkItem.url}
          linkEls={linkEls}
          linkItem={linkItem}
          resolvedShortened={linkItem.shortenURL}
          onResolvedShortened={onResolvedShortened}
        />
      ))}
      {/* <ShortenedLink
        shortened={shortened}
        linkEntered={linkEntered}
        resolvedShortened={resolvedShortened}
        onResolvedShortened={onResolvedShortened}
      /> */}
    </section>
  );
}
