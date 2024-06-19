import cssSvg from "../assets/svg/css.svg";
import codeSvg from "../assets/svg/codebtn.svg";
import tailwindSvg from "../assets/svg/tailwind.svg";
import thunder from "../assets/svg/thunder.svg";

export default function Home() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center gap-20 px-4 md:w-[42em]">
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
        <div className="bg-primary-1000 relative row-span-2 flex flex-col items-center justify-center rounded-md p-2 text-center">
          <p className="text-secundary-200 z-10 text-3xl">
            <span className="font-bold"> Copy once </span>use everywhere
          </p>
          <img
            className="absolute h-full w-full object-contain"
            src={thunder}
            alt=""
          />
        </div>

        <div className="bg-primary-1000 flex flex-col items-center justify-center rounded-md p-2">
          <img
            className="h-full w-full object-contain"
            src={tailwindSvg}
            alt=""
          />
        </div>

        <div className="bg-primary-1000 flex items-center justify-center rounded-md p-4">
          <img className="h-full w-full object-contain" src={cssSvg} alt="" />
        </div>
      </section>
    </>
  );
}

function Banner() {
  return (
    <>
      <h1 className="flex h-40 w-full animate-opacity items-center justify-center bg-gradient-to-t from-gray-400 to-white bg-clip-text text-center text-7xl tracking-tight text-transparent">
        Design made real
      </h1>
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
