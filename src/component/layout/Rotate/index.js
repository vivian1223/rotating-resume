import classNames from "classnames";

import './index.scss';

const Rotate = ({children}) => {
    return(
        <div className={classNames('rotate')}>
            { children }
        </div>
    )
}

export default Rotate;