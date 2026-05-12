function Grid({ data }) {

  return (
    <div className="grid-wrapper">

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
          </tr>
        </thead>

        <tbody>

          {
            data.length === 0
              ? (
                <tr>
                  <td colSpan="2">
                    데이터가 없습니다.
                  </td>
                </tr>
              )
              : (
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                  </tr>
                ))
              )
          }

        </tbody>

      </table>

      <div className="paging-area">
        Paging
      </div>

    </div>
  );
}

export default Grid;