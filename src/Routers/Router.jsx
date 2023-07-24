import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
// import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import NotFoundPage from "../Pages/NotFoundPage/NotFound";
import AdmissionForm from "../Pages/AdmissionForm/AdmissionForm";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
            path:'myCollege',
            element:<MyCollege></MyCollege>
        },
        {
            path:'colleges',
            element:<Colleges></Colleges>
        },
        {
            path:'admission',
            element:<Admission></Admission>
        },
       
        {
            path:'admissionform',
            element:<AdmissionForm></AdmissionForm>
        },
        {
            path: '*',
            element:<NotFoundPage></NotFoundPage>
          }
      ]
    },
  ]);