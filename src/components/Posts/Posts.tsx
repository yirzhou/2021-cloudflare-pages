import React from "react";

import Post from "./Post/Post";

import IPost from "../../interfaces/IPost";

interface PostsState {
  posts: Array<IPost>;
  error: Error | null;
  showSpinner: boolean;
}

class Posts extends React.Component {
  state: PostsState = {
    posts: [],
    error: null,
    showSpinner: true,
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://awesome0worker.yirenzho.workers.dev/posts/",
        {
          method: "GET",
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          // },
        }
      );
      console.log(response);

      const posts = await response.json();

      if (posts) {
        this.setState({
          posts: posts,
          error: null,
          showSpinner: false,
        });
      }
    } catch (err) {
      this.setState({ error: err, showSpinner: false });
    }
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (nextState !== this.state) return true;
    return false;
  }

  render() {
    let posts: any = [];

    if (!this.state.error && this.state.posts.length) {
      posts = this.state.posts.map((post, idx) => {
        console.log(post);
        return (
          <Post
            title={post.title}
            username={post.username}
            content={post.content}
            key={idx}
          ></Post>
        );
      });
    }

    return <div>{posts}</div>;
  }
}

export default Posts;
