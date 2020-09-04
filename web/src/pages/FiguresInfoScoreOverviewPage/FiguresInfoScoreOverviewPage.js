import FiguresLayout from 'src/layouts/FiguresLayout/FiguresLayout'
import HorizontalGridLabel from 'src/components/HorizontalGridLabel/HorizontalGridLabel'
import GridLabel from 'src/components/GridLabel/GridLabel'

const outerGridStyle = {
  height: '100%',
  display: 'grid',
  gridTemplate: '4% 48% 48% / 4% 48% 48%',
}

const quadrantStyle = {
  backgroundColor: 'yellow',
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
          <GridLabel>pos</GridLabel>
          <GridLabel>head-dir</GridLabel>
          <GridLabel>pos + head-dir</GridLabel>
          <GridLabel>pos * head-dir</GridLabel>
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
