const Stats = ({good, bad, neutral}) => {
    let total = good + bad + neutral;
    let average = Math.abs((good-bad)/total);
    let positive = (good/total) * 100;
    return (
        <>
            <h6>All: {total}</h6>
            <h6>Average: {average}</h6>
            <h6>Positive: {positive}%</h6>
        </>
    )
}

export default Stats;