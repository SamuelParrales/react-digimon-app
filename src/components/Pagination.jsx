
import ReactPaginate from "react-paginate";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";

export const Pagination = ({ itemsPerPage,totalElements,onClickLink }) => {
    const {isLoading}= useSelector((state)=>state.digimon);

    const pageCount = Math.ceil(totalElements / itemsPerPage);

    const handlePageClick = (event) => {
        onClickLink(event.selected);
    };
    return (
        <ReactPaginate
            className={`pagination ${isLoading?'hidden':''}`}
            previousClassName="pagination__previous"
            previousLinkClassName="pagination__previous-link"
            pageClassName="pagination__page"
            pageLinkClassName="pagination__page-link"
            nextClassName="pagination__next"
            nextLinkClassName="pagination__next-link"
            activeLinkClassName="pagination__page-link--active"
            activeClassName="pagination__page--active"
            disabledLinkClassName="pagination__link--disabled"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

Pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalElements: PropTypes.number.isRequired,
    onClickLink: PropTypes.func.isRequired,
}