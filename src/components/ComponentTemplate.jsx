export default function ComponentTemplate({ children, title, text }) {
  return (
    <>
      <section className="relative flex h-full w-full items-start justify-center px-2">
        <div className="flex w-full flex-col gap-5 xl:w-[36em]">
          <span className="h-1 w-full bg-gradient-to-r from-background via-gray-700 to-background"></span>
          <div className="flex w-full w-max">
            <h2 className="title">{title}</h2>
          </div>
          {text && <p>{text}</p>}
          <div className="flex w-full flex-col items-center justify-center gap-10">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
