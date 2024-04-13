import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

interface ShortenedLinkProps {
  linkEntered: string;
  resolvedShortened: string | null;
  linkItem: any;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  onLinkEls: any;
}

export default function ShortenedLink({
  linkEntered,
  resolvedShortened,
  linkItem,
  initial,
  animate,
  exit,
  transition,
  onLinkEls,
}: ShortenedLinkProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [beingHovered, setBeingHovered] = useState<boolean>(false);

  if (resolvedShortened === undefined && !linkEntered)
    return (
      <p className="text-center text-sm text-red">
        Oops, cannot shorten this link!
      </p>
    );

  if (!resolvedShortened)
    return <p className="text-center text-sm text-green-400">Loading...</p>;

  function removeLink(linkId: any): void {
    onLinkEls((prevLinks: any[]) =>
      prevLinks.filter((link: { id: any }) => link.id !== linkId)
    );
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      layout
      className="flex flex-col md:flex-row shadow-md bg-white justify-between md:items-center w-[88%] rounded-md mx-auto md:py-4 md:px-8"
      onMouseEnter={() => setBeingHovered(true)}
      onMouseLeave={() => setBeingHovered(false)}
    >
      {/* ON LAPTOP SCREENS */}
      <motion.div
        initial={{ gap: "0px" }}
        animate={{ gap: "12px" }}
        exit={{ gap: "0px" }}
        transition={{ duration: 0.9 }}
        className="hidden md:flex"
      >
        {beingHovered && (
          <AnimatePresence>
            <motion.div
              initial={{ display: "none", gap: "0px", opacity: 0 }}
              animate={{ display: "flex", gap: "12px", opacity: 1 }}
              exit={{ display: "none", gap: "0px", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <IoClose
                className="text-slate-400 hover:text-slate-500 duration-300 cursor-pointer"
                size={24}
                onClick={() => removeLink(linkItem.id)}
              />
            </motion.div>
          </AnimatePresence>
        )}
        <p className="p-4 md:p-0">{linkEntered}</p>
      </motion.div>

      {/* ON MOBILE SCREENS */}
      <div className="flex md:hidden flex-row-reverse justify-between items-center p-4">
        <IoClose
          className="text-slate-400 hover:text-slate-500 duration-300 cursor-pointer"
          size={24}
          onClick={() => removeLink(linkItem.id)}
        />
        <p>{linkEntered}</p>
      </div>

      <span className="md:hidden w-full bg-grayishviolet/50 h-[1px]"></span>

      <div className="flex flex-col md:flex-row gap-4  md:items-center p-4 md:p-0">
        <Link className="text-cyan" href={resolvedShortened}>
          {resolvedShortened}
        </Link>
        <button
          className={`${
            copied ? "bg-darkviolet" : "bg-cyan"
          }  py-6 flex items-center justify-center rounded-md font-bold md:min-w-fit h-0 px-4 min-w-full text-sm text-white duration-300`}
          onClick={() => {
            navigator.clipboard
              .writeText(resolvedShortened)
              .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 800);
              })
              .catch((err) => {
                console.error("Error copying to clipboard", err);
              });
          }}
          disabled={copied}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </motion.div>
  );
}
