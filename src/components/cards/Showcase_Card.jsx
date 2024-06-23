import barilocheWebp from "../../assets/images/bariloche.webp";
import CodeBlock from "../CodeBlock";
export default function Showcase_card() {
  const codeBlock = `<div className="bg-shadow-md h-max w-full 
  rounded-xl 
  sm:w-72 
bg-gray-950">
  <img
  className="h-60 w-full rounded-t-xl object-cover"
  src="yourImg"
  alt=""/>
  <div className="p-4">
    <h3 className="text-xl font-bold uppercase 
    text-blue-400">
    Bariloche
    </h3>
    <p className="text-white">
    Una vista maravillosa desde el cerro campanario
    </p>
  </div>
</div>`;
  return (
    <>
      <div className="bg-shadow-md h-max w-full rounded-xl bg-gray-950 sm:w-72">
        <img
          className="h-60 w-full rounded-t-xl object-cover"
          src={barilocheWebp}
          alt=""
        />
        <div className="p-4">
          <h3 className="text-xl font-bold uppercase text-blue-400">
            Bariloche
          </h3>
          <p className="text-white">
            Una vista maravillosa desde el cerro campanario
          </p>
        </div>
      </div>
      <CodeBlock code={codeBlock} />
    </>
  );
}
