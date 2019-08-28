import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../client/graphql/mutations";
const { NEW_DOMAIN } = Mutations;

class DomainCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e, newDomain) {
    e.preventDefault();
    let domain = this.state.domain;

    // our newEmblem function will accept an object with the key of "variables" pointing to an object with all our passed in variables.
    newDomain({
      variables: {
        domain: domain,
      }
    })
      // after our mutation has run we want to reset our state and show our user the success message
      .then(data => {
        console.log(data);
        this.setState({
          message: `New domain "${name}" created successfully`,
          name: "",
        });
      })
  }

  updateCache(cache, { data: { newDomain } }) {
    let domains;
    try {
      // we'll try to read from our cache but if the query isn't in there no sweat!
      // We only want to update the data if it's in the cache already - totally fine if the data will
      // be fetched fresh later
      domains = cache.readQuery({ query: FETCH_DOMAINS });
    } catch (err) {
      return;
    }

    // then our writeQuery will only run IF the cache already has data in it
    if (domains) {
      let domainArray = domains.domains;

      cache.writeQuery({
        query: FETCH_DOMAINS,
        data: { domains: domainArray.concat(newDomain) }
      });
    }
  }



  render() {
    return (
      <Mutation
        mutation={NEW_DOMAIN}
        update={(cache, data) => this.updateCache(cache, data)}
      >
        {(newDomain, { data }) => (
          <div>
            <form onSubmit={e => this.handleSubmit(e, newDomain)}>
              <input
                onChange={this.update("name")}
                value={this.state.domain}
                placeholder="Domain"
              />
              <button type="submit">Add Domain</button>
            </form>
            <p>{this.state.message}</p>
          </div>
        )}
      </Mutation>
    );
  }
}

export default DomainCreate;