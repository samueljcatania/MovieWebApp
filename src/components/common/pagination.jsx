import React from "react";

const Pagination = props => {
    const {itemsCount, pageSize} = props
    const pageCount = Math.ceil(itemsCount / pageSize)
    if (pageCount === 1) return null;
    const pages = [...Array(pageCount).keys()].map(x => ++x)

    return (<nav aria-label="Movie Database Navigation">
        <ul className="pagination">
            {pages.map(page => (<li
                className="page-item"
                key={page}>
                <a className="page-link">{page}</a>
            </li>))}
        </ul>
    </nav>);

}

export default Pagination;

