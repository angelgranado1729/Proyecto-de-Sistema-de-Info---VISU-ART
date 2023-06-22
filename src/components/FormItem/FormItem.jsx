import React from 'react'
import styles from './FormItem.css'

function FormItem(props) {
  return (
    <div className="fItem">
      <label for={props.labelFor} name={props.labelName}>{props.labelDesc}</label>
      <input type={props.formType} id={props.labelFor} className={props.labelClass} />
    </div>
  )
}

export default FormItem