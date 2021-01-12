import "./App.css";
import Session from "./components/Session";
import Break from "./components/Break";
import TimeLeft from "./components/TimeLeft";
import { useState } from "react";

function App() {
	const [sessionLength, setSessionLength] = useState(60 * 25);
	const [breakLength, setBreakLength] = useState(300);

	const incrementSessionLengthByOneMinute = () => {
		setSessionLength(sessionLength + 60);
	};
	const decrementSessionLengthByOneMinute = () => {
		const newSessionLength = sessionLength - 60;

		if (newSessionLength < 0) {
			setSessionLength(0);
		} else {
			setSessionLength(newSessionLength);
		}
	};
	const incrementBreakLengthByOneMinute = () => {
		setBreakLength(breakLength + 60);
	};
	const decrementBreakLengthByOneMinute = () => {
		const newBreakLength = breakLength - 60;

		if (newBreakLength < 0) {
			setBreakLength(0);
		} else {
			setBreakLength(newBreakLength);
		}
	};
	return (
		<div className="App">
			<Session
				sessionLength={sessionLength}
				incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
				decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
			/>
			<Break
				breakLength={breakLength}
				incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
				decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
			/>
			<TimeLeft sessionLength={sessionLength} breakLength={breakLength} />
		</div>
	);
}

export default App;
