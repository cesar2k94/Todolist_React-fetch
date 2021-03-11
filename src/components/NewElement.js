import React, { useState, useEffect } from 'react';
import List from './List';

const NewElement = () => {

    const [element, setElement] = useState('');
    
    const [elementFech, setElementFech] = useState([]);

    const [list1, setList1] = useState([]);

    useEffect(() => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/juliocesar")
        .then(resp => resp.json())
        .then(data => setElementFech(data))
        .catch(error => console.log(error));
    }, [])

    const InputElement = (e) => {
        setElement(e.target.value);
    }

    const addElement = (e) => {
        e.preventDefault();
        setList1(list1.concat(element));
        setElement('');
    }

    const ListClear =() =>{
        setList1([]);
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
                <List list1={list1} setList1={setList1} elementFech={elementFech}/>
                <div className="sizeList">
                    <p>{elementFech.length} item left</p>
                </div>
            </form>
            <div className="shade1"></div>
            <div className="shade2"></div>
            <button className="clear-list" onClick={ListClear}>Limpiar Lista</button>
        </>
    );
}

export default NewElement;