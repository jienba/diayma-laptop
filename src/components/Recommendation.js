const Recommendation = () => {
    const currentMonth = new Date().getMonth();
    const isWinter = currentMonth === 11 || currentMonth <= 2;

    if (!isWinter)
        return <div>Promo d'Ete 🌻. Profiter jusqu'à 30 % de reduction </div>
    return <div>Promo d'hiver 🌨. Pensez au cadeaux de Noel </div>
}

export default Recommendation
