import * as React from "react";
import { AppBar, Toolbar} from "@material-ui/core";
import { AppBarProps } from "@material-ui/core/AppBar";

interface IHeader {
    height?: any
}

type DefaultProps = {
    height: string,
}

export type HeaderProps = AppBarProps & IHeader & Partial<DefaultProps>

class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props);
    }

    static defaultProps: DefaultProps = {
        height: '64px'
    }

    render() {
        const { position, height, style } = this.props;
        return (
            <div {...this.props} style={{
                height: height
            }}>
                <AppBar style={Object.assign({
                    height: height
                }, style)} position={ position || "static" } color="primary">
                    <Toolbar >
                        {this.props.children}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;