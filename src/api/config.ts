/* Configuration data used across multiple api files */

// BASE URL OF API
export const API_BASE_URL: string = "https://boardgamegeek.com/xmlapi2/";

// CONFIG VALUES FOR QUEUED API CALLS
export const API_RETRY_ATTEMPTS: number = 3;
export const API_RETRY_TIMEOUT_MS: number = 3000;

// INDIVIDUAL ROUTE URLS
export const API_ROUTE_COLLECTION = (username: string) =>
  `${API_BASE_URL}collection/username=${username}&brief=1&own=1&excludesubtype=boardgameexpansion`;

export const API_ROUTE_THINGS = (ids: number[]) =>
  `${API_BASE_URL}thing?id=${ids}`;
