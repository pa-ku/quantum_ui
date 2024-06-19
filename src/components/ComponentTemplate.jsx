import codeSvg from "../assets/svg/codebtn.svg";

export default function ComponentTemplate({ children, title, text }) {
  return (
    <>
      <div className="container">
        <div className="flex w-max gap-2">
          <h2 className="title">{title}</h2>
          <button className="before:contents-['See Code'] before:conten relative flex h-max w-max rounded-full text-green-200 before:absolute before:w-20 before:bg-white before:text-white hover:bg-gray-200">
            <img className="h-full w-full object-fill" src={codeSvg} alt="" />
          </button>
        </div>
        {text && <p>{text}</p>}
        <section className="section">{children}</section>
      </div>
    </>
  );
}
