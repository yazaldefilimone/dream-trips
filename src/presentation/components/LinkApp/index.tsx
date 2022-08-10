import { FunctionComponent } from 'react';
import * as Styled from './styles';
import Link from 'next/link';
import { LinkAppContracts } from '~/presentation/components/contracts';

export const LinkApp: FunctionComponent<LinkAppContracts> = ({ href, children }) => {
  return (
    <Styled.LinkAppContainer>
      <Link href={href}>{children}</Link>
    </Styled.LinkAppContainer>
  );
};
