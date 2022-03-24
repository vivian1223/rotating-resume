import classNames from "classnames";

import './index.scss';

const HorizontalLine = ({className=""}) => {
    return(
        <div className={classNames('horizontal-line',className )}></div>
    )
}

export default HorizontalLine;

