import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

const AvatarRoot = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  height: 40px;
  width: 40px;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  cursor: pointer;
`;

const AvatarBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  background: ${({ theme }) => theme.colors.blue[400]};
`;

export interface AvatarProps {
  onClick?: () => void;
}

function Avatar() {
  return (
    <AvatarRoot>
      <AvatarBody>
        <Text variant="h6" emphasis="high" as="span">
          A
        </Text>
      </AvatarBody>
    </AvatarRoot>
  );
}

export default Avatar;
