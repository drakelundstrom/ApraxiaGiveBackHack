import axios from "axios";
//import { getAuthToken, TokenType } from './AuthService';
import { UseEnvironmentVariables } from "./UseEnvironmentVariables";

// export const get = async <T,>(
//   uri: string,
//   isSecure: boolean = true,
//   isOverrideUrl: boolean = false,
//   tokenType: TokenType = 'Stream',
// ) => {
//   const { url, header } = getRequestArgs(uri, isSecure, isOverrideUrl, tokenType);
//   try {
//     const response = await axios.get(url, header);
//     return { status: response.status, data: response.data };
//   } catch (errorResponse) {
//     return getErrors(errorResponse);
//   }
// };

export const post = async <T,>(
  uri: string,
  data: any,
  isSecure: boolean = true,
  isOverrideUrl: boolean = false
  //tokenType: TokenType = 'Stream',
) => {
  const { url, header } = getRequestArgs(uri, isSecure, isOverrideUrl);
  try {
    const response = await axios.post(url, data, header);
    console.log(response.data);
    return { status: response.status, data: response.data };
  } catch (errorResponse) {
    return getErrors(errorResponse);
  }
};

// export const put = async <T,>(
//   uri: string,
//   data: any,
//   isSecure: boolean = true,
//   isOverrideUrl: boolean = false,
//   tokenType: TokenType,
// ) => {
//   const { url, header } = getRequestArgs(uri, isSecure, isOverrideUrl, tokenType);
//   try {
//     const response = await axios.put(url, data, header);
//     return { status: response.status, data: response.data };
//   } catch (errorResponse) {
//     return getErrors(errorResponse);
//   }
// };

//delete is a reserved keyword, changed to httpDelete
// export const httpDelete = async <T,>(
//   uri: string,
//   isSecure: boolean = true,
//   isOverrideUrl: boolean = false,
//   tokenType: TokenType = 'Stream',
// ) => {
//   const { url, header } = getRequestArgs(uri, isSecure, isOverrideUrl, tokenType);
//   try {
//     const response = await axios.delete(url, header);
//     return { status: response.status, data: response.data };
//   } catch (errorResponse) {
//     return getErrors(errorResponse);
//   }
// };

export const getBaseUrl = (): string => UseEnvironmentVariables().apiUri;

//const getRequestArgs = (uri: string, isSecure: boolean, isOverrideUrl: boolean, tokenType: TokenType) => {
const getRequestArgs = (
  uri: string,
  isSecure: boolean,
  isOverrideUrl: boolean
) => {
  const url = isOverrideUrl ? uri : getBaseUrl() + uri;
  //const token = isSecure ? getAuthToken(tokenType) : null;
  const token = "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";
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    },
  };
  if (header) return { url, header };
  return { url };
};

const getErrors = (errorResponse: any) => {
  const status = errorResponse?.response?.status ?? 0;
  const data = errorResponse?.response?.data;
  return data ? { status, data } : { status, data: "Unknown network error" };
};
