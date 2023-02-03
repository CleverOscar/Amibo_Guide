import React, {useState} from 'react';


export default function Pagination({data, RenderComponent, pageLimit, dataLimit}){

    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
      setCurrentPage((currentPage) => currentPage + 1);
    }

    function goToPreviousPage() {
      setCurrentPage((currentPage) => currentPage - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
      
      const startIndex = (currentPage * dataLimit) - dataLimit;
      const endIndex = startIndex + dataLimit;
      
      return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return(
      <div>

        {/* show the posts, 10 posts at a time */}
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} />
          ))}
        </div>

        {/* show the pagiantion
            it consists of next and previous buttons
            along with page numbers, in our case, 5 page
            numbers at a time
        */}
        <div className="flex flex-row justify-around text-2xl">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage <= 1 ? 'hidden' : ''}`}
          >
            prev
          </button>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={` paginationItem ${currentPage === item ? ' px-3 py-2 bg-gray-500/30 rounded-full' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}

          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage >= pages ? 'hidden' : ''}`}
          >
            next
          </button>
        </div>
      </div>
    )
}