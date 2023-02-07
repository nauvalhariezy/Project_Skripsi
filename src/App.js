import { Route, Routes } from 'react-router-dom';
import './App.css';
import BasicLayout from './components/BasicLayout';
import routes from './routes';

function App() {
  return (
    <div className="bg-main-dark-bg">
      <Routes>
        <Route element={<BasicLayout />}>
          {routes.map((r, index) => (
            <Route
              key={index}
              path={r.path}
              exact={r.exact}
              element={(r.element)}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
