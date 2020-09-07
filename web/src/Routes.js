// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/figures/image-test" page={FiguresImageTestPage} name="figuresImageTest" />
      <Route path="/figures/info-score-overview" page={FiguresInfoScoreOverviewPage} name="figuresInfoScoreOverview" />
      <Route path="/notebooks" page={NotebooksPage} name="notebooks" />
      <Route path="/timeline" page={TimelinePage} name="timeline" />
      <Route path="/figures" page={FiguresPage} name="figures" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
