import React from 'react'
import { Robot } from './Robot'

export const RobotList = ({filteredRobots}) => {
    // const cardComponent = robots.map(robot => {
    //     return <Card />
    // })
    return (
      <div>
        {filteredRobots.map(robot => (
            <Robot robot={robot} />
        ))}
      </div>
    )
}
