'use client'

import { useState } from "react";
import { DifficultySelector } from "../component/home/difficultySelector";
import { SheetLauncher } from "../component/home/sheetLauncher";
import { CompoundSelector } from "../component/home/compoundSelector";

export default function Home() {

  const [difficulty, setDifficulty] = useState('1');
  const [compound, setCompound] = useState(false);

  return (
    <div>
      <h1>HELLO</h1>
      <h2>Welcome to Solfeggio</h2>
      <p>Please select difficulty for your rythme</p>

      <DifficultySelector onSave={(data) => setDifficulty(data)}/>
      <CompoundSelector onSave={(data) => setCompound(data)}/>

      <SheetLauncher difficulty={difficulty} isCompound={compound}/>
    </div>
  );
}
