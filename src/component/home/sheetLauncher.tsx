import { ReactElement } from "react";

interface SheetLauncherProps {
  difficulty: string;
}

export const SheetLauncher = ({ difficulty }: SheetLauncherProps): ReactElement => {

  const seedBuilder = (difficulty: string) => {
    let bin = '';
    const patternsMap: { [key: string]: string[] } = {
      "1": ["0000", "1000"],
      "2": ["0000", "1000", "1010"],
      "3": ["0000", "1000", "1010", "1111"],
      "4": ["0000", "1000", "1010", "1111", "1100", "1001"],
      "5": ["0000", "1000", "1010", "1111", "1100", "1001", "1101", "1011", "1110"],
      "6": ["0000", "1000", "1010", "1111", "1100", "1001", "1101", "1011", "1110", "0010", "0011", "0001", "0100", "0101", "0110", "0111"]
    };

    const patterns = patternsMap[difficulty] || ["0000", "1000", "1010"];

    for (let i = 0; i < 9; i++) {
      bin += patterns[Math.floor(Math.random() * patterns.length)];
    }

    const hex = parseInt(bin, 2).toString(16);

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
