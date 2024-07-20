import React from 'react'

const About = (props) => {

    /*
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [BtnText, setBtnText] = useState('Enable Dark  Mode')

    const changeStyle = () => {
        if (myStyle.color === 'black') {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText('Enable Light Mode')
        }
        else {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText('Enable Dark Mode')
        }
    }
    */

    const myStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(33 51 56 / 99%)'
    }

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Analyze your text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, or linguistic complexity, our platform empowers users with comprehensive insights and streamlined text processing capabilities.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils is a free character counter tool that provides instant character count & word count statisticks for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Browser Compatible
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebbok, blog, books, excel document, pdf document, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button type="button" onClick={changeStyle} className="btn btn-primary my-2">{BtnText}</button> */}
            </div >
        </>
    )
}

export default About
