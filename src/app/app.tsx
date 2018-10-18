import * as React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onChangeTab } from './actions';
import MatText from '../components/text/text';
import MatAppBar from '../components/appbar/appbar';
import * as m from '../components/materialui/materialui-components';
import { Route, Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from 'react-router';
import { AppContainer } from '../containers/app-container';
import { ViewContainer } from '../containers/view-container';

export type AppConfig = RouteComponentProps<any> & { text: string, app: any, onChangeTab: any, tabItems: any, appBar: any };

const mapStateToProps = (state: any) => {
    return {
        app: state.app,
        tabItems: state.app.tabItems,
        appBar: state.app.appBar
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({ onChangeTab }, dispatch);
}

export const App =  connect(mapStateToProps, mapDispatchToProps)(withRouter(
    class App extends React.Component<AppConfig, any> {

        constructor(props: AppConfig) {
            super(props);
            this.props.tabItems.map((item: any, index: any) => {
                if (item.value == this.props.location.pathname) {
                    this.props.appBar.class = (index > 0) ? 'small' : 'big';
                }
            });
        }

        onChangeTab = (event: any, value: any) => {
            this.props.onChangeTab(value);
        };

        getPath(to: any) {
            if (Array.isArray(to)) {
                return '/home'
            } else {
                return to;
            }
        }

        getHomePath(path: any) {
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
            const { text } = this.props;
            return (
                <AppContainer>
                    <MatAppBar position="static" color="primary" className={['app-bar', this.props.appBar.class].join(' ')}>
                        <MatText className="app-bar-title" color="inherit" variant="display3" align="left" weight="lighter" opacity={0.8}>{text}</MatText>
                        <m.Tabs
                            classes={{ root: 'tab-bar', flexContainer: 'tabs-flex-container' }}
                            value={this.getHomePath(this.props.location.pathname)}
                            onChange={this.onChangeTab}
                            indicatorColor="secondary"
                            textColor="inherit"
                            scrollable
                            scrollButtons="off"
                        >
                            {this.props.tabItems.map((item: any, index: any) => {
                                //@ts-ignore
                                return <m.Tab classes={{ selected: 'tab-selected', root: 'tab-buttons' }} key={index} label={item.label} component={Link} to={this.getPath(item.value)} value={this.getPath(item.value)}/>
                            })}
                        </m.Tabs>
                    </MatAppBar>
                    {this.props.tabItems.map((item: any, index: any) => {
                        if (Array.isArray(item.value)) {
                            return item.value.map((value: any, i: any) => {
                                let c = <Route exact key={index} value={value} path={value} component={() => (<ViewContainer key={index}>{item.component}</ViewContainer>)}></Route>
                                index = index+1;
                                return c;
                            })
                        } else {
                            return <Route key={index} value={item.value} path={item.value} component={() => (<ViewContainer key={index}>{item.component}</ViewContainer>)}></Route>
                        }
                    })}
                </AppContainer>
            );
        }
    }
));