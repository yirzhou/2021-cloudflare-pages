import IPost from "../../../interfaces/IPost";

const post = (props: IPost) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <i>
        <h4>Author: {props.username}</h4>
      </i>
      <div>
        <p>{props.content}</p>
      </div>
      <br></br>
    </div>
  );
};

export default post;
