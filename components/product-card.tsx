'use client';
import { Product } from '@/types';
import Image from 'next/image';
import React, { MouseEventHandler } from 'react';
import IconButton from './icon-button';
import Currency from './currency';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-5 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.image}
          alt="Image"
          fill
          className="aspect-square object-cover rounded-md"
        />
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.title}</p>
        <desc className="text-sm text-gray-500">
          {data.category || 'No category'}
        </desc>
      </div>
      {/* price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
