const Configuration = ({ processor, frequency, rate}) => {
    // const { processor, frequency, rate} = props;
    const range = [1, 2, 3, 4, 5];
    // console.log(processor)
    return (<div>
        <span>{processor} </span> <br/>
        <span>{frequency} </span> <br/>
        <span>{}</span>
        {range.map(rangeElem => rate >= rangeElem ? (<span key={rangeElem.toString()}>⭐</span>) : null)}
    </div>)
}

export default Configuration;
