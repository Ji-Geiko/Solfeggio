import { ReactElement } from "react";

interface SheetLauncherProps {
  difficulty: string;
  isCompound: boolean;
}

const BinaryPatternMap: { [key: string]: string[] } = {
  "1": ["0000", "1000"],
  "2": ["0000", "1000", "1010"],
  "3": ["0000", "1000", "1010", "1111"],
  "4": ["0000", "1000", "1010", "1111", "1100", "1001"],
  "5": ["0000", "1000", "1010", "1111", "1100", "1001", "1101", "1011", "1110"],
  "6": ["0000", "1000", "1010", "1111", "1100", "1001", "1101", "1011", "1110", "0010", "0011", "0001", "0100", "0101", "0110", "0111"]
}

const CompoundPatternMap: { [key: string]: string[] } = {
  "1": ["0000000", "100000"],
  "2": ["0000000", "100000", "101010", "111111"],
  "3": ["0000000", "100000", "101010", "111111", "100010", "101000"],
  "4": ["0000000", "100000", "101010", "111111", "100010", "101000", "101110", "111000"],
  "5": ["0000000", "100000", "101010", "111111", "100010", "101000", "101110", "111000", "100110", "100111", "101111", "111011"],
  "6": ["0000", "1000", "1010", "1111", "1100", "1001", "1101", "1011", "1110", "0010", "0011", "0001", "0100", "0101", "0110", "0111"]
}

export const SheetLauncher = ({ difficulty, isCompound }: SheetLauncherProps): ReactElement => {

  const seedBuilder = (difficulty: string, isCompound: boolean) => {
    let bin = '';

    if (!isCompound) {
      const patterns = BinaryPatternMap[difficulty] || ["0000", "1000", "1010"];

      for (let i = 0; i < 9; i++) {
        bin += patterns[Math.floor(Math.random() * patterns.length)];
      }
    } else {
      const patterns = CompoundPatternMap[difficulty] || ["0000000", "100000", "101010"];

      for (let i = 0; i < 9; i++) {
        bin += patterns[Math.floor(Math.random() * patterns.length)];
      }
    }

    const hex = parseInt(bin, 2).toString(16);

    return hex;
  }

  return (
    <div >
      <a href={`/view/${seedBuilder(difficulty, isCompound)}`}>
        <button>
          Launch Sheet
        </button>
      </a>
    </div>
  );
};
