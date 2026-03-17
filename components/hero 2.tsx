"use client";

import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { OrbitRings } from "@/components/hero/orbit-rings";
import { OrbitTechBadges } from "@/components/hero/orbit-tech-badges";
import { FloatingNodes } from "@/components/hero/floating-nodes";
import { PipelineFlow } from "@/components/hero/pipeline-flow";

const CURL_COMMAND = "curl -s https://api.hasibsafi.com/profile";
const TYPING_SPEED = 30;
const NETWORK_PAUSE = 500;
const DEVELOPER_NAME = "Hasib Safi";
const SPLIT_DELAY = 500;

interface ResponseLine {
  content: ReactNode;
  delay: number;
}

const responseLines: ResponseLine[] = [
  { delay: 0, content: <span>&nbsp;</span> },
  {
    delay: 150,
    content: <span className="text-emerald-400">HTTP/1.1 200 OK</span>,
  },
  {
    delay: 300,
    content: (
      <span className="text-muted-foreground">
        Content-Type: application/json
      </span>
    ),
  },
  {
    delay: 450,
    content: (
      <span className="text-muted-foreground">
        X-Powered-By: caffeine-and-curiosity
      </span>
    ),
  },
  { delay: 600, content: <span>&nbsp;</span> },
  {
    delay: 750,
    content: <span className="text-muted-foreground">{"{"}</span>,
  },
  {
    delay: 870,
    content: (
      <>
        <span className="text-foreground">{'  "name"'}</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-neon">{'"Hasib Safi"'}</span>
        <span className="text-muted-foreground">,</span>
      </>
    ),
  },
  {
    delay: 990,
    content: (
      <>
        <span className="text-foreground">{'  "title"'}</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-neon">{'"Full-Stack Engineer"'}</span>
        <span className="text-muted-foreground">,</span>
      </>
    ),
  },
  {
    delay: 1110,
    content: (
      <>
        <span className="text-foreground">{'  "status"'}</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-neon">{'"open_to_work"'}</span>
        <span className="text-muted-foreground">,</span>
      </>
    ),
  },
  {
    delay: 1230,
    content: (
      <>
        <span className="text-foreground">{'  "skills"'}</span>
        <span className="text-muted-foreground">: [</span>
        <span className="text-neon">{'"TypeScript"'}</span>
        <span className="text-muted-foreground">, </span>
        <span className="text-neon">{'"React"'}</span>
        <span className="text-muted-foreground">, </span>
        <span className="text-neon">{'"Next.js"'}</span>
        <span className="text-muted-foreground">, </span>
        <span className="text-neon">{'"Node.js"'}</span>
        <span className="text-muted-foreground">],</span>
      </>
    ),
  },
  {
    delay: 1350,
    content: (
      <>
        <span className="text-foreground">{'  "focus"'}</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-neon">
          {'"real-time systems & performance optimization"'}
        </span>
        <span className="text-muted-foreground">,</span>
      </>
    ),
  },
  {
    delay: 1470,
    content: (
      <>
        <span className="text-foreground">{'  "message"'}</span>
        <span className="text-muted-foreground">: </span>
        <span className="text-neon">
          {'"'}Let{"'"}s build something great together.{'"'}
        </span>
      </>
    ),
  },
  {
    delay: 1590,
    content: <span className="text-muted-foreground">{"}"}</span>,
  },
  { delay: 1740, content: <span>&nbsp;</span> },
  {
    delay: 2140,
    content: <span className="text-emerald-400">✓ 200 OK · 42ms</span>,
  },
];

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/hasibsafi", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/hasibsafi", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hasibsaf91@gmail.com", label: "Email" },
];

export function Hero() {
  const [typingDone, setTypingDone] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [splitPhase, setSplitPhase] = useState(false);
  const [infoRevealed, setInfoRevealed] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const curlTextRef = useRef<HTMLSpanElement>(null);
  const curlCursorRef = useRef<HTMLSpanElement>(null);
  const timersRef = useRef<
    ReturnType<typeof setTimeout | typeof setInterval>[]
  >([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    function clearAll() {
      timersRef.current.forEach((id) => {
        clearTimeout(id);
        clearInterval(id);
      });
      timersRef.current = [];
    }

    function resetState() {
      setTypingDone(false);
      setVisibleCount(0);
      setSplitPhase(false);
      setInfoRevealed(false);
      if (curlTextRef.current) curlTextRef.current.textContent = "";
      if (curlCursorRef.current) curlCursorRef.current.style.display = "none";
      if (terminalRef.current) {
        terminalRef.current.style.transform = "";
        terminalRef.current.style.transition = "";
        terminalRef.current.style.width = "";
      }
    }

    function startPhase3() {
      const splitTimer = setTimeout(() => {
        const termEl = terminalRef.current;
        const firstRect = termEl?.getBoundingClientRect();

        flushSync(() => setSplitPhase(true));

        if (termEl && firstRect) {
          const oldWidth = firstRect.width;

          termEl.style.transition = "none";
          termEl.style.width = `${oldWidth}px`;

          const lastRect = termEl.getBoundingClientRect();
          const deltaX = firstRect.left - lastRect.left;

          if (Math.abs(deltaX) > 1) {
            termEl.style.transform = `translateX(${deltaX}px)`;

            termEl.getBoundingClientRect();

            termEl.style.transition = "transform 2s cubic-bezier(0.4,0,0.2,1)";
            termEl.style.transform = "translateX(0)";

            const onEnd = (e: TransitionEvent) => {
              if (e.propertyName !== "transform") return;
              termEl.removeEventListener("transitionend", onEnd);
              termEl.style.transform = "";

              termEl.style.transition = "width 0.6s cubic-bezier(0.4,0,0.2,1)";
              termEl.getBoundingClientRect();
              termEl.style.width = "";

              const onWidthEnd = (e: TransitionEvent) => {
                if (e.propertyName !== "width") return;
                termEl.style.transition = "";
                termEl.removeEventListener("transitionend", onWidthEnd);
              };
              termEl.addEventListener("transitionend", onWidthEnd);
            };
            termEl.addEventListener("transitionend", onEnd);
          } else {
            termEl.style.transition = "";
            termEl.style.width = "";
          }
        }

        const revealDelay = setTimeout(() => setInfoRevealed(true), 1400);
        timersRef.current.push(revealDelay);
      }, SPLIT_DELAY);
      timersRef.current.push(splitTimer);
    }

    function startAnimation() {
      clearAll();
      resetState();

      let charIndex = 0;
      const typingInterval = setInterval(() => {
        charIndex++;
        if (curlTextRef.current)
          curlTextRef.current.textContent = CURL_COMMAND.slice(0, charIndex);
        if (curlCursorRef.current && charIndex === 1)
          curlCursorRef.current.style.display = "";

        if (charIndex >= CURL_COMMAND.length) {
          clearInterval(typingInterval);
          if (curlCursorRef.current)
            curlCursorRef.current.style.display = "none";

          const pauseTimer = setTimeout(() => {
            setTypingDone(true);

            responseLines.forEach((line, index) => {
              const lineTimer = setTimeout(() => {
                setVisibleCount((prev) => Math.max(prev, index + 1));
                if (index === responseLines.length - 1) {
                  startPhase3();
                }
              }, line.delay);
              timersRef.current.push(lineTimer);
            });
          }, NETWORK_PAUSE);
          timersRef.current.push(pauseTimer);
        }
      }, TYPING_SPEED);
      timersRef.current.push(typingInterval);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          clearAll();
          resetState();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      clearAll();
    };
  }, []);

  const allVisible = visibleCount >= responseLines.length;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-24 md:pb-20"
    >
      <OrbitRings />
      <OrbitTechBadges />
      <FloatingNodes />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cloud-cyan/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-subtle-indigo/20 blur-[100px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <div className="devops-grid" />
      </div>

      {/* Outer wrapper — max-width switches instantly, no transition */}
      <div
        className={`relative z-10 mx-auto w-full ${
          splitPhase ? "max-w-6xl" : "max-w-3xl"
        }`}
      >
        {/* Flex layout — switches to row instantly on split */}
        <div
          className={`flex flex-col gap-6 ${
            splitPhase ? "md:flex-row md:items-center md:gap-12" : ""
          }`}
        >
          {/* Left column: Info panel — staggered fade-in-up */}
          {splitPhase && (
            <div
              className="animate-fade-in-up md:w-1/2 will-change-[opacity,transform]"
              style={{ animationDuration: "1.2s" }}
            >
              <div className="space-y-5">
                <h1
                  className={`text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl ${
                    infoRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                    transitionDelay: infoRevealed ? "0ms" : "0ms",
                  }}
                >
                  {DEVELOPER_NAME}
                </h1>

                <p
                  className={`font-mono text-lg text-muted-foreground sm:text-xl ${
                    infoRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                    transitionDelay: infoRevealed ? "100ms" : "0ms",
                  }}
                >
                  Full-Stack Software Engineer
                </p>

                <p
                  className={`max-w-md text-pretty text-base leading-relaxed text-muted-foreground ${
                    infoRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                    transitionDelay: infoRevealed ? "250ms" : "0ms",
                  }}
                >
                  I specialize in building and deploying production web
                  applications with real-time systems, secure authentication,
                  and performance optimization. Driven by clean architecture
                  and shipping fast.
                </p>

                <div
                  className={infoRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  style={{
                    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                    transitionDelay: infoRevealed ? "400ms" : "0ms",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-neon px-5 py-2.5 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_20px_rgba(0,210,211,0.3)]"
                    >
                      Get in touch
                    </a>
                    <div className="flex items-center gap-3">
                      {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-glass-border bg-glass text-muted-foreground transition-colors hover:border-neon/50 hover:text-neon"
                        >
                          <Icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right column: Terminal — FLIP-animated slide */}
          <div
            ref={terminalRef}
            className={splitPhase ? "md:w-1/2 md:flex-shrink-0" : "w-full"}
          >
            <div className="glass-panel overflow-hidden rounded-xl shadow-2xl shadow-infra-cyan/20">
              <div className="flex items-center gap-2 border-b border-glass-border bg-secondary/40 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  terminal
                </span>
              </div>

              <div className="p-5 sm:p-6">
                <div
                  className="font-mono text-xs leading-relaxed sm:text-sm sm:leading-relaxed"
                  role="presentation"
                >
                  {/* Curl command — ref-based typing, zero re-renders */}
                  <div className="flex">
                    <span className="text-emerald-400">$ </span>
                    <span ref={curlTextRef} className="text-foreground" />
                    <span
                      ref={curlCursorRef}
                      className="animate-pulse text-neon"
                      style={{ display: "none" }}
                    >
                      ▌
                    </span>
                  </div>

                  {/* Response lines — state-driven reveal */}
                  {typingDone &&
                    responseLines.map((line, index) => (
                      <div
                        key={index}
                        className={
                          index < visibleCount
                            ? "flex animate-fade-in-up"
                            : "flex translate-y-2 opacity-0"
                        }
                      >
                        <span className="whitespace-pre-wrap">
                          {line.content}
                        </span>
                      </div>
                    ))}

                  {allVisible && (
                    <div className="animate-fade-in-up">
                      <span className="animate-pulse text-neon">▌</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint — opacity only */}
        <div
          className={`mt-14 flex flex-col items-center gap-1 transition-opacity duration-500 md:mt-16 ${
            allVisible ? "animate-bounce opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            Scroll
          </span>
          <ArrowDown size={18} className="text-muted-foreground/50" />
        </div>

        <PipelineFlow />
      </div>
    </section>
  );
}
