import styled from 'styled-components';

const ContactForm = () => {
  return (
    <Wrapper>
      <Field label="Name"/>
    </Wrapper>
  )
}


const Field = ({ id, as, label, ...delegated }) => {
  const inputHeight = as === 'textarea' ? '140' : 'undefined';
  return (
    <FieldWrapper>
      <FieldLabel htmlFor={id}>{label}:</FieldLabel>
      <Input 
        id={id}
        type="text"
        as={as}
        {...delegated}
        style={{ '--input-height': inputHeight + 'px'}}
      />
    </FieldWrapper>
  )
}

const FieldWrapper = styled.div`

`

const FieldLabel = styled.label`
  max-width: 80px;
`

const Input = styled.input`
  height: var(--input-height);
`

const Wrapper = styled.div`

`

export default ContactForm;