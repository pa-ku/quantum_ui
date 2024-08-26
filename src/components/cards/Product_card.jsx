import CodeBlock from "../CodeBlock";

export default function Product_card() {
  const codeBlock = `<div className="relative w-56 shadow-md 
  shadow-gray-900">
  <div className="rounded-t-xl bg-white">
    <span className="absolute right-0 rounded-bl-xl 
    rounded-tr-xl bg-primary px-3 
    text-xl font-bold text-green-900">
   33%
    </span>
    <img
    className="m-auto flex h-56 w-max
    rounded-t-xl object-contain p-3"
    src="yourImg"
    alt=""/>
  </div>
  <div className="rounded-b-xl bg-slate-700 p-2">
    <p className="text-xl">
$100
    </p>
    <p className="text-gray-400 line-through">
$150
    </p>
    <h3 className="font-bold text-slate-200">
    Segway Ninebot Gt2
    </h3>
  </div>
</div>`;

  return (
    <>
      <div className="relative w-56 shadow-md shadow-gray-900">
        <div className="rounded-t-xl bg-white">
          <span className="bg-primary absolute right-0 rounded-bl-xl rounded-tr-xl px-3 text-xl font-bold">
            33%
          </span>
          <img
            className="m-auto flex h-56 w-max rounded-t-xl object-contain p-3"
            src="https://http2.mlstatic.com/D_NQ_NP_2X_948739-MLA70155864929_062023-F.webp"
            alt=""
          />
        </div>
        <div className="rounded-b-xl bg-slate-700 p-2">
          <p className="text-xl">$100</p>
          <p className="text-gray-400 line-through">$150</p>
          <h3 className="font-bold text-slate-200">Segway Ninebot Gt2</h3>
        </div>
      </div>
      <CodeBlock code={codeBlock} />
    </>
  );
}
