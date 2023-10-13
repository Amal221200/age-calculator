

const Botttom = ({ diff }) => {
    return (
        <div className="text-[32px] italic font-bold">
            <h1><span className="text-primary">{diff ? diff?.getYear() - 70 : '--'}</span> years</h1>
            <h1><span className="text-primary">{diff ? diff?.getMonth() : '--'}</span> months</h1>
            <h1><span className="text-primary">{diff ? diff?.getUTCDate() - 1 : '--'}</span> days</h1>
        </div>);
}

export default Botttom;