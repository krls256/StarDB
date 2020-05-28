import React from "react";
import Row from "../row";
import { withRouter } from 'react-router-dom'
import { PersonDescription } from "../sw-components";
import  { PersonList } from "../sw-components";

const PeoplePage = ({ history, match }) => {
    return (
        <Row left={<PersonList seter={(itemId) => {
            history.push(itemId);
        }}/>}
             right={<PersonDescription itemId={match.params.id}/>}
        />
    )
};

export default withRouter(PeoplePage)


