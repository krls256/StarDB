import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDescription from "../item-description";
import ErrorMessage from "../error";
import Row from "../row";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class ItemPage extends Component {
    constructor() {
        super();
        this.state = {
            itemId: null,
            hasError: false
        };
        this.selectItem = (itemId) => {
            this.setState({itemId});
        }
    }
    componentDidCatch(err) {
        this.setState({hasError: true});
    }
    render() {
        const { itemId, hasError } = this.state;
        const imageUrl = this.props.getUrl(itemId);
        const itemList = (
        <ItemList selectItem={this.selectItem}
            dataSearch={this.props.dataSearch}>
            {this.props.getListInfo}
        </ItemList>
        );

        const descr = (
            <ErrorBoundry>
                <ItemDescription itemId={itemId} getItem={this.props.getItem} imageUrl={imageUrl}>
                    {this.props.children}
                </ItemDescription>
            </ErrorBoundry>
        );
        if (hasError) {
            return <ErrorMessage/>
        }
        return (
            <Row left={itemList} right={descr} />
        )
    }
}