import { ReactElement } from "react";

interface DifficultySelectorProps {
  onSave: (data: string) => void;
}

export const DifficultySelector = ({ onSave }: DifficultySelectorProps): ReactElement => {

  return (
    <div >
      <select onChange={(e) => onSave(e.target.value)}>
        <option value="1">1 - Very Easy</option>
        <option value="2">2 - Easy</option>
        <option value="3">3 - Moderate</option>
        <option value="4">4 - Intermediate</option>
        <option value="5">5 - Advanced</option>
        <option value="6">6 - Very Advanced</option>
        <option value="7">7 - Expert</option>
      </select>
    </div>
  );
};
