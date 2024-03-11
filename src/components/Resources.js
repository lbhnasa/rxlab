import React from 'react';
import DailyTask from './resources/DailyTask'
import ClinicalReferences from './resources/ClinicalResources';
import ImmsBC from './resources/ImmsBC';

function Resources() {
    return(
        <>
        <DailyTask/>
        <ClinicalReferences/>
        <ImmsBC/>
        <br/>


        <ul>Pharmacy supplies
            <li>Jones supply</li>
            </ul>
        </>
    )
}

export default Resources;