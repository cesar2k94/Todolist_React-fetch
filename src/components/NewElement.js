import React, { useState, useEffect } from 'react';
import List from './List';

const NewElement = () => {

    const [element, setElement] = useState('');

    const [elementFech, setElementFech] = useState([]);

    useEffect(() => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/juliocesar")
            .then(resp => resp.json())
            .then((data) => {
                setElementFech(data);
                if (elementFech) {
                    fetch('https://assets.breatheco.de/apis/fake/todos/user/juliocesar', {
                        method: 'POST',
                        body: JSON.stringify({
                            "label": element,
                            "done": "flase"
                        }),
                        headers: { "Content-type": "application/json" },
                    })
                    setElementFech([]);
                }
            })
            .catch(error => console.log(error));
    }, [])

    fetch('https://assets.breatheco.de/apis/fake/todos/user/juliocesar', {
        method: "PUT",
        body: JSON.stringify(elementFech),
        headers: {
            "Content-Type": "application/json"
        },
    })

    const InputElement = (e) => {
        setElement(e.target.value);
    }

    const addElement = (e) => {
        e.preventDefault();
        if (elementFech.length < 1) {
            setElementFech(elementFech.concat({ "label": element, "done": false }));
            fetch('https://assets.breatheco.de/apis/fake/todos/user/juliocesar', {
                method: 'POST',
                body: JSON.stringify({
                    "label": element,
                    "done": "flase"
                }),
                headers: { "Content-type": "application/json" },
            })
        } else {
            console.log(element);
            //let array= elementFech;
            setElementFech(elementFech.concat({ "label": element, "done": false }));
            console.log(elementFech);
            fetch('https://assets.breatheco.de/apis/fake/todos/user/juliocesar', {
                method: "PUT",
                body: JSON.stringify(elementFech),
                headers: { "Content-Type": "application/json" },
            })
                .then(resp => resp.json())
                .then(data => console.log(data))
                .catch(error => console.log(error));
        }
        setElement('');
    }

    const ListClear = () => {
        setElementFech([]);
        setElement("");
        fetch('https://assets.breatheco.de/apis/fake/todos/user/juliocesar', {
            method: "DELETE"
        });
    }
    return (
        <>
            <form className="tolist" onSubmit={(e) => addElement(e)} >
                <input
                    type="text"
                    className="new-tolist"
                    placeholder="What needs to be done?"
                    value={element}
                    onChange={InputElement}
                />
                <List elementFech={elementFech} setElementFech={setElementFech} ListClear={ListClear} />
                <div className="sizeList">
                    <p>{elementFech.length > 0 ? elementFech.length : "0"} item left</p>
                </div>
            </form>
            <div className="shade1"></div>
            <div className="shade2"></div>
            <button className="clear-list" onClick={ListClear}>Limpiar Lista</button>
        </>
    );
}

export default NewElement;