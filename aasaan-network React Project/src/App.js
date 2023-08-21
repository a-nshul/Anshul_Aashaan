import Layout from "./Layout";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import "./static/css/public.css"
import "./static/css/private.css"
import "./static/css/form.css"
import "./App.css";

function App() {
    return (
        <>
            <Layout />
            <ToastContainer />
        </>
    );
}

export default App;
