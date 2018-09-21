import * as React from "react";
import * as m from '../materialui/materialui-components';
import styled from 'styled-components';

export interface TextStyles {
    size?: number,
    color?: any,
    weight?: string,
    opacity?: number,
    align?: any,
    variant?: any,
    className?: any
}
export const MatText = styled(
    class MatText extends React.Component<TextStyles, any> {
        constructor(props: TextStyles) {
            super(props);
        }
        render() {
            const { color, align, variant } = this.props;
            return (
                <m.Typography className={this.props.className} align={align} color={color} variant={variant}>{this.props.children}</m.Typography>
            );
        }
    }
)`
    font-size: ${props => props.size}px;
    color: ${props => props.color} !important;
    font-weight: ${props => props.weight } !important;
    opacity: ${props => props.opacity};
`;

export default MatText;