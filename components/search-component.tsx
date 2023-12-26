'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Product, Products } from '@/types';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

interface SearchComponentProps {
  products: Product[];
}

const SearchComponent: React.FC<SearchComponentProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const router = useRouter();
  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      const matches = await products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setResults(matches);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search product..."
        className="px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md outline-none focus:ring-0 focus:border-none focus:outline-none sm:text-sm"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        <div className="absolute top-10 right-0 z-[100]">
          {results.length > 0 && (
            <div className="mt-1 shadow-md ">
              <div className="space-y-4 overflow-y-scroll rounded-lg p-5 bg-gray-100 border no-scrollbar flex flex-col max-w-80 max-h-80 ">
                {results.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center space-x-4 justify-between p-2 bg-white shadow sm:rounded-lg"
                  >
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {product.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 truncate">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button
                        variant="secondary"
                        onClick={() => router.push(`/product/${product.id}`)}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
