import { fetchMetadata } from "frames.js/next";
import type { Metadata } from "next";
import Link from "next/link";
import { appURL } from "./utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Morpho",
    description: "Morpho",
    other: {
      ...(await fetchMetadata(new URL("/frames", appURL()))),
    },
  };
}

// This is a react server component only
export default async function Home() {
  return (
    <div>
      <div className="p-4">
        {"developed by "}
        <Link href="https://dtech.vision" className="underline">
          dTech
        </Link>
        {" visit "}
        <Link href="https://app.morpho.org" className="underline bold">
          Morpho
        </Link>
      </div>
      <script>
        {`window.location.href = "http://app.morpho.org";`}
      </script>
    </div>
  );
}
