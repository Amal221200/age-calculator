import { useEffect, useState } from "react";
import Top from "./Top";
import Botttom from "./Bottom";

const Main = () => {
    const [diff, setDiff] = useState(null)
    const [input, setInput] = useState(null)
    useEffect(() => {
        if (input)
            setDiff(new Date(new Date() - input))
    }, [input])
    return (
        <main className="bg-off-white rounded-lg min-w-[40vw] rounded-br-[80px] p-4">
            <Top setInput={setInput} />
            <Botttom diff={diff} />
        </main>
    );
}

export default Main;