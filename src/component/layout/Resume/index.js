import classNames from "classnames";
import Intro from "./../../organisms/Intro";
import { iconListData } from "./iconListData";
import { SkillList } from "../../molecules/SkillList";
import { skillListData } from "./skillListData";
import HorizontalLine from "../../atoms/HorizontalLine";
import JobList from "../../molecules/JobList";
import jobListData from "./jobListData";

import './index.scss';


const Resume = () => {
    return(
        <div className={classNames('resume')}>
            <Intro iconListData={iconListData} />
            <div className={classNames('skill')}>
                <h2>前端開發技能</h2>
                <SkillList list={skillListData}/>
            </div>
            <HorizontalLine />
            <div className={classNames('job')}>
                <h2>工作經歷</h2>
                <JobList list={jobListData} />
            </div>
        </div>
        
    )
}

export default Resume;