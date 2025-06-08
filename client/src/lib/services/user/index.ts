import agent from "../../api/agent";

export const getUsers = async (params?: GetUsersParams) => {
  return agent.get<PagedResponse<User>>("/api/users", {
    params,
  });
};
