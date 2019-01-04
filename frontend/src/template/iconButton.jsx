import React from 'react'

/**
 * <button id='description' className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button>
 * 
 */
export default props => {
    if(props.hide){
        return null
    } else {
        return (
            <button className={'btn btn-'+ props.style }
                onClick={props.onClick}>
                <i className={'fa fa-'+ props.icon}></i>
            </button>
        )
    }
}