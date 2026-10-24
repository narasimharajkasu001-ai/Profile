import { useMemo } from "react";
import { MotionConfig } from "framer-motion";
import { chapters, profile, sections } from "./data";
import { useActiveSection } from "./useActiveSection";
import { Nav } from "./components/Nav";
import { Story } from "./components/Story";
import { Family } from "./components/Family";
import { Footer } from "./components/Footer";

export default function App() {
  const ids = useMemo(() => sections.map((section) => section.id), []);
  const current = useActiveSection(ids);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#name">
        Skip to profile
      </a>
      <Nav current={current} />
      <main>
        <Story chapters={chapters} />
        <Family parents={profile.parents} />
      </main>
      <Footer profile={profile} />
    </MotionConfig>
  );
}
