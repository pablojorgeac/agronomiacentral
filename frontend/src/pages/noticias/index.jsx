import { Layout } from '@/components/Page';
import { useMemo } from 'react';
import usePagination from '../../components/Page/Pagination';
import Link from 'next/link';
import { useFilter } from '@/components/Page';

export default function Posts({ posts }) {
  const [filteredItems, setFilter] = useFilter(posts);
  const ordenar = (a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  const { currentItems, pages, currentPage, setCurrentPage } = usePagination(
    filteredItems.sort(ordenar),
    4
  );

  const mainNews = currentItems[0];
  const otherNews = currentItems.slice(1);

  return (
    <>
      {currentItems.length === 0 ? (
        <Layout
          title="Últimas Noticias"
          image="https://img.freepik.com/foto-gratis/gente-tiro-medio-corriendo-juntos_23-2149037629.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"
        >
          <h1>Aún no tenemos Nada por aquí... </h1>{' '}
        </Layout>
      ) : (
        <Layout
          title="Últimas Noticias"
          image="https://img.freepik.com/foto-gratis/gente-tiro-medio-corriendo-juntos_23-2149037629.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph"
        >
          <div className="m-4 relative">
            <input
              type="text"
              placeholder="Buscar noticias..."
              onChange={(e) => setFilter(e.target.value)}
              className="absolute top-0 right-0 max-w-xs px-4 py-2 ring rounded-md hover:bg-sky-100 dark:bg-[#2C2C2C] focus:outline-none focus:ring focus:ring-indigo-300"
            />

            <div className="mt-7 pt-7 flex flex-wrap justify-center">
              <Link href={`/noticias/${mainNews._id}`} key={mainNews._id}>
                <div
                  key={mainNews._id}
                  className="sm:grid sm:grid-cols-2 sm:max-h-72 shadow-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out mb-5 p-5"
                >
                  <img
                    src={mainNews.picture.secure_url}
                    alt={mainNews.title}
                    loading="lazy"
                    className="col-span-1 p-5 sm:order-2"
                  />
                  <div className="sm:col-span-1 sm:grid sm:grid-row-2 sm:order-1">
                    <h3 className="text-3xl place-self-center text-center font-bold text-gray-700 dark:text-slate-100 pt-5 px-5 pb-0 sm:row-span-1">
                      {mainNews.title}
                    </h3>
                    <p className="text-base text-gray-700 dark:text-slate-300 leading-6 pt-0 px-5 pb-5 mb-5 sm:row-span-1">
                      {mainNews.description.slice(0, 280) + '...'}
                    </p>
                  </div>
                </div>
              </Link>

              {otherNews.map((news) => {
                return (
                  <Link href={`/noticias/${news._id}`} key={news._id}>
                    <div
                      key={news._id}
                      className="max-w-xs m-1 shadow-md overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out p-5"
                    >
                      <img
                        src={news.picture.secure_url}
                        alt={news.title}
                        loading="lazy"
                        className=""
                      />
                      <h3 className="text-lg text-center font-bold text-gray-700 dark:text-slate-100 px-5 pt-5 pb-3">
                        {news.title}
                      </h3>
                      <p className="text-base text-gray-700 dark:text-slate-300  leading-6 px-5 pt-0">
                        {news.description.slice(0, 280) + '...'}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex space-x-2 justify-center p-5">
            {pages.map((page) => (
              <button
                key={page}
                className={`px-3 py-1 rounded ${
                  currentPage === page + 1
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setCurrentPage(page + 1)}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://acrepo.onrender.com/api/posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
}
