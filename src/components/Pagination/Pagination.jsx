import React from 'react'
import styles from './styles.module.css'

export const Pagination = ({totalPages,handleNextPage , handlePrevPage ,setCurrentPage, currentPage}) => {
  return (
    <div className={styles.pagination}>
        <button 
        onClick={handlePrevPage} 
        disabled={currentPage<=1}
        className={styles.arrow}>{'<'}</button>
        <div className={styles.list}>
            {[...Array(totalPages)].map((_,index)=>(
                <button 
                onClick={()=>setCurrentPage(index+1)} 
                className = {styles.pageNumber} 
                key={index}
                disabled={index+1 === currentPage}
                >{index+1}</button>
            ))}
        </div>

        <button
        disabled={currentPage>=totalPages}
        onClick={handleNextPage} 
        className={styles.arrow}>{'>'}</button>
    </div>
  )
}
