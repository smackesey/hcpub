import { Link, routes } from '@redwoodjs/router'
import MasterLayout from 'src/layouts/MasterLayout/MasterLayout'

const HomePage = () => {
  return (
    <MasterLayout>
      <h1>HomePage</h1>
      <p>Find me in ./web/src/pages/HomePage/HomePage.js</p>
      <p>
        My default route is named home, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </MasterLayout>
  )
}

export default HomePage
