import React from 'react'

const HappyClients = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-row">
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              title={stat.title}
              target={stat.target}
              bgNumber={stat.bgNumber}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HappyClients
