const PlotCard = ({ heading, children }) => {
  return (
    <div className="f-flex f-flex-col f-p-2 f-space-y-2 f-items-center f-rounded f-bg-gray-200 f-shadow">
      <h2>{heading}</h2>
      <div className="f-rounded f-w-full f-flex-grow f-overflow-hidden">{children}</div>
    </div>
  )
}

export default PlotCard
