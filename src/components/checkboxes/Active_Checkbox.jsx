import CodeBlock from "../CodeBlock";

export default function TextCheckbox() {
  const codeBlock = `<div className="relative flex w-fit items-center
  justify-center">
  <input
  type="checkbox"
  className="peer absolute h-full w-full 
  cursor-pointer appearance-none"/>
  <p className="pointer-events-none font-bold  rounded-xl
  bg-gray-600 px-4 py-2 
  peer-checked:bg-primary
  peer-checked:shadow-center 
  peer-checked:shadow-primary">
  Checkbox
  </p>
</div>`;
  return (
    <>
      <div className="relative flex w-fit items-center justify-center">
        <input
          type="checkbox"
          className="peer absolute h-full w-full cursor-pointer appearance-none"
        />
        <p className="peer-checked:bg-primary peer-checked:shadow-primary pointer-events-none rounded-xl bg-gray-600 px-4 py-2 font-bold peer-checked:shadow-center">
          Checkbox
        </p>
      </div>
      <CodeBlock code={codeBlock} />
    </>
  );
}
