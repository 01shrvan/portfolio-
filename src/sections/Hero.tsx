import { FC } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";

const Hero: FC = () => {
  return <section>
    <div className="container !max-w-full">
      <h1 className="text-5xl mt-40">
        software enginer out here makin clean, fast, and scalable web apps with the latest tech tryna make the web less laggy and more vibey ig
      </h1>
      <Button variant="secondary" iconAfter={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
      </svg>} >
        <span> peep my stuff</span>

      </Button>
    </div>
    <div>
      <Image src={heroImage} alt="xyz" />
    </div>
  </section>
};

export default Hero;
