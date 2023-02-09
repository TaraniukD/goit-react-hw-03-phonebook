import styled from "styled-components";

export const Div = styled.div`
margin: 0 auto;
width: 400px;
border: 1px solid gray;
border-radius: 8px;
padding: 5px 20px 10px 20px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); 
`;

export const Label = styled.label`
font-size: 25px;
`;

export const FormInput = styled.input`
display: block;
min-width: 240px;
margin-top: 10px;
margin-bottom: 5px;
padding: 5px;
border-radius: 5px;
font-size: 16px;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
&:focus {
    box-shadow: 0px 0px 8px 2px rgba(10, 2, 0.1, 0.7);
  } `