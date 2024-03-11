import {Link} from 'react-router-dom';

function ImmsBC () {
    return (
        <>
        <ul className="resources-header">
            <h1>ImmsBC Links</h1>
            <Link className="links" to='https://bcphsa.my.salesforce.com/force.com/lightning/n/BCH_In_Clinic_User_Defaults' target="_blank" >Admin</Link>
            <Link className="links" to='https://cp.getvaccinated.gov.bc.ca/bchvaxportal/s/login/?ec=302&startURL=%2Fbchvaxportal%2Fs%2F' target="_blank" >Clinician</Link>
        </ul>
         </>
    )
}

export default ImmsBC;