import { useState } from "react";
import { DatePicker, Modal } from "../";
import { employees } from "./employees";
import { DataTable } from "../lib/DataTable";

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
			<DataTable
				data={[...employees, ...employees, ...employees]}
				columns={[
					{ title: "First Name", data: "firstName" },
					{ title: "Last Name", data: "lastName" },
					{ title: "Start Date", data: "startDate" },
					{ title: "Department", data: "department" },
					{ title: "Date of Birth", data: "dateOfBirth" },
					{ title: "Street", data: "street" },
					{ title: "City", data: "city" },
					{ title: "State", data: "state" },
					{ title: "Zip Code", data: "zipCode" },
				]}
			/>
		</div>
	);
}

export default App;
