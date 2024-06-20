import codeSvg from "../assets/svg/codebtn.svg";

export default function ComponentTemplate({ children, title, text }) {
  return (
    <>
      <section className="flex h-full items-center justify-center py-5 xl:w-full">
        <div className="flex flex-col gap-10 xl:w-[36em]">
          <div className="flex w-full w-max gap-2">
            <h2 className="title">{title}</h2>
            <button className="before:contents-['See Code'] before:conter relative flex h-max w-max rounded-full text-green-200 before:absolute before:w-20 before:bg-white before:text-white hover:bg-gray-200">
              <img className="h-full w-full object-fill" src={codeSvg} alt="" />
            </button>
          </div>
          {text && <p>{text}</p>}
          <div className="flex w-full items-center justify-start xl:justify-center px-5">
            {children}
          </div>
          <span className="from-background via-primary-950 to-background h-1 w-full bg-red-200 bg-gradient-to-r"></span>
        </div>
      </section>
    </>
  );
}
