import * as React from "react";
import * as ReactDOM from "react-dom";
import theme from './materialui/materialui_module';
import './styles.scss';
import { Main } from "./main/main";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Main text="ReactJS"></Main>
    </MuiThemeProvider>,
    document.getElementById("root")
);