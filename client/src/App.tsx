import { useCallback, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { useGetUsersQuery } from "./lib/queries/user";
import FilterPanel from "./components/FilterPanel";
import UserList from "./components/UserList.tsx";
import { format } from "date-fns";

const convertBirthDate = (
  dateString: string | undefined
): string | undefined => {
  if (!dateString) return undefined;
  //Convert to MM/dd/yyyy
  const date = format(new Date(dateString), "M/d/yyyy");
  return String(date);
};

const App: React.FC = () => {
  const [pageSize, setPageSize] = useState<number>(50);
  const [page, setPage] = useState<number>(0);
  const [sortModel, setSortModel] = useState<
    { field: string; sort: "asc" | "desc" }[]
  >([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filters, setFilters] = useState<UserFilters>({
    registrationDate: undefined,
    gender: "",
    country: "",
    minSalary: undefined,
    maxSalary: undefined,
    birthdate: undefined,
  });

  const { data: userData, isPending } = useGetUsersQuery({
    page: page + 1, // API is 1-indexed
    pageSize: pageSize,
    sortColumn: sortModel[0]?.field,
    sortOrder: sortModel[0]?.sort,
    search: searchText,
    registrationDate: filters.registrationDate || "",
    gender: filters.gender || "",
    country: filters.country || "",
    minSalary: filters.minSalary || undefined,
    maxSalary: filters.maxSalary || undefined,
    birthdate: convertBirthDate(filters.birthdate || ""),
  });

  const handlePaginationChange = useCallback(
    (newPage: number, newPageSize: number) => {
      setPageSize((old) => (newPageSize === old ? old : newPageSize));
      setPage((old) => (newPage === old ? old : newPage));
    },
    [setPageSize, setPage]
  );

  const handleSortModelChange = useCallback(
    (newSortModel: { field: string; sort: "asc" | "desc" }[]) => {
      const { field, sort } = newSortModel[0] || {};
      setSortModel([{ field: field || "", sort: sort || "asc" }]);
    },
    [setSortModel]
  );

  const handleFilterModelChange = useCallback(
    (filterModel: { quickFilterValues: string[] }) => {
      const { quickFilterValues = [] } = filterModel ?? {};
      const combinedSearchText = quickFilterValues.join(" ");
      setSearchText(combinedSearchText);
    },
    [setSearchText]
  );

  return (
    <Stack
      direction="column"
      gap="10px"
      sx={{ padding: "30px", height: "100%" }}
    >
      <Typography component={"h1"}>User Task</Typography>

      <FilterPanel filters={filters} setFilters={setFilters} />

      <UserList
        users={userData}
        page={page}
        pageSize={pageSize}
        isLoading={isPending}
        onPaginationChange={handlePaginationChange}
        onSortModelChange={handleSortModelChange}
        onFilterModelChange={handleFilterModelChange}
      />
    </Stack>
  );
};

export default App;
