import React from 'react'
import clsx from 'clsx'
import styles from './_box.module.css'
//import './_box.css'

const Box = ({
  loaded = false,
}) => {

  return (
    <div className={clsx(styles.box, loaded && styles.boxGreen)} />
  )
}

export default Box
