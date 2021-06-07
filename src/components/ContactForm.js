import styled from 'styled-components';

const ContactForm = () => {
  return (
    <form>
      <Field id="name" label="Name" placeholder="Your name"/>
      <Field 
        id="email" 
        label="Email"
        type="email"
        placeholder="mary.jackson@gmail.com"
      />
      <Field 
        id="message"
        label="Message"
        as="textarea"
      />
      <Button>Submit</Button>
    </form>
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
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 4px;
`

const FieldLabel = styled.label`
  max-width: 80px;
  flex: 2;
`

const Input = styled.input`
  height: var(--input-height);
  flex: 3;
  outline-offset: 4px;
  min-width: 80px;
  font-size: 1rem;
  padding: 4px;
`

const Button = styled.button`
  display: block;
  font-size: 1rem;
  margin: 32px auto 0;
  padding: 8px 24px;
  outline-offset: 8px;
`

export default ContactForm;