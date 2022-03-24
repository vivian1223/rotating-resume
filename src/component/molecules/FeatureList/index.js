import classNames from "classnames";

import './index.scss';

const FeatureList = ({list = {}}) => {
    return(
        <ul>
            {
                list.map(({ img, title, featureList, url})=> {
                    return(
                        <li>

                        </li>
                    )
                })
            }
        </ul>
    )
}

export default FeatureList;