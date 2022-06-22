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
        <table>
            <tbody>
                <tr>
                    <StatisticLine name='Good' value={good}/>        
                </tr>
                <tr>
                    <StatisticLine name='Neutral' value={neutral}/>
                </tr>
                <tr>
                    <StatisticLine name='Bad' value={bad}/>
                </tr>
                <tr>
                    <StatisticLine name='All' value={total}/>
                </tr>
                <tr>
                    <StatisticLine name='Average' value={average}/>
                </tr>
                <tr>
                    <StatisticLine name='Positive' value={positive + "%"}/>   
                </tr>
            </tbody>
            
        </table>
    )
}

export default Stats;