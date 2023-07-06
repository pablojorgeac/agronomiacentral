import { Layout } from '@/components/Page';

export default function Merchandising({ props }) {
  const products = props;

  return (
    <Layout
      title={'Merchandising'}
      image={
        'https://img.freepik.com/vector-gratis/diseno-camiseta-deportiva-plantilla-camiseta-futbol_29096-1267.jpg?w=1060&t=st=1682532254~exp=1682532854~hmac=b7da40bc7ed7893d64c283d3325ff7fa390f7e05c5ff34adf04b673e5733465f'
      }
    >
      <div className="mt-8 grid justify-center lg:grid-cols-3 gap-4">
        {products?.map((product, index) => {
          return (
            <div
              className="max-w-[280px] h-[400px] rounded-lg overflow-hidden shadow-lg dark:bg-[#353434b4]"
              key={index}
            >
              <img
                src={product?.picture?.secure_url}
                loading="lazy"
                alt={product.title}
                className="h-[60%] my-0 mx-auto "
              />

              <div className="px-6 pb-4 pt-6 ">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {product.description}
                </p>
              </div>
              <div className="px-6 pb-2 pt-4 text-end ">
                <span className="inline-block bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                  ${product.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch(
    'https://club-agronomia-central-production-0211.up.railway.app/api/products'
  );
  const props = await res.json();
  return {
    props: {
      props,
    },
    revalidate: 3600,
  };
}
