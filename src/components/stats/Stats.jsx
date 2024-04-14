import StatCardList from "./StatCardList";

export default function Stats() {
  return (
    <section className="justify-center z-0">
      {/* TEXT SECTION */}
      <div className="text-center space-y-2 flex flex-col items-center">
        <h2 className="text-verydarkviolet mt-20 text-[27px] lg:text-[2.5rem] font-bold">
          Advanced Statistics
        </h2>
        <p className="text-grayishviolet text-[18px] w-[90%] lg:w-[38%] mx-auto font-[500] mb-[32px] leading-7">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <StatCardList />
    </section>
  );
}
