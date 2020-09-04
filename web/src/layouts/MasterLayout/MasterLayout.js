import { Link, routes } from '@redwoodjs/router'

const toolbarRoutes = [
  { label: 'figures', name: 'figures' },
  { label: 'notebooks', name: 'notebooks' },
  { label: 'timeline', name: 'timeline' },
]

const MasterLayout = ({ children }) => {
  return (
    <div id="app" className="f-h-100vh">
      <div className="f-h-full f-flex f-flex-col f-flex-rg-px">
        <div className="f-h-toolbar f-bg-primary-500">
          <div className="f-text-large f-flex f-ml-4 f-items-center f-text-white f-h-full">
            HC RESEARCH
            {toolbarRoutes.map(({ label, name }) => (
              <Link key={name} className="f-px-4 f-block" to={routes[name]()}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default MasterLayout
