import styled from 'styled-components';
import { X } from 'react-feather';

const Modal = (props) => {
  const {
    title,
    isOpen,
    handleDismiss,
    children
  } = props;

  if (!isOpen) {
    return null
  }
  
  return (
    <Overlay>
      <Content>
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={handleDismiss}>
            <X />
            <VisuallyHidden>
              Dismiss Modal
            </VisuallyHidden>
          </CloseButton>
        </Header>
        <ChildWrapper>
          {children}
        </ChildWrapper>
      </Content>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: hsl(0deg 0% 0% / 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 65%;
  background: white;
  position: relative;
  border-radius: 8px;
`

const Header = styled.div`
  padding: 16px;
  padding-bottom: 8px;
`

const Title = styled.h2`
  font-size: 1.5rem;
`

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: -35px;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
`

const VisuallyHidden = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  padding: 0;
  border: 0;
  margin: -1px;
  width: 1px;
  height: 1px;
`
const ChildWrapper = styled.div`
  padding: 16px;
`

export default Modal;