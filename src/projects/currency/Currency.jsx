import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.css';

export function Currency() {
  const [fromCurrency, setFromCurrency] = useState('UAH')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)
  const [rates, setRates] = useState([])

  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then((res) => res.json())
      .then((json) => {
        setRates(json)
      })
      .catch((err) => {
        console.warn(err);
      })
  }, [])



  const convertor = (value, typeCurrency, operator) => {
    const rate = rates.find(cur => cur.cc === typeCurrency).rate
    let result
    if(operator === "/") {
      result = value / rate
    }
    if(operator === "*") {
      result = value * rate
    }
    setToPrice(result)
    setFromPrice(value)
  }

  const onChangeFromPrice = (value) => {
    if (rates.length) {
      if (toCurrency === "UAH" && fromCurrency === "UAH") {
        const result = value
        setToPrice(result)
        setFromPrice(value)
      } else if (fromCurrency === "UAH") {

        convertor(value, toCurrency, "/" )

      } else if (toCurrency === "UAH") {

        convertor(value, fromCurrency, "*")

      } else {
        const fromRate = rates.find(cur => cur.cc === fromCurrency).rate
        const toRate = rates.find(cur => cur.cc === toCurrency).rate
        const price = value * fromRate
        const result = price / toRate
        setToPrice(result)
        setFromPrice(value)
      }
    }
  }


  useEffect(() => {
    onChangeFromPrice(fromPrice)
  }, [fromCurrency, fromPrice, toCurrency])

  return (
    <div className="Currency">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
      />
    </div>
  );
}

