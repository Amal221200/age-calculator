import { useState } from "react";
import arrow from "../assets/arrow.svg";

const arr = [{ label: 'day' }, { label: 'month' }, { label: 'year' }];

const Top = ({ setInput }) => {
    const [date, setDate] = useState({ day: 0, month: 0, year: 0 });

    const handleSubmit = (event) => {
        event.preventDefault()
        const { day, month, year } = date;
        setInput(new Date(`${year}-${month}-${day}`));
    }
    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="flex justify-start items-center gap-5 text-lg">
                {arr.map((ele, ind) => (
                    <div key={ind} className="flex flex-col">
                        <label htmlFor={ele.label} className="font-thin">{ele.label.toUpperCase()}</label>
                        <input type="number" name={ele.label} onInput={(event) => {
                            setDate((current) => ({ ...current, [event.target.name]: event.target.valueAsNumber }))
                        }} className="max-w-[100px] p-2" maxLength={ele.label === 'year' ? 4 : 2} required />
                    </div>
                ))}
            </div>
            <div className="bg-light-grey h-[1px] relative my-3">
                <button type="submit" className="absolute w-[45px] transition active:scale-100 hover:scale-[1.2] right-0 bottom-[-20px] bg-primary rounded-full p-2">
                    <img src={arrow} alt="" className="w-full" />
                </button>
            </div>
        </form>
    );
}

export default Top;