import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from "react";

import './index.scss';

const Rotate = ({children}) => {
    const [status, setStatus] = useState(false);
    const onRotate = (status) => {
        setStatus(status);
        if(status){
            document.documentElement.scrollTop = 0
            document.documentElement.style.overflowY = "hidden"; 
        }else{
            document.documentElement.style.overflowY = "scroll";
        } 
    }
    return(
        <div className={classNames('rotate')}>
            <div className={classNames('menu-button', {'active': status })}>
                <FontAwesomeIcon onClick={()=>onRotate(true)} className={classNames('menu-open')} icon={solid('bars')} />
                <FontAwesomeIcon onClick={()=>onRotate(false)} className={classNames('menu-close')} icon={solid('xmark')} />
            </div>
            <div className={classNames('rotate-content', {'active': status})}>
                { children }
            </div>
            <ul className={classNames('menu-content')}>
                    <li>
                        <a target="_blank" href="https://youtu.be/ge4AVZKvhew" rel="noreferrer"><FontAwesomeIcon icon={brands('youtube')} /></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/vivian_enlife/" rel="noreferrer"><FontAwesomeIcon icon={brands('instagram')} /></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://open.firstory.me/story/cl09b5o6i2ozt088571f9th1l" rel="noreferrer"><FontAwesomeIcon icon={solid('podcast')} /></a>
                    </li>
                </ul>
            
        </div>
    )
}

export default Rotate;