import { motion } from "framer-motion";
import { fadeUp, inView } from "../motion";
import { Carousel } from "./Carousel";
import { Portrait } from "./Portrait";
import { Value } from "./Value";

export function Family({ parents, sibling }) {
  return (
    <section className="band family" id="family">
      <header className="section-head">
        <p className="eyebrow">Family</p>
        <h2 className="display">People I belong to.</h2>
      </header>
      <Carousel title="Parents" people={parents} />
    </section>
  );
}
