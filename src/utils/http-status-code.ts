import { HttpStatusCode } from '../models/http-status-code-model';

export const ok = async (data: any): Promise<HttpStatusCode> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const created = async (): Promise<HttpStatusCode> => {
  return {
    statusCode: 201,
    body: {
      message: 'Created Successfully',
    },
  };
};

export const noContent = async (): Promise<HttpStatusCode> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const badRequest = async (): Promise<HttpStatusCode> => {
  return {
    statusCode: 400,
    body: null,
  };
};

export const unauthorized = async (message: any): Promise<HttpStatusCode> => {
  return {
    statusCode: 401,
    body: message,
  };
};

export const forbidden = async (message: any): Promise<HttpStatusCode> => {
  return {
    statusCode: 403,
    body: message,
  };
};

export const notFound = async (message: any): Promise<HttpStatusCode> => {
  return {
    statusCode: 404,
    body: message,
  };
};

export const conflict = async (message: any): Promise<HttpStatusCode> => {
  return {
    statusCode: 409,
    body: message,
  };
};

export const unprocessableEntity = async (
  message: any,
): Promise<HttpStatusCode> => {
  return {
    statusCode: 422,
    body: message,
  };
};

export const internalServerError = async (
  message: any,
): Promise<HttpStatusCode> => {
  return {
    statusCode: 500,
    body: message,
  };
};
