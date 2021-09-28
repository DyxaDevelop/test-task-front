import { Menu } from "antd";
import "./App.css";
import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import StatsPage from "./components/StatsPage/StatsPage";

class App extends React.Component {
  state = {
    current: "main",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <Router>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="main">
            <Link to="/">Personalized Data</Link>
          </Menu.Item>
          <Menu.Item key="stats">
            <Link to="/all">All Data</Link>
          </Menu.Item>
        </Menu>
        <div className="App">
          <Switch>
            <Route path="/all">
              <StatsPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
