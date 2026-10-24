import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile, sections } from "../data";

export function Nav({ current }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={scrolled ? "nav is-scrolled" : "nav"}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-top">
        <a className="brand" href="#name">
          <span className="mark">{profile.mark}</span>
          <span className="brand-text">
            <strong>{profile.name}</strong>
            <small>Personal profile</small>
          </span>
        </a>
      </div>
      <nav className="nav-links" aria-label="Profile">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={current === section.id ? "true" : undefined}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
