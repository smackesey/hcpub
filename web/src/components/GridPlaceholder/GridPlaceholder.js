import PlotCard from 'src/components/PlotCard'
import { GRID_CELL_HEIGHT } from 'src/util'

const GridPlaceholder = ({ heading }) => {
  return (
    <PlotCard heading={heading}>
      <div className="f-bg-gray-600 f-h-full" />
    </PlotCard>
  )
}

export default GridPlaceholder
