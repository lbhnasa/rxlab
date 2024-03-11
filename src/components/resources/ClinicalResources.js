import {Link} from 'react-router-dom';


function ClinicalReferences() {
    return(
        <>
            <ul className="resources-header">
            <h1>Clinical references</h1>
            <Link className="links" to='https://switchrx.com/' target='_blank'>SwitchRX</Link>
            <Link className="links" to='https://www.wolterskluwer.com/en/solutions/lexicomp' target='_blank'>Lexicomp</Link>
            <Link className="links" to='http://www.bccdc.ca/health-professionals/clinical-resources/communicable-disease-control-manual/immunization/biological-products' target='_blank'>BCCDC part4 Biologic Products (Vaccines & Immune Globulins)</Link>
            </ul>
        </>
    )
}

export default ClinicalReferences;