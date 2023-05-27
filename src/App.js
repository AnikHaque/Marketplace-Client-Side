import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import store from "./app/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App bg-slate-50  mx-auto dark:bg-black dark:text-[#0056F7]  overflow-hidden">
      <ToastContainer />
     <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

// check out my client side

export default App;
