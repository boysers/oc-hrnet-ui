import { useState } from "react";
import { DatePicker, Modal, DataTable, SelectMenu } from "../";
import { EMPLOYEES } from "./employees";
import { STATES } from "./states";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	return (
		<div>
			<DatePicker />
			<SelectMenu
				options={STATES.map((state) => ({
					value: state.abbreviation,
					label: state.name,
				}))}
			/>
			<button onClick={toggleModal}>open modal</button>
			<Modal isOpen={isModalOpen} onClose={toggleModal}>
				<p>Employee Created!</p>
			</Modal>
			<DataTable
				data={[...EMPLOYEES, ...EMPLOYEES, ...EMPLOYEES]}
				// data={[]}
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
