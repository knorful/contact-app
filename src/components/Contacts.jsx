import { useEffect, useState } from "react";
import Contact from './Contact';
import "../stylesheets/Contacts.css";

const Contacts = (props) => {
    return (
        <div>
            {props.contacts.map((contact, i) => {
                return (
                    <Contact key={i} contact={contact} onRemove={props.onRemove} onEditClick={props.onEditClick} getContactId={props.getContactId} />
                )
            })}
        </div>
    )
}

export default Contacts;