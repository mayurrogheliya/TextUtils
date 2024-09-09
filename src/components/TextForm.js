import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


const TextForm = (props) => {

    const [text, setText] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const [voice, setVoice] = useState(null);

    const handleOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success')
    }

    const handleLowClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert('Converted to LowerCase', 'success')
    }

    const handleClearClick = () => {
        let cleartText = ''
        setText(cleartText)
        props.showAlert('Text is clear', 'success')
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text.valueOf());
        props.showAlert('Text is copy ', 'success')
    }

    const handleCapitalClick = () => {
        let capText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(capText)
        props.showAlert('Converted to Capitalize', 'success')

    }

    const handleSpaceClick = () => {
        let spaceRemove = text.split(/[ ]+/);
        setText(spaceRemove.join(' '))
        props.showAlert('Remove extra spaces', 'success')
    }

    const handleOnChange = (event) => {
        const newText = event.target.value
        setText(newText)

        if (newText.length === 0) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
        }
    }

    // handle the voice
    useEffect(() => {
        const loadvoice = () => {
            const voices = window.speechSynthesis.getVoices();
            const selectVoice = voices.find((v) => v.name === "Samantha");
            if (selectVoice) {
                setVoice(selectVoice);
            }
        }
        loadvoice();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadvoice();
        }
        return () => {
            window.speechSynthesis.cancel();
        }
    }, []);

    const handlePlayPauseClick = () => {
        if (isPlaying) {
            window.speechSynthesis.cancel(); // Stops the speech if it's already playing
        } else {
            let speech = new SpeechSynthesisUtterance();
            speech.text = text;
            if (voice) {
                speech.voice = voice
            }
            speech.onend = () => {
                setIsPlaying(false);
            }
            window.speechSynthesis.speak(speech);
        }
        setIsPlaying(!isPlaying); // Toggle the state after the action is performed
    }

    return (
        <>

            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color: props.mode === 'light' ? 'black' : 'white' }} id="myText" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleOnClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalClick}>Capitalized Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleSpaceClick}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handlePlayPauseClick}>
                    {
                        isPlaying ? (
                            <>
                                Stop <FontAwesomeIcon icon={faPause} />
                            </>
                        ) : (
                            <>
                                Listen <FontAwesomeIcon icon={faPlay} />
                            </>
                        )
                    }
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length
                } Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}

export default TextForm
