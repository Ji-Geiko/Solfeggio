import { ReactElement } from "react";

interface SheetLauncherProps {
  difficulty: string;
}

export const SheetLauncher = ({ difficulty }: SheetLauncherProps): ReactElement => {

  const seedBuilder = (difficulty: string) => {
    let bin = '';

    for (let i = 0; i < 9; i++) {
      if(difficulty == "1"){
        bin += Math.round(Math.random())
        bin += "000"
      }else if(difficulty == "2"){
        const patterns = ["0000", "1000", "1010"];
        bin += patterns[Math.floor(Math.random() * patterns.length)];
      }else if(difficulty == "3"){
        const patterns = ["0000", "1000", "1010", "1111"];
        bin += patterns[Math.floor(Math.random() * patterns.length)];
      }else if(difficulty == "4"){
        const patterns = ["0000", "1000", "1010", "1111", "1100", "1001"];
        bin += patterns[Math.floor(Math.random() * patterns.length)];
      }else if(difficulty == "5"){
        const patterns = ["0000", "1000", "1010", "1111", "1100", "1001", "1101", "1011", "1110"];
        bin += patterns[Math.floor(Math.random() * patterns.length)];
      }else if(difficulty == "6"){
        const patterns = ["0000", "1000", "1010", "1111", "1100", "1001", "1101", "1011", "1110", "0010", "0011", "0001", "0100", "0101", "0110", "0111"];
        bin += patterns[Math.floor(Math.random() * patterns.length)];
      }else{
        bin += Math.round(Math.random())
      }
    }

    const hex = parseInt(bin, 2).toString(16)

    return hex;
  }

  return (
    <div >
      <a href={`/view/${seedBuilder(difficulty)}`}>
        <button>
          Launch Sheet
        </button>
      </a>
    </div>
  );
};
