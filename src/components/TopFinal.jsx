import React from 'react'

const TopFinal = () => {
    return (
        <div className="topSection" >
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=chevron_right,chevron_left,menu,close" />
            <div className="centerFrame">
                <div className="leftFrame">
                    <div className="textFrame">
                        <h1>Turn your ideas into real products</h1>
                        <h4>Building value through a user first focus design while producing high quality results</h4>
                    </div>
                    <a className="ctaButton" href="https://www.linkedin.com/in/hugo-manzano-lara/"><h4>Contact Me</h4><span className="material-symbols-outlined">chevron_right</span></a>
                </div>

                <div className="imageCont">
                    <img src="./extraResources/HugoFoto_Head.png" alt="" />
                </div>
            </div>


        </div>


    )
}

export default TopFinal