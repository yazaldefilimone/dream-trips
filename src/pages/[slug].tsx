import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { getPagesFactory } from '~/infra/factories';
import { PageTemplete } from '~/presentation/templates/Page';

const Page: FunctionComponent = () => {
  const router = useRouter();
  if (router.isFallback) return null;
  return <PageTemplete />;
};

export default Page;

export async function getStaticPaths() {
  const pagesOrError = await getPagesFactory().handle();
  if (pagesOrError.isLeft()) {
    return;
  }
  const pages = pagesOrError.value;
  const paths = pages.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: true };
}
// export async function getStaticProps() {
//   const pagesOrError = await getPagesFactory().handle();
//   if (pagesOrError.isLeft()) {
//     console.log({ pagesOrError });

//     return { props: {} };
//   }
//   const pages = pagesOrError.value;
//   console.log(pages);
//   const paths = pages.map(({ slug }) => ({ params: { slug } }));
//   return { props: {} };
// }
