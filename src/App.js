import { useEffect, useState } from 'react';
import './App.css';
import { RobotList } from './components/RobotList';
import { robots } from './robots';
import { SearchBox } from './components/SearchBox';

function App() {
  const [robotsArr, setRobotsArr] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(data => setRobotsArr(data))
    // setRobotsArr([])
    setRobotsArr(robots)
  })

  const filteredRobots = robotsArr.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return !robotsArr.length
    ? <h1>Loading</h1>
    : (
      <div className='tc'>
        <h1 className='f2'>RoboFriends</h1>
        <SearchBox setSearchField={setSearchField} />
        <RobotList filteredRobots={filteredRobots} />
      </div>
    )
}

export default App;

{/* <div className='tc'>
<h1>RoboFriends</h1>
<SearchBox setSearchField={setSearchField} />
<RobotList filteredRobots={filteredRobots} />
</div> */}
