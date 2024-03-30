import React, { ComponentType, FunctionComponent, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './components/routes';
import DefaultLayout, { DefaultLayoutProps } from './components/Layout/DefaultLayout';

interface RouteWithLayout {
  path: string;
  component: ComponentType<any>;
  layout?: ComponentType<any>;
}

function App() {
  return (
    <div className='px-[50px] flex justify-center'>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route: RouteWithLayout, index: number) => {
              const Page = route.component as ComponentType<any>;
              let Layout: FunctionComponent<DefaultLayoutProps> = DefaultLayout;
              if (route.layout) {
                Layout = route.layout as FunctionComponent<DefaultLayoutProps>;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
