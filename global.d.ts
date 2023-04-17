declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      SESSION_NAME: string;
      SESSION_PASSWORD: string;
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
