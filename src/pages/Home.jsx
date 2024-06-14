import cssSvg from "../assets/svg/css.svg";
import codeSvg from "../assets/svg/codebtn.svg";
import tailwindSvg from "../assets/svg/tailwind.svg";
import thunder from "../assets/svg/thunder.svg";

export default function Home() {
  return (
    <>
      <main className=" flex w-full flex-col items-center justify-center gap-20 px-4 md:w-[42em]">
        <Banner />
        {/* <LastAdded /> */}
        <Bento />
        <HowTo />
      </main>
    </>
  );
}

function Bento() {
  return (
    <>
      <section className=" flex grid h-60 w-full grid-cols-2 grid-rows-2 gap-3 md:w-[40em]">
        <div className="bg- relative row-span-2 flex flex-col items-center justify-center rounded-md bg-[#0a1b16] p-2 text-center">
          <p className="z-10 text-3xl text-emerald-100">
            <span className="font-bold"> Copy once </span>use everywhere
          </p>
          <img
            className="absolute h-full w-full object-contain"
            src={thunder}
            alt=""
          />
        </div>

        <div className="flex flex-col items-center justify-center rounded-md bg-[#0a1b16] p-2">
          <img className="h-full w-full" src={tailwindSvg} alt="" />
        </div>

        <div className="flex items-center justify-center rounded-md bg-[#0a1b16] p-2">
          <img src={cssSvg} alt="" />
        </div>
      </section>
    </>
  );
}

function Banner() {
  return (
    <>
      <h1 className="animate-opacity flex h-40 w-full items-center justify-center bg-gradient-to-t from-gray-400 to-white bg-clip-text text-center text-7xl tracking-tight text-transparent">
        Design made real
      </h1>
    </>
  );
}
function LastAdded() {
  return (
    <>
      <main className="flex w-full items-center justify-center">
        <div className="h-f px-3">
          <h1 className="text-2xl text-white">New Components</h1>
          <section className="flex flex-wrap items-center justify-center gap-4">
            <div className="h-52 w-52 rounded-md bg-green-900"> </div>
            <div className="h-52 w-52 rounded-md bg-green-900"> </div>
            <div className="h-52 w-52 rounded-md bg-green-900"> </div>
            <div className="h-52 w-52 rounded-md bg-green-900"> </div>
          </section>
        </div>
      </main>
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
