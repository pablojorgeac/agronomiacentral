import { Layout, TestimonialItem } from '@/components/Page';
import usePagination from '@/components/Page/Pagination';
import Link from 'next/link';
import { useState } from 'react';

export default function Testimonials({ testimonials }) {
  const ordenar = (a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  // paginado
  const [testimonialsLocal, setTestiminialsLocal] = useState(testimonials);

  const { currentItems, pages, currentPage, setCurrentPage } = usePagination(
    testimonialsLocal.sort(ordenar),
    3
  );

  return (
    <Layout
      title={'Testimonios'}
      image={
        'https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/01/07110707/What-Your-Video-Interview-Background-Really-Says-About-You-2.jpg'
      }
    >
      <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-10 px-5 gap-5 w-full h-full">
        {currentItems?.map((testimonial) => (
          <div
            key={testimonial._id}
            className="overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out"
          >
            <Link
              href={`/testimonios/${testimonial._id}`}
              key={testimonial._id}
            >
              <TestimonialItem
                title={testimonial.title}
                text={testimonial.description}
                img={testimonial.picture.secure_url}
                id={testimonial._id}
              />
            </Link>
          </div>
        ))}
      </section>

      {/* Paginado */}
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
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://acrepo.onrender.com/api/testimonials');
  const testimonials = await res.json();
  return {
    props: {
      testimonials,
    },
  };
}
