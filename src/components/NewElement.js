import React, { useState } from 'react';
import List from './List';

const NewElement = () => {

    const [element, setElement] = useState('');

    const [list1, setList1] = useState(['Make the bed', 'Eat', 'Walk the dog']);

    const InputElement = (e) => {
        setElement(e.target.value);
    }

    const addElement = (e) => {
        e.preventDefault();
        setList1(list1.concat(element));
        setElement('');
    }

    return (
        <>
            <form className="tolist" onSubmit={addElement} >
                <input
                    type="text"
                    className="new-tolist"
                    placeholder="What needs to be done?"
                    value={element}
                    onChange={InputElement}
                />
                <List list1={list1} setList1={setList1}/>
                <div className="sizeList">
                    <p>{list1.length} item left</p>
                </div>
            </form>
            <div className="shade1"></div>
            <div className="shade2"></div>
        </>
    );
}

export default NewElement;