import classNames from "classnames";

import './index.scss';

const FeatureList = ({list = {}}) => {
    return(
        <ul>
            {
                list.map(({ imgUrl, title, featureList, link, linkName})=> {
                    return(
                        <li className={classNames("feature-list-item")}>
                            <img src={imgUrl} alt={title} />
                            <div>
                                <div>
                                    <h3>{title ? title : ""}</h3>
                                    <ul>
                                        {
                                            featureList.map((item)=> {
                                                return(
                                                    <li>
                                                        - {item}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <a href={link} target="_blank" rel="noreferrer">{linkName}</a>

                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default FeatureList;