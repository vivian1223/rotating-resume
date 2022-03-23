import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const IconList = ({list}) => {
    return (
        <ul className={classNames('icon-list')}>
            {
                list.map(({id ,iconClass, link})=> {
                    return(
                        <li key={id}><a href={link} target="_blank" rel="noreferrer"><FontAwesomeIcon className={classNames('icon')} icon={iconClass} /></a></li>
                    )
                })
            }
        </ul>
    )
}

export default IconList;