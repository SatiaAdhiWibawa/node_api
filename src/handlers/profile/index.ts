import { Request, Response } from 'express';

/**
 * Fetches data from the API.
 * @param {number} id - The ID of the data to fetch.
 * @returns {Promise<Response>} - The response from the API.
 */
const GetData = async (req: Request, res: Response) => {
  const main = (id:number): Promise<any> => {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      fetch(`https://dummyjson.com/products/${id}`).then(async (data) => {
        const response = await data.json();
        resolve(response);
      }).catch((err) => {
        reject(err);
      });
    });
  };
  const data = await main(
      Number(req.params.id ? req.params.id : 1),
  );
  res.send({
    data: data,
  });
};


export { GetData };
