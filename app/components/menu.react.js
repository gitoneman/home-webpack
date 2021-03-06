import React from "react";
import {Router,Link} from "react-router";
import {MenuItem,DropdownButton} from "react-bootstrap";
import UserStore from "../stores/UserStore";
import UserActions from "../actions/UserActions";

class menu extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = UserStore.getState();
	    this.onChange = this.onChange.bind(this);
  	}
  	componentDidMount() {
	    UserStore.listen(this.onChange);
	    //初始actions
	    UserActions.getUser();
  	}
  	componentWillUnmount() {
	    UserStore.unlisten(this.onChange);
  	}
  	onChange(state) {
	    this.setState(state);
  	}
  	render(){
  		return (
  			<nav className="navbar navbar-default" role="navigation">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">这里是一个LOGO</a>
				</div>
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li>
							<DropdownButton onSelect={this.select} id="userinfo" bsStyle='link' title={this.state.username} className="user-info">
						      	<MenuItem eventKey="1">退出</MenuItem>
						      	<MenuItem eventKey="2">关于</MenuItem>
						    </DropdownButton>
						</li>
						
					</ul>					
				</div>
			</nav>
  		)
  	}
  	select(e,key){
  		if(key == 1){
			window.location.replace("/logout");
		}
  	}
}

export default menu;