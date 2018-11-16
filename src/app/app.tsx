import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onChangeTab, setAppBarState } from './actions';
import MatText from '../components/text/text';
import MatAppBar from '../components/appbar/appbar';
import * as m from '../components/materialui/materialui-components';
import { Route, Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from 'react-router';
import { AppContainer } from '../containers/app-container';
import { ViewContainer } from '../containers/view-container';
import { Menu } from '../components/menu/menu';
import Paper from '@material-ui/core/Paper';
import ElementUtils from '../utilities/element/element.utility';

export type AppConfig = RouteComponentProps<any> & {
    app: any,
    onChangeTab: any,
    tabItems: Array<any>,
    setAppBarState: Function,
    menuItems: Array<any>,
    title: string,
    isFixedAppBar: boolean
};

const mapStateToProps = (state) => {
    return {
        app: state.app,
        title: state.app.title,
        tabItems: state.app.tabItems,
        menuItems: state.app.menuItems,
        isFixedAppBar: state.app.isFixedAppBar
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ onChangeTab, setAppBarState }, dispatch);
}

declare global {
    interface Window { viewAppProps;}
}

export const App =  connect(mapStateToProps, mapDispatchToProps)(withRouter(
    class App extends React.Component<AppConfig, any> {

        constructor(props: AppConfig) {
            super(props);
            window.viewAppProps = () => {
                console.log(this.props.isFixedAppBar);
            }
            this.appBar = React.createRef();
        }

        componentDidMount() {
            this.setAppBarHandler();
        }

        appBar: any;

        setAppBarHandler() {
            const elUtils = new ElementUtils();
            window.addEventListener('scroll', () => {
                let isFixed = (window.scrollY >= (elUtils.getElHeight(ReactDOM.findDOMNode(this.appBar.current))-5)) ? true : false;
                this.props.setAppBarState('isFixedAppBar', isFixed);
            });
        }

        getPath(to) {
            if (Array.isArray(to)) {
                return '/home'
            } else {
                return to;
            }
        }

        getHomePath(path) {
            if (path == '/' || path == '') {
                return '/home';
            } else {
                return path;
            }
        }

        logProps = () => {
            console.log(this.props);
        }

        render() {
            const { title, menuItems, tabItems, onChangeTab, isFixedAppBar } = this.props;
            return (
                <AppContainer className="app-container">
                    <MatAppBar ref={this.appBar} position="static" color="primary" className={`app-bar-title ${isFixedAppBar ? "fixed" : "gridarea"}`}>
                        <m.Toolbar className="toolbar">
                            <MatText className="app-bar-title" color="inherit" variant="display3" align="left" weight="lighter" opacity={0.8}>{title}</MatText>
                            <Menu menuItems={menuItems} className="menu-button"></Menu>
                        </m.Toolbar>
                    </MatAppBar>
                    <MatAppBar position="static" backgroundColor="#3C3049" className='app-bar-tabs'>
                        <m.Tabs
                            classes={{ root: 'tab-bar' }}
                            value={this.getHomePath(this.props.location.pathname)}
                            onChange={onChangeTab}
                            indicatorColor="secondary"
                            textColor="inherit"
                            scrollable
                            scrollButtons="off"
                        >
                            {tabItems.map((item: any, index: any) => {
                                //@ts-ignore
                                return <m.Tab classes={{ selected: 'tab-selected', root: 'tab-buttons' }} key={index} label={item.label} component={Link} to={this.getPath(item.value)} value={this.getPath(item.value)} />
                            })}
                        </m.Tabs>
                    </MatAppBar>
                    <Paper elevation={5} classes={{ root: 'main-container' }}>
                        {tabItems.map((item: any, index: any) => {
                            if (Array.isArray(item.value)) {
                                return item.value.map((value: any, i: any) => {
                                    let c = <Route className="main-area" exact key={index} value={value} path={value} component={() => (<ViewContainer key={index}>{item.component}</ViewContainer>)}></Route>
                                    index = index+1;
                                    return c;
                                })
                            } else {
                                return <Route className="main-area" key={index} value={item.value} path={item.value} component={() => (<ViewContainer key={index}>{item.component}</ViewContainer>)}></Route>
                            }
                        })}
                    </Paper>
                </AppContainer>
            );
        }
    }
));