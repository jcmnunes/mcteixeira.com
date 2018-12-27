import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const BurgerIcon = styled.div`
  cursor: pointer;
  width: 30px;
  height: 25px;
  margin: auto;
  position: absolute;
  right: 30px;
  top: 0;
  bottom: 0;

  i {
    background-color: ${props => props.theme.primary700};
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 4px;

    &:nth-child(1) {
      animation: ${props => (props.active ? 'inT 0.8s forwards' : 'outT 0.8s backwards')};
      animation-direction: ${props => (props.active ? 'initial' : 'reverse')};
    }

    &:nth-child(2) {
      margin: 5px 0;
      animation: ${props => (props.active ? 'inM 0.8s forwards' : 'outM 0.8s backwards')};
      animation-direction: ${props => (props.active ? 'initial' : 'reverse')};
    }

    &:nth-child(3) {
      animation: ${props => (props.active ? 'inBtm 0.8s forwards' : 'outBtm 0.8s backwards')};
      animation-direction: ${props => (props.active ? 'initial' : 'reverse')};
    }
  }

  @keyframes inM {
    50% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes outM {
    50% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes inT {
    0% {
      transform: translateY(0) rotate(0deg);
    }

    50% {
      transform: translateY(9px) rotate(0deg);
    }

    100% {
      transform: translateY(9px) rotate(135deg);
    }
  }

  @keyframes outT {
    0% {
      transform: translateY(0) rotate(0deg);
    }

    50% {
      transform: translateY(9px) rotate(0deg);
    }

    100% {
      transform: translateY(9px) rotate(135deg);
    }
  }

  @keyframes inBtm {
    0% {
      transform: translateY(0) rotate(0deg);
    }

    50% {
      transform: translateY(-9px) rotate(0deg);
    }

    100% {
      transform: translateY(-9px) rotate(135deg);
    }
  }

  @keyframes outBtm {
    0% {
      transform: translateY(0) rotate(0deg);
    }

    50% {
      transform: translateY(-9px) rotate(0deg);
    }

    100% {
      transform: translateY(-9px) rotate(135deg);
    }
  }
`;

const Menu = styled.div`
  display: block;
  position: fixed;
  top: 60px;
  right: -300px;
  z-index: 1050;
  height: 100vh;
  background: white;
  width: 300px;
  transition: all 400ms ease;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  opacity: 0.97;
  transform: ${props => (props.active ? 'translateX(-300px)' : 'translateX(0)')};
`;

const StyledLink = styled(Link)`
  text-align: center;
  display: block;
  padding: 10px;
  background: white;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.neutral100};
  }
`;

const LinkText = styled.span`
  font-size: 18px;
`;

const Backdrop = styled.div`
  display: block;
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.neutral200};
  opacity: ${props => (props.active ? '0.5' : '0')};
  transition: all 0.3s ease;
`;

class MenuPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mounted: false };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    if (this.state.mounted) {
      const portalNode = document.getElementById('menu-root');
      const overlayNode = this.props.children;
      return ReactDOM.createPortal(overlayNode, portalNode);
    }
    return null;
  }
}

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.toggleMenuState = this.toggleMenuState.bind(this);
  }

  toggleMenuState() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const { active } = this.state;
    return (
      <div>
        <BurgerIcon onClick={this.toggleMenuState} active={active}>
          <i />
          <i />
          <i />
        </BurgerIcon>
        <MenuPortal>
          <Menu active={active}>
            <StyledLink onClick={this.toggleMenuState} to="work" smooth="easeOutQuad" offset={-60}>
              <LinkText>Work</LinkText>
            </StyledLink>
            <StyledLink onClick={this.toggleMenuState} to="about" smooth="easeOutQuad" offset={-60}>
              <LinkText>About</LinkText>
            </StyledLink>
            <StyledLink
              onClick={this.toggleMenuState}
              to="achievements"
              smooth="easeOutQuad"
              offset={-60}
            >
              <LinkText>Achievements</LinkText>
            </StyledLink>
            <StyledLink
              onClick={this.toggleMenuState}
              to="skills"
              smooth="easeOutQuad"
              offset={-60}
            >
              <LinkText>Skills</LinkText>
            </StyledLink>
            <StyledLink
              onClick={this.toggleMenuState}
              to="contact"
              smooth="easeOutQuad"
              offset={-60}
            >
              <LinkText>Contact me</LinkText>
            </StyledLink>
          </Menu>
        </MenuPortal>
        <MenuPortal>
          <Backdrop active={active} onClick={this.toggleMenuState} />
        </MenuPortal>
      </div>
    );
  }
}

export default Burger;
