import React from 'react'
import Card from './Card';
function Cars({cars, removeCar}){


    return (
        <div className='container'>
            <div>
                <h2 className='title'>Choose your Car</h2>
            </div>
            <div className='cards'>
                {
                    cars.map((car) => {
                        return <Card {...car} key={car.id} removeCar={removeCar}></Card> ;
                    })
                }
            </div>
        </div>
    )
}

export default Cars;