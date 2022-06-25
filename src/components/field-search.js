import {useDispatch} from "react-redux";
import {setAllNull} from "../store/dataReducer";
import {DebounceInput} from "react-debounce-input";
import React, {useState} from "react";
import {Autocomplete} from "./autocomplete";

const FieldSearch = () => {
    const [shortName, setShortName] = useState('')
    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const dispatch = useDispatch();

    const searchInputHandler = (e) => {
        setShortName(e.target.value)
        console.log(shortName)
        shortName.length !== 0 ? setIsOpenSearch(true): setIsOpenSearch(false)
        dispatch(setAllNull({
            secid: null,
            deposit: null,
            priceOpen: null,
            countContract: null,
            stopLoss: null,
            initialMargin: '',
            minStep: null,
            stepPrice: null,
            lotSize: ''
        }))
    };

    return (
        <div className="relative">
            <input 
            id="search_ticker" 
            type="search" 
            class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" 
            placeholder=" " 
            value={shortName}
            onChange={searchInputHandler}/>
            {/* <DebounceInput
                id="search_ticker" type="search"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                placeholder=" "
                value={shortName}
                minLength={2}
                debounceTimeout={300}
                onChange={searchInputHandler}/> */}
            <label htmlFor="search_ticker"
                   className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                Поиск тикера
            </label>
            <Autocomplete
                shortname={shortName}
                isOpen={isOpenSearch}
                setAutocomplete={setIsOpenSearch}
                setShortname={setShortName}/>
        </div>
    );
}

export {FieldSearch};