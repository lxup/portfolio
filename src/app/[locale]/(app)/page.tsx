"use client";
import { upperCase } from "lodash";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fragment, HTMLAttributeAnchorTarget, useMemo } from "react";
import Marquee from "react-fast-marquee";

type Route = {
  name: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

const Home = () => {
  const translations = useTranslations("home");
  // States
  const domains: Route[] = useMemo(() => [
    {
      name: "dev",
      href: "/dev",
      target: "_blank",
    },
    {
      name: "music",
      href: "/music",
      target: "_blank",
    },
    {
      name: "video",
      href: "/video",
      target: "_blank",
    },
  ], [translations]);
  return (
    <div className="flex-1 flex flex-col relative">
      <Marquee className="py-2">
        {Array.from({ length: 100 }).map((_, index) => (
            <span key={index} className='mr-8 font-bold'>
              {upperCase(translations("marquee.text"))}
            </span>
          ))}
      </Marquee>
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="xl:flex-1 flex items-end max-w-[140rem] max-h-[40rem] w-full">
          <h2 className="text-3xl xl:text-6xl max-w-2xl">
            {translations.rich('resume.text', {
								linkRecomend: (chunk) => <Link href={"https://recomend.app"} className="text-foreground underline underline-offset-2 decoration-2 hover:text-accent-pink" target="_blank">{chunk}</Link>,
								linkSchool: (chunk) => <Link href={"https://42.fr"} className="text-foreground underline underline-offset-2 decoration-2 hover:text-accent-pink" target="_blank">{chunk}</Link>,
							})}
          </h2>
        </div>
      </div>
      <Marquee className="py-2">
        {Array.from({ length: 100 }).map((_, index) => (
            <span key={index} className='mr-8 font-bold'>
              {upperCase(translations("marquee.text"))}
            </span>
          ))}
      </Marquee>

      <div className="fixed z-10 bottom-10 bg-accent-pink rounded-full p-1 left-1/2 -translate-x-1/2">
        <ul className={"flex gap-2 md:text-lg lg:text-xl xl:text-2xl"}>
          {domains.map((domain, index) => (
            <Fragment key={index}>
              <li
              className="bg-background rounded-full px-4"
              >
                <Link href={domain.href} target={domain.target}>
                  {domain.name}
                </Link>
              </li>
              {index < domains.length - 1 && <span>•</span>}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;