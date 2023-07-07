import React, {useState} from 'react'

let date = new Date()

function Card({id, name, imgProfile, rating, operateTime, images}){

    function searchTime(operateTime){
        const now_day = date.getDay() //0=Sunday 0=January
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        var result = ""
        for(let i=0 ; i<operateTime.length ; i++){
            if(days[now_day]==operateTime[i].day){
                result = operateTime[i].time_open+"-"+operateTime[i].time_close
            }
        }
        return result
    }
    
    return(
        <div className='Card'>
            <div className="Place__image"><img src={imgProfile} /></div>
            <div className='Place__detail'>
                <span className='Place__name'>{name}</span>
                <div>
                    <span className="Place__time">{searchTime(operateTime)}</span>
                    <span className="Place__rating">{rating}</span>
                </div>
            </div>
            <div className='Place__images'>
                <img src={images[0]} /><img src={images[1]} /><img src={images[2]} />
            </div>
        </div>
    )
}

export default Card