import React, { useState } from "react";
import "./contact.scss";
import { Container } from "react-bootstrap";
import NavbarComponent from "../../common/navbar/navbarComponent";
import FooterComp from "../../common/footer/footerComp";

function Book({ add }) {
	// const { data } = props
	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [phone, setPhone] = useState("");
	const [value, setValue] = useState("");
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		phone: "",
	});

	// const sendData = (name, value) => {
	// 	setData({
	// 		...data,
	// 		[name]: value,
	// 	});
	// };

	const handleName = (e) => {
		setFName(e.target.value);
		// sendData("firstName", fName);
	};

	const handleNameL = (e) => {
		setLName(e.target.value);
		// sendData("lastName", lName);
	};

	const handlePhone = (e) => {
		setPhone(e.target.value);
		// sendData("phone", phone);
	};
	console.log("data", data);
	// console.log("firstName", fName);
	// console.log("lastName", lName);
	// console.log("phone", phone);
	// const add = (data) => setPhoneBook([...phoneBook, { data }]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setData({
			...data,
			firstName: fName,
			lastName: lName,
			phone: phone,
		});
		setFName("");
		setLName("");
		setPhone("");
		// alert(`Submitting Name ${fName}`)
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>First Name</label>
			<br />
			<input name="userFName" type="text" value={fName} onChange={handleName} />
			<br />
			<label>Last Name</label>
			<br />
			<input
				name="userLName"
				type="text"
				value={lName}
				onChange={handleNameL}
			/>
			<br />
			<label>Phone Number</label>
			<br />
			<input
				name="userPhone"
				type="text"
				value={phone}
				onChange={handlePhone}
			/>
			<input type="submit" value="Submit" />
		</form>
	);
}

function Table({ ...props }) {
	// const [phoneBook, setPhoneBook] = useState([
	// 	{
	// 		firstName: "",
	// 		lastName: "",
	// 		phone: "",
	// 	},
	// ]);
	console.log("phoneBook", Book.data);

	// const add = (data) => setPhoneBook([...phoneBook, { data }]);
	return (
		<table>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Phone</th>
				</tr>
			</thead>
			<tbody>
				{Book?.data?.map((data, index) => {
					return (
						<tr key={index}>
							<th>{data.firstName}</th>
							<th>{data.lastName}</th>
							<th>{data.phone}</th>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

const ContactPage = () => {
	return (
		<div>
			<NavbarComponent />
			<Container className="contact">
				This page still in progress. I can't wait to show you as soon as
				possible. See you soon.
			</Container>
			{/* <Container>
				<Book />
				<Table />
			</Container> */}
			<FooterComp />
		</div>
	);
};

export default ContactPage;
