export default function CTASection() {
  return (
    <section className="relative mt-32 w-full overflow-hidden rounded-3xl bg-[#8881c2] px-8 py-20 md:px-16 md:py-32">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="font-title text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
          Let's start with a free
          <br />
          15 minute check in
        </h2>
        <p className="mt-6 font-body text-xl text-white/90 md:text-2xl">
          We'll figure out what support looks like for you
        </p>
        <button className="mt-10 cursor-pointer rounded-full bg-white px-8 py-4 font-body text-base font-medium text-[#8881c2] transition-all hover:bg-white/90">
          Schedule your check in
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
    </section>
  );
}

