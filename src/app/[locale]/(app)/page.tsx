"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fragment, HTMLAttributeAnchorTarget, useCallback, useMemo, useState } from "react";

type Route = {
  name: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
}

const Home = () => {
  const translations = useTranslations();
  // States
  const [itemHover, setItemHover] = useState<string | null>(null);
  const domains: Route[] = useMemo(() => [
    {
      name: "dev",
      href: "https://github.com/lxup",
      target: "_blank",
    },
    {
      name: "music",
      href: "https://open.spotify.com/intl-fr/artist/4MbXz8Kvr9wizslkKT4wvJ",
      target: "_blank",
    },
    {
      name: "video",
      href: "/video",
    },
  ], [translations]);
  // Handlers
  const handleMouseEnter = useCallback((name: string) => {
    console.log("handleMouseEnter", name);
    setItemHover(name);
  }, []);
  const handleMouseLeave = useCallback(() => {
    console.log("handleMouseLeave");
    setItemHover(null);
  }, []);

  console.log("itemHover", itemHover);
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <ul className={"flex gap-2"}>
        {domains.map((domain, index) => (
          <Fragment key={index}>
            <li
            onMouseEnter={() => handleMouseEnter(domain.name)}
            onMouseLeave={handleMouseLeave}
            >
              <Link href={domain.href} target={domain.target}>
                {domain.name}
              </Link>
            </li>
            {index < domains.length - 1 && <span>·</span>}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Home;