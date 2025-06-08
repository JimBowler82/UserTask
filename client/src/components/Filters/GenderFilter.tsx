import { Autocomplete, TextField } from "@mui/material";

interface GenderFilterProps {
  value?: string;
  onChange?: (val: unknown) => void;
}

const GenderFilter: React.FC<GenderFilterProps> = ({ onChange, value }) => {
  return (
    <Autocomplete
      disablePortal
      size="small"
      options={["Male", "Female"]}
      onChange={(e, newValue, reason) => {
        console.log("Selected gender:", { e, newValue, reason });
        if (reason === "clear") {
          newValue = "";
        }

        onChange?.(newValue);
      }}
      value={value || ""}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Gender" />}
    />
  );
};

export default GenderFilter;
