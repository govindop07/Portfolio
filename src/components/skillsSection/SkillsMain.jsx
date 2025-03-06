import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import AllSkillsSm from './AllSkillsSm';

const skillsMain = () => {
    return(
        <div id='skills'>
            <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden flex flex-col gap-16">
                <SkillsText />
                <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] hidden lg:block">
                    <AllSkills />
                </div>
                <div className='block lg:hidden'>
                    <AllSkillsSm />
                </div>
            </div>
        </div>
    );
}

export default skillsMain