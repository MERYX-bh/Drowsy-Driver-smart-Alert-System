import React from 'react'

const Toast = ({msg, handleShow, bgColor}) => {
  return (
    <div className={`toast show position-fixed text-light ${bgColor}`}
        style={{ top: '20px', right: '5px', zIndex: 20, minWidth: '280px', borderRadius: '10px', margin:"10px" }} >

            <div className={`toast-header ${bgColor} text-light`}>
                <strong className="mr-auto text-light" style={{ margin:"10px"}}>{msg.title}</strong>

                <button type="button" className="ml-2 mb-1 close text-light" 
                data-dismiss="toast" style={{ outline: 'none', margin:"5px"}} 
                onClick={handleShow}>X</button>
            </div>

            <div className="toast-body" style={{ margin:"20px"}}>{msg.msg}</div>

        </div>
  )
}

export default Toast