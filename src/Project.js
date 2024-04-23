import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMapMarkerAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import './project.css';
function Project() {
    return (
    <div className='contene'>
    <div className='icn'>
    <FontAwesomeIcon icon={faArrowLeft} className='icons' />
    <FontAwesomeIcon icon={faPlus}  className='icons' /> 
    </div>
<h1 className='time'>Today, 10:30AM</h1>
<div className='cale'>
    <h1 className='conference'>National level Project Conference</h1>
    <h2 className='TECHyear'>TECH EXPO 2024</h2>
    <div className='MAP'>
    <FontAwesomeIcon icon={faMapMarkerAlt}  className='map' />
    <h3 className='location'>Loni, Maharastra</h3>
    </div>
    <p className='Par'>Nade omins iste natus error sited voluptaccusantum edolor emque lauda ntium totam arrem apriram eaque ipsa , quae ab uillo invento re et quasi architech beatae vitae shunt ntium , totam arrem aperim et quasi.architecto beatae vitae. </p>
   <div className='img'></div>
   <div className='but'>Join</div>
</div>
</div>
    );       
};
export default Project;