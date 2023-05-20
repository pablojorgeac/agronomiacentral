import { Layout } from '@/components/Page';
import React from 'react';

export default function Post({ post }) {
  return (
    <Layout
      title={post.title}
      image={
        'https://img.freepik.com/foto-gratis/joven-corredor-atar-cordones_1421-46.jpg?size=626&ext=jpg&ga=GA1.2.1228025790.1681327921&semt=sph'
      }
    >
      <div className="mx-4 my-7 py-5 shadow-2xl grid grid-cols-1 sm:grid-cols-2">
        <img
          src={post.picture.secure_url}
          alt={post.title}
          loading="lazy"
          className="place-self-center"
        />
        <div className="text-base text-gray-700 dark:text-slate-100 leading-6 p-7 whitespace-pre-line overflow-y-auto h-96 scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-thumb-gray-500">
          {post.description}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://club-agronomia-central-production.up.railway.app/api/posts/${params.id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
