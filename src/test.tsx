import React from 'react'

const test = () => {
  return (
    <div className='bg-white sidebar p-2'>
    <div className='m-2'>
        <i className='bi bi-bootstrap-fill me-2 fs-4 ' ></i>
        <span className='brand-name fs-4 '>Menu</span>
    </div>
    <hr className='text-dark'/>
    <div className='list list-group-flush'>
    <a className='list-group-item  py-2 px-2' >
    <i className='bi bi-speedometer2 fs-5  me-2'></i>
    <span className='fs-6 '>Dashboard</span>
    </a>
    <a className='list-group-item  py-2 px-2' >
    <i className='bi bi-house fs-5  me-2'></i>
    <span className='fs-6 '>School</span>
    </a>
    <a className='list-group-item  py-2 px-2'>
    <i className='bi bi-table fs-5  me-2'></i>
    <span className='fs-6 '>Teacher</span>
    </a>
    
    <a className='list-group-item  py-2 px-2'>
    <i className='bi bi-people fs-5  me-2'></i>
    <span className='fs-6 '>Student</span>
    </a>
    </div>
</div>  )
}

export default test