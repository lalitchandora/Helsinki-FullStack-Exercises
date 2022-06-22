import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {

	const course = {
		name: 'Half Stack application development',
		part: [
			{
				name: 'Fundamentals of React',
				exercise: 10
			},
			{
				name: 'Using props to pass data',
				exercise: 7
			},
			{
				name: 'State of a component',
				exercise: 14
			}
		]
	}

	return (
		<div>
			<Header course={course.name}/>
			<Content parts={course.part}/>
			<Total parts={course.part}/>
		</div>
	);
}

export default App;