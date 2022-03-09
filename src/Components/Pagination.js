import "./Pagination.css";
import React, { useState } from "react";

const Pagination = ({data, pageSize, siblingArr}) => {
    const [currentPage, setCurrentPage] = useState(1);

    // const siblingArr = [1, 2];
    // let pageSize = 3;

    const startPage = 1;
    const lastPage = Math.ceil(data.length / pageSize);
    const pageNumber = Math.ceil(currentPage / pageSize);

    const onSiblingClick = (event) => {
        setCurrentPage(event.target.innerText * pageSize - pageSize + 1);
        console.log(event.target.innerText);
    };

    const next = () => {
        if (pageNumber < lastPage) {
            setCurrentPage(currentPage + pageSize);
        }
    };

    const prev = () => {
        if (pageNumber > startPage) {
            setCurrentPage(currentPage - pageSize);
        }
    };

    const prevSibling = siblingArr.map((_item, index) => {
        if (pageNumber - siblingArr[index] > 1) {
            return (
                <span className="pages" key={index} onClick={onSiblingClick}>
                    {pageNumber - (index + 1)}
                </span>
            );
        }

        return null;
    });

    const nextSibling = siblingArr.map((_item, index) => {
        if (pageNumber + siblingArr[index] < lastPage) {
            return (
                <span className="pages" key={index} onClick={onSiblingClick}>
                    {pageNumber + (index + 1)}
                </span>
            );
        }

        return null;
    });

    return (
        <div className="container">
            <div className="data">
                <h1 className="main-heading">MY-APP</h1>
                <div>
                    {data
                        .slice(currentPage - 1, currentPage - 1 + pageSize)
                        .map((item, index) => {
                            const { id, content } = item;
                            return (
                                <div className="content" key={index}>
                                    <h3 className="sub-heading">Data-{id}</h3>
                                    <p>{content}</p>
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="controls">
                <h1 className="prev" onClick={prev}>
                    &lt;
                </h1>
                <div className="pageNumber">
                    <span className="pages" onClick={onSiblingClick}>
                        {pageNumber > startPage && startPage}
                    </span>
                    <h1 className="dots">{pageNumber > startPage && "..."}</h1>
                    {prevSibling.reverse()}
                    <span className="pages currentPage">{pageNumber}</span>
                    {nextSibling}
                    <h1 className="dots">{pageNumber < lastPage && "..."}</h1>
                    <span className="pages" onClick={onSiblingClick}>
                        {pageNumber < lastPage && lastPage}
                    </span>
                </div>
                <h1 className="next" onClick={next}>
                    &gt;
                </h1>
            </div>
        </div>
    );
};

export default Pagination;
