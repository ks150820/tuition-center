interface Entities {
  userPreferences: UserPreferences;
}

interface StateInstance {
  entities: Entities;
}

type getState = () => StateInstance;
