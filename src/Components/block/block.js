import React, { useState } from "react";
import styled from "styled-components";

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #92a8d1;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
`;



export default StyledBlock;