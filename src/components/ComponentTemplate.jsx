export default function ComponentTemplate({ children, title, text }) {
  return (
    <>
      <section className="relative flex h-full items-center justify-center px-2 xl:w-full">
        <div className="flex flex-col gap-10 xl:w-[36em]">
          <div className="flex w-full w-max gap-2">
            <h2 className="title">{title}</h2>
          </div>
          {text && <p>{text}</p>}
          <div className="flex w-full flex-col items-center justify-center gap-10">
            {children}
          </div>
          <span className="h-1 w-full bg-red-200 bg-gradient-to-r from-background via-primary-950 to-background"></span>
        </div>
      </section>
    </>
  );
}
