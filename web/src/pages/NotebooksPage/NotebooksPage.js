import { Link, routes } from '@redwoodjs/router'

const NotebooksPage = () => {
  return (
    <>
      <h1>NotebooksPage</h1>
      <p>Find me in "./web/src/pages/NotebooksPage/NotebooksPage.js"</p>
      <p>
        My default route is named "notebooks", link to me with `
        <Link to={routes.notebooks()}>Notebooks</Link>`
      </p>
    </>
  )
}

export default NotebooksPage
