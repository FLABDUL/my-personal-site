// src/components/JsxDemo.tsx
const JsxDemo = () => {
  const framework = "React";
  const isFun = true;

  return (
    <div>
      <h3>Learning {framework}</h3>
      <p>{isFun ? "I'm enjoying it!" : "It's okay."}</p>
      <input type="text" placeholder="Type here..." />
    </div>
  );
};

export default JsxDemo;
