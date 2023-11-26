import { useState } from "react";
import { DatePicker, Modal } from "../";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	return (
		<div>
			<DatePicker />
			<button onClick={toggleModal}>open modal</button>
			<Modal isOpen={isModalOpen} onClose={toggleModal}>
				<p>Employee Created!</p>
			</Modal>
		</div>
	);
}

export default App;
