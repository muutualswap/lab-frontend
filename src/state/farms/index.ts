/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import farmsConfig from 'config/constants/farms'
import BigNumber from 'bignumber.js'
import labo from 'config/constants/labo'
import fetchFarms from './fetchFarms'
import {
  fetchFarmUserEarnings,
  fetchFarmUserAllowances,
  fetchFarmUserTokenBalances,
  fetchFarmUserStakedBalances,
} from './fetchFarmUser'
import { FarmsState, Farm } from '../types'

const initialState: FarmsState = { data: [...farmsConfig] }

export const farmsSlice = createSlice({
  name: 'Farms',
  initialState,
  reducers: {
    setFarmsPublicData: (state, action) => {
      const liveFarmsData: Farm[] = action.payload
      state.data = state.data.map((farm) => {
        const liveFarmData = liveFarmsData.find((f) => f.pid === farm.pid)
        return { ...farm, ...liveFarmData }
      })
    },
    setFarmUserData: (state, action) => {
      const { arrayOfUserDataObjects } = action.payload
      arrayOfUserDataObjects.forEach((userDataEl) => {
        const { index } = userDataEl
        state.data[index] = { ...state.data[index], userData: userDataEl }
      })
    },
    setLaboPrice: (state, action) => {
      state.price = action.payload
    },
  },
})

// Actions
export const { setFarmsPublicData, setFarmUserData, setLaboPrice } = farmsSlice.actions

// Thunks
export const fetchFarmsPublicDataAsync = () => async (dispatch) => {
  const farms = await fetchFarms()
  dispatch(setFarmsPublicData(farms))
}
export const fetchFarmUserDataAsync = (account) => async (dispatch) => {
  const userFarmAllowances = await fetchFarmUserAllowances(account)
  const userFarmTokenBalances = await fetchFarmUserTokenBalances(account)
  const userStakedBalances = await fetchFarmUserStakedBalances(account)
  const userFarmEarnings = await fetchFarmUserEarnings(account)

  const arrayOfUserDataObjects = userFarmAllowances.map((farmAllowance, index) => {
    return {
      index,
      allowance: userFarmAllowances[index],
      tokenBalance: userFarmTokenBalances[index],
      stakedBalance: userStakedBalances[index],
      earnings: userFarmEarnings[index],
    }
  })

  dispatch(setFarmUserData({ arrayOfUserDataObjects }))
}

export const fetchLaboPriceAsync = () => async (dispatch) => { // Change the address below to BGSP-BNB LP
  const query = `
  {ethereum(network: bsc){
    address(address: {is: "0x66bffcac0782200d6276142768f79600a458bb04"}){
    balances {
    currency {
    symbol
    }
    value
    }}
    }}
`;
const url = "https://graphql.bitquery.io/";
const opts = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        query
    })
};

fetch(url, opts)
  .then(response => response.json())
  .then(json => {
    if (process.env.REACT_APP_DEBUG === "true") console.log(json, 'testing output');
    const lprice = json.data.ethereum.address[0].balances[bgsp.queryPosition.wbnb].value / json.data.ethereum.address[0].balances[bgsp.queryPosition.token].value;
    dispatch(setBgspPrice(lprice));
  })
  .catch(console.error);
}

export default farmsSlice.reducer
