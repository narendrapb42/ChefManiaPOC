import './output.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import Recipes from './Pages/Recipes';
import BlogPage from './Pages/BlogPage';
import CookForm from './Pages/CookForm';
import Instructions from './Pages/Instructions';
import ProtectedRoute from './Pages/ProtectedRoute';

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      index:true,
      element:<SignUp/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/home',
      element:<ProtectedRoute><HomePage/></ProtectedRoute>,
    },
    {
      path:'/recipes',
      element:<ProtectedRoute><Recipes/></ProtectedRoute>
    },
    {
      path:'/blog',
      element:<ProtectedRoute><BlogPage/></ProtectedRoute>
    },
    {
      path:'/cookform',
      element:<ProtectedRoute><CookForm/></ProtectedRoute>
    },
    {
      path:'/instructions/:recipeName',
      element:<ProtectedRoute><Instructions/></ProtectedRoute>
    }
  ])
  return (
    <RouterProvider router={routes}>
      <div className="App">
        
      </div>
    </RouterProvider>
  );
}

export default App;
