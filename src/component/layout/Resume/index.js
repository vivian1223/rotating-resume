import classNames from "classnames";

import './index.scss';

const Resume = () => {
    return(
        <div>
            <div className={classNames('self_intro')}>
                <img src={require('./../../../images/selfie.jpg')} alt="Selfie" />
                <h1>Vivian Yeh</h1>
                <p>東吳大學 英文系 2015-2019</p>
            </div>
        </div>
    )
}

export default Resume;