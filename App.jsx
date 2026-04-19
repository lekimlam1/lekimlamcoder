import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ padding: 20 }}>
      <nav style={{ marginBottom: 20 }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("grammar")}>Grammar</button>
        <button onClick={() => setPage("vocab")}>Vocabulary</button>
      </nav>

      {page === "home" && <h1>Welcome 🚀</h1>}
      {page === "grammar" && <Grammar />}
      {page === "vocab" && <Flashcard />}
    </div>
  );
}

function Grammar() {
  return (
    <div>
      <h2>Present Simple</h2>
      <p>S + V(s/es)</p>
      <p>I go to school</p>
    </div>
  );
}

function Flashcard() {
  const data = [
    { word: "apple", meaning: "quả táo" },
    { word: "book", meaning: "quyển sách" }
  ];

  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const card = data[i];

  const check = () => {
    setResult(input === card.meaning ? "Đúng ✅" : "Sai ❌");
  };

  return (
    <div>
      <div onClick={() => setFlip(!flip)} style={{ border: "1px solid", padding: 20 }}>
        {flip ? card.meaning : card.word}
      </div>

      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={check}>Check</button>
      <p>{result}</p>

      <button onClick={() => {
        setI((i + 1) % data.length);
        setFlip(false);
        setInput("");
        setResult("");
      }}>
        Next
      </button>
    </div>
  );
}
