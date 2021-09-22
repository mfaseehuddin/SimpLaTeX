import React from "react";

export default function FormSimp({ textInput, setTextInput, SimpConv, setShower }) {
    const handleChange = (e) => {
        setTextInput(e.target.value);

        setShower(0);

    };
    
    const handleSubmit = (e) => {

        e.preventDefault();
        SimpConv(textInput);
    };

    return (
        <form className={"FormSimp"} onSubmit={handleSubmit}>
            <input type="text" placeholder="eg. (P V Q) ^ !R --> S" value={textInput} onChange={handleChange} />
            <button className={"MagicButton"}>Magic!</button>
        </form>
    );
}
