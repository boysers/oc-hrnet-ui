import { ChangeEvent, useEffect, useState } from "react";
import { Button,  DatePicker, Modal, SelectMenu, TextField, DataTable } from "../";
import { EMPLOYEES } from "./employees";
import { STATES } from "./states";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [selectedState, setSelectedState] = useState(STATES[0].abbreviation);

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	const handleSelectedState = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectedState(e.target.value);
	};

	useEffect(() => {
		console.log(selectedState);
	}, [selectedState]);

	return (
		<div>
			<TextField />
			<DatePicker />
			<SelectMenu
				value={selectedState}
				onChange={handleSelectedState}
				options={STATES.map((state) => ({
					value: state.abbreviation,
					label: state.name,
				}))}
			/>
			<Button onClick={toggleModal} disabled>
				disabled
			</Button>
			<Button onClick={toggleModal}>open modal</Button>
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
