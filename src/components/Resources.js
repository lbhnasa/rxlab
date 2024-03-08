import React from 'react';
import {Link} from 'react-router-dom';

function Resources() {
    return(
        <>

        <ul >Daily tasks
            <Link to='https://mail.google.com/' target="_blank" >
                G Mail
            </Link>
            <li>mcKesson Canada</li>
            <li>imperial distributor</li>
            <li>medsask</li>
        </ul>
        <ul>
            Clinical references
            <li>SwitchRX</li>
            <li>LexiCom</li>
            <li>BCCDC part4</li>
        </ul>
        <ul >immsBC
            <li>adm</li>
            <li>clinician</li>
            <li>weekly vaccine order</li>
        </ul>
        <ul>Pharmacy supplies
            <li>Jones supply</li>
            </ul>
        </>
    )
}

export default Resources;