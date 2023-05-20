import { Layout, InfoSlider } from '@/components/Page';
import { images, info } from '../../../helpers/images';

export default function TrainingCenter() {
    return (
        <Layout image={images[1].src} title="ATENEA SPORTS">
            <InfoSlider images={images} info={info} />
        </Layout>
    );
}
