'use client'

import { useEffect, useState } from "react";
import { DifficultySelector } from "../component/home/difficultySelector";
import { SheetLauncher } from "../component/home/sheetLauncher";
import { CompoundSelector } from "../component/home/compoundSelector";
import './page.css'; // Import the CSS file

export default function Home() {

  const [difficulty, setDifficulty] = useState('1');
  const [compound, setCompound] = useState(false);
  
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the server
  }

  return (
    <div className="container">
      <h1>🎶HELLO🎶</h1>
      <h2>Welcome to Solfeggio</h2>
      <p>Please select the difficulty of your rythme</p>

      <DifficultySelector onSave={(data) => setDifficulty(data)}/>
      <CompoundSelector onSave={(data) => setCompound(data)}/>

      <SheetLauncher difficulty={difficulty} isCompound={compound}/>
    </div>
  );
}
