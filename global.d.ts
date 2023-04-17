declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    SESSION_NAME: string;
    SESSION_PASSWORD: string;
  }
}
