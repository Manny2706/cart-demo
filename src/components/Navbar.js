import React from 'react';



class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  
  render(){
    return  (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <a className="navbar-brand" href="#">
         <span className="position-absolute top-30 start-30 translate-middle badge rounded-pill bg-danger">{this.props.totalItems}</span>
            Manny-cart
          </a>
          
          
        </div>
      </nav>
    );
  }
}

export default Navbar;
