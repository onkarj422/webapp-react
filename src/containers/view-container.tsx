import * as React from "react";
import MatText from '../components/text/text';

export class ViewContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="view-container">
                {this.props.children}
            </div>
        )
    }
}