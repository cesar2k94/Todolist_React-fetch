import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const List = ({ list1, setList1 }) => {
    const DeleteElement=(index)=>{
        setList1(list1.filter((list2,ind)=>(ind!==index)));
    }
    return (
        <ul className="list">
            {list1.map((list, index) =>
                <li className="element" key={index}>
                    <div className="text-element" >
                        {list}
                    </div>
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="delete-element"
                        onClick={()=>DeleteElement( index)}                        
                    />
                </li>
            )}
        </ul>
    );
}

export default List;