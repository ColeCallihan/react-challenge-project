import React from 'react';
import axios from 'axios';

class TableData extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      totalReactPackages: null
    };
  }

  componentDidMount() {
    //Simple GET request using the axios API
    axios.get('http://localhost:3001/')
    .then(response => this.setState ({ totalReactPackages: 
      response.data.total }));
      
  }

  render() {
    const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    Total react packages: {totalReactPackages}
                </div>
            </div>
    );
  }
}

export { TableData };