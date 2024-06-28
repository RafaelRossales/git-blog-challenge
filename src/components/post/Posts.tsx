import { TIssue } from '@context/RepositoryContext';
import { NoPostsFound, PostsSection } from '../content/style';
import {Card} from '@components/cards/';

interface PostProps{
    posts: TIssue[];
}

function Post({ posts }:PostProps){
    return (
        <PostsSection>
            {posts.length > 0 ?(
                posts.map((data: TIssue, index: number) => (
                    <Card 
                        body={data.body} 
                        title={data.title} 
                        url={data.url} 
                        key={index} 
                        id={data.number} 
                    />
                ))
            ):(
              <NoPostsFound>
                <p>Nenhum post encontrado.</p>
            </NoPostsFound>  
            )}
        </PostsSection>
    );
}

export default Post;
