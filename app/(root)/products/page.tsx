import Featured from '@/components/featured';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import ProductCard from '@/components/product-card';
import getProducts from '@/lib/get-products';
import { perks } from '@/lib/utils';
import React from 'react';

const ProductList = async () => {
  const products = await getProducts();

  return (
    <div>
      <MaxWidthWrapper>
        <div className="space-y-4 py-20">
          <h3 className="font-bold text-3xl">All Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
      <Featured perks={perks} />
    </div>
  );
};
export default ProductList;
