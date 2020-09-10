import FiguresLayout from 'src/layouts/FiguresLayout/FiguresLayout'

const FiguresImageTestPage = () => {
  return (
    <FiguresLayout>
      Here is an image:
      <img className="f-rounded-lg" style={{borderRadius: '20px'}} src="/images/bokeh_tiled_square.png" />
    </FiguresLayout>
  )
}

export default FiguresImageTestPage
