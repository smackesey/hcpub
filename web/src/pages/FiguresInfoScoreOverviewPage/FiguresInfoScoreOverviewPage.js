import FiguresLayout from 'src/layouts/FiguresLayout/FiguresLayout'
import GridLabel from 'src/components/GridLabel/GridLabel'
import GridPlaceholder from 'src/components/GridPlaceholder/GridPlaceholder'
import PlotCard from 'src/components/PlotCard'

const outerGridStyle = {
  // height: '100%',
  display: 'grid',
  gridTemplate: 'auto 12fr 12fr / auto 12fr 12fr',
}

const FiguresInfoScoreOverviewPage = () => {
  return (
    <FiguresLayout>
      <div className="f-p-2 f-gap-2" style={outerGridStyle}>
        <div />
        <GridLabel>experimental</GridLabel>
        <GridLabel>simulation</GridLabel>
        <GridLabel orientation="vertical">linear</GridLabel>
        <div className="f-grid f-grid-rows-3 f-grid-cols-1 f-gap-2">
          <GridPlaceholder heading="real (Fast ICA)" />
          <GridPlaceholder heading="complex (ACMN ICA)" />
          <GridPlaceholder heading="complex w/ demod (ACMN ICA)" />
        </div>
        <div className="f-grid f-grid-cols-2 f-grid-rows-2 f-gap-2">
          <PlotCard heading="encoding: pos">
            <img src="/images/lin-sim-enc-pos.png" />
          </PlotCard>
          <PlotCard heading="encoding: hd">
            <img src="/images/lin-sim-enc-hd.png" />
          </PlotCard>
          <PlotCard heading="encoding: pos+hd">
            <img src="/images/lin-sim-enc-pos+hd.png" />
          </PlotCard>
          <PlotCard heading="encoding: pos*hd">
            <img src="/images/lin-sim-enc-pos*hd.png" />
          </PlotCard>
        </div>
        <GridLabel orientation="vertical">square</GridLabel>
        <div className="f-grid f-grid-rows-3 f-grid-cols-1 f-gap-2">
          <GridPlaceholder heading="real (Fast ICA)" />
          <GridPlaceholder heading="complex (ACMN ICA)" />
          <GridPlaceholder heading="complex w/ demod (ACMN ICA)" />
        </div>
        <div className="f-grid f-grid-cols-2 f-grid-rows-2 f-gap-2">
          <GridPlaceholder heading="enc: pos" />
          <GridPlaceholder heading="enc: hd" />
          <GridPlaceholder heading="enc: pos+hd" />
          <GridPlaceholder heading="enc: pos*hd" />
        </div>
      </div>
    </FiguresLayout>
  )
}

export default FiguresInfoScoreOverviewPage
