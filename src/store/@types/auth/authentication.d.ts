interface authDetails {
  name: string;
  phoneNumber: string;
  email?: string;
  authToken: string;
  refreshToken: string;
}
interface Authentication {
  authDetails: authDetails;
  isLoggedIn: boolean;
}
