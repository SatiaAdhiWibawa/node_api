import { Request, Response } from 'express';
import { APIResponse } from '../../lib/interface';
/**
 * Handles the index request.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {void}
 */

const index = (req: Request, res: Response) => {
  const data = 'testing';

  const response: APIResponse  = {
    statusCode: 200,
    data: {
      message: 'success nih index',
      data: data,
    },
  };
  res.send(response);
};



const test = async (req: Request, res: Response) => {
  const data = 'testing';
  const response: APIResponse  = {
    statusCode: 200,
    data: {
      message: 'success',
      data: data,
    },
  };
  res.send(response);
};




export {
  index,
  test,
};
