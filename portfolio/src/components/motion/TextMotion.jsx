"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useInView } from "framer-motion";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#________";

/** Decodes text with a hacker-style scramble, settling left to right. */
export function ScrambleText({ text, className = "", speed = 55, delay = 0, as: Tag = "span" }) {
  const [output, setOutput] = useState(text);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (inView) setStarted(true);
  }, [inView]);

  useEffect(() => {
    if (!started || reduce) return;
    let frame;
    let i = 0;
    const total = text.length;
    const timer = setTimeout(() => {
      frame = setInterval(() => {
        i++;
        // One character settles roughly every `speed` ms (interval ticks at 30ms)
        const settled = Math.min(total, Math.floor((i * 30) / speed) + 1);
        let str = "";
        for (let j = 0; j < Math.min(settled, total); j++) str += text[j];
        for (let j = settled; j < total; j++) {
          str += text[j] === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        setOutput(str);
        if (settled >= total) {
          setOutput(text);
          clearInterval(frame);
        }
      }, 30);
    }, delay);
    return () => {
      clearTimeout(timer);
      if (frame) clearInterval(frame);
    };
  }, [started, reduce, text, speed, delay]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {started && !reduce ? output : text}
    </Tag>
  );
}

/** Types phrases in a loop with a blinking caret. */
export function Typewriter({ phrases, className = "", typeMs = 65, holdMs = 1600, eraseMs = 35 }) {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("type");

  useEffect(() => {
    if (reduce) return;
    const word = phrases[idx % phrases.length];
    let t;
    if (phase === "type") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setPhase("erase"), holdMs);
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), eraseMs);
      } else {
        setPhase("type");
        setIdx((i) => (i + 1) % phrases.length);
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, phrases, reduce, typeMs, holdMs, eraseMs]);

  const display = reduce ? phrases[0] : text;

  return (
    <span className={className}>
      {display}
      <span
        aria-hidden="true"
        className="inline-block w-[2px] sm:w-[3px] h-[1em] ml-1 align-[-0.15em] bg-gradient-to-b from-blue-400 to-purple-500 animate-pulse"
      />
    </span>
  );
}

/** Counts up to a target number when scrolled into view. */
export function Counter({ to, suffix = "", decimals = 0, className = "", duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce, duration]);

  return (
    <span ref={ref} className={className}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
