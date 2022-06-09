import {useSelector} from "react-redux";

const FieldSelect = () => {
    const selectType = useSelector(state => state.selectType)

    return (
        <div className="relative">
            <button id="dropdown-button"
                    className="h-10 w-full border-b-2 border-gray-300 text-left text-gray-400 cursor-auto"
                    type="button">
                <label htmlFor="dropdown-button" className="absolute top-2">{selectType}</label>
                {/*<svg class="absolute top-3 right-2 w-2.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">*/}
                {/*  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>*/}
                {/*</svg> */}
            </button>
        </div>
    );
};

export {FieldSelect};