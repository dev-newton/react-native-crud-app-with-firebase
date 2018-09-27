 import React from 'react';
 import { Scene, Router, Actions } from 'react-native-router-flux';
 import LoginForm from './components/LoginForm';
 import EmployeeList from './components/EmployeeList';
 import EmployeeCreate from './components/EmployeeCreate';
 import EmployeeEdit from './components/EmployeeEdit';

 const RouterComponent = () => {
   return (
     <Router >
      <Scene hideNavBar>

        <Scene key="auth">
          <Scene
              component={LoginForm}
              title="Please Login"
          />
        </Scene>

        <Scene key="main">
          <Scene
              onRight={() => Actions.employeeCreate()}
              rightTitle="Add"
              key="employeeList"
              component={EmployeeList}
              title="Employees"
              initial
          />
          <Scene
              key="employeeCreate"
              component={EmployeeCreate}
              title="Add Employee"
          />
          <Scene
              key="employeeEdit"
              component={EmployeeEdit}
              title="Edit Employee"
          />
        </Scene>

       </Scene>
     </Router>
   );
 };


 export default RouterComponent;
