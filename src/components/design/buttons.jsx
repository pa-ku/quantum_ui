export const BUTTON_FILL = (
  <button className="group relative overflow-hidden px-8 py-4 font-bold duration-500 hover:text-gray-700">
    Documentation
    <span className="absolute right-full top-0 -z-10 h-full w-full bg-white duration-500 ease-out group-hover:right-0"></span>
  </button>
)
export const BUTTON_MINIMAL = (
  <button className="border-2 px-8 py-4 font-bold hover:bg-white hover:text-gray-700">
    Learn more
  </button>
)

export const BUTTON_NEON = (
  <button className="group relative flex h-max w-max items-center justify-center overflow-hidden rounded-xl p-0.5 mix-blend-lighten">
    <p className="flex h-full w-full items-center justify-center rounded-lg bg-slate-800 px-8 py-4 text-xl text-emerald-500 duration-500">
      Register
    </p>
    <span className="animate-rotate absolute -z-10 h-52 w-11 animate-spin rounded-full bg-gradient-to-r duration-500 group-hover:from-emerald-500"></span>
  </button>
)

export const BUTTON_SLICK = (
  <button className="slick-button group relative rounded-md px-8 py-4 text-xl text-white duration-300">
    Subscribe
  </button>
)

export const BUTTON_SLICK_CSS = `@property --color-1 {
  syntax: "<color>";
  inherits: true;
  initial-value: #fff;
}

@property --color-2 {
  syntax: "<color>";
  inherits: true;
  initial-value: #fff;
}

.slick-button {
  --color-1: var(--primary);
  --color-2: var(--secundary);
  background-image:linear-gradient(40deg,var(--primary),var(--secundary));
  transition:
  --color-1 2000ms,
  --color-2 800ms;
}

.slick-button:hover {
  --color-1: var(--secundary);
  --color-2: var(--primary);
}
`

export const BUTTON_GLOW = (
  <button className="group relative flex h-max w-max items-center justify-center overflow-hidden rounded-lg bg-slate-800 p-0.5 mix-blend-lighten">
    <p className="rounded-lg bg-gray-800 px-8 py-4 text-xl text-emerald-500 duration-300 group-hover:text-emerald-300">
      Log In
    </p>
    <span className="animate-rotate absolute -z-10 size-48 animate-spin rounded-full bg-gradient-to-r duration-300 group-hover:from-emerald-500 group-hover:to-violet-500"></span>
  </button>
)
export const BUTTON_GLOW_INSIDE = (
  <button className="group relative flex h-max w-max items-center justify-center overflow-hidden rounded-lg bg-gray-800 p-0.5 mix-blend-lighten">
    <p className="rounded-lg px-8 py-4 text-xl text-emerald-500 duration-300 group-hover:text-emerald-300">
      Join Us
    </p>
    <span className="animate-rotate absolute -z-10 size-48 animate-spin rounded-full bg-gradient-to-r duration-300 group-hover:from-emerald-500/10 group-hover:to-violet-500/20"></span>
  </button>
)

export const BUTTON_ACTION = (
  <button className="rounded-md bg-gray-800 px-8 py-4 text-xl text-emerald-500 duration-100 [box-shadow:0px_0.25em_#000000] active:translate-y-1 active:shadow-none">
    START GAME
  </button>
)
