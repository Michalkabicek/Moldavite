import React, { useState } from "react";

export default function Home() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ image: "", title: "", location: "", description: "" });

  const handleAddEntry = () => {
    if (newEntry.image && newEntry.title && newEntry.location) {
      setEntries([...entries, { ...newEntry, id: Date.now() }]);
      setNewEntry({ image: "", title: "", location: "", description: "" });
    } else {
      alert("Vyplň prosím alespoň obrázek, název a lokalitu.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#d9f99d", padding: 16 }}>
      <header style={{ textAlign: "center", fontSize: 32, fontWeight: "bold", color: "#14532d", marginBottom: 24 }}>
        Moldavite-Cert 0.1 🌍
        <p style={{ fontSize: 14, fontWeight: "normal", color: "#4b5563" }}>
          Michal Kabíček – sběratel, geolog, certifikátor ✅
        </p>
      </header>

      <section
        style={{
          marginBottom: 24,
          padding: 16,
          border: "1px solid #ccc",
          borderRadius: 12,
          backgroundColor: "white",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: "600", marginBottom: 8 }}>Přidat nový nález</h2>
        <input
          placeholder="URL fotky vltavínu"
          value={newEntry.image}
          onChange={(e) => setNewEntry({ ...newEntry, image: e.target.value })}
          style={{ display: "block", marginBottom: 8, width: "100%", padding: 8 }}
        />
        <input
          placeholder="Název nálezu"
          value={newEntry.title}
          onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
          style={{ display: "block", marginBottom: 8, width: "100%", padding: 8 }}
        />
        <input
          placeholder="Lokalita"
          value={newEntry.location}
          onChange={(e) => setNewEntry({ ...newEntry, location: e.target.value })}
          style={{ display: "block", marginBottom: 8, width: "100%", padding: 8 }}
        />
        <textarea
          placeholder="Popis nálezu"
          value={newEntry.description}
          onChange={(e) => setNewEntry({ ...newEntry, description: e.target.value })}
          style={{ display: "block", marginBottom: 8, width: "100%", padding: 8, height: 80 }}
        />
        <button
          onClick={handleAddEntry}
          style={{
            padding: "8px 16px",
            backgroundColor: "#4ade80",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Přidat nález
        </button>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 16,
        }}
      >
        {entries.map((entry) => (
          <div
            key={entry.id}
            style={{
              backgroundColor: "white",
              padding: 16,
              borderRadius: 12,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={entry.image}
              alt="vltavín"
              style={{ width: "100%", borderRadius: 12, boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
            />
            <p style={{ fontSize: 18, fontWeight: "600", marginTop: 12 }}>{entry.title}</p>
            <p>Lokalita: {entry.location}</p>
            <p>Popis: {entry.description}</p>
            <p>
              Certifikace: <strong>Michal Kabíček</strong>
            </p>
            <textarea placeholder="Přidat komentář..." style={{ width: "100%", height: 60, marginTop: 8 }} />
            <button style={{ marginTop: 8, padding: "6px 12px" }}>Odeslat komentář</button>
            <button style={{ marginTop: 8, marginLeft: 8, padding: "6px 12px" }}>Žádost o certifikaci</button>
          </div>
        ))}
      </section>

      <footer style={{ marginTop: 40, textAlign: "center", fontSize: 12, color: "#6b7280" }}>
        &copy; 2025 Michal Kabíček | Verze 0.1
      </footer>
    </div>
  );
}
