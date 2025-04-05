import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import TestPage from "./components/TestPage.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

function App() {
  return (
    <Provider store={store}>
        <TestPage></TestPage>
    </Provider>
  )
}

export default App
