import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  onClickDenominationValue = () => {
    const {denominationList, onClickWithdrawAmount} = this.props
    const {value} = denominationList
    onClickWithdrawAmount(value)
  }

  render() {
    const {denominationList} = this.props
    const {value} = denominationList
    return (
      <li className="list-item">
        <button
          className="btn-item"
          onClick={this.onClickDenominationValue}
          type="button"
        >
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
