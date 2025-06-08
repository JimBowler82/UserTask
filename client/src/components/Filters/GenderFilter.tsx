import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface GenderFilterProps {
  value?: string;
  onChange?: (val: unknown) => void;
}

const GenderFilter: React.FC<GenderFilterProps> = ({ onChange, value }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel size="small" id="genderLabel">
          Gender
        </InputLabel>
        <Select
          size="small"
          labelId="genderlabel"
          id="genderselect"
          value={value}
          label="Gender"
          onChange={(e) => onChange?.(e.target.value)}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={""}>Clear</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default GenderFilter;
