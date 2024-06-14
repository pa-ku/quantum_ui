import React from "react";

export default function ProductCard() {
  return (
    <div className="relative w-56 shadow-md shadow-gray-900">
      <div className="rounded-t-xl bg-white">
        <span className="text-md absolute right-0 rounded-bl-xl rounded-tr-xl bg-green-700 px-3 font-bold">
          13%
        </span>
        <img
          className="m-auto flex h-56 w-max rounded-t-xl object-contain p-3"
          src="https://http2.mlstatic.com/D_NQ_NP_2X_948739-MLA70155864929_062023-F.webp"
          alt=""
        />
      </div>
      <div className="rounded-b-xl bg-slate-700 p-2">
        <p className="text-xl">$100</p>
        <p className="text-blue-300 line-through">$50</p>
        <h3 className="font-bold text-slate-200">Segway Ninebot Gt2</h3>
      </div>
    </div>
  );
}
