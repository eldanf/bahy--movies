import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination({getPage , pageCount}) {

  const handelPageClick = (data) =>{
      // console.log(data.selected+1);
      getPage(data.selected+1)
  }

  return (
   <>
       <ReactPaginate
        breakLabel="..."
        nextLabel="التالى >"
        onPageChange= {handelPageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< السابق"

        containerClassName = {'pagination justify-content-center'}
        pageClassName = {'page-item'}
        pageLinkClassName = {'page-link'}

        nextClassName = {'page-item'}
        nextLinkClassName = {'page-link'}

        previousClassName = {'page-item'}
        previousLinkClassName = {'page-link'}

        breakClassName = {'page-item'}
        breakLinkClassName = {'page-link'}

        activeClassName = {'active'}
      />
   </>
  )
}

export default Pagination