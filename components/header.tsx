'use client';
import React, { useState } from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import Link from 'next/link';
import { Map, ShoppingBag } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import SearchComponent from './search-component';
import getProducts from '@/lib/get-products';

// eslint-disable-next-line @next/next/no-async-client-component
const Header = async () => {
  const router = useRouter();
  const products = await getProducts();
  return (
    <div className="bg-white z-50 top-0 inset-x-0 h-16 ">
      <header className=" bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200 relative ">
            <div className="flex gap-4 w-full h-16 items-center justify-between">
              <Link href="/">
                <div className="text-rose-600  space-x-2 flex items-center lg:ml-0">
                  <Map className="h-10 w-10" />
                  <span className="hidden md:flex text-2xl font-bold">
                    Crunchies
                  </span>
                </div>
              </Link>
              <div className="flex items-center gap-x-2 md:gap-x-4 ">
                <Button
                  variant="secondary"
                  onClick={() => router.push('/products')}
                >
                  <span className="text-rose-400 font-semibold">Products</span>
                </Button>
                <SearchComponent products={products} />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Header;
