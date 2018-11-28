import * as React from 'react';
import { withStyles, Paper } from '@material-ui/core';
import { PaperProps } from '@material-ui/core/Paper';
import { withTheme } from '@material-ui/core';

type ViewConfig = {
    padding?: string,
    type?: "paper" | "blank",
    backgroundColor?: string
    classes: any,
    theme: any
} & PaperProps & React.HTMLAttributes<HTMLDivElement>;

class ViewContainer extends React.Component<ViewConfig, any> {
    constructor(props: ViewConfig) {
        super(props);
    }

    static defaultProps = {
        backgroundColor: '#fafafa',
        padding: '10px',
        type: 'blank'
    }

    buildComponent = (props) => {
        const { classes, backgroundColor, theme, children, padding, type, style, className, elevation } = this.props;
        const components = {
            'paper': (
                <Paper style={Object.assign({
                    background: backgroundColor,
                    padding: padding
                }, style)} className={className} elevation={elevation}>
                    { children }
                </Paper>
            ),
            'blank': (
                <div className={className} style={Object.assign({
                    background: backgroundColor,
                    padding: padding
                }, style)}>
                    { children }
                </div>
            )
        }
        return components[type];
    }

    render() {
        return this.buildComponent(this.props);
    }
}

let styles = {

}

export default withStyles(styles)(withTheme()(ViewContainer));