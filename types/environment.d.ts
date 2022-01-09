declare global {
  namespace NodeJS {
    interface ProcessEnv {
      X_NCP_APIGW_API_KEY_ID: string;
      X_NCP_APIGW_API_KEY: string;
      DEFAULT_LATITUDE: number;
      DEFAULT_LONGITUDE: number;
    }
  }
}

export {};
