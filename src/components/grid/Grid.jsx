import Paging from '@/components/grid/Paging';

function Grid({
  columns = [],
  data = [],

  currentPage = 1,
  totalCount = 0,
  pageSize = 10,

  onPageChange
}) {

  return (
    <div className="grid-wrapper">

      <table>

        <thead>
          <tr>

            {
              columns.map((column) => (
                <th key={column.field}>
                  {column.headerName}
                </th>
              ))
            }

          </tr>
        </thead>

        <tbody>

          {
            data.length === 0
              ? (
                <tr>
                  <td colSpan={columns.length}>
                    데이터가 없습니다.
                  </td>
                </tr>
              )
              : (
                data.map((row, rowIndex) => (
                  <tr key={row.id || row.userId || rowIndex}>

                    {
                      columns.map((column) => (
                        <td key={column.field}>
                          {row[column.field]}
                        </td>
                      ))
                    }

                  </tr>
                ))
              )
          }

        </tbody>

      </table>

      <Paging
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />

    </div>
  );
}

export default Grid;