import React, { useContext } from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Login, UserInfo } from './components';
import { GlobalContext } from './GlobalContextProvider';

const PublicChildRoutes = (routes) =>
  routes.map(({ children, path, component: Component }) =>
    children ? (
      // Route item with children
      children.map(({ path: subPath, component: SubComponent }) => (
        <Route
          key={subPath}
          path={subPath}
          exact
          render={(props) => (
            <div>
              <SubComponent {...props} />
            </div>
          )}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={path}
        path={path}
        exact
        render={(props) => (
          <div>
            <Component {...props} />
          </div>
        )}
      />
    )
  );

const PrivateChildRoutes = (routes, user) => {
  return (
    <>
      {routes.map(({ children, path, component: Component }) =>
        children ? (
          // Route item with children
          children.map(({ path: subPath, component: SubComponent }) => (
            <Route
              key={subPath}
              path={subPath}
              exact
              render={(props) =>
                // eslint-disable-next-line no-undef
                user ? (
                  <div>
                    <SubComponent {...props} />
                  </div>
                ) : (
                  <Redirect to='/' />
                )
              }
            />
          ))
        ) : (
          // Route item without children
          <Route
            key={path}
            path={path}
            exact
            render={(props) =>
              // eslint-disable-next-line no-undef
              user ? (
                <div>
                  <Component {...props} />
                </div>
              ) : (
                <Redirect to='/' />
              )
            }
          />
        )
      )}
    </>
  );
};

const privateRoutes = [
  {
    id: 'home',
    path: '/home',
    component: UserInfo,
    children: null,
  },
];
const publicRoutes = [
  {
    id: 'login',
    path: '/',
    component: Login,
    children: null,
  },
];

const Routes = () => {
  const { globalState } = useContext(GlobalContext);
  return (
    <Router>
      <Switch>
        {PublicChildRoutes(publicRoutes)}
        {PrivateChildRoutes(privateRoutes, globalState.user)}
        <Route
          render={() => (
            <div>
              <h1>NOT FOUND 404</h1>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
