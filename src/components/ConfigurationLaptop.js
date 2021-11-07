import '../styles/ConfigurationLaptop.css'
const Configuration = ({ processor, frequency, rate, typeStockage, name}) => {
    // const { processor, frequency, rate} = props;
    const range = [1, 2, 3, 4, 5];
    // console.log(processor)
    // console.log(typeStockage)
    return (<div className='dlp-detail' onClick={() => alertTypeOfDisk(typeStockage)}>
        <span>{name}</span> <br/>
        <span>{processor} </span> <br/>
        <span>{frequency} </span> <br/>
        {range.map(rangeElem => rate >= rangeElem ? (<span key={rangeElem.toString()}>⭐</span>) : null)}
    </div>)
}

const alertTypeOfDisk = (diskType) => {
  alert(`L'ordinateur posséde un disque de type ${diskType}`);
}

export default Configuration;
