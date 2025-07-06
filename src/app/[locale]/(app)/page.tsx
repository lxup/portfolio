"use client";
import config from "@/lib/config";
import { random, shuffle } from "lodash";
import Link from "next/link";
import { Fragment, HTMLAttributeAnchorTarget, useMemo, useState } from "react";
import Marquee from "react-fast-marquee";

type Route = {
  name: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  marquee: string[];
}

const Home = () => {
  // States
  const [selectedDomain, setSelectedDomain] = useState<Route | null>(null);
  const domains: Route[] = useMemo(() => [
    {
      name: "dev",
      href: "/dev",
      target: "_blank",
      marquee: [
        "react",
        "nextjs",
        "typescript",
        "supabase",
        "c",
        "c++",
        "python",
        "javascript",
        "nodejs",
        "express",
        "appwrite",
        "docker",
        "kubernetes",
        "redis",
        "graphql",
        "rest",
        "firebase",
        "novu",
        "prisma",
        "drizzle",
        "prefect",
        "fastify",
        "coolify",
        "vercel",
        "sharp",
        "postgres",
        "s3",
        "martin",
        "cloudflare",
        "elasticsearch",
        "meilisearch",
        "vagrant",
        "git",
        "github",
      ]
    },
    {
      name: "music",
      href: "/music",
      target: "_blank",
      marquee: [
        "ableton",
        "pro tools",
        "fl studio",
        "guitar",
        "bass",
        "piano",
        "synthesizer",
      ],
    },
  ], []);
  const marqueeLines = useMemo(() => {
    if (!selectedDomain) return [];

    return Array.from({ length: 3 }).map(() => ({
      lines: shuffle(selectedDomain.marquee),
      speed: random(200, 800),
    }));
  }, [selectedDomain]);
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center p-4">
      {marqueeLines.length > 0 && <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-between">
        {marqueeLines.map((words, index) => (
            <Marquee
              key={index}
              speed={words.speed}
              gradient={false}
              direction={index % 2 === 0 ? "left" : "right"}
              className="w-full h-full items-center text-[30vh] leading-none font-[Herr_Von_Muellerhoff] text-black whitespace-nowrap overflow-hidden"
            >
              {Array(20)
              .fill(words)
              .map((words, index) => (
                <span key={index}>
                  {words.lines.map((word: string) => (
                    <Fragment key={word}>
                      {`${word} - `}
                    </Fragment>
                  ))}
                </span>
              ))}
            </Marquee>
        ))}
      </div>}
      <h1 className="text-8xl font-bold">{config.siteName}</h1>
      <div className="z-1 flex gap-2 text-4xl font-bold">
        {domains.map((domain, index) => (
          <Fragment key={index}>
            <Link
              href={domain.href}
              target={domain.target}
              className="hover:text-accent-pink hover:underline underline-offset-2 duration-500 transition-all"
              onMouseEnter={() => setSelectedDomain(domain)}
              onMouseLeave={() => setSelectedDomain(null)}
            >
              {domain.name}
            </Link>
            {index < domains.length - 1 && <span>-</span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;