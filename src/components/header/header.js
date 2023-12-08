import { ControlPanel, Logo } from "./components";
import styled from "styled-components";

const Description = styled.div`
    font-style: italic;
`;

const HeaderContainer = ({ className }) => (
    <header className={className}>
        <Logo />
        <Description>
            Веб-технологии<br />
            Написание кода<br />
            Разбор ошибок
        </Description>
        <ControlPanel />
    </header>);

export const Header = styled(HeaderContainer)`
position: fixed;
top: 0;
width: 1000px;
height: 120px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 40px;
background-color: #fff;
box-shadow: 0 -2px 17px #000;
`;