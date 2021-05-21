import React, {useEffect, useState} from 'react'

import { jsPDF } from "jspdf";

function CreatePDF (props) {

    // let Help = props.medications.map(med => console.log(med.medication.name))
    let medName = props.medications.map(med => med.medication.name)
    let medDosage = props.medications.map(med => med.medication.dosage)
    // console.log(medName);

    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();

    let today = mm + '/' + dd + '/' + yyyy;
    console.log(today);

    const Hello = () => {

        const doc = new jsPDF();
        var pageWidth = 595;
        var pageHeight = 842;

    var pageMargin = 20
    
        doc.text(`Current Medications as of ${today}`,105, 20, null, null, "center");
        doc.text(medName,105, 30, null, null, "center");
        doc.save("a4.pdf");
    }


    return(
        <div>
            <button onClick={Hello} type="button" className="btn btn btn-info btn-sm btn-block">Download PDF</button>
        </div>
    )
}

export default CreatePDF