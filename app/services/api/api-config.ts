export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}

/**
 * The default configuration for the app.
 */
export const domainApp = __DEV__ ? 'api' : 'api';
export const platformApp = __DEV__
  ? 'BEAUTYX|BEAUTYX MOBILE|WEB'
  : 'BEAUTYX|BEAUTYX MOBILE|WEB';

export const URL_DEPLOY = `https://${domainApp}.myspa.vn/v1/`;

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: URL_DEPLOY,
  timeout: 10000,
};
