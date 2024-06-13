import Post from "../components/post";
import { Layout } from "./layout/layout";

export const routes = [
    {
        layout:Layout,
        routes:[
            {
                name:'post',
                title:'post',
                component: Post,
                path:'/post/:id',
                exact:true,
                isPublic:true
            }
        ]
    }
]