import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
margin: 0 auto;
width: 400px;
border: 1px solid gray;
border-radius: 8px;
padding: 20px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); 
`;

export const Label = styled.label`
font-size: 25px;
`;

export const Fieldtyled = styled(Field)`
display: block;
min-width: 320px;
margin-top: 20px;
margin-bottom: 10px;
padding: 7px;
border-radius: 5px;
font-size: 20px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
&:focus {
    box-shadow: 0px 0px 8px 2px rgba(10, 2, 0.1, 0.7);
  } 
`;

export const Button = styled.button`
padding: 10px;
margin-top: 30px;
border: 1px solid #e28743;
border-radius: 5px;
cursor: pointer;
background-color: #e28743;
font-size: 18px;
&:hover,
&:focus {
    background-color: #eab676;
    border: 1px solid #eab676;
  }
`;

export const ErrMessage = styled(ErrorMessage)`
font-size: 18px;
color: red;
`;