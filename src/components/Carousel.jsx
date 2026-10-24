import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, inView, stagger } from "../motion";
import { Portrait } from "./Portrait";
import { Value } from "./Value";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

export function Carousel({ title, people }) {
  const trackRef = useRef(null);
  const drag = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(people.length < 2);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;

    const sync = () => {
      const cards = [...el.children];
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, cardIndex) => {
        const dist = Math.abs(card.offsetLeft - el.scrollLeft);
        if (dist < bestDist) {
          best = cardIndex;
          bestDist = dist;
        }
      });
      setIndex(best);
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };

    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [people.length]);

  function goTo(next) {
    const el = trackRef.current;
    const card = el?.children[next];
    if (!el || !card) return;
    el.scrollTo({
      left: card.offsetLeft,
      behavior: reduceMotion.matches ? "auto" : "smooth",
    });
  }

  /* Mouse drag-to-scroll; touch screens already swipe natively */
  function startDrag(event) {
    if (event.pointerType !== "mouse") return;
    drag.current = { x: event.clientX, left: trackRef.current.scrollLeft };
    setDragging(true);
  }

  function moveDrag(event) {
    if (!drag.current) return;
    trackRef.current.scrollLeft = drag.current.left - (event.clientX - drag.current.x);
  }

  function endDrag() {
    drag.current = null;
    setDragging(false);
  }

  function onKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(Math.min(index + 1, people.length - 1));
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(Math.max(index - 1, 0));
    }
  }

  return (
    <motion.section
      className="carousel"
      aria-roledescription="carousel"
      aria-label={title}
      onKeyDown={onKeyDown}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      <div className="carousel-bar">
        <div className="carousel-controls">
          <span className="counter" aria-live="polite">
            {pad(index + 1)} / {pad(people.length)}
          </span>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={atStart}
            aria-label={`Previous ${title.toLowerCase()} photo`}
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={atEnd}
            aria-label={`Next ${title.toLowerCase()} photo`}
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>

      <div
        className={dragging ? "track is-dragging" : "track"}
        ref={trackRef}
        tabIndex={0}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {people.map((person, personIndex) => (
          <motion.figure
            className="print"
            key={`${person.relation}-${personIndex}`}
            variants={fadeUp}
          >
            <div className="print-mat">
              <Portrait
                src={person.image}
                alt={`${person.relation} portrait`}
                mark={person.mark}
              />
              <figcaption>
                <span className="relation">{person.relation}</span>
                <Value>{person.name}</Value>
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>

      <div className="dots">
        {people.map((person, personIndex) => (
          <button
            key={`${person.relation}-dot-${personIndex}`}
            type="button"
            aria-label={`Show ${person.relation} ${personIndex + 1}`}
            aria-current={personIndex === index ? "true" : undefined}
            onClick={() => goTo(personIndex)}
          />
        ))}
      </div>
    </motion.section>
  );
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function Arrow({ direction }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={direction === "left" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
