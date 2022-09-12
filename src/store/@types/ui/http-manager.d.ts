interface httpManager {
  error: {errorMessage: string; errorCode: string};
  isAuthTokenUpdated: boolean;
  haltedAPiCalls: string[];
}
