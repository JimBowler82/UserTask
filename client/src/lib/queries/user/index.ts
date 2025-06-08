import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/user";

export const useGetUsersQuery = (params?: GetUsersParams) => {
  return useQuery({
    queryKey: ["users", params],
    queryFn: async () => {
      const res = await getUsers(params);
      return res.data.items;
    },
  });
};
