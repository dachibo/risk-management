import {FilterPositions} from "./field-filter-positions";
import {setCountContract, setDeposit, setItems, setPriceOpen, setStopLoss} from "../store/dataReducer";
import {FieldInput} from "./field-input";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


const FormFutures = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`https://iss.moex.com/iss/engines/futures/markets/forts/securities.json`)
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch(setItems(result.securities.data));
                })
    });
    const {
        secid,
        minStep,
        stepPrice,
        position,
        deposit,
        priceOpen,
        countContract,
        stopLoss
    } = useSelector(state => state.formEdited);

    const initialMargin = useSelector(state => state.formCalculate.initialMargin)

    const sizePosition = secid !== null && countContract !== null ?
        (initialMargin * countContract).toFixed(2) : ''
    const pointStopLoss = priceOpen !== null && stopLoss !== null ?
        (position === "long" ? priceOpen - stopLoss : stopLoss - priceOpen).toFixed(2) : ''
    const potentialLoss = pointStopLoss !== '' && countContract !== null ?
        ((pointStopLoss / minStep * stepPrice) * countContract).toFixed(2) : ''
    const potentialLossPercent = deposit !== null && potentialLoss !== '' ?
        (potentialLoss / deposit * 100).toFixed(2) : ''

    return (
        <div className="col-span-8 grid grid-cols-8 gap-6">
            <div className="col-span-8 md:col-span-4">
                <FilterPositions/>
                <FieldInput name={"Сумма депозита"} editValueField={setDeposit}/>
                <FieldInput name={"Цена входа"} editValueField={setPriceOpen}/>
                <FieldInput name={"Количество контрактов"} editValueField={setCountContract}/>
                <FieldInput name={"Стоп-лосс"} editValueField={setStopLoss}/>
            </div>
            <div className="col-span-8 md:col-span-4">
                <FieldInput id={"go"} name={"Требуемое ГО, руб."} editable={true} value={initialMargin}/>
                <FieldInput id={"count_positions"} name={"Размер позиции, руб."} editable={true}
                            value={sizePosition}/>
                <FieldInput id={"stop_loss_p"} name={"Стоп-лосс, п."} editable={true} value={pointStopLoss}/>
                <FieldInput id={"potential_loss"} name={"Потенциальный убыток, руб."} editable={true}
                            value={potentialLoss}/>
                <FieldInput id={"percent_deposit"} name={"Потенциальный убыток, %"} editable={true}
                            value={potentialLossPercent}/>
            </div>
        </div>
    );
};

export {FormFutures};
