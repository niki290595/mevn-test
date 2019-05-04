import UserRepository from "./UserRepository";

const repositories = {
  users: UserRepository,
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
