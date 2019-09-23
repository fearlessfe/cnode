import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Link } from 'react-router-dom'
import Routes from '../config/router'

class App extends React.Component {
  componentDidMount() {
    // todo
  }

  render() {
    return [
      <div>
        <Link to="/">首页</Link>
        <Link to="/detail">详情</Link>
      </div>,
      <Routes />,
    ]
  }
}

export default hot(App)
