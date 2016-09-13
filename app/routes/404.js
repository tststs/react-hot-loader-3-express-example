import React from 'react';
import {
  Link
} from 'react-router';

class Route404 extends React.Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (
      <div>
        <p>
          This is the end, beautiful friend.
        </p>
        <p>
          <Link to={'/'}>
            Back to /
          </Link>
        </p>
      </div>
    );
  }
}

export default Route404;
