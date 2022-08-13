import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { getPageFactory, getPagesFactory } from '~/infra/factories';
import { PageTemplete } from '~/presentation/templates/Page';
type PageProps = {
  heading: string;
  body: string;
};
const Page: FunctionComponent<PageProps> = ({ heading, body }) => {
  const router = useRouter();
  if (router.isFallback) return null;
  return <PageTemplete heading={heading} body={body} />;
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug ? (params?.slug as string) : '';
  const pageOrError = await getPageFactory().handle({ slug });
  if (pageOrError.isLeft()) {
    return { notFound: true };
  }

  const page = pageOrError.value;
  if (!page) return { notFound: true };
  console.log(page);
  return {
    props: {
      heading: page?.heading,
      body: page?.body?.html
    }
  };
};
