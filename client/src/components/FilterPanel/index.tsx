import { Stack, Typography } from "@mui/material";
import RegistrationFilter from "../Filters/RegistrationFilter";
import GenderFilter from "../Filters/GenderFilter";
import CountryFilter from "../Filters/CountryFilter";
import SalaryFilter from "../Filters/SalaryFilter";
import BirthDateFilter from "../Filters/BirthDateFilter";

interface FilterPanelProps {
  filters?: UserFilters;
  setFilters?: React.Dispatch<React.SetStateAction<UserFilters>>;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters }) => {
  const handleFilterChange = (filter: keyof UserFilters, value: unknown) => {
    console.log(`Filter changed: ${filter} = ${value}`);

    setFilters?.((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));
  };

  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #e0e0e0",
      }}
    >
      <Typography component={"h4"} sx={{ fontSize: "12px" }}>
        Filters
      </Typography>

      <Stack direction="row" gap="10px" sx={{ "&> *": { flex: 1 } }}>
        <RegistrationFilter
          value={filters?.registrationDate || null}
          onChange={(value: unknown) =>
            handleFilterChange("registrationDate", value)
          }
        />
        <GenderFilter
          onChange={(value: unknown) => handleFilterChange("gender", value)}
        />
        <CountryFilter
          onChange={(value: unknown) => handleFilterChange("country", value)}
        />
        <SalaryFilter
          onChange={(value: unknown) => handleFilterChange("salary", value)}
        />
        <BirthDateFilter
          value={filters?.birthdate || null}
          onChange={(value: unknown) => handleFilterChange("birthdate", value)}
        />
      </Stack>
    </Stack>
  );
};

export default FilterPanel;
