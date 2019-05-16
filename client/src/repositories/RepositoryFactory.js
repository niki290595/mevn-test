import AuthRepository from "./AuthRepository";

const repositories = {
  auth: AuthRepository,
  // other repositories ...
};

export const RepositoryFactory = {
  get: name => repositories[name]
};
