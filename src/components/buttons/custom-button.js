import React from 'react'
import styles from './_custom-button.module.css'
//import './_box.css'

const CustomButton = ({
  title = "title",
  onClick = () => {},
}) => {

  return (
    <a onClick={onClick} className={styles.myButton} >{title} </a>
  )
}

export default CustomButton
