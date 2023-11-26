import { useState } from "react";

export const CounterButton = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return <button onClick={handleClick}>CLICK! ${count}</button>;
};
