import { ReactElement } from "react";

interface CompoundSelectorProps {
  onSave: (data: boolean) => void;
}

export const CompoundSelector = ({ onSave }: CompoundSelectorProps): ReactElement => {

  return (
    <div >
    <label>
      Is Compound?:
      <input type="checkbox" onChange={(e) => onSave(e.target.checked)}/>
    </label>
    </div>
  );
};
