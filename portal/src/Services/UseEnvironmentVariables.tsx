export type EnvironmentVariables = {
  apiUri: string;
};

export const UseEnvironmentVariables = (): EnvironmentVariables => {
  const checkedApiURI = window.location.hostname.includes("localhost")
    ? "https://localhost:44306/"
    : "https://bugbustersbackend.azurewebsites.net/";
  const EnvironmentVars: EnvironmentVariables = {
    apiUri: checkedApiURI,
  };
  return EnvironmentVars;
};
