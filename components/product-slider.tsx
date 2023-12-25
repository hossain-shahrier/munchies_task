'use client';
import React, { useState } from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import Link from 'next/link';
import Image from 'next/image';
import Currency from './currency';
import { Product } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductSliderProps {
  title: string;
  products: Product[];
}
const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClickLeft = () => {
    setCurrentSlide((oldSlide) => Math.max(oldSlide - 1, 0));
  };

  const handleClickRight = () => {
    setCurrentSlide((oldSlide) => Math.min(oldSlide + 1, products.length - 1));
  };

  return (
    <MaxWidthWrapper>
      <div className="space-y-4 w-full">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-3xl">Products</h3>
          <Link href="/products">
            <span className="text-rose-600">See all</span>
          </Link>
        </div>
        <div className="w-full m-auto relative border border-gray-200 bg-gray-100 p-4 rounded-xl">
          <div
            className="rounded-2xl duration-500 flex space-x-4 overflow-x-hidden"
            style={{ userSelect: 'none' }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white group cursor-pointer rounded-xl border p-5 space-y-4 transform transition-all duration-700 ease-in-out ${
                  index === currentSlide ? 'scale-105' : ''
                } w-full md:min-w-[60%] lg:min-w-[40%]`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="aspect-square w-full h-[356px] rounded-xl bg-gray-100 relative">
                  <Image
                    src={product?.image}
                    alt="Image"
                    fill
                    className="aspect-square object-cover rounded-md"
                    style={{ userSelect: 'none' }}
                  />
                </div>
                {/* Description */}
                <div>
                  <p className="font-semibold text-lg">{product.title}</p>
                  <desc className="text-sm text-gray-500">
                    {product.category || 'No category'}
                  </desc>
                </div>
                {/* price */}
                <div className="flex items-center justify-between">
                  <Currency value={product.price} />
                </div>
              </div>
            ))}
          </div>
          <div
            onClick={handleClickLeft}
            className="absolute top-[50%] left-0 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft
              className=" text-rose-400 cursor-pointer hover:text-rose-500"
              size={30}
              fill="white"
            />
          </div>
          <div
            onClick={handleClickRight}
            className="absolute top-[50%] right-0 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight
              className="text-rose-400 cursor-pointer hover:text-rose-500"
              size={30}
              fill="white"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductSlider;
