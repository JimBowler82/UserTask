import { Stack, TextField } from "@mui/material";
interface SalaryFilterProps {
  onMinChange?: (val: unknown) => void;
  onMaxChange?: (val: unknown) => void;
}
const SalaryFilter: React.FC<SalaryFilterProps> = ({
  onMinChange,
  onMaxChange,
}) => {
  return (
    <Stack direction="row" gap="10px" alignItems={"center"}>
      <TextField
        variant="outlined"
        label="Min Salary"
        size="small"
        type="number"
        slotProps={{ htmlInput: { min: 0 } }}
        onChange={(e) => onMinChange?.(e.target.value)}
      />
      <span> - </span>
      <TextField
        variant="outlined"
        label="Max Salary"
        size="small"
        type="number"
        slotProps={{ htmlInput: { min: 0 } }}
        onChange={(e) => onMaxChange?.(e.target.value)}
      />
    </Stack>
  );
};

export default SalaryFilter;
