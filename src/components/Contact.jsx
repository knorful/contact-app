import { useState } from "react";
import "../stylesheets/Contact.css";

const Contact = (props) => {
    const [showFull, setShowFull] = useState(false);

    const handleShowFullClick = (e) => {
        setShowFull(!showFull);
    }
    return (
        <div id="Contact" onClick={() => { handleShowFullClick(); props.getContactId(props.contact) }} onDoubleClick={() => props.onRemove(props.contact.id)}>
            <p>{props.contact.name}</p>
            <p>{props.contact.city}</p>
            <p>{props.contact.state}</p>
            {showFull ? (
                <>
                    <p>{props.contact.email}</p>
                    <p>{props.contact.phone}</p>
                </>
            ) : false}
            <button id="edit-btn" title="edit contact" onClick={() => { props.onEditClick(props.contact.id); props.getContactId(props.contact) }}>
                <i className="far fa-edit"></i>
            </button>
        </div>
    )
}

export default Contact;