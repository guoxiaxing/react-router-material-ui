import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Tit from './Tit'
import Steps from './Steps'
import Date from './Date'

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
 class Home extends Component{
  render(){
    return (
        <div><Tit /></div>
      )
  }
 }
 //路由子组件
 class All extends Component{
  render(){
    console.log(this.props.match.params.gxx)
    console.log(this.props.match.params.gxx === 'About')

    //获取子路由路径
      if(this.props.match.params.gxx === 'About'){
        return (
          <div><Steps /></div>
        );
      }else{
        return (
          <div><Date /></div>
        );
      }
  }
 }
class Bottom extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
        <Router>
            <div>
                <Paper zDepth={1} style={{position:'fixed',bottom:'0',width:'100%'}}>
                  <BottomNavigation selectedIndex={this.state.selectedIndex}>
                  <Link to='/' >
                    <BottomNavigationItem
                      label="Recents"
                      icon={recentsIcon}
                      onClick={() => this.select(0)}
                    />
                    </Link>
                    <Link to='/News'>
                    <BottomNavigationItem
                      label="Favorites"
                      icon={favoritesIcon}
                      onClick={() => this.select(1)}
                    />
                    </Link>
                    <Link to='/About'>
                    <BottomNavigationItem
                      label="Nearby"
                      icon={nearbyIcon}
                      onClick={() => this.select(2)}
                    />
                    </Link>
                  </BottomNavigation>
                </Paper>
                <Route path='/:gxx' component={All} />
                <Route exact path='/' component={Home} />
              </div>
        </Router>
    );
  }
}

export default Bottom;