import * as React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

export class AppContainer extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                <CssBaseline />
                {this.props.children}
            </div>
        )
    }
}