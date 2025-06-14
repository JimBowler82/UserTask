import { useCallback, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import CustomToolbar from "../CustomToolbar";

interface UserListProps {
  users?: PagedResponse<User>;
  page?: number;
  pageSize?: number;
  isLoading?: boolean;
  isFetching?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onSortModelChange?: (
    sortModel: { field: string; sort: "asc" | "desc" }[]
  ) => void;
  onFilterModelChange?: (filterModel: { quickFilterValues: string[] }) => void;
}

const columns: GridColDef<User[][number]>[] = [
  { field: "id", headerName: "ID", flex: 1, filterable: false },
  { field: "first_name", headerName: "First Name", flex: 1, filterable: false },
  { field: "last_name", headerName: "Last Name", flex: 1, filterable: false },
  { field: "email", headerName: "Email", flex: 1, filterable: false },
  { field: "gender", headerName: "Gender", flex: 1, filterable: false },
  { field: "ip_address", headerName: "IP Address", flex: 1, filterable: false },
  { field: "cc", headerName: "Cc", flex: 1, filterable: false },
  { field: "country", headerName: "Country", flex: 1, filterable: false },
  { field: "birthdate", headerName: "Birth Date", flex: 1, filterable: false },
  {
    field: "registration_dttm",
    headerName: "Registration",
    flex: 1,
    filterable: false,
  },
  { field: "salary", headerName: "Salary", flex: 1, filterable: false },
  { field: "title", headerName: "Title", flex: 1, filterable: false },
  { field: "comments", headerName: "Comments", flex: 1, filterable: false },
];

const UserList: React.FC<UserListProps> = ({
  users,
  page,
  pageSize,
  isLoading,
  onPaginationChange,
  onSortModelChange,
  onFilterModelChange,
}) => {
  const [paginationModel, setPaginationModel] = useState({
    page,
    pageSize,
  });
  const [countRef, setCountRef] = useState<number>(0);

  const handlePaginationChange = useCallback(
    (model: { page: number; pageSize: number }) => {
      setPaginationModel(model);
      onPaginationChange?.(model.page, model.pageSize);
    },
    [onPaginationChange]
  );

  useEffect(() => {
    if (users?.totalCount !== undefined) {
      setCountRef(users.totalCount);
    }
  }, [users?.totalCount]);

  return (
    <Stack
      direction={"column"}
      sx={{
        flex: 1,
        overflow: "hidden",
        maxHeight: "80%",
      }}
    >
      <DataGrid
        columns={columns}
        rows={users?.items || []}
        loading={isLoading}
        pageSizeOptions={[25, 50, 100]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: paginationModel.pageSize,
              page: paginationModel.page,
            },
          },
        }}
        density="compact"
        showToolbar
        paginationMode="server"
        sortingMode="server"
        rowCount={countRef}
        onPaginationModelChange={handlePaginationChange}
        onSortModelChange={(model) => {
          const { field, sort } = model[0] || {};
          onSortModelChange?.([{ field: field || "", sort: sort || "asc" }]);
        }}
        onFilterModelChange={(model) => {
          const { quickFilterValues = [] } = model ?? {};

          onFilterModelChange?.({ quickFilterValues });
        }}
        slots={{
          toolbar: CustomToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Stack>
  );
};

export default UserList;
