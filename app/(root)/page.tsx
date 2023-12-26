import MaxWidthWrapper from '@/components/max-width-wrapper';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import getProducts from '@/lib/get-products';
import ProductSlider from '@/components/product-slider';


const Home = async () => {
  const products = await getProducts();

  return (
    <div className="flex flex-col space-y-10">
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your online marketplace for high-quality{' '}
            <span className="text-rose-600">products</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to <span className="text-rose-400">Crunchies</span>. Every
            products on our platform is verified by all customers to ensure our
            highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Products
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* Slider component */}
      <section>
        <ProductSlider title="Products" products={products} />
      </section>

    </div>
  );
};
export default Home;
