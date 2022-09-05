
function Header(props) {
  console.log(props)
  const greetings = props.greetings
  const userName = props.userName
  const dayTime = props.dayTime
  const numbers = props.numbers
  
  return (
    <h1>this is my first component with {greetings}, {userName} and praying time {dayTime} and {numbers}</h1>
    // <h1>hello buddy! Welcome to {game} game {players}</h1>
  )
}
export default Header;
