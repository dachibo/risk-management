import {FormFutures} from "./form-futures";
import {FormStocks} from "./form-stocks";
import React from "react";
import {useSelector} from "react-redux";
import {FieldSelect} from "./field-select";
import {FieldSearch} from "./field-search";

const Calculator = () => {
    const selectType = useSelector(state => state.selectType)
    const useForm = selectType === "Фьючерсы" ? <FormFutures/> : <FormStocks/>

    return (
        <form className="m-5 md:m-20 rounded-3xl bg-white p-10 shadow-xl" action="" method="POST"
              onSubmit={e => {
                  e.preventDefault()
              }}>
            <div className="grid grid-cols-8 gap-6">
                <div className="col-span-8 md:col-span-2">
                    <FieldSelect/>
                </div>
                <div className="col-span-8 md:col-span-6">
                    <FieldSearch/>
                </div>
                {useForm}
            </div>
        </form>
    );
};

export default Calculator;