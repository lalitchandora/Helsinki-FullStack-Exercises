import StatisticLine from "./StatisticLine";

const Stats = ({good, bad, neutral}) => {
    let total = good + bad + neutral;
    let average = Math.abs((good-bad)/total);
    let positive = (good/total) * 100;
    if (isNaN(average)) {
        average = 0;
    }
    if (isNaN(positive)) {
        positive = 0;
    }
    return (
        <>
            <StatisticLine name='Good' value={good}/>
            <StatisticLine name='Neutral' value={neutral}/>
            <StatisticLine name='Bad' value={bad}/>
            <StatisticLine name='All' value={total}/>
            <StatisticLine name='Average' value={average}/>
            <StatisticLine name='Positive' value={positive}/>
        </>
    )
}

export default Stats;