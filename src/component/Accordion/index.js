import React from 'react';
import { useRef, useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Accordion = ({list}) => {
    const renderAccordionItem = useRef('');
    const [activeItem, setActiveItem] = useState(0)
    const showKey = async (id) => {
        let status;
        if(activeItem !== id){
            status = id;
        }else{
            status = 0;
        }
        setActiveItem(status);
    };
    useEffect(() => {
        console.log(activeItem);
      }, [activeItem])
    const showActiveItem = (id) => activeItem === id ? 'minus':'plus';
    const showActiveContent = (id, content) => {
        console.log()
        if(activeItem === id) {
            return (
                <p className='accordion-content'>
                    {content}
                </p>
            )
        }else {
            return;
        }
    }
    const renderList = list.map((item)=> {
        return (
            <div ref={renderAccordionItem} className='accordion-item' key={item.id}>
                <div className='accordion-title'>
                    <p>
                        {item.title}
                    </p>
                    <FontAwesomeIcon className='accordion-link' icon={showActiveItem(item.id)} onClick={()=>showKey(item.id)}/>
                </div>
                <React.Fragment>
                    {showActiveContent(item.id, item.content)}
                </React.Fragment>
            </div>
        );
    })
    return (
        <div className="accordion">
            { renderList }
        </div>
    )
}

export default Accordion;
