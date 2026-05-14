function Paging({
  currentPage = 1,
  totalCount = 0,
  pageSize = 10,

  onPageChange
}) {

  const totalPage =
    Math.ceil(totalCount / pageSize);

  const pageNumbers = [];

  for(let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paging-area">

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        이전
      </button>

      {
        pageNumbers.map((page) => (
          <button
            key={page}
            className={
              currentPage === page
                ? 'active'
                : ''
            }
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))
      }

      <button
        disabled={currentPage === totalPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        다음
      </button>

    </div>
  );
}

export default Paging;