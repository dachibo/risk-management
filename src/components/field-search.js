import {useDispatch, useSelector} from "react-redux";
import {setInitialMargin, setSpecification} from "../store/dataReducer";
import {DebounceInput} from "react-debounce-input";
import React from "react";


const FieldSearch = () => {
    const dispatch = useDispatch();
    const shortname = useSelector(state => state.shortname)
    const getTicker = (e) => {
        dispatch(setSpecification({
            isOpen: true,
            shortname: e.target.value,
            secid: null,
            minStep: null,
            stepPrice: null
        }));
        dispatch(setInitialMargin(''));
    };
    return (
        <div className="relative">
            <DebounceInput
                id="search_ticker" type="search"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder=" "
                value={shortname}
                minLength={2}
                debounceTimeout={300}
                onChange={getTicker}/>
            <label htmlFor="search_ticker"
                   className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                Поиск тикера
            </label>
            <Autocomplete/>
        </div>
    );
}

const Autocomplete = () => {
    const dispatch = useDispatch();
    const {items, shortname, isOpen} = useSelector(state => state)

    const itemEditHandler = (e) => {
        const item = items.find(item => item[0] === e.target.id)
        dispatch(setSpecification({
            isOpen: false,
            shortname: e.target.textContent,
            secid: item[0],
            minStep: item[6],
            stepPrice: item[17]
        }));
        dispatch(setInitialMargin(item[14]));
    };

    const MapItems = (items) => {
        const li_items = items.filter(item => (
            item[3].toLowerCase().indexOf(shortname.toLowerCase()) > -1))
            .map(item => {
                return (
                    <li key={item[2]} id={item[0]}
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={itemEditHandler}>{item[3]}</li>
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
                <ul className="absolute w-full max-h-32 overflow-auto bg-white z-50 py-2 rounded-lg shadow-lg mt-1 border-none">
                    {MapItems(items)}
                </ul>) : null
    );
};

export {FieldSearch};