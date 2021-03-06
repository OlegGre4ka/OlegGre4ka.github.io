import styled from 'styled-components';

const Input = styled.input.attrs(
    props => (
        {
            value: props.value,
            type: 'text',
            readOnly: true,
            maxLength:16
        })
)`
  width: 95%;
  height:${props => props.height && props.height};
  border: 0;
  font-size:${props=>props.fontSize && props.fontSize };
  color:${props=>props.color && props.color };
  font-weight: 500;
  text-align: right; 
  letter-spacing: 5px;

  &:active, &:focus {
    outline: none;
}
`

export default Input