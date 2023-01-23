import StatsInfo from "./StatsInfo"

import "./Stats.scss"

const Stats = () => {
  return (
    <div className="stats">
      <StatsInfo figure="10k+" info="Companies" />
      <StatsInfo figure="314" info="Templates" />
      <StatsInfo figure="12M+" info="queries" />
    </div>
  )
}

export default Stats