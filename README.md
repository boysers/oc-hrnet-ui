# HRnet UI

La bibliothèque HRnet UI est un ensemble de composants React qui offre des fonctionnalités similaires au plugin DataTables pour jQuery, mais sous forme de composants React. 

En plus, elle propose également des composants supplémentaire comme : Modal, DatePicker et SelectMenu.

## Installation

Pour installer la bibliothèque, utilisez la commande npm suivante :

```bash
npm install oc-hrnet-ui
```

## Exemple d'utilisation

### DataTable

Importez le composant dans votre fichier React et utilisez-le comme suit :

```js
import React from "react";
import { DataTable } from "oc-hrnet-ui/DataTable";

const App = () => {
	// Données à afficher dans le tableau
	const data = [
		{ firstName: "John", lastName: "Doe", age: 30, city: "New York" },
		{ firstName: "Jane", lastName: "Doe", age: 28, city: "Los Angeles" },
		// ... autres données
	];

	// Configuration des colonnes
	const columns = [
		{ title: "First Name", data: "firstName" },
		{ title: "Last Name", data: "lastName" },
		{ title: "Age", data: "age" },
		{ title: "City", data: "city" },
	];

	return <DataTable data={data} columns={columns} />;
};
```

#### Propriétés

-   `data` : (Array, requis) - Tableau des données à afficher.
-   `columns` : (Array, requis) - Configuration des colonnes. Chaque objet doit avoir les propriétés suivantes :
    -   `title` : (string, requis) - Titre de la colonne.
    -   `data`: (string, requis) - Clé associée aux données dans le tableau.

### Modal

```js
import React, { useState } from "react";
import { Modal } from "oc-hrnet-ui";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleModal = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div>
			<button onClick={handleToggleModal}>Ouvrir la modal</button>
			<Modal isOpen={isOpen} onClose={handleToggleModal}>
				{/* Contenu de la modal */}
			</Modal>
		</div>
	);
};
```

#### Propriétés

-   `isOpen` : (boolean) - Détermine si la modal est ouverte ou fermée.
-   `onClose` : (function) - Fonction appelée lorsque la modal doit se fermer. Cette fonction peut être utilisée pour mettre à jour l'état parent et fermer la modal.

### SelectMenu

```js
import React, { useState } from "react";
import { SelectMenu } from "oc-hrnet-ui";

const App = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return <SelectMenu value={selectedOption} onChange={handleOptionChange} />;
};
```

#### Propriétés

-   `options` : (Array, requis) - Tableau d'objets représentant les options dans le menu déroulant. Chaque objet doit avoir les propriétés suivantes :
    -   `value` : (string, requis) - Valeur de l'option.
    -   `label` : (string, requis) - Libellé de l'option.
-   `value` : (string ou null) - Valeur actuelle sélectionnée dans le menu. Utilisez `null` si aucune option n'est sélectionnée.
-   `onChange` : (function) - Fonction appelée lorsqu'une option est sélectionnée. La fonction reçoit un objet représentant l'événement `change`, et la valeur sélectionnée peut être extraite à partir de `event.target.value`.

### DatePicker

```js
import React, { useState } from "react";
import { DatePicker } from "oc-hrnet-ui";

const App = () => {
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = (event) => {
		setSelectedDate(event.target.value);
	};

	return <DatePicker value={selectedDate} onChange={handleDateChange} />;
};
```

#### Propriétés

-   `value` : (Date ou null) - Valeur actuelle du DatePicker. Utilisez une valeur de type `Date` ou `null` si aucune date n'est sélectionnée.
-   `onChange` : (function) La fonction appelée lorsqu'une date est sélectionnée. La fonction reçoit en paramètre un objet représentant l'événement `change`, et la date sélectionnée peut être extraite à partir de `event.target.value`.
