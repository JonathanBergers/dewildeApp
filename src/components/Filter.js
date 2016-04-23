import React, { PropTypes } from 'react'


export class Filter extends React.Component {

  constructor(){
    super()
    this.state = {value: 0}

  }

  static propTypes = {
    onIncrement: PropTypes.func.isRequired
  };

  render () {

    const data = this.props.value.map((x) => <span>{x.name}</span>)
    return (
      <div>
        {data}
        <button onClick={this.props.onIncrement} />
        <h2>dude</h2>
      </div>
    )
  }
}

export default Filter




