import React, {useState} from 'react';


export default function Pagination({data, RenderComponent, pagesShown, dataPerPage}){

    const [pages] = useState(Math.round(data.length / dataPerPage));
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
      
      const startIndex = (currentPage * dataPerPage) - dataPerPage;
      const endIndex = startIndex + dataPerPage;
      
      return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pagesShown) * pagesShown;
        return new Array(pagesShown).fill().map((_, idx) => start + idx + 1);
    };

    return(
      <div className=' '>

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
        <div className="flex flex-row justify-between text-xl my-10">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage <= 1 ? 'hidden' : 'bg-gray-900 text-white px-4 border-black border-2'}`}
          >
            prev
          </button>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={` ${currentPage === item ? 'bg-[#00a2ff]/80 rounded-full border-black border-2' : 'bg-gray-900 text-white rounded-full border-black border-2'} py-2`}
            >
              <span className='mx-4 '>{item}</span>
            </button>
          ))}

          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage >= pages ? 'hidden' : 'bg-gray-900 text-white px-4 border-black border-2'}`}
          >
            next
          </button>
        </div>
      </div>
    )
}