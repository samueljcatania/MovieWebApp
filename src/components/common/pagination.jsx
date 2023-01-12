import React from "react";

const Pagination = props => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props
    const pageCount = Math.ceil(itemsCount / pageSize)
    if (pageCount === 1) return null;
    const pages = [...Array(pageCount).keys()].map(x => ++x)

    return (<nav aria-label="Movie Database Navigation">
        <ul className="pagination">
            {pages.map(page => (<li
                className={page === currentPage ? "page-item active" : "page-item"}
                key={page}>
                <a
                    className="page-link"
                    style={{cursor: "pointer"}}
                    onClick={() => onPageChange(page)}
                >{page}</a>
            </li>))}
        </ul>
    </nav>);

}

export default Pagination;

