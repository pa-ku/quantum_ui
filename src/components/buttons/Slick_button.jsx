import CodeBlock from "../CodeBlock";

export default function Slick_button() {
  const codeBlock = `<button className="slick-button rounded-md px-5 py-3 text-xl
    text-white duration-300">
     Fancy
</button>`;

const codeCss = `//Css

@property --color-1 {
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
  --color-1: #e0218c;
  --color-2: #eaa221;
  background-image:linear-gradient(40deg,var(--color-1),var(--color-2));
  transition:
    --color-1 2000ms,
    --color-2 800ms;
}

.slick-button:hover {
  --color-1: #eaa221;
  --color-2: #e0218c;
}
`

  return (
    <>
      <button className="group relative rounded-md px-5 py-3 text-xl text-white 
      duration-300
    slick-button">
Subscribe
      </button>
      <CodeBlock code={codeBlock} />
      <CodeBlock code={codeCss} language={'css'} />
    </>
  );
}
