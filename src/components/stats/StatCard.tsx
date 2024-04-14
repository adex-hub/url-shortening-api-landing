import Image from "next/image";
import React from "react";

interface StatCardProps {
  src: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

// Time to prop things up.
export default function StatCard({
  src,
  title,
  children,
  className,
}: StatCardProps) {
  return (
    <div className={`${className} z-30`}>
      <div className="w-[326px] xl:w-[350px] h-[268px] px-6 md:px-8 rounded shadow-md bg-white ">
        <div className="rounded-full p-6 bg-darkviolet w-fit mx-auto lg:mx-0 -translate-y-[40px]">
          <Image src={src} alt={title} width={40} height={40} />
        </div>
        <div className="space-y-4 translate-y-[-10px] md:translate-y-[-20px] text-center lg:text-left">
          <h3 className="font-bold text-[22px] text-verydarkviolet">{title}</h3>
          <p className="text-base text-grayishviolet">{children}</p>
        </div>
      </div>
    </div>
  );
}
