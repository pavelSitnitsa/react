import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error"
import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";
import Login from "../pages/Login";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
              <Route path="/about" element={<About />} />,
       <Route path="/posts" element={<Posts />}/>,
       <Route path="/posts/:id" element={<PostIdPage />} />,
       <Route path="/error" element={<Error />} />
       <Route path="/*" element={<Navigate to="/posts" replace />} />
            </Routes>
            :
            <Routes>
               <Route path="/login" element={<Login/>} /> 
               <Route path="/*" element={<Navigate to="/login" replace />} /> 
             </Routes> 
    );
};

export default AppRouter;