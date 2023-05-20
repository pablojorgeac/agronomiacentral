import { Layout } from '@/components/Dashboard';
import { QuinchoCalendarContainer } from '@/components/Page';

export default function Quincho({}) {
  return (
    <Layout>
      <div className="p-10">
        <QuinchoCalendarContainer itsAdmin={true} />
      </div>
    </Layout>
  );
}
