export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T | null;
    showPopUp: boolean;
    status: number;
    responseType: RESPONSE_TYPE;
  }

  export enum RESPONSE_TYPE {
    ERROR,
    INFORMATION,
    QUESTION,
    WARNING,
    SUCCESS,
  }