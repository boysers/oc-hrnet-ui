import { ChangeEvent, useState } from "react";
import { EMPLOYEES } from "./employees";
import { STATES } from "./states";
import { TextField } from "../lib/Inputs/TextField";
import { DatePicker } from "../lib/Inputs/DatePicker";
import { SelectMenu } from "../lib/Inputs/SelectMenu";
import { Button } from "../lib/Inputs/Button";
import { Modal } from "../lib/Utils/Modal";
import { DataTable } from "../lib/DataTable";
import { Fieldset } from "../lib/Layout/Fieldset";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedState, setSelectedState] = useState(STATES[0].abbreviation);

	const handleToggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	const handleSelectedState = (e: ChangeEvent<HTMLSelectElement>) => {
		setSelectedState(e.target.value);
	};

	return (
		<div>
			<Fieldset legend="Fields">
				<TextField />
				<TextField type="number" />
				<DatePicker />
				<SelectMenu
					value={selectedState}
					onChange={handleSelectedState}
					options={STATES.map((state) => ({
						value: state.abbreviation,
						label: state.name,
					}))}
				/>
				<Button onClick={handleToggleModal} disabled>
					disabled
				</Button>
				<Button onClick={handleToggleModal}>open modal</Button>
				<Modal isOpen={isModalOpen} onClose={handleToggleModal}>
					<p>Employee Created!</p>
				</Modal>
			</Fieldset>
			<DataTable
				data={[...EMPLOYEES, ...EMPLOYEES]}
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
