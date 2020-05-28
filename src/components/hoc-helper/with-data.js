import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry/error-boundry";

const WithData = (View, GetAPIList) => {
    return class extends Component {

        constructor() {
            super();
            this.state = {
                itemList: null,
            };
        }
        componentDidMount() {
            GetAPIList()
                .then((itemList) => {
                    this.setState({itemList})
                })
                .catch(this.onError);
        }
        render() {
            const { itemList } = this.state;
            if(!itemList) {
                return <Spinner />
            }
            return (
                <ErrorBoundry>
                    <View {...this.props} data={this.state}/>
                </ErrorBoundry>
            )
        }
    }
};

export default WithData;
