import * as React from "react";
import * as m from '../materialui/materialui-components';
import '../../styles.scss';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

export interface MenuConfig {
    className: any,
    menuItems: Array<any>
}

class MenuComponent extends  React.Component<MenuConfig, any> {
    constructor(props: MenuConfig) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        });
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        });
    }

    render() {
        const { menuItems } = this.props;
        const { anchorEl } = this.state;
        return (
            <div>
                <m.IconButton
                    aria-label="Menu"
                    onClick={this.handleClick}>
                    <MenuRoundedIcon color="secondary"></MenuRoundedIcon>
                </m.IconButton>
                <m.Menu id='menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    {
                        menuItems.map((item: any, index: any) => {
                            return <m.MenuItem key={index} onClick={this.handleClose}>{item.label}</m.MenuItem>
                        })
                    }
                </m.Menu>
            </div>
        );
    }
}

export const Menu = MenuComponent;