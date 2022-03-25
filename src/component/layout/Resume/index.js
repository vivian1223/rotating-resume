import classNames from "classnames";
import Intro from "./../../organisms/Intro";
import { iconListData } from "./iconListData";
import { SkillList } from "../../molecules/SkillList";
import { skillListData } from "./skillListData";
import HorizontalLine from "../../atoms/HorizontalLine";
import JobList from "../../molecules/JobList";
import jobListData from "./jobListData";
import FeatureList from "../../molecules/FeatureList";
import sideProjectsListData from "./sideProjectslistData";
import aboutListData from "./aboutListData";

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
            <HorizontalLine />
            <div className={classNames('feature')}>
                <h2>Side Projects</h2>
                <FeatureList list={sideProjectsListData}/>
            </div>
            <HorizontalLine />
            <div className={classNames('about')}>
                <h2>關於我</h2>
                <FeatureList list={aboutListData}/>
            </div>
        </div>
        
    )
}

export default Resume;