import "./StatsInfo.scss"

const StatsInfo = ({ figure, info }) => {
  return (
    <div className="stats-info">
      <span className="figure">{figure}</span>
      <span className="info">{info}</span>
    </div>
  )
}

export default StatsInfo