import * as React from "react";
import * as m from '../materialui/materialui-components';
import '../../styles.scss';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { handleClick, handleClose } from './menu.actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export interface MenuConfig {
    className: any,
    anchorEl: any,
    menuItems: Array<any>,
    handleClick: any,
    handleClose: any
}

const mapStateToProps = (state: any) => {
    return {
        anchorEl: state.menu.anchorEl
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        handleClick,
        handleClose
    }, dispatch)
}

class MenuComponent extends  React.Component<MenuConfig, any> {
    constructor(props: MenuConfig) {
        super(props);
    }

    render() {
        const { anchorEl, menuItems, handleClick, handleClose } = this.props;
        return (
            <div>
                <m.IconButton
                    aria-label="Menu"
                    onClick={handleClick}>
                    <MenuRoundedIcon color="secondary"></MenuRoundedIcon>
                </m.IconButton>
                <m.Menu id='menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    {
                        menuItems.map((item: any, index: any) => {
                            return <m.MenuItem key={index} onClick={handleClose}>{item.label}</m.MenuItem>
                        })
                    }
                </m.Menu>
            </div>
        );
    }
}

export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);