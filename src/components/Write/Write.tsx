import React from "react";
import { Redirect } from "react-router-dom";

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement;
  titleInput: HTMLInputElement;
  postInput: HTMLInputElement;
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

class Write extends React.Component {
  state = {
    toPostPage: false,
  };
  constructor(props: any) {
    super(props);

    // this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //   onChange = (e: React.FormEvent<HTMLInputElement>): void => {
  //     this.setState({ text: e.currentTarget.value });
  //   };

  async onSubmit(event: React.SyntheticEvent<UsernameFormElement>) {
    event.preventDefault();
    const username: string = event.currentTarget.elements.usernameInput.value;
    const title: string = event.currentTarget.elements.titleInput.value;
    const post: string = event.currentTarget.elements.postInput.value;

    await fetch("https://awesome0worker.yirenzho.workers.dev/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        title: title,
        content: post,
      }),
    });

    // Redirect to the posts page
    this.setState(() => ({ toPostPage: true }));
  }
  render() {
    if (this.state.toPostPage) return <Redirect to="/posts" />;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username:
            <input id="usernameInput" type="text" />
          </label>
        </div>
        <div>
          <label>
            Title:
            <input id="titleInput" type="text" />
          </label>
        </div>
        <div>
          <label>
            Content:
            <input id="postInput" type="text" />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Write;
