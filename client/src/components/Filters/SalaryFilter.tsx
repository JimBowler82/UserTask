import { TextField } from "@mui/material";
interface SalaryFilterProps {
  onChange?: (val: unknown) => void;
}
const SalaryFilter: React.FC<SalaryFilterProps> = ({ onChange }) => {
  return (
    <TextField
      variant="outlined"
      label="Salary"
      size="small"
      type="number"
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};

export default SalaryFilter;
