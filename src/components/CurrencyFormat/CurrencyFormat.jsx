import React from 'react'
import numeral from 'numeral'

const CurrencyFormat = ({amount}) => {
    const value = numeral(amount).format('$0,0.00')
    return <div>{value}</div>
}

export default CurrencyFormat
