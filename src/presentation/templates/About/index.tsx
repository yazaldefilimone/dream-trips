import { FunctionComponent } from 'react';
import { LinkApp } from '~/presentation/components/LinkApp';
import { AboutTempleteBody, AboutTempleteContainer, AboutTempleteHeading } from './styles';

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

export const AboutTemplete: FunctionComponent = () => {
  return (
    <AboutTempleteContainer>
      <LinkApp href="/">
        <CloseOutline size={32} aria-lebal="close" />
      </LinkApp>
      <AboutTempleteHeading>My Dream Trips</AboutTempleteHeading>
      <AboutTempleteBody>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quaerat magnam modi. Fuga excepturi voluptas ab
          officiis, esse earum voluptate, ut aliquid nihil, velit corrupti sequi architecto alias sit quam.
        </p>
      </AboutTempleteBody>
    </AboutTempleteContainer>
  );
};
