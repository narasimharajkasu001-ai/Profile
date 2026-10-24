import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { fadeUp, inView, stagger } from "../motion";
import { Portrait } from "./Portrait";
import { Value } from "./Value";

export function Story({ chapters }) {
  return (
    <section className="story" aria-label="Profile story">
      {chapters.map((chapter, index) => {
        const isHero = chapter.id === "name";

        return (
          <article id={chapter.id} key={chapter.id} className={isHero ? "chapter chapter-hero" : "chapter"}>
            <ParallaxPhoto>
              <Portrait
                src={chapter.image}
                alt={`${chapter.kicker} photo`}
                mark={chapter.mark}
                eager={index === 0}
                className="chapter-photo"
              />
            </ParallaxPhoto>

            <motion.div
              className="info-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={inView}
            >
              <p className="eyebrow">{chapter.kicker}</p>

              {isHero ? (
                <h1 className="display name">
                  {chapter.title.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h1>
              ) : (
                <h2 className={isRedacted(chapter.title) ? "display redacted" : "display"}>
                  <Value>{chapter.title}</Value>
                </h2>
              )}

              {chapter.lede ? <p className="lede">{chapter.lede}</p> : null}

              {chapter.facts?.length ? (
                <motion.dl className="facts" variants={stagger}>
                  {chapter.facts.map((fact) => (
                    <motion.div key={fact.label} variants={fadeUp}>
                      <dt>{fact.label}</dt>
                      <dd>
                        <Value>{fact.value}</Value>
                      </dd>
                    </motion.div>
                  ))}
                </motion.dl>
              ) : null}

            </motion.div>
          </article>
        );
      })}
    </section>
  );
}

/* The photo drifts slightly slower than the page as its chapter scrolls past */
function ParallaxPhoto({ children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-5%", "5%"]);

  return (
    <div ref={ref} className="chapter-media">
      <motion.div className="chapter-media-inner" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

function isRedacted(value) {
  return String(value).includes("xxxxxxxx");
}
