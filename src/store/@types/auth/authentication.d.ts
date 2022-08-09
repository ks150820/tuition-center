type User = {
  firstName: string;
  lastName?: string;
  phoneNumber: string;
};

type Authentication = {
  user: User;
  refreshToken?: string;
  isLoggedIn: boolean;
};
