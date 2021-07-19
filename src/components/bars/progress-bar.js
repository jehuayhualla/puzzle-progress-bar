import React from 'react'
import Box from '../boxes/box'
import { range } from '../../help/utils'
import styles from './_progress-bar.module.css'
const ProgressBar = ({
  boxlength = 15,
  boxesLoaded = 10
}) => {

    const boxesArr = range(boxlength)

    return (
        <div className={styles.container}>
            {
                boxesArr.map(el =>(
                    <Box key={el} id={el} loaded={ el < boxesLoaded } />
                )) 
            }
        </div>
    )
}

export default ProgressBar
