export const CARD_ACCENT = (
  <div className="relative flex h-60 w-40 items-center justify-center overflow-hidden rounded-xl p-0.5">
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-900 p-6 mix-blend-multiply">
      <img
        src="https://github.com/user-attachments/assets/166d70cb-82ea-4cd4-85f5-56b14f2b9693"
        alt=""
      />
    </div>
    <span className="animate-rotate absolute -z-10 h-80 w-80 rounded-full bg-gradient-to-r from-primary to-secundary"></span>
  </div>
)
export const CARD_ACCENT_CSS = `.animate-rotate{
    animation: rotate 3s linear infinite;
    }

@keyframes rotate {
  to{
    rotate: 360deg;
  }
  }`

export const CARD_PRODUCT = (
  <figure className="relative w-56 shadow-md shadow-gray-900">
    <div className="rounded-t-xl border-b-2 bg-white">
      <span
        aria-label="Descuento"
        className="absolute right-0 rounded-bl-xl rounded-tr-xl bg-primary px-3 text-xl font-bold"
      >
        33%
      </span>
      <img
        className="m-auto flex h-56 w-max rounded-t-xl object-contain p-3"
        src="https://http2.mlstatic.com/D_NQ_NP_2X_948739-MLA70155864929_062023-F.webp"
        alt="Product image"
      />
    </div>
    <figcaption className="rounded-b-xl bg-white p-2 text-slate-700">
      <div className="flex items-center gap-1">
        <p className="text-2xl font-bold">$1.000</p>
        <p className="text-gray-500 line-through">$150</p>
      </div>
      <h2 className="text-lg font-bold">Segway Ninebot Gt2</h2>
      <p className="">Lo mejor de su clase con una autonomia de 100km</p>
    </figcaption>
  </figure>
)

export const CARD_SHOWCASE = (
  <figure className="bg-shadow-md h-max w-full rounded-xl bg-gray-950 sm:w-72">
    <img
      className="h-60 w-full rounded-t-xl object-cover"
      src={
        'https://resizer.glanacion.com/resizer/v2/turistas-en-7BUWWIQXNVEFRA7WMPSCFXBRUI.JPG?auth=1391195722ac7fdd4a815eda7654172ef5acb4721601e27aa060345dd908bd22&width=780&height=520&quality=70&smart=true'
      }
      alt=""
    />
    <figcaption className="p-4">
      <h2 className="text-start text-xl font-bold uppercase text-primary">
        Bariloche
      </h2>
      <p className="text-white">
        Bariloche es conocida por sus paisajes montañosos, lagos cristalinos,
        nieve en invierno, y arquitectura de estilo alpino.
      </p>
    </figcaption>
  </figure>
)
