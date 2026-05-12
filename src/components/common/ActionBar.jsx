function ActionBar({
  title,

  onSelect,
  onAdd,
  onUpdate,
  onDelete,
  onExcel
}) {

  return (
    <div className="action-bar">

      <h2>{title}</h2>

      <div className="action-buttons">

        <button onClick={onSelect}>
          조회
        </button>

        <button onClick={onAdd}>
          추가
        </button>

        <button onClick={onUpdate}>
          수정
        </button>

        <button onClick={onDelete}>
          삭제
        </button>

        <button onClick={onExcel}>
          Excel
        </button>

      </div>

    </div>
  );
}

export default ActionBar;