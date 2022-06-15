import {useDispatch} from "react-redux";
import {setPositions} from "../store/dataReducer";
import React from "react";

const FilterPositions = () => {
    const dispatch = useDispatch();
    const filters = [
        {id: "long", label: "Лонг"},
        {id: "short", label: "Шорт"},
    ];

    const buttons = filters.map(({id, label}) => {
        const peerChecked = (id === "long" ? 'peer-checked:bg-green-500' : 'peer-checked:bg-red-500');
        const defaultChecked = id === "long";
        return (
            <label key={id} className="w-1/2">
                <input id={id} name="push-positions" type="radio" className="sr-only peer"
                       defaultChecked={defaultChecked}
                       onClick={(e) => {
                           dispatch(setPositions(e.target.id))
                       }
                       }/>
                <div
                    className={`flex h-full cursor-pointer items-center justify-center py-2 px-3.5 text-sm font-medium text-gray-400 ${peerChecked} peer-checked:text-white cursor-pointer`}>
                    {label}
                </div>
            </label>
        );
    });
    return (
        <div className="inline-flex h-10 w-full overflow-hidden rounded-xl shadow-md">
            {buttons}
        </div>
    );
};

export {FilterPositions};