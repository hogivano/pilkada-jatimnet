import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.slug}</h1>
      <p>This is slug search</p>
    </Layout>
  );
}
