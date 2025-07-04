"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fragment, useCallback, useMemo, useState } from "react";

type Route = {
  name: string;
}

const Home = () => {
  const translations = useTranslations();
  // States
  const [itemHover, setItemHover] = useState<string | null>(null);
  const domains: Route[] = useMemo(() => [
    { name: "dev" },
    { name: "music"},
    { name: "video" },
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
            onMouseEnter={() => console.log("onMouseEnter", domain.name)}
            onMouseLeave={() => console.log("onMouseLeave", domain.name)}
            >
              <Link href={`/${domain.name}`}>
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