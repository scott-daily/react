import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';


// key = AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
    {
        label: 'Finnish',
        value: 'fi',
    },
    {
        label: 'German',
        value: 'de',
    },
    {
        label: 'French',
        value: 'fr',
    },
    {
        label: 'Icelandic',
        value: 'is',
    },
    {
        label: 'Italian',
        value: 'it',
    },
    {
        label: 'Chinese Traditional',
        value: 'zh-TW',
    },
];


const Translate = (props) => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form segment">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
                label='Select a Language' 
                selected={language} 
                onSelectedChange={setLanguage} 
                options={options}
            />
            <div className="ui segment">
            <h3 className="ui header">Output</h3>  
                <Convert 
                    language={language} 
                    text={text} 
                />
            </div>
        </div>
    )
}

export default Translate;