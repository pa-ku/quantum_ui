import barilocheWebp from "../../assets/images/bariloche.webp";
export default function Product_Card() {
  return (
    <div className="bg-shadow-md h-max w-full rounded-xl sm:w-72 sm:bg-gray-950">
      <img
        className="h-60 w-full object-cover rounded-t-xl"
        src={barilocheWebp}
        alt=""
      />
      <div className="p-4">
        <h2 className="text-xl font-bold uppercase text-blue-400">
          Bariloche
        </h2>
        <p className="text-white">
          Una vista maravillosa desde el cerro campanario
        </p>
      </div>
    </div>
  );
}
