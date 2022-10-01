import axios from "axios";
import { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/posts";
const PostPage = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(API);
      setPosts(data);
    } catch (e) {
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <div className="d-flex my-5 justify-content-between">
        <div />
      </div>
      <table striped className="text-start">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostPage;