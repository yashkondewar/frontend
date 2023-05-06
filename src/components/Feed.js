import React from "react";
import QuoraBox from "./QuoraBox";
import "./css/Feed.css";
import Post from "./Post";
function Feed() {
  return (
    <div className="feed">
      <QuoraBox />
      {/* {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))} */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
