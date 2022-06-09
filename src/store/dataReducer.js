import {createSlice} from '@reduxjs/toolkit';

const dataState = {
    selectType: "Фьючерсы",
    items: [],
    isOpen: false,
    shortname: '',
    formEdited: {
        secid: null,
        minStep: null,
        stepPrice: null,
        position: 'long',
        deposit: null,
        priceOpen: null,
        countContract: null,
        stopLoss: null
    },
    formCalculate: {
        initialMargin: '',
    },
};

const dataSlice = createSlice({
    name: 'dataCalc',
    initialState: dataState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },
        setSpecification(state, action) {
            state.isOpen = action.payload.isOpen
            state.shortname = action.payload.shortname
            state.formEdited.secid = action.payload.secid
            state.formEdited.minStep = action.payload.minStep
            state.formEdited.stepPrice = action.payload.stepPrice
        },
        setPositions(state, action) {
            state.formEdited.position = action.payload
        },
        setDeposit(state, action) {
            state.formEdited.deposit = action.payload
        },
        setPriceOpen(state, action) {
            state.formEdited.priceOpen = action.payload
        },
        setCountContract(state, action) {
            state.formEdited.countContract = action.payload
        },
        setStopLoss(state, action) {
            state.formEdited.stopLoss = action.payload
        },
        setInitialMargin(state, action) {
            state.formCalculate.initialMargin = action.payload
        }
    }
});

export const {
    setItems,
    setPositions,
    setDeposit,
    setPriceOpen,
    setCountContract,
    setStopLoss,
    setSpecification,
    setInitialMargin,
} = dataSlice.actions;

export default dataSlice.reducer;