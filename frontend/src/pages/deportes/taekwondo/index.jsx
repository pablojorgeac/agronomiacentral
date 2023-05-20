import { Layout, InfoSlider } from '@/components/Page';
import { images, info } from '../../../helpers/taekwondo';
import { MatchesInfo } from '@/components/Page/MatchesInfo';
import { useMatches, useDates } from '@/hooks';
import useStore from '@/store/globalstore';
import { useState, useEffect } from 'react';


export default function Taekwondo({ data }) {


  const { nextDates } = useDates();
  const showMatches = nextDates(data.filter(m=>m.discipline==='Taekwondo'),1)



  // const { matches } = useStore();
  // const { getMatches } = useMatches();
  // const { nextDates } = useDates();
  // const showMatches = nextDates(matches.filter(m=>m.discipline==='Ajedrez'),1)

  // useEffect(()=>{
  //   getMatches();
  // }, [])


  return (
    <Layout image={images[4].src} title="TAEKWONDO">
      <InfoSlider images={images} info={info} />
      {
        showMatches.length===0? <div className="flex flex-row items-center justify-center mt-8">
                  <p className="pl-2">No hay próximos encuentros programados para esta disciplina</p>
          </div>:<MatchesInfo
        data={showMatches}
        classname={
          'bg-indigo-100 dark:bg-indigo-400 w-full h-full flex items-center'
        }
        iconOne={ <svg
              fill="#1b418a"
              viewBox="0 0 24 24"
              id="taekwondo-2"
              data-name="Flat Color"
              xmlns="http://www.w3.org/2000/svg"
              height={60}
              width={60}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  id="primary"
                  d="M20.91,12.55,19.54,9.8a2,2,0,0,0-1.47-1.08,2,2,0,0,0-1.74.56l-1.88,1.88L11,7.68l3.95-4a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9,6.86A3,3,0,1,0,5.93,10a1,1,0,0,0-.16.25l-1,3.26a2,2,0,0,0,0,1.09L5.05,16a1,1,0,0,0,1,.76,1,1,0,0,0,1-1.24l-.35-1.45.56-1.74L10,15.18V21a1,1,0,0,0,2,0V15.18a2,2,0,0,0-.58-1.41L8.18,10.52,9.59,9.11,13,12.57a1.86,1.86,0,0,0,1.42.59,2,2,0,0,0,1.42-.58l1.88-1.89,1.37,2.76a1,1,0,0,0,1.35.44A1,1,0,0,0,20.91,12.55Z"
                  style={{ fill: '#1b418a' }}
                />
              </g>
            </svg>}

          iconTwo={ <svg
              fill="#fb923c"
              viewBox="0 0 24 24"
              id="taekwondo-21"
              data-name="Flat Color"
              xmlns="http://www.w3.org/2000/svg"
              height={60}
              width={60}
            >
              <g id="SVGRepo_bgCarrier2" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier2">
                <path
                  id="primary"
                  d="M20.91,12.55,19.54,9.8a2,2,0,0,0-1.47-1.08,2,2,0,0,0-1.74.56l-1.88,1.88L11,7.68l3.95-4a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9,6.86A3,3,0,1,0,5.93,10a1,1,0,0,0-.16.25l-1,3.26a2,2,0,0,0,0,1.09L5.05,16a1,1,0,0,0,1,.76,1,1,0,0,0,1-1.24l-.35-1.45.56-1.74L10,15.18V21a1,1,0,0,0,2,0V15.18a2,2,0,0,0-.58-1.41L8.18,10.52,9.59,9.11,13,12.57a1.86,1.86,0,0,0,1.42.59,2,2,0,0,0,1.42-.58l1.88-1.89,1.37,2.76a1,1,0,0,0,1.35.44A1,1,0,0,0,20.91,12.55Z"
                  style={{ fill: '#1b418a' }}
                />
              </g>
            </svg>}
      /> }

    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://club-agronomia-central-production.up.railway.app/api/matches'
    );
    const data = await res.json();

    return {
      props: { data: data },
      revalidate: 3600,
    };
  } catch (error) {
    return { error: error.message };
  }
}
//revalidate
