import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative mx-auto mt-12 max-w-7xl overflow-hidden rounded-2xl px-6 pb-16 md:px-12 md:mt-16">
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-2xl">
        {/* Background Image - fills entire card */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <Image
            src="/hero-bg.png"
            alt="Hero background"
            fill
            className="object-cover w-full h-full rounded-3xl dark:brightness-50"
            priority
            sizes="100vw"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex h-full items-center">
          {/* Left Side - Hero Text */}
          <div className="w-full px-8 md:w-1/2 md:px-12 lg:px-16">
            <h1 className="font-title text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Your best year starts with taking care of your mind
            </h1>
            <button className="mt-8 rounded-full bg-white px-8 py-4 font-body text-base font-medium text-accent transition-all hover:bg-white/90 cursor-pointer">
              Schedule appointment
            </button>
          </div>

          {/* Right Side - Girl Mind Image - showing right side where person is */}
          <div className="absolute right-0 top-0 h-full w-full overflow-hidden rounded-r-2xl">
            <div className="relative h-full w-full">
              <Image
                src="/girl-mind.png"
                alt="Woman taking care of mental health"
                fill
            className="object-cover w-full h-full rounded-2xl"
            style={{
              maskImage: "radial-gradient(circle at center, black 85%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 85%, transparent 100%)"
            }}
                priority
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

