import {Route, Routes} from "react-router-dom";

import "./components/Layout/Layout.module.css"
import {PostPage} from "./pages/PostsPage/PostPage";
import {UserPage} from "./pages/UserPage/UserPage";
import {Layout} from "./components/Layout/Layout";
import {UserDetails} from "./components/UserDetails/UserDetails";
import {Post} from "./components/Post/Post";
import {PostDetails} from "./components/PostDetails/PostDetails";
import {Posts} from "./components/Posts/Posts";

export const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<UserPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<Posts/>}/> // todo
                        </Route>
                    </Route>

                    <Route path={'/posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'posts'} element={<Post/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    )
        ;
}

