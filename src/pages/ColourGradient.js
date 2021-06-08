import styled from 'styled-components';

const ColourGradient = () => {
  return (
    <>
      <Wrapper>
        <Box style={{ backgroundColor: "var(--color-gray-100)"}}></Box>
        <Box style={{ backgroundColor: "var(--color-gray-300)"}}></Box>
        <Box style={{ backgroundColor: "var(--color-gray-500)"}}></Box>
        <Box style={{ backgroundColor: "var(--color-gray-700)"}}></Box>
        <Box style={{ backgroundColor: "var(--color-gray-900)"}}></Box>
      </Wrapper>
      <Wrapper>
        <Box style={{ backgroundColor: "var(--color-primary)"}}></Box>
        <Box style={{ backgroundColor: "var(--color-primary-light)"}}></Box>
        <Box style={{ backgroundColor: "var(--color-primary-dark)"}}></Box>
        <Background>
          <Box style={{ backgroundColor: "var(--color-primary-alpha-300)"}}></Box>
          <Box style={{ backgroundColor: "var(--color-primary-alpha-500)"}}></Box>
          <Box style={{ backgroundColor: "var(--color-primary-alpha-700)"}}></Box>
        </Background>
      </Wrapper>
      <Wrapper>
        <Box style={{ backgroundColor: "var(--color-secondary)"}}></Box>
        <Box style={{ backgroundColor: "var(--color-secondary-light)"}}></Box>
        <Box style={{ backgroundColor: "var(--color-secondary-dark)"}}></Box>
        <Background>
          <Box style={{ backgroundColor: "var(--color-secondary-alpha-300)"}}></Box>
          <Box style={{ backgroundColor: "var(--color-secondary-alpha-500)"}}></Box>
          <Box style={{ backgroundColor: "var(--color-secondary-alpha-700)"}}></Box>
        </Background>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

`

const Box = styled.div`
  width: 50px;
  height: 50px;
  margin: 24px 6px;
  border-radius: 4px;
`

const Background = styled.div`
  background-image: url("https://images.unsplash.com/photo-1528492501711-867fd2c44bb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
  width: 300px;
  display: flex;
  background-position: bottom;
  margin-bottom: 24px;
`

export default ColourGradient;