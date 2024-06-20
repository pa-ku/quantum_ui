import cssSvg from "../assets/svg/css.svg";
import codeSvg from "../assets/svg/codebtn.svg";
import tailwindSvg from "../assets/svg/tailwind.svg";
import react from "../assets/svg/react.svg";

export default function Home() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center gap-24 px-4 xl:w-[42em]">
        <Banner />
        <CardsGrid />
        <HowTo />
      </main>
    </>
  );
}

function Banner() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="background flex h-40 w-full animate-glow items-center justify-center bg-gradient-to-t from-gray-300 to-white bg-clip-text text-center text-7xl font-semibold tracking-tight text-transparent">
          Design made real
        </h1>
        <p className="text-xl">
          Copy, paste and <span className="text-primary-200">use it</span>
        </p>
      </div>
    </>
  );
}

export function CardsGrid() {
  return (
    <>
      <section className="relative flex gap-7">
        <div className="hover:rotate-card animate-chroma [transform: rotateY(15deg)] [transform: rotateX(15deg)]] flex h-64 w-52 items-center justify-center rounded-md text-2xl font-bold duration-500">
          <div className="flex flex-col items-center justify-end">
            <img className="" src={react} alt="" />
            <p className="absolute bottom-2 text-background">React</p>
          </div>
        </div>
        <div className="animate-chroma [transform: rotateY(15deg)] [transform: rotateX(15deg)]] flex h-64 w-52 items-center justify-center rounded-md text-2xl font-bold duration-500">
          <div className="flex flex-col items-center">
            <img className="flex w-full p-10" src={tailwindSvg} alt="" />
            <p className="absolute bottom-2 text-background">Tailwind</p>
          </div>
        </div>
        <div className="animate-chroma [transform: rotateY(15deg)] [transform: rotateX(15deg)]] flex h-64 w-52 items-center justify-center rounded-md text-2xl font-bold duration-500">
          <div className="flex flex-col items-center">
            <img className="flex w-full p-10" src={cssSvg} alt="" />
            <p className="absolute bottom-2 text-background">Css</p>
          </div>
        </div>
      </section>
    </>
  );
}

function HowTo() {
  return (
    <>
      <section className="gap flex w-full flex-col items-start gap-10">
        <h2>How to use it?</h2>
        <div className="space-y-4">
          <p>1. Find the component you want</p>
          <span className="flex items-center gap-2">
            <p>2. Press the code button</p>
            <img src={codeSvg} alt="" />
          </span>
          <p>3. Choose tailwind or Pure css</p>
          <p>3. Copy and use the code wherever you need</p>
        </div>
      </section>
    </>
  );
}
