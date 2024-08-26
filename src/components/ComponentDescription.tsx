export default function ComponentDescription({ children }) {
  return (
    <>
      <div className="wrapper">
        <div className="flex w-full flex-col items-center gap-2">
          <p className="max-w-[50rem] text-center text-xl text-gray-400">
            {children}
          </p>
        </div>
      </div>
    </>
  );
}
