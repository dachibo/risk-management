import {useDispatch, useSelector} from "react-redux";
import {setSecid, setSpecificationFutures, setSpecificationsStocks} from "../store/dataReducer";
import React from "react";

const Autocomplete = ({shortname, isOpen, setAutocomplete, setShortname}) => {
    const dispatch = useDispatch();
    const {selectType, items} = useSelector(state => state)
    const count_shortname = selectType === 'Фьючерсы' ? 3 : 2

    const itemEditHandler = (e) => {
        const item = items.find(item => item[0] === e.target.id)
        setAutocomplete(!isOpen)
        setShortname(e.target.textContent)
        dispatch(setSecid(item[0]));
        if (selectType === 'Фьючерсы') {
            dispatch(setSpecificationFutures({
                initialMargin: item[14],
                minStep: item[6],
                stepPrice: item[17]}))}
        else {
            dispatch(setSpecificationsStocks({
                lotSize: item[4]}))
        }
    };

    const MapItems = (items) => {
        const li_items = items.filter(item => (
            item[count_shortname].toLowerCase().indexOf(shortname.toLowerCase()) > -1))
            .map(item => {
                return (
                    <li key={item[2]} id={item[0]}
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={itemEditHandler}>{item[count_shortname]}</li>
                );
            });

        return li_items.length !== 0 ?
            li_items :
            <li className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                Не найдено</li>;
    };

    return (
        shortname.length !== 0 && isOpen ?
            (
                <ul className="absolute w-full max-h-32 overflow-auto bg-white z-50 py-2 rounded-lg shadow-lg mt-1">
                    {MapItems(items)}
                </ul>) : null
    );
};

export {Autocomplete};