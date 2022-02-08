import React, { useState } from 'react';
import "../stylesheets/AddContactForm.css";

const AddContactForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        let nextId = props.id + 1;
        props.onSubmit({
            id: nextId,
            name: props.name,
            email: props.email,
            phone: props.phone,
            address: props.address,
            city: props.city,
            state: props.state,
            zip: props.zip
        });
    }

    const handleEditConfirm = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: props.id,
            name: props.name,
            email: props.email,
            phone: props.phone,
            address: props.address,
            city: props.city,
            state: props.state,
            zip: props.zip
        });
    }

    return (
        <form id="AddContactForm" onSubmit={props.onEdit ? handleEditConfirm : handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={props.name} onChange={props.handleNameChange} /><br />

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" value={props.email} onChange={props.handleEmailChange} /><br />

            <label htmlFor="phone">Phone: </label>
            <input type="text" id="phone" name="phone" value={props.phone} onChange={props.handlePhoneChange} /><br />

            <label htmlFor="address">Address: </label>
            <input type="text" id="address" name="address" value={props.address} onChange={props.handleAddressChange} /><br />

            <label htmlFor="city">City: </label>
            <input type="test" id="city" name="city" value={props.city} onChange={props.handleCityChange} /><br />

            <label htmlFor="state">State: </label>
            <input type="text" id="state" name="state" value={props.state} onChange={props.handleStateChange} /><br />

            <label htmlFor="zip">Zip: </label>
            <input type="text" id="zip" name="zip" value={props.zip} onChange={props.handleZipChange} /><br />
            {!props.onEdit ? <AddButton /> : <EditButton />}
        </form>
    )

}

const EditButton = () => {
    return (
        <div id="submit-btn">
            <input type="submit" value="Confirm" />
        </div>

    )
}

const AddButton = () => {
    return (
        <div id="submit-btn">
            <input type="submit" value="Submit" />
        </div>
    )
}


export default AddContactForm;