import React from "react";
import { Mutation } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import Queries from "../../client/graphql/mutations";
const { FETCH_DOMAINS } = Queries;
import DomainCreate from '../create/DomainCreate';

import DeleteDomain from './DeleteDomain';

class DomainsDetail extends React.Component {
  constructor(props) {
    super(props);

    // since we know we'll be receiving the god's name through props
    // we can set it in our state
    // debugger;
    this.state = {
      editing: false,
      domains: this.props.domains || "no domains :("
    };

  }

  // this is the function that will trigger "editing" mode

  render() {
    // debugger;
    let domains;
    let id = this.props.id;
      // debugger
      domains = this.props.domains.map((domain, i) => {
      return (
        <li key={domain + i}>
              {domain}
              <DeleteDomain id={id} domain={domain} />
          {/* <button
            onClick={this.handleDelete}
            style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
          >
            Delete
          </button> */}
        </li>
      )
    })

    return (
      <ul>
        {domains}
        <DomainCreate />
      </ul>
    )
  }
    // if we are editing we'll return a Mutation component
//     if (this.state.editing) {
//       return (
//         <Mutation mutation={UPDATE_GOD_TYPE}>
//           {(updateGodType, data) => (
//             <div>
//               <form
//                 onSubmit={e => {
//                   e.preventDefault();
//                   updateGodType({
//                     variables: { id: this.props.id, type: this.state.type }
//                   }).then(() => this.setState({ editing: false }));
//                 }}
//               >
//               <select value={this.state.type} onChange={this.fieldUpdate("type")}>
//                 <option value="god">God</option>
//                 <option value="goddess">Goddess</option>
//               </select>
//                 <button type="submit">Update Type</button>
//               </form>
//             </div>
//           )}
//         </Mutation>
//       );
//     } else {
//       return (
//         <div>
//           <div
//             onClick={this.handleEdit}
//             style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
//           >
//             <IconContext.Provider value={{ className: "custom-icon" }}>
//               <FaPencilAlt />
//             </IconContext.Provider>
//           </div>
//           <h2>{this.state.type}</h2>
//         </div>
//       );
//     }
//   }
}

export default DomainsDetail;