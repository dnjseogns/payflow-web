function Breadcrumb({ items = [] }) {

  return (
    <div className="breadcrumb">

      {items.map((item, index) => (
        <span key={index}>

          {item}

          {index < items.length - 1 && (
            <span className="breadcrumb-separator">
              {' > '}
            </span>
          )}

        </span>
      ))}

    </div>
  );
}

export default Breadcrumb;