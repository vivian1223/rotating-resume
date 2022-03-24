import React from "react";
import classNames from "classnames";


import './index.scss';

const JobList = ({list}) => {
    return (
        <ul className={classNames('job-list')}>
            {
                list.map(({id,position, company, startTime, endTime, experienceList})=>{
                    return(
                        <li key={id} className={classNames('job-list-item')}>
                            <p>
                                <span>
                                    {position}
                                </span>
                                 ・ 
                                <span>
                                    { company }
                                </span>
                            </p>
                            <p>
                                {
                                    startTime
                                }-
                                {
                                    endTime
                                }
                            </p>
                            <ul>
                                {experienceList.map((item) =>{
                                    return (
                                        <li>
                                             - {item}
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

export default JobList;