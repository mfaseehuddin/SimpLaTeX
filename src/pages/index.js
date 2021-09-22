import React, { useState } from "react";
import FormSimp from "../components/FormSimp";
import "./index.css";

const IndexPage = () => {
    const [textInput, setTextInput] = useState("");
    const [latexOutput, setLatexOutput] = useState("Your Text Will Be Displayed Here");
	const [shower, setShower] = useState(0);
    
    const CopyClip = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log("Copied");
        });
    };
    const SimpConv = (textInput) => {
		var convertedText = textInput.replace(/\s/g, "");
        console.log(convertedText);
        var latexOutputText = "$ ";
        var commands = {
			"V": "\\lor",
            "|": "\\lor",
			"∨": "\\lor",
            "^": "\\land",
            "&": "\\land",
			"∧": "\\land",
            "!": "\\lnot",
			"¬": "\\lnot",
            "~": "\\lnot",
			">": "\\rightarrow",
			"->": "\\rightarrow",
			"-->":"\\rightarrow",
			"−→":"\\rightarrow",
			"→":"\\rightarrow",
			"=":"\\equiv",
			"≡":"\\equiv",
			"[":"\[",
			"]":"\]"
        };
        var brackets = ["\[", "\]", "(", ")"];
        convertedText.split("").forEach((character) => {
			if (character in commands) {
				latexOutputText += commands[character] + " ";
            } else if (/^[a-zA-Z()]+$/.test(character)) {
				latexOutputText += character + " ";
            } else if (character in brackets) {
				latexOutputText += character;
            } else {
				console.log("error");
            }
        });
        latexOutputText += "$";
        console.log(latexOutputText);
        setLatexOutput(latexOutputText);
        CopyClip(latexOutputText)
		setShower(1)
    };
	
    return (
        <main className={"main"}>
            <div className={"appContainer"}>
                <h1 style={{padding: ".5em"}}>Simp<span style={{color:"#01FDB5"}}>LaTeX</span></h1>
				<h4 style={{fontWeight: 100}}>Just write your equation and click magic!</h4>
                <h5 style={{marginTop: "5px"}}><a style={{color: "#01FDB5"}} href="https://instagram.com/mfaseehuddin">mfaseehuddin</a> x <a style={{color: "#01FDB5"}} href="https://instagram.com/walogss">usmanwadood</a></h5>
				<FormSimp
                    className={"FormSimp"}
                    textInput={textInput}
                    setTextInput={setTextInput}
                    SimpConv={SimpConv}
					setShower = {setShower}
                />
                <div
                    className={"latexContainer"}
                    onClick={()=>{CopyClip(latexOutput); setShower(1)}}
                >
                    <p>{latexOutput}</p>
                    
                </div>
                <p className="hidden-alert" style={{opacity: shower}}>Your Text Has Been Copied!</p>
            </div>
        </main>
    );
};

export default IndexPage;
