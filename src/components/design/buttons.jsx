export const BUTTON_NEON = (
  <button className="group relative flex h-max w-max items-center justify-center overflow-hidden rounded-xl bg-gray-800 p-0.5 mix-blend-lighten">
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-700 px-8 py-4">
      <p className="text-xl text-primary duration-500">Register</p>
    </div>
    <span className="animate-rotate absolute -z-10 h-52 w-11 animate-spin rounded-full bg-gradient-to-r duration-500 group-hover:from-primary"></span>
  </button>
)

export const BUTTON_SLICK = (
  <button className="slick-button group relative rounded-md px-5 py-3 text-xl text-white duration-300">
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
  <button className="group relative flex h-max w-max items-center justify-center overflow-hidden rounded-xl bg-gray-800 p-0.5 mix-blend-lighten">
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-700 px-8 py-4">
      <p className="text-xl text-primary duration-500 group-hover:text-secundary">
        Login
      </p>
    </div>
    <span className="animate-rotate absolute -z-10 size-48 animate-spin rounded-full bg-gradient-to-r duration-300 group-hover:from-primary group-hover:to-secundary"></span>
  </button>
)

export const BUTTON_ACTION = (
  <div className="space-x-5">
    <button className="shadow-opa rounded-md bg-slate-600 px-8 py-3 text-xl text-primary shadow-bottom shadow-slate-700 duration-100 active:translate-y-1 active:shadow-none">
      Press
    </button>
  </div>
)
