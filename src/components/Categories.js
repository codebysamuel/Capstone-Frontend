import React from 'react'

const Categories = () => {
  return (
    <div className='pt-5'>
    <div className='row'>
        <div className='col-md-4 col-sm-12'>
            <img src='https://cdn.pixabay.com/photo/2023/09/17/11/58/tomatoes-8258398_960_720.jpg' width="100%"/>
          <h4 className='category'>Appetizers</h4> 
        </div>
        <div className='col-md-4 col-sm-12'>
            <img src='https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_960_720.jpg' width="100%"/>
            <h4 className='category'>Bread</h4> 
        </div>
        <div className='col-md-4 col-sm-12'>
            <img src="https://cdn.pixabay.com/photo/2017/08/02/00/51/food-2569257_960_720.jpg" width="100%"/>
            <h4 className='category'>Breakfasts</h4> 
        </div>
    
    </div>
    <div className='row'>
    <div className='col-md-4 col-sm-12'>
            <img src='https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_960_720.jpg' width="100%"/>
            <h4 className='category'>Pizza</h4> 
        </div>
        <div className='col-md-4 col-sm-12'>
            <img src='https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430_960_720.jpg' width="100%"/>
            <h4 className='category'>Desserts</h4> 
        </div>
        <div className='col-md-4 col-sm-12'>
            <img src='https://cdn.pixabay.com/photo/2016/07/07/19/51/soup-1503117_960_720.jpg' width="100%"/>
            <h4 className='category'>Soups</h4> 
        </div>
      
    </div>
    </div>
  )
}

export default Categories
