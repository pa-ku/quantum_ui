export default function ComponentTemplate({ children, title, text }) {
  return (
    <>
      <section className="relative flex h-full w-full items-start justify-center px-2">
        <div className="flex w-full flex-col gap-5 xl:w-[36em]">
          <span className="px-2 md:p-0">
            <h2 className="title">{title}</h2>
            {text && <p>{text}</p>}
          </span>
          <div className="flex w-full flex-col items-center justify-center gap-10">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
