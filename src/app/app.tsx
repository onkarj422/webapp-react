import * as React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from 'react-router';
import { Typography } from "@material-ui/core";
import Header from './components/layout/header/Header';
import Tabs from './components/tabs/Tabs';
import Menu from './components/menu/Menu';
import View from "./components/layout/view/View";

export type AppConfig = RouteComponentProps<any> & {
    tabItems: Array<{
        label: string
    }>
    menuItems: Array<{
        label: string,
        action: string
    }>,
    routes: Array<any>,
    title: string,
    children: any
};

const mapStateToProps = (state) => {
    return {
        title: state.app.title,
        tabItems: state.app.tabItems,
        menuItems: state.app.menuItems,
        routes: state.app.routes
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch);
}

declare global {
    interface Window { viewAppProps;}
}

export const App =  withRouter(connect(mapStateToProps, mapDispatchToProps)(
    class App extends React.Component<AppConfig, any> {

        constructor(props: AppConfig) {
            super(props);
            this.state = {

            }
            window.viewAppProps = () => {
                console.log(this.props);
            }
        }

        componentDidMount() {

        }

        logProps = () => {
            console.log(this.props);
        }

        render() {
            const { title, menuItems, tabItems, routes, children } = this.props;
            return (
                <div className="app-container">
                    <Header style={{ boxShadow: 'none' }} className="app-bar-title gridarea" position="fixed">
                        <Typography style={{ flexGrow: 1 }} variant="display1" color="inherit">
                            {title}
                        </Typography>
                        <Menu className="menu-button" menuItems={menuItems}></Menu>
                    </Header>
                    <Header className="app-bar-tabs">
                        <Tabs style={{ marginLeft: 'auto' }} dense="true" tabItems={tabItems} routes={routes}></Tabs>
                    </Header>
                    <View type="paper" className='main-container' elevation={3}>
                        {children}
                    </View>
                </div>
            );
        }
    }
));