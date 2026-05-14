import "@/css/pages/Dashboard.css";

function DashboardPage() {
  return (
    <div className="dashboard-page">

      {/* PAGE TITLE */}
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>결제 운영 현황을 실시간으로 모니터링합니다.</p>
        </div>

        <div className="server-status online">
          <span className="dot"></span>
          PG SERVER ONLINE
        </div>
      </div>

      {/* SUMMARY */}
      <div className="summary-grid">

        <div className="summary-card">
          <div className="card-title">오늘 승인 금액</div>
          <div className="card-value">₩128,450,000</div>
          <div className="card-desc increase">
            +12.4% from yesterday
          </div>
        </div>

        <div className="summary-card">
          <div className="card-title">승인 건수</div>
          <div className="card-value">4,281</div>
          <div className="card-desc increase">
            +8.1% from yesterday
          </div>
        </div>

        <div className="summary-card">
          <div className="card-title">실패 건수</div>
          <div className="card-value error">38</div>
          <div className="card-desc decrease">
            오류 거래 모니터링 필요
          </div>
        </div>

        <div className="summary-card">
          <div className="card-title">취소 요청</div>
          <div className="card-value">124</div>
          <div className="card-desc">
            실시간 취소 처리 중
          </div>
        </div>

      </div>

      {/* CONTENT */}
      <div className="content-grid">

        {/* LEFT */}
        <div className="dashboard-panel large-panel">

          <div className="panel-header">
            <h3>시간대별 거래 현황</h3>
            <button>조회</button>
          </div>

          <div className="fake-chart">
            <div className="bar h80"></div>
            <div className="bar h45"></div>
            <div className="bar h65"></div>
            <div className="bar h90"></div>
            <div className="bar h55"></div>
            <div className="bar h72"></div>
            <div className="bar h40"></div>
            <div className="bar h88"></div>
            <div className="bar h60"></div>
            <div className="bar h76"></div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="dashboard-panel">

          <div className="panel-header">
            <h3>시스템 상태</h3>
          </div>

          <div className="status-list">

            <div className="status-item">
              <span>결제 API</span>
              <span className="status success">정상</span>
            </div>

            <div className="status-item">
              <span>카드 승인 서버</span>
              <span className="status success">정상</span>
            </div>

            <div className="status-item">
              <span>정산 배치</span>
              <span className="status warning">대기</span>
            </div>

            <div className="status-item">
              <span>SMS 서버</span>
              <span className="status success">정상</span>
            </div>

            <div className="status-item">
              <span>가맹점 연동</span>
              <span className="status error">장애</span>
            </div>

          </div>

        </div>

      </div>

      {/* TABLE */}
      <div className="dashboard-panel">

        <div className="panel-header">
          <h3>최근 거래 내역</h3>
          <button>전체보기</button>
        </div>

        <table className="transaction-table">

          <thead>
            <tr>
              <th>거래번호</th>
              <th>주문번호</th>
              <th>결제수단</th>
              <th>금액</th>
              <th>상태</th>
              <th>승인시간</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>TX202605130001</td>
              <td>ORD-10001</td>
              <td>CARD</td>
              <td>₩12,000</td>
              <td>
                <span className="badge success">
                  승인
                </span>
              </td>
              <td>2026-05-13 09:21:11</td>
            </tr>

            <tr>
              <td>TX202605130002</td>
              <td>ORD-10002</td>
              <td>KAKAO</td>
              <td>₩55,000</td>
              <td>
                <span className="badge error">
                  실패
                </span>
              </td>
              <td>2026-05-13 09:24:51</td>
            </tr>

            <tr>
              <td>TX202605130003</td>
              <td>ORD-10003</td>
              <td>CARD</td>
              <td>₩7,500</td>
              <td>
                <span className="badge cancel">
                  취소
                </span>
              </td>
              <td>2026-05-13 09:31:44</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DashboardPage;