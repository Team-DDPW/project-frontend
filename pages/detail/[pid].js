import { useRouter } from 'next/router';
// import Layout from '../../components/Layout';

function Detail() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    // <Layout>
    // </Layout>
    <h1>Post: {pid}</h1>
  );
}

export default Detail;
