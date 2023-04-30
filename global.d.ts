declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      SESSION_NAME: string;
      SESSION_PASSWORD: string;
      OPENAI_API_KEY: string;
    }
  }
}

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id?: number;
    };
  }
}

export {};
