import React from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'

function ProductPage() {
    const {id} = useParams();
    const history = useNavigate();
    const gotoAbout=()=>{
        history('/about');

    }
  return (
    
    <div>
    ProductPage
    {
        id?<div>
        Product Id : {id}
        <button onClick={gotoAbout}>See about page</button>
        </div>:
        <ul>
    <li>
    
    <Link to="/product/1">Product 1</Link>
    </li>
    <li>
    <Link to="/product/2">Product 2</Link>
    </li>
    <li>
    <Link to="/product/3">Product 3</Link>
    </li>
    
    </ul>
    }
    
      
    </div>
  )
}

export default ProductPage
