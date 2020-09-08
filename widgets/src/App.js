import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a top JS library among engineers',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components',
    },
];

const options = [
    {
        label: 'Red',
        value: 'red',
    },
    {
        label: 'Green',
        value: 'green',
    },
    {
        label: 'Blue',
        value: 'blue'
    }
]


export default () => {

    //const [selected, setSelected] = useState(options[0])
    //const [showDropdown, setShowDropdown] = useState(true);

    return  (
        <div>
            <Translate />
        </div>
    );
};


//<Accordion items={items} />

/*
<div>
            <Dropdown 
                selected={selected}
                dropdownLabel='Select a Color' 
                options={options} 
                onSelectedChange={setSelected}
            />
        </div>
        */