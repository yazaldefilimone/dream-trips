import styled from 'styled-components';

export const LinkAppContainer = styled.div`
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  color: var(--white);
  right: var(--medium);
  cursor: pointer;
  svg {
    transition: color 0.3s ease-in-out;
  }
  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`;
