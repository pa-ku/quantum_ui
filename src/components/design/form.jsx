export const FORM_LOGIN = (
  <form className="flex w-80 flex-col gap-3">
    <input
      type="email"
      className="w-full rounded-lg bg-gray-800 p-3 outline-0 placeholder-shown:border-gray-400 focus:placeholder:text-emerald-500"
      placeholder="username"
      required
    />

    <div className="relative flex w-full flex-row">
      <input
        type="password"
        className="w-full rounded-l-lg bg-gray-800 p-3 outline-0 placeholder-shown:border-gray-400 focus:placeholder:text-emerald-500"
        placeholder="password"
        required
        minLength={8}
      />
      <label className="absolute right-0 flex h-full cursor-pointer items-center justify-center rounded-r-md">
        <input
          type="checkbox"
          className="peer h-full w-full cursor-pointer appearance-none rounded-r-lg outline-none focus:placeholder:text-emerald-500"
        />
        <span className="mr-2 rounded-full px-1 text-xl text-gray-400 hover:bg-slate-700 peer-checked:text-emerald-500">
          ＊
        </span>
      </label>
    </div>

    <button
      type="submit"
      className="w-full rounded-lg bg-emerald-500 py-3 text-lg text-white"
    >
      Enviar
    </button>
  </form>
)

export const FORM_REGISTER = (
  <form className="flex w-80 flex-col gap-3">
    <div className="flex items-center justify-center gap-x-3">
      <input
        type="text"
        className="w-full rounded-lg bg-gray-800 p-3 outline-0 placeholder-shown:border-gray-400 focus:placeholder:text-emerald-500"
        placeholder="name"
      />
      <input
        type="text"
        className="w-full rounded-lg bg-gray-800 p-3 outline-0 placeholder-shown:border-gray-400 focus:placeholder:text-emerald-500"
        placeholder="last name"
      />
    </div>
    <input
      type="email"
      className="w-full rounded-lg bg-gray-800 p-3 outline-0 placeholder-shown:border-gray-400 focus:placeholder:text-emerald-500"
      placeholder="email"
    />

    <div className="relative flex w-full flex-row">
      <input
        type="password"
        className="w-full rounded-l-lg bg-gray-800 p-3 outline-0 placeholder-shown:border-gray-400 focus:placeholder:text-emerald-500"
        placeholder="password"
        required
        minLength={8}
      />
      <label className="absolute right-0 flex h-full cursor-pointer items-center justify-center rounded-r-md">
        <input
          type="checkbox"
          className="peer h-full w-full cursor-pointer appearance-none rounded-r-lg outline-none focus:placeholder:text-emerald-500"
        />
        <span className="mr-2 rounded-full px-1 text-xl text-gray-400 hover:bg-slate-700 peer-checked:text-emerald-500">
          ＊
        </span>
      </label>
    </div>

    <button
      type="submit"
      className="w-full rounded-lg bg-emerald-500 py-3 text-lg text-white"
    >
      Enviar
    </button>
  </form>
)
