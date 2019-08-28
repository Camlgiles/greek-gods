import React from "react";
import GodsList from './gods/GodsList';
import {Route, Switch} from  'react-router-dom';
import GodCreate from './create/GodCreate';
import EmblemCreate from './create/EmblemCreate';
import AbodeCreate from './create/AbodeCreate';
import Create from './create/Create';
import Nav from './navigation/navigation';
import GodDetail from './detail/GodDetail';

const App = () => (
    <div>
      <Nav />
        <Switch>
            <Route exact path="/gods/:id" component={GodDetail} />
            <Route exact path="/" component={GodsList} />
            <Route exact path="/new" component={Create} />
            {/* <Route path="/newgod" component={GodCreate} />
            <Route path="/newemblem" component={EmblemCreate} />
            <Route path="/newabode" component={AbodeCreate} /> */}
        </Switch>
</div>);

export default App;