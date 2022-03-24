import classNames from "classnames";

import './index.scss';

export const SkillList = ({list}) => {
    return (
        <ul className={classNames('skill-list')}>
            {
                list.map(({id, title, skills})=>{
                    return (
                      <li key={id} className={classNames('skill-list-item')}>
                        <h3>{title}</h3>
                        <ul>
                            {skills.map((item,index) => {
                                return (
                                 <li key={index}>
                                    {item}
                                </li>   
                                ) 
                            })}
                        </ul>
                    </li>  
                    ) 
                })
            }
        </ul>
    )
}