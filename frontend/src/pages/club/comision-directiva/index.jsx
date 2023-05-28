import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Layout } from '@/components/Page';
import image from '../../../../public/directives-img/directive.svg';

export default function SteeringCommittee({ props }) {
  const [directives, setDirectives] = useState();
  useEffect(() => {
    return setDirectives(props);
  }, [directives]);
  const presidents = directives?.slice(0, 2);
  const otherDirectives = directives?.slice(2, 5);
  return (
    <Layout
      title={'Comisión Directiva'}
      image={
        'https://img.freepik.com/foto-gratis/reunion-departamento_23-2147626530.jpg?w=996&t=st=1681513108~exp=1681513708~hmac=eb17a71ffb76874c81f1199abbfe9cef4f0b1e4e4b7c07ea8c72ea9cc0604b0e'
      }
    >
      {directives ? (
        <div className="my-10 dark:text-slate-100">
          <div className="  flex gap-6 flex-col items-center text-center ">
            {presidents?.map((president, index) => {
              return (
                <div
                  className=" w-[40%] lg:w-[20%] bg-white dark:bg-[#353434b4] shadow-lg flex flex-col items-center rounded-lg py-2"
                  key={index}
                >
                  <div className="w-20 h-20 flex justify-center items-center bg-[#eff2f7] rounded-full">
                    <Image src={image} alt={president.name} className="h-16 " />
                  </div>
                  <h1>{president.name}</h1>
                  <h2>{president.position}</h2>
                </div>
              );
            })}
          </div>
          <div className=" flex flex-col items-center lg:flex-row lg:justify-center gap-6 ">
            {otherDirectives?.map((directive, index) => {
              return (
                <div
                  className=" text-center mt-4 w-[40%] lg:w-[20%] bg-white dark:bg-[#353434b4] shadow-lg flex flex-col items-center rounded-lg py-2"
                  key={index}
                >
                  <div className="w-20 h-20 flex justify-center items-center bg-[#eff2f7] rounded-full">
                    <Image src={image} alt={directive.name} className="h-16 " />
                  </div>
                  <h1>{directive?.name}</h1>
                  <h2>{directive?.position}</h2>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ''
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'ec2-3-21-37-175.us-east-2.compute.amazonaws.com/api/directors'
  );
  const props = await res.json();
  return {
    props: {
      props,
    },
    revalidate: 3600,
  };
}
