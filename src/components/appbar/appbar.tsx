import * as React from "react";
import * as m from '../materialui/materialui-components';
import '../../styles.scss';
import styled from 'styled-components';

export interface AppBarConfig {
    height?: number,
    color?: any,
    position?: any,
    className?: any,
    backgroundColor?: string
}
export const MatAppBar = styled(
    class MatAppBar extends React.Component<AppBarConfig, any> {
        constructor(props: AppBarConfig) {
            super(props);
        }
        render() {
            const { color, position } = this.props;
            return (
                <m.AppBar className={this.props.className} position={position} color={color}>{this.props.children}</m.AppBar>
            );
        }
    }
)`
    position: relative;
    z-index: 99;
    width: 100%;
    height: ${props => props.height}px;
    background-color: ${props => props.backgroundColor} !important;
`;

export default MatAppBar;