import axios from "axios";
import { createContext, useEffect, useState } from "react";

const REPOSITORY_NAME:string = 'rafaelrossales';

const TOKEN :string = import.meta.env.VITE_API_SECRET;

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',  // Base URL for GitHub API
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    },
  });

export type TRepository = {
    avatar_url:string;
    name:string;
    bio:string;
    followers:number;
    profileRepository:string;
    url:string;
    login:string;
    tag:string
}

export type TIssue = {
    title: string;
    body: string;
    number?: number;
    url: string;
    id?:number
}


export interface IIssues{
    total_count: number;
    incomplete_results: boolean;
    items: TIssue[];
    issue: any;
}

export const defaultRepository =  {
    avatar_url:'',
    name:'',
    bio:'',
    followers:0,
    profileRepository:'',
    url:'',
    login:'',
    tag:'',
} as TRepository


interface RepositoryContextType{
    repository:TRepository;
    issues:IIssues;
    getIssue:(id:number)=> Promise<any>,
    getIssues:(search?:string)=>Promise<void>
    getRepository:()=>Promise<void>
}

interface RepositoryProviderProps{ children:React.ReactNode; }

export const RepositoryContext = createContext( {} as RepositoryContextType);

export function RepositoryProvider({children}:RepositoryProviderProps){

    const [repository, setRepository] = useState<TRepository>(defaultRepository);
    const [issues, setIssues] = useState<IIssues>({ total_count: 0, incomplete_results: false, items: [], issue: null });

    async function getRepository():Promise<void>{
        const response = await axiosInstance.get(`users/${REPOSITORY_NAME}`);
        const { data } = response;
        setRepository(data);
    }
    
    async function getIssues(search?:string):Promise<void>{
        let url:string = `search/issues?q=Test%20repo:${REPOSITORY_NAME}/issues`;
        if(search!=undefined) url = `search/issues?q=Test%20${search}%20repo:${REPOSITORY_NAME}/issues`;
        const response = await axiosInstance.get(url);
        const { data } = response;
        console.log(data)
        setIssues(data)
    }

    async function getIssue(id:number):Promise<any>{
        const response = await axiosInstance.get(`repos/RafaelRossales/issues/issues/${id}`);
        const { data } = response;
        return data;
    }

    useEffect(()=>{
        getRepository();
        getIssues();
    },[]);

    return(
        <RepositoryContext.Provider value={{ repository, issues, getIssue,getIssues , getRepository }}>
            {children}
        </RepositoryContext.Provider>
    )
}