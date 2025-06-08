import { Autocomplete, TextField } from "@mui/material";
import { countryList } from "../../data/countries";

interface CountryFilterProps {
  value?: string;
  onChange?: (val: unknown) => void;
}

const CountryFilter: React.FC<CountryFilterProps> = ({ onChange, value }) => {
  return (
    <Autocomplete
      disablePortal
      size="small"
      options={countryList}
      onChange={(e, newValue, reason) => {
        console.log("Selected country:", { e, newValue, reason });
        if (reason === "clear") {
          newValue = "";
        }

        onChange?.(newValue);
      }}
      value={value || ""}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
};

export default CountryFilter;
