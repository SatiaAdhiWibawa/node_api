// INTERFACE DEFINITIONS

interface APIResponse {
    statusCode: number;
    data?: {
      message: string;
      data: any;
    }
}

export {
  APIResponse,
};
