import { Layout } from '@/components/Page';
import { QuinchoCalendarContainer } from '@/components/Page';
import image from '../../../../public/history-img/Prueba.png';

export default function Quincho() {
  return (
    <>
      <Layout title={'Disponibilidad del Quincho'} image={image}>
        <QuinchoCalendarContainer />
      </Layout>
    </>
  );
}
