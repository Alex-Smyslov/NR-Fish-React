import React from 'react';
import { Rate } from 'antd';

type Props = {
  rating: number;
};

class Rating extends React.Component<Props> {
  render() {
    return (
      <div>
        <Rate
          count={5}
          allowHalf
          defaultValue={this.props.rating - 0}
          style={{ color: '#5c62ec' }}
        />
      </div>
    );
  }
}

export default Rating;
