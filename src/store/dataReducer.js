import {createSlice} from '@reduxjs/toolkit';

const dataState = {
    items: [],
    selectType: 'Фьючерсы',
    positionInfo: {
        secid: null,
        position: 'long',
        deposit: null,
        priceOpen: null,
        countContract: null,
        stopLoss: null
    },
    futuresInfo: {
        initialMargin: '',
        minStep: null,
        stepPrice: null,
    },
    stocksInfo: {
        lotSize: ''
    },
};

const dataSlice = createSlice({
    name: 'dataCalc',
    initialState: dataState,
    reducers: {
        setSelectType(state, action) {
            state.selectType = action.payload
        },
        setItems(state, action) {
            state.items = action.payload
        },
        setSecid(state, action) {
            state.positionInfo.secid = action.payload
        },
        setPositions(state, action) {
            state.positionInfo.position = action.payload
        },
        setDeposit(state, action) {
            state.positionInfo.deposit = action.payload
        },
        setPriceOpen(state, action) {
            state.positionInfo.priceOpen = action.payload
        },
        setCountContract(state, action) {
            state.positionInfo.countContract = action.payload
        },
        setStopLoss(state, action) {
            state.positionInfo.stopLoss = action.payload
        },
        setSpecificationFutures(state, action) {
            state.futuresInfo.initialMargin = action.payload.initialMargin
            state.futuresInfo.minStep = action.payload.minStep
            state.futuresInfo.stepPrice = action.payload.stepPrice
        },
        setSpecificationsStocks(state, action) {
            state.stocksInfo.lotSize = action.payload.lotSize
        },
        setAllNull(state, action) {
            state.positionInfo.secid = action.payload.secid
            state.positionInfo.deposit = action.payload.deposit
            state.positionInfo.priceOpen = action.payload.priceOpen
            state.positionInfo.countContract = action.payload.countContract
            state.positionInfo.stopLoss = action.payload.stopLoss
            state.futuresInfo.initialMargin = action.payload.initialMargin
            state.futuresInfo.minStep = action.payload.minStep
            state.futuresInfo.stepPrice = action.payload.stepPrice
            state.stocksInfo.lotSize = action.payload.lotSize
        },
    }
});

export const {
    setSelectType,
    setItems,
    setPositions,
    setDeposit,
    setPriceOpen,
    setCountContract,
    setStopLoss,
    setSecid,
    setSpecificationFutures,
    setSpecificationsStocks,
    setAllNull
} = dataSlice.actions;

export default dataSlice.reducer;