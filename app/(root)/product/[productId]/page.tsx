import Container from '@/components/container';
import Featured from '@/components/featured';
import Info from '@/components/info';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import getProduct from '@/lib/get-product';
import getProducts from '@/lib/get-products';
import { perks } from '@/lib/utils';
import Image from 'next/image';

// Typescript ProductPageProps
interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params?.productId);

  return (
    <div>
      <MaxWidthWrapper className="p-12">
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2  lg:gap-x-8">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
              <Image
                src={product?.image}
                alt="Image"
                fill
                className="aspect-square object-cover rounded-md"
              />
            </div>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default ProductPage;
