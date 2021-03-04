import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({theme}) => theme.gradient};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
`;

interface Props {
  theme: string,
  toggleTheme: () => void;
  children: string;
}

const FnToggle: React.FunctionComponent<Props> = (props: Props) => {

  // const isLight: boolean = props.theme === 'light';

  return (
    <>
      <ToggleContainer onClick={props.toggleTheme}>
        {props.children}
      </ToggleContainer>
    </>
  );
}

export default FnToggle;