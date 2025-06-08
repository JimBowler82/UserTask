import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { countryList } from "../../data/countries";

interface CountryFilterProps {
  value?: string;
  onChange?: (val: unknown) => void;
}

const CountryFilter: React.FC<CountryFilterProps> = ({ onChange, value }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel size="small" id="countryLabel">
          Country
        </InputLabel>
        <Select
          size="small"
          labelId="countrylabel"
          id="countrySelect"
          value={value}
          label="Country"
          onChange={(e) => onChange?.(e.target.value)}
        >
          <MenuItem value={""}>Clear</MenuItem>
          {countryList.map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CountryFilter;
