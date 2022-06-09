import {useDispatch} from "react-redux";
import React from "react";

const FieldInput = ({id, name, value, editable = false, editValueField}) => {
    const dispatch = useDispatch();
    const mt = id === "go" ? null : "mt-6"
    return (
        <div className={`${mt} relative`}>
            <input id={id} key={id} type="number"
                   className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                   placeholder=" " value={value} disabled={editable} onChange={(e) => {
                dispatch(editValueField(e.target.value * 1))
            }}/>
            <label htmlFor={id}
                   className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                {name}
            </label>
        </div>
    );
};

export {FieldInput};