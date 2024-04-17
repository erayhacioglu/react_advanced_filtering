import ReactPaginate from "react-paginate";

const PaginationComp = ({ pageCount, onPageChange }) => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <ReactPaginate
        nextLabel=">"
        initialPage={0}
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginationComp;
