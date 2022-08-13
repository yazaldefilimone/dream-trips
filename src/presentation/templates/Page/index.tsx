import { FunctionComponent } from 'react';
import { LinkApp } from '~/presentation/components/LinkApp';
import { PageTempleteBody, PageTempleteContainer, PageTempleteHeading } from './styles';

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
type PageTempleteProps = {
  heading: string;
  body: string;
};
export const PageTemplete: FunctionComponent<PageTempleteProps> = ({ heading, body }) => {
  return (
    <PageTempleteContainer>
      <LinkApp href="/">
        <CloseOutline size={32} aria-label="close" />
      </LinkApp>
      <PageTempleteHeading>{heading}</PageTempleteHeading>
      <PageTempleteBody>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </PageTempleteBody>
    </PageTempleteContainer>
  );
};
