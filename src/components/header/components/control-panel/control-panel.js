import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../../../../components";
import styled from "styled-components";

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 18px;
    width: 100px;
    border: 1px solid #000;
    border-radius: 2px;
    background-color: #eee;
`;

const BackArrowWrapper = styled.div`
    cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
    const navigate = useNavigate();
    return (
        <div className={className}>
            <RightAligned>
                <StyledLink to="/login">Войти</StyledLink>
            </RightAligned>
            <RightAligned>
                <BackArrowWrapper
                    onClick={() => navigate(-1)}>
                    <Icon id="fa-backward" margin="10px 0 0 0" />
                </BackArrowWrapper>
                <Link to="/post">
                    <Icon id="fa-file-text-o" margin="10px 0 0 15px" />
                </Link>
                <Link to="/users">
                    <Icon id="fa-users" margin="10px 0 0 15px" />
                </Link>
            </RightAligned>
        </div>
    );
};

export const ControlPanel = styled(ControlPanelContainer)`

`;
