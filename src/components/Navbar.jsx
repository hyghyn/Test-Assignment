import React from 'react'

function Navbar(){

    function onChangeType(event){
        console.log(event.target.value)
        return 0
    }

    return (
        <header className='Navbar'>Place List
            <div className="Search__item">
                <select name="types" id="types" className="Item__types" onChange={onChangeType}>
                    <option value="restaurant">Restaurant</option>
                    <option value="cafe">Cafe</option>
                    <option value="bakery">Bakery</option>
                </select>
                <input className="Item__names" type="text" placeholder='ค้นหาชื่อร้าน' />
            </div>
        </header>
    )
}

export default Navbar