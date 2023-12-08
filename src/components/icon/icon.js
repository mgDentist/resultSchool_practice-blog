import styled from "styled-components";

const IconContainer = ({ className, id }) => (
    <div className={className}>
        <i className={`fa ${id}`} aria-hidden="true"></i>
    </div>
);

export const Icon = styled(IconContainer)`
    margin: ${({ margin = '0' }) => margin};
    font-size: ${({ size = '24px' }) => size};
`;