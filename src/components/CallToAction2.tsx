import Button from "./Button";

export default function CallToAction2() {
  return (
    <section className="flex justify-center items-center text-subtlegray flex-col gap-3 md:gap-6 bg-boost-pattern-m sm:bg-boost-pattern bg-darkviolet bg-no-repeat object-cover object-center w-full h-[250px]">
      <h2 className="text-[1.7rem] md:text-[2.5rem] font-bold">
        Boost your links today
      </h2>
      <Button type="larger">Get Started</Button>
    </section>
  );
}
