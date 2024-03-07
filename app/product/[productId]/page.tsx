// import Gallery from "@/components/gallery";
// import ProductList from "@/components/product-list";
import ProductList from "@/app/shop/components/ProductList";
import Gallery from "@/components/Gallery";
import Info from "@/components/Info/Info";
import Container from "@/components/ui/container";
import { getProduct, getProducts } from "@/lib/products";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const products = await getProducts();
  //   const suggestedProducts = await getProducts({
  //     categoryId: product?.category?.id,
  //   });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Рекомендуемые товары" items={products} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
