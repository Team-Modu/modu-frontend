import { Role } from "common/constants/account.constants";

export const transformRole = (role: Role) => {
  switch (role) {
    case Role.Admin:
      return "관리자";
    case Role.Driver:
      return "운전자";
    case Role.User:
      return "일반";
  }
};
