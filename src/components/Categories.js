import '../styles/Categories.css'

const Categories = ({stockageType, setDiskType}) => {


    return (
        <div className='dlp-categories'>
            <label htmlFor="typeDisk">Type de Stockage(HDD && SSD)</label> <br/>
            <select
                id="typeDisk"
                onChange={(e) => setDiskType(e.target.value)}
                className='dlp-categories-select'
            >
                <option value="">---</option>
                {stockageType.map(typeDisk =>
                    <option key={typeDisk} value={typeDisk}>{typeDisk}</option>
                )}
            </select>
            <button className='dlp-reinit-short' onClick={() => setDiskType('')}>Réinitialiser</button>

        </div>
    )
}

export default Categories
