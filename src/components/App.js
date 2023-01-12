import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "../components/Header";
import ArticleList from "../components/ArticleList";
import Articles from "../components/Articles";

function App() {
  return (
    <div className="App">
      <Header title={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
      <Articles posts={blogData.posts} />
    </div>
    
  );
}

export default App;