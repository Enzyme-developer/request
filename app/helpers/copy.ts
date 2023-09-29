export const authorizationText = `To access the Crypto-Hub API, you will need an API key. You can obtain an API key by signing up for an account on our (https://my-crypto-api.com/signup). \n Include your API key in the request headers as follows:`;

export const errorText =
  "The API returns standard HTTP status codes to indicate the success or failure of a request. In case of an error, additional information will be provided in the response body.";

export const errorResponses = [
  "**200 OK**: The request was successful.",
  "**400 Bad Request**: There was an issue with the requestparameters.",
  "**401 Unauthorized**: Authentication failed. - **403",
  "Forbidden**: The request is not permitted.",
  "**404 Not Found**: The requested resource was not found.",
  "**500 Internal Server Error**: An unexpected error occurred on the server.",
];
