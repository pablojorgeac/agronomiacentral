import { Layout } from '@/components/Page';

export default function Testimony({ testimonials }) {
  return (
    <Layout
      title={testimonials.title}
      image={
        'https://img.freepik.com/foto-gratis/joven-corredor-atar-cordones_1421-46.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
      }
    >
      <div className="m-7 py-4 lg:px-14 shadow-2xl grid">
        {testimonials.video?.secure_url ? (
          <video
            src={testimonials.video.secure_url}
            className="w-full max-w-lg place-self-center p-5 bg-gray-100"
            controls
          >
            Tu navegador no soporta el elemento video.
          </video>
        ) : (
          <img
            src={testimonials.picture.secure_url}
            alt={testimonials.title}
            loading="lazy"
            className="place-self-center p-5"
          />
        )}
        <div className="text-base text-gray-700 dark:text-slate-100 leading-6 p-7 whitespace-pre-line overflow-y-auto h-96 scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-thumb-gray-500">
          {testimonials.description}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://acrepo.onrender.com/api/testimonials/${params.id}`
  );
  const testimonials = await res.json();

  return {
    props: {
      testimonials,
    },
  };
}
