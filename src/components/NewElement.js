import React, { useState, useEffect } from 'react';
import List from './List';

const NewElement = () => {

    const [element, setElement] = useState('');
    
    const [elementFech, setElementFech] = useState([]);

    useEffect(() => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/juliocesar")
        .then(resp => resp.json())
        .then(data => setElementFech(data))
        .catch(error => console.log(error));
    }, [])
       
    
    fetch('https://assets.breatheco.de/apis/fake/todos/user/juliocesar', {
        method : "PUT",
        body: JSON.stringify(elementFech),
        headers:{
            "Content-Type": "application/json"
        },
    })

    const InputElement = (e) => {
        setElement(e.target.value);
    }

    const addElement = (e) => {
        
        e.preventDefault(); 
       
        fetch('https://assets.breatheco.de/apis/fake/todos/user/juliocesar', {
        method : "PUT",
        body: JSON.stringify(elementFech),
        headers:{"Content-Type": "application/json"},
       })
       .then(resp => resp.json())
       .then(() => setElementFech(elementFech.concat({"label": element, "done":false})))
       .catch(error => console.log(error));
        setElement('');
        
    }

    const ListClear =() =>{
        setElementFech(elementFech.filter((list2,ind)=>(ind==0)));
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
                <List elementFech={elementFech} setElementFech={setElementFech}/>
                <div className="sizeList">
                    <p>{elementFech.length>0 ? elementFech.length:"0"} item left</p>
                </div>
            </form>
            <div className="shade1"></div>
            <div className="shade2"></div>
            <button className="clear-list" onClick={ListClear}>Limpiar Lista</button>
        </>
    );
}

export default NewElement;