import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelpPage from './pages/HelpPage';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import TodoItemDetail from "./pages/TodoItemDetail";
import { Provider } from "react-redux";
import { store } from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './pages/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <TodoList />
    },
    {
      path: "/help",
      element: <HelpPage />
    },
    {
      path: "/done",
      element: <DoneList />
    },
    {
      path: "/done/:id",
      element: <TodoItemDetail />
    }
  ]
}, {
  path: "/help",
  element: <HelpPage />
}])
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
