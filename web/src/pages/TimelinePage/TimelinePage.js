import { Link, routes } from '@redwoodjs/router'

const TimelinePage = () => {
  return (
    <>
      <h1>TimelinePage</h1>
      <p>Find me in "./web/src/pages/TimelinePage/TimelinePage.js"</p>
      <p>
        My default route is named "timeline", link to me with `
        <Link to={routes.timeline()}>Timeline</Link>`
      </p>
    </>
  )
}

export default TimelinePage
