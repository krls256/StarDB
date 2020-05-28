import React, {Component} from "react";
import ErrorMessage from "../error";
import Spinner from "../spinner";
import SwapiService from "../../service/swapi-servise";
import ErrorBoundry from "../error-boundry/error-boundry";

const WithImage = (View, getAPIData, getImg, children) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                item: null,
                error: false,
                loading: true,
                imageUrl: null
            };
            this.swapi = new SwapiService();
            this.onError = () => {
                this.setState({error: true, loading: false})
            };
            this.updateItem = () => {
                this.setState({loading: true});
                const { itemId } = this.props;
                if(!itemId) {
                    return;
                }
                getAPIData(itemId)
                    .then((item) => this.setState({item, loading: false}))
                    .catch(this.onError);
                this.setState({imageUrl: getImg(itemId)})
            };

        }
        componentDidMount() {
            this.updateItem();
        }
        componentDidUpdate(prevProps) {
            if(this.props.itemId !== prevProps.itemId) {
                this.updateItem();
            }
        }
        render() {
            if(this.state.error) {
                return <ErrorMessage />
            }
            if(!this.state.item) {
                return <span className="people-description__waiter">Choose an item</span>
            }
            if(this.state.loading) {
                return <Spinner/>
            }
            return (
                <ErrorBoundry>
                    <View {...this.props} {...this.state} children={children}/>
                </ErrorBoundry>
            )
        }
    }
};

export default WithImage;
