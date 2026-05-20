import { createFileRoute } from "@tanstack/react-router";
import heroBurger from "@/assets/hero-burger.jpg";
import fries from "@/assets/fries.jpg";
import burger2 from "@/assets/burger-2.jpg";
import interior from "@/assets/interior.jpg";
import wings from "@/assets/wings.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Uncle Nene's Ngummo — Nairobi's Best Burgers & Fries" },
      {
        name: "description",
        content:
          "Home of Nairobi's BEST burgers, wings & loaded fries. Visit us on Mbagathi Road, Ngummo or order pickup & delivery. Open daily.",
      },
      { property: "og:title", content: "Uncle Nene's Ngummo — Nairobi's Best Burgers" },
      { property: "og:description", content: "Smashed patties, golden fries, sticky wings. 4.5★ from 4,566 reviews." },
      { property: "og:image", content: heroBurger },
      { property: "og:type", content: "website" },
    ],
  }),
});

const PHONE = "+254736713761";
const PHONE_DISPLAY = "+254 736 713 761";

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-ember grid place-items-center font-display text-charcoal text-lg">U</span>
          <span className="font-display text-xl tracking-wider">Uncle Nene's</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#menu" className="hover:text-foreground transition">Menu</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
          <a href="#visit" className="hover:text-foreground transition">Visit</a>
        </nav>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-ember px-5 py-2 text-sm font-semibold text-primary-foreground shadow-ember hover:scale-105 transition"
        >
          Order Now
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <img
        src={heroBurger}
        alt="Signature bacon cheeseburger with golden fries"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-background/50 md:bg-gradient-to-r md:from-background md:via-background/70 md:to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 text-xs uppercase tracking-widest text-ember mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
            Open Now · Closes 7 PM
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.9] uppercase">
            Nairobi's <span className="text-gradient-ember">Best</span><br />
            Burgers &<br />
            Fries.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Smashed-to-order patties, hand-cut golden fries, and sticky wings — served hot on Mbagathi Road, Ngummo since day one.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center rounded-full bg-gradient-ember px-8 py-4 font-semibold text-primary-foreground shadow-ember hover:scale-105 transition"
            >
              Order Pickup or Delivery
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur px-8 py-4 font-semibold text-foreground hover:bg-card transition"
            >
              View the Menu
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm">
            <div>
              <div className="font-display text-3xl text-ember">4.5★</div>
              <div className="text-muted-foreground">4,566 reviews</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-display text-3xl">KES 1K–1.5K</div>
              <div className="text-muted-foreground">per person</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const menu = [
  {
    img: heroBurger,
    name: "The OG Smash",
    desc: "Double beef patty, melted cheddar, crispy bacon, brioche bun.",
    price: "KES 950",
  },
  {
    img: burger2,
    name: "Nene's Double Cheese",
    desc: "Two juicy patties, triple cheese, signature secret sauce.",
    price: "KES 1,100",
  },
  {
    img: fries,
    name: "Loaded Golden Fries",
    desc: "Hand-cut, twice-fried, dusted with our house seasoning blend.",
    price: "KES 450",
  },
  {
    img: wings,
    name: "Sticky Fire Wings",
    desc: "Crispy wings glazed in our smoky hot honey BBQ.",
    price: "KES 850",
  },
];

function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">The Menu</div>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              Food that <span className="text-gradient-ember">hits.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Every order made fresh. Every bite worth the trip. No shortcuts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menu.map((item) => (
            <article
              key={item.name}
              className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-ember/60 transition-all hover:-translate-y-1 hover:shadow-ember"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl uppercase">{item.name}</h3>
                  <span className="text-ember font-semibold text-sm">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Wanjiku M.",
    text: "Hands down the best burger in Nairobi. The patty is perfectly smashed, the bacon crispy. I drive across town just for these.",
    rating: 5,
  },
  {
    name: "David K.",
    text: "The wings are unreal. Ordered delivery and they still arrived hot and sticky. Uncle Nene's never disappoints.",
    rating: 5,
  },
  {
    name: "Aisha O.",
    text: "Cozy vibe, fast service, and those loaded fries… I'm obsessed. Bringing my whole family next weekend.",
    rating: 5,
  },
];

function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">The Word On The Street</div>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
            4,566 Reviews. <span className="text-gradient-ember">4.5 Stars.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-border bg-card p-8 hover:border-ember/40 transition"
            >
              <div className="flex gap-1 text-ember mb-4">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-foreground/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground uppercase tracking-wider">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={interior}
            alt="Uncle Nene's cozy restaurant interior"
            loading="lazy"
            width={1400}
            height={1000}
            className="rounded-2xl shadow-deep w-full h-auto object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-ember rounded-2xl p-6 shadow-ember">
            <div className="font-display text-5xl text-charcoal leading-none">10+</div>
            <div className="text-xs uppercase tracking-widest text-charcoal/80 mt-1">Years serving<br />Ngummo</div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-ember mb-3">Our Story</div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-none mb-6">
            A Nairobi <span className="text-gradient-ember">institution.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            What started as a small kitchen on Mbagathi Road has grown into one of Nairobi's most-loved spots for serious burgers and proper fries.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            We do one thing — comfort food, done right. Fresh patties, never frozen. Hand-cut potatoes. Sauces made in-house. The same recipes that built our name.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              ["100%", "Fresh beef"],
              ["Daily", "Hand-cut fries"],
              ["In-house", "Sauces & rubs"],
            ].map(([k, v]) => (
              <div key={v} className="rounded-xl border border-border p-4">
                <div className="font-display text-2xl text-ember">{k}</div>
                <div className="text-xs text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="visit" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-ember opacity-95" />
      <div className="relative mx-auto max-w-5xl px-6 text-center text-charcoal">
        <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
          Hungry yet?<br />Come through.
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-charcoal/80">
          Walk in, order pickup, or get it delivered hot to your door. We're ready when you are.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center rounded-full bg-charcoal text-cream px-8 py-4 font-semibold hover:scale-105 transition shadow-deep"
          >
            Call {PHONE_DISPLAY}
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Uncle+Nene's+Mbagathi+Road+Ngummo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-charcoal px-8 py-4 font-semibold text-charcoal hover:bg-charcoal hover:text-cream transition"
          >
            Get Directions
          </a>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
          <div>
            <div className="text-xs uppercase tracking-widest text-charcoal/60 mb-2">Address</div>
            <div className="font-semibold">Mbagathi Road,<br />Ngummo, Nairobi</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-charcoal/60 mb-2">Hours</div>
            <div className="font-semibold">Daily<br />Closes 7:00 PM</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-charcoal/60 mb-2">Phone</div>
            <div className="font-semibold">{PHONE_DISPLAY}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gradient-ember grid place-items-center font-display text-charcoal text-xs">U</span>
          <span className="font-display tracking-wider text-foreground">Uncle Nene's Ngummo</span>
        </div>
        <div>© {new Date().getFullYear()} Uncle Nene's. Home of Nairobi's best burgers.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-ember transition">Instagram</a>
          <a href="#" className="hover:text-ember transition">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Menu />
      <Reviews />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
