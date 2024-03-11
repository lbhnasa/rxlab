import {Link} from 'react-router-dom';

function DailyTask() {
    return(
    <>
        <ul className="resources-header">
            <h1>Daily link</h1>
            <Link className="links" to='https://mail.google.com/' target="_blank" >G Mail</Link>
            <Link className="links" to='https://pharmaclik-login.mckesson.ca/' target="_blank" >PharmaClick - McKesson</Link>
            <Link className="links" to='https://bc.clickrx.ca/Account/Login?ReturnUrl=%2F' target="_blank" >Imperial Distributors BC</Link>
         </ul>
 
    </>       
    )
}

export default DailyTask;