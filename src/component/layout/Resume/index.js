import classNames from "classnames";
import Intro from "./../../organisms/Intro";
import { iconListData } from "./iconListData";
import { SkillList } from "../../molecules/SkillList";
import { skillListData } from "./skillListData";
import HorizontalLine from "../../atoms/HorizontalLine";

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
        </div>
        
    )
}

export default Resume;