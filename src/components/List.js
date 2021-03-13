import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const List = ({ elementFech,setElementFech,ListClear}) => {
    const DeleteElement=(index)=>{
        setElementFech(elementFech.filter((list2,ind)=>(ind!==index)));
        if (elementFech.length===1) {
            ListClear();
        }
    }
    return (
        <ul className="list">
            {(elementFech.length>0) ?
             elementFech.map((list, index) =>
                <li className="element" key={index}>
                    <div className="text-element" >
                        {list.label}
                    </div>
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="delete-element"
                        onClick={()=>DeleteElement( index)}                        
                    />
                </li>)
             :<div></div>
            }
        </ul>
    );
}

export default List;