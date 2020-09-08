import GridLabel from 'src/components/GridLabel'

const GridPlaceholder = ({ children }) => {
  return (
    <div className="f-flex f-flex-col f-items-center">
      <GridLabel>{children}</GridLabel>
      <div className="f-bg-gray-500" style={{height: '300px'}} />
    </div>
  )
}

export default GridPlaceholder
