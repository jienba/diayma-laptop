const Categories = ({stockageType}) => {
    return (
        <div>
            <select name="" id="">
                <option selected>Type de Stockage(HDD & SSD)</option>
                {stockageType.map(typeDisk =>
                    <option key={typeDisk}>{typeDisk}</option>
                )}
            </select>

        </div>
    )
}

export default Categories
