import { styled as ss } from '@material-ui/styles';
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

const ToggleContainer2 = ss('button')({
  // 'background': ${({theme}) => theme.gradient},
  // 'border': '2px solid' + ${({theme}) => theme.toggleBorder},
  'border-radius': '30px',
  'cursor': 'pointer',
  'display': 'flex',
  'font-size': '0.5rem',
  'justify-content': 'space-between',
  'margin': '0 auto',
  'overflow': 'hidden',
  'padding': '0.5rem',
  'position': 'relative',
  'width': '8rem',
  'height': '4rem'
});

type MyContext = number;
const Ctx = React.createContext<MyContext>(0);

interface Props {
  theme: string,
  toggleTheme: () => void;
}

export class Toggle extends React.Component<Props, any> {

  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  private isLight: boolean;

  constructor(props: Props) {
    super(props);
    this.isLight = this.props.theme === 'light';
  }

  render() {
    return (
      <>
        <ToggleContainer onClick={this.props.toggleTheme}>
          TEXT
        </ToggleContainer>
        <ToggleContainer2 onClick={this.props.toggleTheme}>
          TEXT2
        </ToggleContainer2>
        <div>{this.context}</div>
      </>
    );
  }
}