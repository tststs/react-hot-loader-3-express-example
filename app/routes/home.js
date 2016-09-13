import React from 'react';

class RouteHome extends React.Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (
      <div>
        {`hello world! development: ${__DEV__}`}
      </div>
    );
  }
}

export default RouteHome;
