import { Link, routes } from '@redwoodjs/router'
import MasterLayout from 'src/layouts/MasterLayout/MasterLayout'

const rootStyle = {
  display: 'grid',
  gridTemplate: '1fr / 25% 75%',
}

const figureRoutes = [
  { name: 'figuresInfoScoreOverview', label: 'Info Score Overview' },
]

const FiguresLayout = ({ children }) => {
  return (
    <MasterLayout>
      {/* <div className="g-figures"> */}
      <div className="f-h-0 f-flex-grow" style={rootStyle}>
        <div className="f-h-full f-px-2 f-py-3 f-bg-gray-800">
          <div className="f-flex f-flex-col f-flex-rg-1 f-text-white">
            {figureRoutes.map(({ label, name }) => (
              <Link key={name} className="f-px-4 f-block" to={routes[name]()}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="f-w-full f-bg-red-500"> */}
        <div className="f-w-full f-h-full">
          {children}
        </div>
      </div>
    </MasterLayout>
  )
}

export default FiguresLayout
