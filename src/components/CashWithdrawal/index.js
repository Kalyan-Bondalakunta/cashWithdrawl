import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onClickWithdrawAmount = value => {
    const {balance} = this.state

    const balanceAmount = balance - value
    this.setState({balance: balanceAmount})
  }

  renderDenominationsList = () => {
    const {denominationsList} = this.props

    return denominationsList.map(eachDenomination => (
      <DenominationItem
        denominationList={eachDenomination}
        key={eachDenomination.id}
        onClickWithdrawAmount={this.onClickWithdrawAmount}
      />
    ))
  }

  renderBalanceAmount = () => {
    const {balance} = this.state
    return <h1 className="balance-amount">{balance}</h1>
  }

  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <h1 className="name-initial">S</h1>
            <p className="last-name"> Sarah Williams</p>
          </div>
          <div className="balance-container">
            <h1 className="balance-text">Your Balance</h1>
            {this.renderBalanceAmount()}
          </div>
          <h1 className="rupees-text">In Rupees</h1>
          <p className="withdraw-text">Withdraw</p>
          <p className="sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="items-container">{this.renderDenominationsList()}</ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
