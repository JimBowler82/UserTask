import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { PickerValue } from "@mui/x-date-pickers/internals";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type React from "react";

interface RegistrationFilterProps {
  onChange?: (val: unknown) => void;
  value?: unknown;
}

const RegistrationFilter: React.FC<RegistrationFilterProps> = ({
  onChange,
  value,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Registration Date"
        slotProps={{
          textField: { size: "small", variant: "outlined" },
          field: { clearable: true },
        }}
        onAccept={onChange}
        onChange={(value) => {
          if (!value) {
            onChange?.(null);
          }
        }}
        value={value as PickerValue}
      />
    </LocalizationProvider>
  );
};

export default RegistrationFilter;
