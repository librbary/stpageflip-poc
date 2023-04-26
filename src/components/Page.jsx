import React from "react";

const Page = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="page" ref={ref}>
        <h1>Page Header</h1>
        <p>{props.children}</p>
        <p>{props.number}</p>
      </div>
    </>
  );
});

export default Page;
