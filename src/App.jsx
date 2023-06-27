import React from "react";

export default function App() {
  const buah = ["apel", "anggur", "durian", "leci botak", "melon montok"];

  return (
    <>
      <div>
        {buah.map((buah) => (
          <li key={buah}>{buah}</li>
        ))}
      </div>
    </>
  );
}
