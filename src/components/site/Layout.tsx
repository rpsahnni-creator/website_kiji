import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import { contact, products, productCategories, services } from "@/components/site/data";
import { ChatWidget } from "@/components/site/ChatBot";
import logo from "@/assets/kiji-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

const navLinkClass =
  "group relative py-1 text-base font-semibold text-muted-foreground transition-colors hover:text-primary";

function NavUnderline() {
  return (
    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 ease-out group-hover:w-full" />
  );
}

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={logo}
        alt="Kiji Technology logo"
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 object-contain"
      />
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold">Kiji Technology</span>
        <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          OPC Private Limited
        </span>
      </span>
    </Link>
  );
}

function TopBar() {
  return (
    <div className="hidden bg-forest text-forest-foreground md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-xs font-semibold">
        <div className="flex items-center gap-6">
          <a
            href={contact.phoneHref}
            className="flex items-center gap-1.5 opacity-85 transition-opacity hover:opacity-100"
          >
            <Phone className="h-3.5 w-3.5 text-sun" /> {contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-1.5 opacity-85 transition-opacity hover:opacity-100"
          >
            <Mail className="h-3.5 w-3.5 text-sun" /> {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-1.5 opacity-85">
          <MapPin className="h-3.5 w-3.5 text-sun" /> Deoghar, Jharkhand
        </div>
      </div>
    </div>
  );
}

function NavDropdown({
  label,
  panelClassName,
  children,
}: {
  label: string;
  panelClassName: string;
  children: (close: () => void) => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`${navLinkClass} flex items-center gap-1 ${open ? "text-primary" : ""}`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        <NavUnderline />
      </button>
      {open && (
        <div
          className={`absolute top-full z-50 mt-4 rounded-2xl border bg-card p-6 shadow-soft ${panelClassName}`}
        >
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
}

const dropdownItemClass =
  "block rounded-lg px-2 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary";

function ServicesMenu() {
  return (
    <NavDropdown label="Services" panelClassName="left-1/2 w-[560px] -translate-x-1/2">
      {(close) => (
        <>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {services.map(({ slug, title, icon: Icon }) => (
              <Link
                key={slug}
                to="/services/$slug"
                params={{ slug }}
                onClick={close}
                className={`${dropdownItemClass} flex items-center gap-2.5`}
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                {title}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-4">
            <Link to="/services" onClick={close} className="text-sm font-bold text-primary">
              View all services →
            </Link>
            <Link to="/hire-developers" onClick={close} className="text-sm font-bold text-primary">
              Hire developers →
            </Link>
            <Link to="/technologies" onClick={close} className="text-sm font-bold text-primary">
              Our tech stack →
            </Link>
          </div>
        </>
      )}
    </NavDropdown>
  );
}

function ProductsMenu() {
  return (
    <NavDropdown label="Products" panelClassName="left-1/2 w-[680px] -translate-x-1/2">
      {(close) => (
        <>
          <div className="grid grid-cols-3 gap-6">
            {productCategories.map((category) => {
              const items = products.filter((p) => p.category === category);
              if (items.length === 0) return null;
              return (
                <div key={category}>
                  <p className="px-2 text-[11px] font-bold uppercase tracking-wider text-primary">
                    {category}
                  </p>
                  <div className="mt-2 space-y-0.5">
                    {items.map((item) => (
                      <Link
                        key={item.slug}
                        to="/products/$slug"
                        params={{ slug: item.slug }}
                        onClick={close}
                        className={dropdownItemClass}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 border-t pt-4">
            <Link to="/products" onClick={close} className="text-sm font-bold text-primary">
              View all products →
            </Link>
          </div>
        </>
      )}
    </NavDropdown>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<"services" | "products" | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg">
      <TopBar />
      <div className="border-b">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            <Link
              to="/"
              className={navLinkClass}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              Home
              <NavUnderline />
            </Link>
            <Link to="/about" className={navLinkClass} activeProps={{ className: "text-primary" }}>
              About
              <NavUnderline />
            </Link>
            <ServicesMenu />
            <ProductsMenu />
            <Link
              to="/technologies"
              className={navLinkClass}
              activeProps={{ className: "text-primary" }}
            >
              Technologies
              <NavUnderline />
            </Link>
            <Link to="/blog" className={navLinkClass} activeProps={{ className: "text-primary" }}>
              Blog
              <NavUnderline />
            </Link>
            <Link
              to="/contact"
              className={navLinkClass}
              activeProps={{ className: "text-primary" }}
            >
              Contact
              <NavUnderline />
            </Link>
          </nav>
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-sun transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            Get a Quote
          </Link>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t bg-background px-5 py-4 lg:hidden">
          <Link to="/" onClick={() => setOpen(false)} className="block py-2 font-semibold">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block py-2 font-semibold">
            About
          </Link>
          <button
            type="button"
            onClick={() => setMobileSection((v) => (v === "services" ? null : "services"))}
            className="flex w-full items-center justify-between py-2 font-semibold"
          >
            Services
            <ChevronDown
              className={`h-4 w-4 transition-transform ${mobileSection === "services" ? "rotate-180" : ""}`}
            />
          </button>
          {mobileSection === "services" && (
            <ul className="ml-3 space-y-1 border-l pl-3 pb-2">
              {services.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: item.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-1.5 text-sm text-muted-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={() => setMobileSection((v) => (v === "products" ? null : "products"))}
            className="flex w-full items-center justify-between py-2 font-semibold"
          >
            Products
            <ChevronDown
              className={`h-4 w-4 transition-transform ${mobileSection === "products" ? "rotate-180" : ""}`}
            />
          </button>
          {mobileSection === "products" && (
            <ul className="ml-3 space-y-1 border-l pl-3 pb-2">
              {products.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: item.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-1.5 text-sm text-muted-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Link
            to="/technologies"
            onClick={() => setOpen(false)}
            className="block py-2 font-semibold"
          >
            Technologies
          </Link>
          <Link
            to="/hire-developers"
            onClick={() => setOpen(false)}
            className="block py-2 font-semibold"
          >
            Hire Developers
          </Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="block py-2 font-semibold">
            Blog
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 font-semibold">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-gradient text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Kiji Technology logo"
              width={52}
              height={52}
              className="h-12 w-12 shrink-0 object-contain"
            />
            <span className="font-display text-xl font-bold">Kiji Technology OPC Private Limited</span>
          </div>
          <p className="mt-4 max-w-md text-sm opacity-75">
            Building smart websites, apps, management systems and AI automation that help
            institutions and businesses grow faster — with clean code and honest partnership.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-sun">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-sun">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="hover:text-sun">
                Products
              </Link>
            </li>
            <li>
              <Link to="/technologies" className="hover:text-sun">
                Technologies
              </Link>
            </li>
            <li>
              <Link to="/hire-developers" className="hover:text-sun">
                Hire Developers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-sun">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-sun">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-sun">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-sun">Popular products</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              "studymate",
              "online-test-platform",
              "school-management-system",
              "college-management-system",
              "university-management-system",
              "flat-management-system",
              "ai-automation-suite",
            ].map((slug) => (
              <li key={slug}>
                <Link to="/products/$slug" params={{ slug }} className="hover:text-sun">
                  {products.find((p) => p.slug === slug)?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-sun">Reach us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-sun" />{" "}
              <a href={contact.phoneHref} className="hover:text-sun">
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-sun" />{" "}
              <a href={`mailto:${contact.email}`} className="hover:text-sun">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-sun" />{" "}
              <span>
                {contact.addressLine1}, {contact.addressLine2}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs sm:flex-row">
          <p className="opacity-60">
            © {new Date().getFullYear()} Kiji Technology OPC Private Limited. All rights reserved.
          </p>
          <div className="flex gap-5 opacity-70">
            <Link to="/privacy-policy" className="hover:text-sun">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-sun">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-forest-gradient text-forest-foreground">
      <div className="mx-auto max-w-7xl px-5 py-24">
        <span className="rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg opacity-80">{text}</p>
      </div>
    </section>
  );
}
