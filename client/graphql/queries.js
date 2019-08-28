import gql from "graphql-tag";

export default {
  FETCH_GODS: gql`
    query FetchGods {
      gods {
        id
        name
        description
      }
    }
  `,

  FETCH_DOMAINS: gql`
  query FetchDomains($id: ID!) {
    god(id: $id) {
      id
      domains
    }
  }
  `,

  FETCH_ABODE: gql`
  query FetchAbode($id: ID!) {
    abode(id: $id) {
      id
      name
      coordinates
    }
  }
  `,

  FETCH_ABODES: gql`
  query FetchAbodes {
    abodes {
        id
        name
        coordinates
    }
  }
  `,

  FETCH_GOD: gql`
  query FetchGod($id: ID!) {
      god(id: $id) {
        id
        name
        type
        description
        domains
        abode {
          id
          name
        }
        emblems {
            id
            name
        }
        parents {
            id
            name
        }
        children {
            id
            name
        }
        siblings {
            id
            name
        }
      }
  }`,


  FETCH_EMBLEMS: gql`
  query FetchEmblems {
    emblems {
      id
      name
    }
  }
  `,
  
  FETCH_PARENTS: gql`
  query FetchParents($id: ID!) {
    god(id: $id) {
      name 
      parents {
        id
        name
      }
    }
  }
  `,

  FETCH_SIBLINGS: gql`
  query FetchSiblings($id: ID!) {
    god(id: $id) {
      name 
      siblings {
        id
        name
      }
    }
  }
  `,

  FETCH_CHILDREN: gql`
  query FetchChildren($id: ID!) {
    god(id: $id) {
      name 
      children {
        id
        name
      }
    }
  }
  `,


    
}



// import gql from "graphql-tag";

// const fragments = {
//   detail: gql`
//     fragment DetailFragment on Beer {
//       brewery
//       hops
//     }
//   `
// };