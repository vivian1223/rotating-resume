import classNames from "classnames";
import IconList from "./../../molecules/IconList";

const Intro = ({iconListData}) => {
    return(
        <div className={classNames('self_intro')}>
                <img src={require('./../../../images/selfie.jpg')} alt="Selfie" />
                <h1>Vivian Yeh</h1>
                <p>東吳大學 英文系 2015-2019</p>
                <p>Hi！我是Vivian，是一名熱於學習的前端工程師，個性主動積極、擅長團隊協作及遠距溝通，熱愛研究新事物、閱讀與挑戰自我。</p>
                <IconList list={iconListData}/>
        </div>
    )
}

export default Intro;