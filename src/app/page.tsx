'use client'

import { useState } from "react";
import { DifficultySelector } from "../component/home/difficultySelector";

export default function Home() {

  const [difficulty, setDifficulty] = useState('1');

  

  return (
    <div>
      <h1>HELLO</h1>
      <h2>Welcome to Solfeggio</h2>
      <p>Please select difficulty for your rythme</p>

      <DifficultySelector onSave={(data) => setDifficulty(data)}/>

      <button onClick={() => console.log(difficulty)}>generate your seed</button>
    </div>
  );
}
