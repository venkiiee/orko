import React from "react"
import { connect } from "react-redux"
import TradeHistory from "../components/TradeHistory"
import Loading from "../components/primitives/Loading"
import { getUserTradeHistory } from "../selectors/coins"

class UserTradeHistoryContainer extends React.Component {
  render() {
    return !this.props.tradeHistory ? (
      <Loading p={2} />
    ) : (
      <TradeHistory trades={this.props.tradeHistory} buySide="BID" />
    )
  }
}

function mapStateToProps(state, props) {
  return {
    tradeHistory: getUserTradeHistory(state)
  }
}

export default connect(mapStateToProps)(UserTradeHistoryContainer)