import React from "react";
import Articles from "../components/Articles";

function ArticleList({ posts}){

    return (
    <main>{
    posts.map((post, index) => {
    console.log(post)
    return (
        <Articles key={index} title={post.title} date={post.date} preview={post.preview} time={post.minutes} />
        
    )
   })}
    </main>
    );
}
export default ArticleList;