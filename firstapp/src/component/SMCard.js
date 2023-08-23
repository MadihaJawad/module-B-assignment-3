import React from 'react'

 function SMCard(props){
const {id, name, age, isActive} = props;
  return (
    <>
    <div className="card">
      <div className="card-body">
<p>Id: {id}</p>
<p>Name:{name}</p>
<p>Age:{age}</p>
<p>Active:{isActive}</p>

</div>
    </div>
    </>
  )
}
export default SMCard;
