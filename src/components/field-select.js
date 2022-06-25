import {useDispatch, useSelector} from "react-redux";
import {setAllNull, setSelectType} from "../store/dataReducer";
import {useState} from "react";

const FieldSelect = () => {
    const dispatch = useDispatch();
    const selectType = useSelector(state => state.selectType)
    const [isOpenSelectTypes, setIsOpenSelectTypes] = useState(false);

    const clickListItemHandler = (e) => {
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
        dispatch(setSelectType(e.target.innerText))
        setIsOpenSelectTypes(!isOpenSelectTypes)
    };

    const blockTypes = isOpenSelectTypes ? (
        <ul className="absolute max-h-32 py-2 px-4 overflow-auto bg-white z-50 rounded-lg shadow-lg mt-1 text-sm text-gray-700">
            <li className="py-2 font-medium whitespace-nowrap">Московская биржа</li>
            <li className="py-2 px-4 font-normal whitespace-nowrap hover:bg-gray-100 cursor-pointer"
                onClick={clickListItemHandler}>Акции
            </li>
            <li className="py-2 px-4 font-normal whitespace-nowrap hover:bg-gray-100 cursor-pointer"
                onClick={clickListItemHandler}>Фьючерсы
            </li>
        </ul>
    ) : null

    return (
        <div className="relative">
            <button id="dropdown-button"
                    className="h-10 w-full border-b-2 border-gray-300 text-left text-gray-400 cursor-pointer"
                    type="button"
                    onClick={() => (setIsOpenSelectTypes(!isOpenSelectTypes))}>
                <label htmlFor="dropdown-button" className="absolute top-2 cursor-pointer">{selectType}</label>
                <svg className="absolute top-3 right-2 w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512"
                >
                    <path fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
            </button>
            {blockTypes}
        </div>
    );
};

export {FieldSelect};