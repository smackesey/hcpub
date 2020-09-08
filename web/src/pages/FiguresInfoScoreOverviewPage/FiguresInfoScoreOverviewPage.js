import FiguresLayout from 'src/layouts/FiguresLayout/FiguresLayout'
import GridLabel from 'src/components/GridLabel/GridLabel'
import GridPlaceholder from 'src/components/GridPlaceholder/GridPlaceholder'

const outerGridStyle = {
  height: '100%',
  display: 'grid',
  gridTemplate: '4% 48% 48% / 4% 48% 48%',
}

const linSimStyle = {
  border: '2px black',
  display: 'grid',
  gridTemplate: '1fr 1fr / 1fr 1fr',
}

const linExpStyle = {
  display: 'grid',
  gridTemplate: '1fr 1fr 1fr / 1fr',
}

// const innerGridStyle = {
//   display: 'grid',
//   gridTemplate: '1fr 1fr / 1fr 1fr',
// }

const FiguresInfoScoreOverviewPage = () => {
  return (
    <FiguresLayout>
      <div style={outerGridStyle}>
        <div />
        <GridLabel>experimental</GridLabel>
        <GridLabel>simulation</GridLabel>
        <GridLabel orientation="vertical">linear</GridLabel>
        <div style={linExpStyle}>
          <GridLabel>real (Fast ICA)</GridLabel>
          <GridLabel>complex (ACMN ICA)</GridLabel>
          <GridLabel>complex w/ demod (ACMN ICA)</GridLabel>
        </div>
        <div style={linSimStyle}>
          <div className="f-flex f-flex-col f-items-center">
            <GridLabel>encoding: pos</GridLabel>
            <img src="/images/lin-sim-enc-pos.png" />
          </div>
          <div className="f-flex f-flex-col f-items-center">
            <GridLabel>encoding: hd</GridLabel>
            <img src="/images/lin-sim-enc-hd.png" />
          </div>
          <div className="f-flex f-flex-col f-items-center">
            <GridLabel>encoding: pos+hd</GridLabel>
            <img src="/images/lin-sim-enc-pos+hd.png" />
          </div>
          <div className="f-flex f-flex-col f-items-center">
            <GridLabel>encoding: pos*hd</GridLabel>
            <img src="/images/lin-sim-enc-pos*hd.png" />
          </div>
        </div>
        <GridLabel orientation="vertical">square</GridLabel>
        <div style={linExpStyle}>
          <GridLabel>real (Fast ICA)</GridLabel>
          <GridLabel>complex (ACMN ICA)</GridLabel>
          <GridLabel>complex w/ demod (ACMN ICA)</GridLabel>
        </div>
        <div style={linSimStyle}>
          <GridLabel>pos</GridLabel>
          <GridLabel>head-dir</GridLabel>
          <GridLabel>pos + head-dir</GridLabel>
          <GridLabel>pos * head-dir</GridLabel>
        </div>
      </div>
    </FiguresLayout>
  )
}

export default FiguresInfoScoreOverviewPage
