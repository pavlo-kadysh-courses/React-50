import React from 'react'
import styles from './vote.module.scss';

export default function VoteActions({leaveVote}) {
  return (
    <>
    <div className={styles.element}>
        <button onClick={() => leaveVote("democrats")}>За демократів</button>
    </div>
    <div className={styles.element}>
        <button onClick={() => leaveVote("republic")}>За республіканців</button> 
    </div>
</>
  )
}
