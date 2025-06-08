import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { PickerValue } from "@mui/x-date-pickers/internals";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface BirthDateFilterProps {
  onChange?: (val: unknown) => void;
  value?: unknown; // Optional value prop to control the date picker
}

const BirthDateFilter: React.FC<BirthDateFilterProps> = ({
  onChange,
  value,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Birth Date"
        onAccept={onChange}
        onChange={(value) => {
          if (!value) {
            onChange?.(null);
          }
        }}
        value={value as PickerValue}
        slotProps={{
          field: { clearable: true },
          textField: {
            size: "small",
            variant: "outlined",
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default BirthDateFilter;
