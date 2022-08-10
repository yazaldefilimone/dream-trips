import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('~/presentation/components/Map'), { ssr: false });

const Home: NextPage = () => <Map />;

export default Home;
