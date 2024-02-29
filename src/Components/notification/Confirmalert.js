import React from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const Confirmalert = () => {
    const submit = () => {
        confirmAlert({
          title: 'Confirm to Cancel Request',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => alert('Click Yes')
            },
            {
              label: 'No',
              onClick: () => alert('Click No')
            }
          ]
        });
      };
    
      return (
        <div className='container'>
          <button onClick={submit}>Confirm dialog</button>
        </div>
      );
    
}
