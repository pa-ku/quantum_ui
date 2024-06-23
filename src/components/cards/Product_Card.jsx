import CodeBlock from "../CodeBlock";

export default function Product_card() {
  const price = 100;
  const oldPrice = 150;
  const discount = Math.floor(((oldPrice - price) / oldPrice) * 100);

  const codeBlock = `<div className="relative w-56 shadow-md 
  shadow-gray-900">
  <div className="rounded-t-xl bg-white">
    <span className="absolute right-0 rounded-bl-xl 
    rounded-tr-xl bg-green-300 px-3 
    text-xl font-bold text-green-900">
    {discount}%
    </span>
    <img
    className="m-auto flex h-56 w-max
    rounded-t-xl object-contain p-3"
    src="yourImg"
    alt=""/>
  </div>
  <div className="rounded-b-xl bg-slate-700 p-2">
    <p className="text-xl">
    ${price}
    </p>
    <p className="text-blue-300 line-through">
    ${oldPrice}
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
          <span className="absolute right-0 rounded-bl-xl rounded-tr-xl bg-green-300 px-3 text-xl font-bold text-green-900">
            {discount}%
          </span>
          <img
            className="m-auto flex h-56 w-max rounded-t-xl object-contain p-3"
            src="https://http2.mlstatic.com/D_NQ_NP_2X_948739-MLA70155864929_062023-F.webp"
            alt=""
          />
        </div>
        <div className="rounded-b-xl bg-slate-700 p-2">
          <p className="text-xl">${price}</p>
          <p className="text-blue-300 line-through">${oldPrice}</p>
          <h3 className="font-bold text-slate-200">Segway Ninebot Gt2</h3>
        </div>
      </div>
      <CodeBlock code={codeBlock} />
    </>
  );
}
