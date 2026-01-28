import { useState } from "react";

export default function TextGenerator() {
  const [seed, setSeed] = useState("");
  const [length, setLength] = useState(100);
  const [text, setText] = useState("");

  const handleGenerate = async () => {
    try {
      const res = await fetch(`http://localhost:5000/generate?seed=${seed}&length=${length}`);
      const data = await res.json();
      setText(data.texte);
    } catch (err) {
      console.error("Erreur fetch:", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Générateur de texte</h2>
      <input
        type="text"
        placeholder="Seed text"
        value={seed}
        onChange={(e) => setSeed(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        style={{ marginRight: 10, width: 80 }}
      />
      <button onClick={handleGenerate}>Générer</button>

      <div style={{ marginTop: 20, whiteSpace: "pre-wrap", border: "1px solid #ccc", padding: 10 }}>
        {text}
      </div>
    </div>
  );
}
