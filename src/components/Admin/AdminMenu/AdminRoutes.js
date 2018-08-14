import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import {AdminProfile} from "../AdminProfile";
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AdminDist from '../AdminDist/AdminDist';
import AdminPedidos from '../AdminPedidos/AdminPedidos';
import AdminProducts from "../AdminProducts/AdminProducts";
import NewDist from "../AdminDist/NewDist";




class AdminRoutes extends Component{

  render(){
    return(
      <Switch>
        <Route exact path='/admin' component={AdminDashboard} />
        <Route exact path='/admin/profile' component={AdminProfile} />
        <Route exact path='/admin/dist' component={AdminDist} />
          <Route exact path='/admin/dist/new' component={NewDist} />
        <Route exact path='/admin/pedidos' component={AdminPedidos} />
        <Route exact path='/admin/dashboard' component={AdminDashboard} />
        <Route exact path='/admin/products' component={AdminProducts} />
      </Switch>
    )
  }
}

export default AdminRoutes;