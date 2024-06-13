import cssSvg from "../assets/svg/css.svg";
import codeSvg from "../assets/svg/codebtn.svg";
import tailwindSvg from "../assets/svg/tailwind.svg";
import thunder from "../assets/svg/thunder.svg";

export default function Home() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center gap-20 px-4 md:w-[40em]">
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
      <section className="flex grid h-60 w-full grid-cols-2 grid-rows-2 gap-3 md:w-[40em]">
        <div className="relative row-span-2 flex flex-col items-center justify-center rounded-md border-2 border-green-800 bg-green-950 p-2 text-center text-green-300">
          <p className="text-3xl text-green-200">
            <span className="font-bold"> Copy once </span>use everywhere
          </p>
        </div>

        <div className="flex items-center justify-center rounded-md border-2 border-green-800 bg-green-950 p-2">
          <img
            className="h-full w-full  text-green-800"
            src={tailwindSvg}
            alt=""
          />
        </div>

        <div className="flex items-center justify-center rounded-md border-2 border-green-800 bg-green-950 p-2 text-green-800">
          <img src={cssSvg} alt="" />
        </div>
      </section>
    </>
  );
}

function Banner() {
  return (
    <>
      <h1 className="flex h-40 w-full items-center justify-center bg-gradient-to-b from-white to-gray-300 bg-clip-text text-center text-7xl font-semibold tracking-tight text-transparent">
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
        <h2 className="w-full text-center text-4xl font-bold">
          How to use it?
        </h2>
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
