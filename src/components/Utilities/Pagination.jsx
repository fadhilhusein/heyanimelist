import { ArrowCircleLeft } from '@phosphor-icons/react'
import { ArrowCircleRight } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    const handleNextPage = () => {
        if (page < lastPage) {
            setPage((prevState) => prevState + 1);
            scrollTop()            
        }
    }

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevState) => prevState - 1);
            scrollTop()
        }

    }

    return (
        <div className='flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl'>
            <button className='transition-all hover:text-color-accent' onClick={handlePrevPage}><ArrowCircleLeft size={32}/> </button>
            <p>({page}) of ({lastPage})</p>
            <button className='transition-all hover:text-color-accent' onClick={handleNextPage}><ArrowCircleRight size={32}/> </button>
        </div>
    )
}

export default Pagination