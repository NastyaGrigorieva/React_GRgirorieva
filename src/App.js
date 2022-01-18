import {Route, Routes} from "react-router-dom";

import "./components/Layout/Layout.module.css"
import {PostPage} from "./pages/PostsPage/PostPage";
import {UserPage} from "./pages/UserPage/UserPage";
import {Layout} from "./components/Layout/Layout";
import {UserDetails} from "./components/UserDetails/UserDetails";

export const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<UserPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserDetails/>}/> // todo
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<PostPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

