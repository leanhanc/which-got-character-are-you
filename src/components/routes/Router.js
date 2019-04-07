import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Root from '../views/layout/index.js'
import NotFound from './404'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Root} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
