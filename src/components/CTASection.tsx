export default function CTASection() {
  return (
    <section className="relative mt-16 w-full overflow-hidden rounded-3xl bg-accent dark:bg-accent-deep px-8 pt-16 pb-16 md:px-16">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h2 className="font-title text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
          Let's start with a free
          <br />
          15 minute check in
        </h2>
        <p className="mt-6 font-body text-xl text-white/90 md:text-2xl">
          We'll figure out what support looks like for you
        </p>
        <button className="mt-10 cursor-pointer rounded-full bg-white px-8 py-4 font-body text-base font-medium text-accent transition-all hover:bg-white/90">
          Schedule your check in
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
    </section>
  );
}

