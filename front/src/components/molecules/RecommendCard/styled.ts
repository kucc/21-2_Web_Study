import styled from "styled-components";
import { Colors } from "@styles";
export const CardWrapper = styled.div`
position: relative;
overflow:hidden;
width: 114px;
height:114px;
border-radius: 12px;
display: flex;
`;
export const CardImg = styled.img`
position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
   `;
export const CardDescription = styled.div`
position: absolute;
font-family: Apple SD Gothic Neo;
font-size: 12px;
font-weight: 700;
line-height: 14px;
text-align: center;
color: ${Colors.white};
left: 15%;
right: 15%;
bottom:20%;
`;