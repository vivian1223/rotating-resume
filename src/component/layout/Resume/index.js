import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const iconListData = [
    {
        id:1,    
        iconClass: "fa-brands fa-github",
        link: 'https://github.com/vivian1223'
    },
    {
        id:2,       
        iconClass: "fa-brands fa-linkedin",
        link: 'https://www.linkedin.com/in/vivian-yeh-36b21a1b7/'
    },
]

export const IconList = ({list}) => {
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

const Resume = () => {
    return(
        <div className={classNames('resume')}>
            <div className={classNames('self_intro')}>
                <img src={require('./../../../images/selfie.jpg')} alt="Selfie" />
                <h1>Vivian Yeh</h1>
                <p>東吳大學 英文系 2015-2019</p>
                <p>Hi！我是Vivian，是一名熱於學習的前端工程師，個性主動積極、擅長團隊協作及遠距溝通，熱愛研究新事物、閱讀與挑戰自我。</p>
                <IconList list={iconListData}/>
            </div>
            <div className={classNames('skill')}>

            </div>
        </div>
        
    )
}

export default Resume;