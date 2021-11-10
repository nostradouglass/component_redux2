import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const CommentsList = () => {
  const [term, setTerm] = useState("");
  const { searchComments } = useActions();

  const { data, loading, error } = useTypedSelector((state) => state.comments);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchComments(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading</h3>}
      <ul style={{ listStyle: "none" }}>
        {!error &&
          !loading &&
          data.map((comment) => {
            return (
              <li key={comment.id}>
                <div>name: {comment.name}</div>
                <div>email: {comment.email}</div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CommentsList;
