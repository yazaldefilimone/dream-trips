import { FunctionComponent } from 'react';
import { LinkApp } from '~/presentation/components/LinkApp';
import { PageTempleteBody, PageTempleteContainer, PageTempleteHeading } from './styles';

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

export const PageTemplete: FunctionComponent = () => {
  return (
    <PageTempleteContainer>
      <LinkApp href="/">
        <CloseOutline size={32} aria-label="close" />
      </LinkApp>
      <PageTempleteHeading>My Dream Trips</PageTempleteHeading>
      <PageTempleteBody>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quaerat magnam modi. Fuga excepturi voluptas
          ab officiis, esse earum voluptate, ut aliquid nihil, velit corrupti sequi architecto alias sit quam.
        </p>
      </PageTempleteBody>
    </PageTempleteContainer>
  );
};
