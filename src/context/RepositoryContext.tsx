import axios from "axios";
import { createContext, useEffect, useState } from "react";

const REPOSITORY_NAME:string = 'rafaelrossales';

export type TRepository = {
    profileImg:string;
    profileName:string;
    profileDescription:string;
    profileFollowers:number;
    profileRepository:string;
    profileLink:string;
    profileLinkText:string;
}

export type TIssue = {
    title: string;
    body: string;
    number: number;
    url: string;
    id?:number
}


export interface IIssues{
    total_count: number;
    incomplete_results: boolean;
    items: TIssue[];
    issue: any;
}


interface RepositoryContextType{
    repository:TRepository[];
    issues:IIssues;
    getIssue:(id:number)=> Promise<any>
}

interface RepositoryProviderProps{
    children:React.ReactNode;
}


export const RepositoryContext = createContext( {} as RepositoryContextType);

export function RepositoryProvider({children}:RepositoryProviderProps){

    const [repository, setRepository] = useState<TRepository[]>([]);
    const [issues, setIssues] = useState<IIssues>({});
    const [issue, setIssue] = useState<any>(null);



    async function getRepository():Promise<void>{
        const response = await axios.get(`https://api.github.com/users/${REPOSITORY_NAME}`);
        const { data } = response;
        console.log('d',data);
        setRepository(data);
    }

    async function getIssues(issueName:string):Promise<void>{
        const response = await axios.get(`https://api.github.com/search/issues?q=${issueName}%20repo:${REPOSITORY_NAME}/issues`);
        const { data } = response;
        console.log(response);
        setIssues(data)
    }

    async function getIssue(id:number):Promise<any>{
        const response = await axios.get(`https://api.github.com/repos/RafaelRossales/issues/issues/${id}`);
        const { data } = response;
        return data
    }

    useEffect(()=>{
        getRepository();
        getIssues('Test');
    },[]);

    return(
        <RepositoryContext.Provider value={{repository, issues, getIssue}}>
            {children}
        </RepositoryContext.Provider>
    )
}

// https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge

//https://api.github.com/search/issues?q=Dynamic%20typing%20repo:daltonmenezes/test


//https://api.github.com/search/issues?q=Test%20repo:rafaelrossales/issues

// https://api.github.com/repos/rafaelrossales/issues/1 


// https://api.github.com/repos/rafaelrossales/Test/issues/1

// https://api.github.com/repos/RafaelRossales/issues/issues/1


// https://api.github.com/repos/RafaelRossales/issues/issues/3