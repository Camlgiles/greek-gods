import React from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../client/graphql/mutations";
// import { fetchGods } from "../../client/graphql/queries";
import Queries from "../../client/graphql/queries";
const {FETCH_DOMAINS} = Queries;
const { DELETE_DOMAIN } = Mutations;

const linkStyle = {
  cursor: "pointer",
  fontSize: "10px",
  color: "red"
};
// variables={{ id: props.match.params.id }}
const DeleteDomain = props => {
  

  return (
    <Mutation
      mutation={DELETE_DOMAIN}
    >
      {(removeGodDomain, { data }) => {
        // debugger
        return(
        <a
          style={linkStyle}
          onClick={e => {
            // debugger
            e.preventDefault();
            removeGodDomain({ variables: { godId: props.id, domain: props.domain } });
          }}
        >
          <p>Delete</p>
        </a>
      )}}
    </Mutation>
  );
};

export default DeleteDomain;