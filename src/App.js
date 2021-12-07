import '@fontsource/roboto';
import 'normalize.css';
import './style.css'
import { BrowserRouter } from "react-router-dom";
import DigitalWindModule from "./components/digital-wind-module/DigitalWindModule";
import AdminModule from "./components/admin-module/AdminModule";

function App() {
  if(/\/digital-wind\/admin/.test(window.location.pathname)) require('../node_modules/bootstrap/dist/css/bootstrap.css');
  return (
    <BrowserRouter>
    { /\/digital-wind\/admin/.test(window.location.pathname) ?  <AdminModule /> : <DigitalWindModule/>}
    </BrowserRouter>
  );
}

export default App;
