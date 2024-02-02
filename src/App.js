import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
// import '../src/assets/font/fontawesome-free-6.4.0-web/css/all.css'

import { publicRoutes } from './routes/index'
import { DefaultLayout } from './layouts/DefaultLayout';
import {useSelector} from "react-redux";
function App() {
  const lang = useSelector(state => state.lang);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
              // ádad
            publicRoutes.map((route, index) => {
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              }

              const Page = route.component;
              return (
                <Route key={index}
                  path={route.path}
                  element={
                    <Layout><Page /></Layout>
                  }>
                </Route>
              );
            })};
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
