import {Route, Routes} from "react-router-dom";

import "./components/Layout/Layout.module.css"
import {PostPage} from "./pages/PostsPage/PostPage";
import {UserPage} from "./pages/UserPage/UserPage";
import {Layout} from "./components/Layout/Layout";
import {UserDetails} from "./components/UserDetails/UserDetails";
import {PostDetails} from "./components/PostDetails/PostDetails";
import {PostsForUser} from "./components/PostsForUser/PostsForUser"
import {Comments} from "./components/Comments/Comments";
import {AlbumPage} from "./pages/AlbumPage/AlbumPage";
import {Photos} from "./components/Photos/Photos";

export const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<UserPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<PostsForUser/>}/>
                            <Route path={'albums'} element={<AlbumPage/>}>
                                <Route path={':albumId/photos'} element={<Photos/>}/>
                            </Route>
                        </Route>
                    </Route>


                    <Route path={'/posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<Comments/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </>
    );
}

