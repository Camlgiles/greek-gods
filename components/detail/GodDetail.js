import React, { Component } from "react";
import { Query } from "react-apollo";
import Queries from "../../client/graphql/queries";
import NameDetail from './NameDetail';
import TypeDetail from './TypeDetail';
import DescriptionDetail from './DescriptionDetail';
import DomainsDetail from './DomainsDetail';
const { FETCH_GOD } = Queries;

export default (props) => {
//   render() {
    return (
      // there we are getting the `id` for our query from React Router
      <Query query={FETCH_GOD} variables={{ id: props.match.params.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          // debugger;

          return (<div className="detail">
            <NameDetail id={data.god.id} name={data.god.name} />
            <TypeDetail id={data.god.id} type={data.god.type} />
            <DescriptionDetail id={data.god.id} description={data.god.description} />
            <DomainsDetail id={data.god.id} domains={data.god.domains} />
          </div>);
        }}
      </Query>
    );
//   }
}
