import React from "react";

function Comments() {
  return (
    <div>
      내용 : <input type="text" />
      <button>댓글 작성</button>
      <section
        style={{
          backgroundColor: "#5a7f6d",
          weidth: "100px",
          height: "130px",
          padding: "30px",
          margin: "30px",
          color: "white",
          fontSize: "30px",
        }}
      >
        재영 : 그냥 그럭저럭 잘 살고 있습니다 정말~
      </section>
    </div>
  );
}

export default Comments;
