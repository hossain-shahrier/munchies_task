import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getProducts = async (): Promise<Product[]> => {
  const data = await fetch(URL).then((res) => res.json());

  return data;
};
export default getProducts;
