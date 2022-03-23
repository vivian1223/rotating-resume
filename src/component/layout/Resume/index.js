import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const Resume = () => {
    return(
        <div className={classNames('self_intro')}>
            <img src={require('./../../../images/selfie.jpg')} alt="Selfie" />
            <h1>Vivian Yeh</h1>
            <p>東吳大學 英文系 2015-2019</p>
            <p>Hi！我是Vivian，是一名熱於學習的前端工程師，個性主動積極、擅長團隊協作及遠距溝通，熱愛研究新事物、閱讀與挑戰自我。</p>
            <ul>
                <li><a href="https://github.com/vivian1223" target="_blank" rel="noreferrer"><FontAwesomeIcon className={classNames('icon')} icon="fa-brands fa-github" /></a></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Resume;