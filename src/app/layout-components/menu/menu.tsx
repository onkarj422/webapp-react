import * as React from "react";
import '../../../styles.scss';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import actionMaps from './menu.action.maps';
import { IconButton, Menu as MMenu, MenuItem } from '@material-ui/core';

export type MenuConfig = React.HTMLAttributes<HTMLDivElement> & {
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

    handleMenuItemClick = (event, index, action) => {
        action ? actionMaps[action]() : actionMaps['DEFAULT']();
        this.setState({
            anchorEl: null
        });
    }

    render() {
        const { menuItems } = this.props;
        const { anchorEl } = this.state;
        return (
            <div>
                <IconButton
                    aria-label="Menu"
                    onClick={this.handleClick}>
                    <MenuRoundedIcon color="secondary"></MenuRoundedIcon>
                </IconButton>
                <MMenu id='menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                    {
                        menuItems.map((item: any, index: any) => {
                            return <MenuItem key={index} onClick={event => this.handleMenuItemClick(event, index, item.action)}>{item.label}</MenuItem>
                        })
                    }
                </MMenu>
            </div>
        );
    }
}

export const Menu = MenuComponent;