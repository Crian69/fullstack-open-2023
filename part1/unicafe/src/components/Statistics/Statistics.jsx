import StatisticsLine from "../StatisticsLine/StatisticsLine";

export default function Statistics({ good, neutral, bad }) {
  return (
    <>
      {good + bad + neutral === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <h1>Statistics</h1>

          <div>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="All" value={good + bad + neutral} />
            <StatisticsLine text="Average" value={(good + bad + neutral) / 3} />
            <StatisticsLine
              text="Positive"
              value={(good / (good + bad + neutral)) * 100 + "%"}
            />
          </div>
        </>
      )}
    </>
  );
}
