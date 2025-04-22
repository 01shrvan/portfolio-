import { FC } from "react";

const works = [
  {
    name: "dreamskrin",
    link: "https://dreamskrin.com",
    title: "full stack dev"
  },
  {
    name: "align network",
    link: "https://getalign.01shrvan.tech/",
    title: "cool shit in progress (maybe)"
  },
  {
    name: "journally",
    link: "https://journally01.vercel.app",
    title: "a safe space in sans-serif"
  },
  {
    name: "wandr",
    link: "https://wandr-eight.vercel.app",
    title: "leave footprints ✦ not cookies | dev in progress"
  }
];


const Works: FC = () => {
  return <section className="py-24">
    <div className="container">
      <h2 className="text-4xl">works</h2>
      <div className="mt-10">
        {works.map(({ name, title, link }) => (
          <a href={link} key={name} target="_blank" rel="noopener noreferrer" className="border-t last:border-b border-dashed border-stone-400 py-6 flex flex-col">
            <div className="">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <div className="mt-1 flex justify-between items-center h-6">
                <div className="text-lg text-gray-400">{title}</div>
                <div className="flex items-center justify-center h-6 w-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>

                </div>
              </div>

            </div>
          </a>
        ))}
      </div>
    </div>
  </section >

};

export default Works;
