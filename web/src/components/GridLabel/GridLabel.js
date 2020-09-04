const GridLabel = ({ orientation = 'horizontal', children }) => {
  if (orientation == 'horizontal') {
    return (
      <div className="f-flex f-justify-center f-items-center">{children}</div>
    )
  } else if (orientation == 'vertical') {
    return (
      <div className="f-flex f-flex-col f-justify-center f-items-center">
        <div className="f-text-vertical-up">{children}</div>
      </div>
    )
  }
}

export default GridLabel
