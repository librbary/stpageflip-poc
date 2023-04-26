import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import { useRef, useState } from "react";
import PageCover from "./PageCover";
import Page1 from "../assets/01.jpg";
import Page2 from "../assets/02.jpg";
import Page3 from "../assets/03.jpg";
import Page4 from "../assets/04.jpg";
import Page5 from "../assets/05.jpg";
import Page6 from "../assets/06.jpg";

const MyBook = (props) => {

  const book = useRef();
  const [page, setPage] = useState("0")
  const [totalPage, setTotalPage] = useState("0")

  return (
    <>
      <div>
        <HTMLFlipBook
          width={550}
          height={650}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          showCover={true}
          flippingTime={1000}
          style={{ margin: "10px auto" }}
          maxShadowOpacity={0.5}
          className="album-web"
          ref={book}
        >
          <PageCover>try</PageCover>
          <PageCover>it</PageCover>
          <Page number="1">
            <hr></hr>
            <img src={Page1} alt="page1" width={550} height={500} />
          </Page>
          <Page number="2">
            <hr></hr>
            <img src={Page2} alt="page2" width={550} height={500} />
          </Page>
          <Page number="3">
            <hr></hr>
            <img src={Page3} alt="page3" width={550} height={500} />
          </Page>
          <Page number="4">
            <hr></hr>
            <img src={Page4} alt="page4" width={550} height={500} />
          </Page>
          <Page number="5">
            <hr></hr>
            <img src={Page5} alt="page5" width={550} height={500} />
          </Page>
          <Page number="6">
            <hr></hr>
            <img src={Page6} alt="page6" width={550} height={500} />
          </Page>
          <PageCover>byee</PageCover>
          <PageCover>see you</PageCover>
        </HTMLFlipBook>
        <br></br>
        <br></br>
        <div className="controller">
          <button
            className="btn"
            onClick={() => {
                setPage(book.current.pageFlip().getCurrentPageIndex())
                setTotalPage(book.current.pageFlip().getPageCount())
                book.current.pageFlip().flipPrev()
            }}
          >
            Previous
          </button>
          <span className="pge">[{page}-{totalPage}]</span>
          <button
            className="btn"
            onClick={() => {
                setPage(book.current.pageFlip().getCurrentPageIndex())
                setTotalPage(book.current.pageFlip().getPageCount())
                book.current.pageFlip().flipNext()
            }}
          >
            Next
          </button>
          <button
            className="btn"
            onClick={() => book.current.pageFlip().flip(5)}
          >
            Jump to 5th Page
          </button>
        </div>
      </div>
    </>
  );
};

export default MyBook;
