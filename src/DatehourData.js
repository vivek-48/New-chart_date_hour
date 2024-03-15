import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DateTime from './DateTime';
import 'bootstrap/dist/css/bootstrap.min.css'

function Test() {
  const [userData, setUserData] = useState([]);
  const [HoursArray, setHoursArray] = useState([]);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [ScreenSize, setScreenSize] = useState(false);
  const [fhight, setFHight] = useState(720);
  const [Shight, setSHight] = useState(30);
  const [Hhight, setHHight] = useState(15);
  const [plusClicked, setPlusClicked] = useState(false);
  const [minusClicked, setMinusClicked] = useState(false);
  const [plusClickCount, setPlusClickCount] = useState(0);


let patternIndex = 0;

const OnHandlePlus = () => {
  setPlusClicked(true);

 
  const patterns = [1.5, 2.0, 2.5,3.0,3.5,4.0,4.5,5.0,5.5,6.0,1.0]; 

 
  const incrementHours = patterns[plusClickCount % patterns.length];
  console.log(incrementHours);

  setHoursArray(prevHoursArray => {
    const newHoursArray = [];
    let hour1 = 0;
    let minute1 = 0;

    for (let i = 0; i < 24; i += incrementHours) {
      newHoursArray.push(`${String(hour1).padStart(2, '0')}:${String(minute1).padStart(2, '0')}`);
      hour1 += Math.floor(incrementHours);
      minute1 += (incrementHours - Math.floor(incrementHours)) * 60;
      if (minute1 >= 60) {
        hour1 += Math.floor(minute1 / 60);
        minute1 %= 60;
      }
      hour1 %= 24;
    }

    return newHoursArray;
  });
  console.log(HoursArray);
  const [hour, minute] = HoursArray[1].split(':').map(Number);
  const diffInMinutes =( hour * 60 + minute)+30;

  console.log(diffInMinutes);
if((diffInMinutes-90) == 0){

  setFHight(fhight - 240);
  setSHight(Shight - 10);
  setHHight(Hhight - 5);
}
else if((diffInMinutes-90) == 30)
{
  setFHight(fhight - 120);
  setSHight(Shight -5);
  setHHight(Hhight -5);
}
else if((diffInMinutes-90) == 60)
{
  setFHight(fhight - 60);
  setSHight(Shight-2.7);
  setHHight(Hhight);
}
else if((diffInMinutes-90) == 90)
{
  setFHight(fhight - 60);
  setSHight(Shight-2.2);
  setHHight(Hhight);
}
else if((diffInMinutes-90) == 120)
{
  setFHight(fhight - 30);
  setSHight(Shight-1.5);
  setHHight(Hhight);
}
else if((diffInMinutes-90) == 150)
{
  setFHight(fhight - 30);
  setSHight(Shight-1.2);
  setHHight(Hhight);
}
else if((diffInMinutes-90) == 180)
{
  setFHight(fhight - 0);
  setSHight(Shight+0.5);
  setHHight(Hhight);
}
else if((diffInMinutes-90) == 210)
{
  setFHight(fhight - 30);
  setSHight(Shight-1.7);
  setHHight(Hhight);
}
else if((diffInMinutes-90) == 240)
{
  setFHight(fhight - 0);
  setSHight(Shight-0);
  setHHight(Hhight);
}
else if((diffInMinutes-90) == 270)
{
  setFHight(fhight - 30);
  setSHight(Shight-1.1);
  setHHight(Hhight);
}
else{
  setFHight(720)
  setSHight(30)
  setHHight(15)
}
  
  setPlusClickCount(prevCount => prevCount + 1);
};


const OnHandleminus = () => {
  setMinusClicked(true);

  
  const patterns = [1.5, 2.0, 2.5];

  const incrementHours = patterns[patternIndex];

  setHoursArray(prevHoursArray => {
    let newHoursArray = [...prevHoursArray];

    const [hour, minute] = prevHoursArray[1].split(':').map(Number);
    const diffInMinutes = hour * 60 + minute;
    console.log(diffInMinutes);

   
    if ((diffInMinutes - 90) == 0) {
      setFHight(fhight +240);
      setSHight(Shight + 10);
      setHHight(Hhight + 5);
      return generateHours1Array();
    }
     else if ((diffInMinutes - 90) == -30) {
      setFHight(fhight + fhight);
      setSHight(Shight + Shight);
      setHHight(Hhight + Hhight);
      return generateHours1Array(30);
    } else if ((diffInMinutes - 90) === 30) {
      const newHoursArray = [];
      let hour = 0;
      let minute = 0;
      const incrementHours = 1 * 1.5;
      for (let i = 0; i < 24; i += incrementHours) {
        newHoursArray.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
        hour += Math.floor(incrementHours);
        minute += (incrementHours - Math.floor(incrementHours)) * 60;
        if (minute >= 60) {
          hour += Math.floor(minute / 60);
          minute %= 60;
        }
        hour %= 24;
      }
      setFHight(fhight +120);
      setSHight(Shight + 5);
      setHHight(Hhight + 5);
      return newHoursArray;
    }
    else if ((diffInMinutes - 90) === 60) {
      const newHoursArray = [];
      let hour = 0;
      let minute = 0;
      const incrementHours = 1 * 2.0;
      for (let i = 0; i < 24; i += incrementHours) {
        newHoursArray.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
        hour += Math.floor(incrementHours);
        minute += (incrementHours - Math.floor(incrementHours)) * 60;
        if (minute >= 60) {
          hour += Math.floor(minute / 60);
          minute %= 60;
        }
        hour %= 24;
      }
      setFHight(fhight+60);
      setSHight(Shight + 2.8);
      setHHight(Hhight + 5);
      return newHoursArray;
    }
    
    else if ((diffInMinutes - 90) === 90) {
      const newHoursArray = [];
      let hour = 0;
      let minute = 0;
      const incrementHours = 1 * 2.5;
      for (let i = 0; i < 24; i += incrementHours) {
        newHoursArray.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
        hour += Math.floor(incrementHours);
        minute += (incrementHours - Math.floor(incrementHours)) * 60;
        if (minute >= 60) {
          hour += Math.floor(minute / 60);
          minute %= 60;
        }
        hour %= 24;
      }
      setFHight(fhight+60);
      setSHight(Shight + 2.2);
      setHHight(Hhight + 5);
      return newHoursArray;
    }
    else if ((diffInMinutes - 90) === 120) {
      const newHoursArray = [];
      let hour = 0;
      let minute = 0;
      const incrementHours = 1 * 3.0;
      for (let i = 0; i < 24; i += incrementHours) {
        newHoursArray.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
        hour += Math.floor(incrementHours);
        minute += (incrementHours - Math.floor(incrementHours)) * 60;
        if (minute >= 60) {
          hour += Math.floor(minute / 60);
          minute %= 60;
        }
        hour %= 24;
      }
      setFHight(fhight+30);
      setSHight(Shight + 1.5);
      setHHight(Hhight + 1);
      return newHoursArray;
    }
    else if ((diffInMinutes - 90) === 150) {
      const newHoursArray = [];
      let hour = 0;
      let minute = 0;
      const incrementHours = 1 * 3.5;
      for (let i = 0; i < 24; i += incrementHours) {
        newHoursArray.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
        hour += Math.floor(incrementHours);
        minute += (incrementHours - Math.floor(incrementHours)) * 60;
        if (minute >= 60) {
          hour += Math.floor(minute / 60);
          minute %= 60;
        }
        hour %= 24;
      }
      setFHight(fhight+30);
      setSHight(Shight + 1.3);
      setHHight(Hhight + 1);
      return newHoursArray;
    }
    else if ((diffInMinutes - 90) === 180) {
      const newHoursArray = [];
      let hour = 0;
      let minute = 0;
      const incrementHours = 1 * 4.0;
      for (let i = 0; i < 24; i += incrementHours) {
        newHoursArray.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
        hour += Math.floor(incrementHours);
        minute += (incrementHours - Math.floor(incrementHours)) * 60;
        if (minute >= 60) {
          hour += Math.floor(minute / 60);
          minute %= 60;
        }
        hour %= 24;
      }
      setFHight(fhight);
      setSHight(Shight-0.5);
      setHHight(Hhight + 1);
      return newHoursArray;
    }
    else if ((diffInMinutes - 90) === 210) {
      const newHoursArray = [];
      let hour = 0;
      let minute = 0;
      const incrementHours = 1 * 4.5;
      for (let i = 0; i < 24; i += incrementHours) {
        newHoursArray.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
        hour += Math.floor(incrementHours);
        minute += (incrementHours - Math.floor(incrementHours)) * 60;
        if (minute >= 60) {
          hour += Math.floor(minute / 60);
          minute %= 60;
        }
        hour %= 24;
      }
      setFHight(fhight);
      setSHight(Shight-1);
      setHHight(Hhight + 1);
      return newHoursArray;
    }
    else if ((diffInMinutes - 90) === 240) {
      const newHoursArray = [];
      let hour = 0;
      let minute = 0;
      const incrementHours = 1 * 5.0;
      for (let i = 0; i < 24; i += incrementHours) {
        newHoursArray.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
        hour += Math.floor(incrementHours);
        minute += (incrementHours - Math.floor(incrementHours)) * 60;
        if (minute >= 60) {
          hour += Math.floor(minute / 60);
          minute %= 60;
        }
        hour %= 24;
      }
      setFHight(fhight);
      setSHight(Shight+0.8);
      setHHight(Hhight + 1);
      return newHoursArray;
    }
    else if ((diffInMinutes - 90) === 270) {
      const newHoursArray = [];
      let hour = 0;
      let minute = 0;
      const incrementHours = 1 * 5.5;
      for (let i = 0; i < 24; i += incrementHours) {
        newHoursArray.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
        hour += Math.floor(incrementHours);
        minute += (incrementHours - Math.floor(incrementHours)) * 60;
        if (minute >= 60) {
          hour += Math.floor(minute / 60);
          minute %= 60;
        }
        hour %= 24;
      }
      setFHight(fhight+30);
      setSHight(Shight+1.2);
      setHHight(Hhight + 1);
      return newHoursArray;
    }


  });
  patternIndex = (patternIndex + 1) % patterns.length;
};

  


  useEffect(() => {
    setHoursArray(generateHours1Array());
  }, []);

  const generateHours1Array = (minuteIncrement) => {  
    const hoursArray = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += minuteIncrement) {
        const hourString = hour.toString().padStart(2, '0'); 
        const minuteString = minute.toString().padStart(2, '0'); 
        hoursArray.push(`${hourString}:${minuteString}`);
      }
    }
    return hoursArray;
  };

  useEffect(() => {
    fetch('http://localhost:8000/Users')
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const generateDatesArray = () => {
    const datesArray = [];
    let currentDate = new Date(userData.min_start_date);
    currentDate.setDate(currentDate.getDate() + 1);

    while (currentDate <= new Date(userData.max_end_date)) {
      datesArray.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return datesArray;
  };
  
  const renderDates = generateDatesArray().map((date, index) => (
    <div className='d-flex' key={date}>
      <div className='date-item rounded w-75' style={{ height: `${fhight}px`,marginTop:"5px",backgroundColor:"#33ccff",fontWeight:"bolder"}}>
        {date}
      </div>
      <div style={{width:"25%",marginTop:"5px"}}>
        {HoursArray.map((hour, hourIndex) => (
          <div className=' text-center' key={hourIndex} style={{ height:"30px",fontSize:"13px",textAlign:"center", }}>
            {hour}
          </div>
        ))}
      </div>
    </div>
  ));

  const generateHoursArray = () => {
    const hoursArray = [];
    let currentHour = new Date("2023-12-04T00:00:00");
    currentHour.setMinutes(0); 
  
    let currentMinutes = new Date("2023-12-30T23:00:00");
    currentMinutes.setMinutes(0); 
  
    while (currentHour <= currentMinutes) {
      hoursArray.push(currentHour.getHours());
      currentHour.setHours(currentHour.getHours() + 1);
    }
  
    return hoursArray;
  };

  const toggleSecondDiv = (index) => {
    setShowSecondDiv((prevShowSecondDiv) => ({
      ...prevShowSecondDiv,
      [index]: !prevShowSecondDiv[index],
    }));
  };
 
  const operationNames = userData.unit_operation && userData.unit_operation.map((operation, index) => {
    const startDate = new Date(operation.start_time); 
    const endDate = new Date(operation.end_time);
    
    const StartMinutes=startDate.getMinutes();  
    const EndMinutes=endDate.getMinutes();
    let topMargin=0;
   
    const startDateIndex = generateDatesArray().findIndex(date => date === startDate.toISOString().split('T')[0]);
    // console.log(startDateIndex);
    topMargin = ((startDateIndex==0)?startDateIndex:startDateIndex+1) * fhight;
    // console.log("clicked value",topMargin);
   
    const datesArray = [];
    let currentDate = new Date(operation.start_time);
    currentDate.setDate(currentDate.getDate() + 1);
    // console.log(currentDate.getMonth());
    
    while (currentDate <= new Date(operation.end_time)) {
      datesArray.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    } 

    const hoursArray = [];
    let currentHour = new Date(operation.start_time);
    // currentHour.setHours(currentHour.getHours());
    while (currentHour <= new Date(operation.end_time)) {
      hoursArray.push(currentHour.toISOString().split('T')[1].substring(0, 5)); 
      currentHour.setHours(currentHour.getHours() + 1);
    }  

    const currentHour1 = new Date(operation.start_time).getHours();
    const HourIndex = generateHoursArray().findIndex(hour => hour === currentHour1);
    // console.log(HourIndex);
 
    const generateDatesArray1 = () => {
      const datesArray = [];
      let currentDate = new Date(operation.start_time);
      currentDate.setDate(currentDate.getDate() + 1);
      
      while (currentDate <= new Date(operation.end_time)) {
        datesArray.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return datesArray;
    };
    
    const generateHoursArray1 = () => {
      const hoursArray = [];
      let currentHour = new Date(operation.start_time);
      currentHour.setMinutes(0); 
      let currentMinutes = new Date(operation.end_time);
      currentMinutes.setMinutes(0); 
    
      while (currentHour <= currentMinutes) {
        hoursArray.push(currentHour.getHours());
        currentHour.setHours(currentHour.getHours() + 1);
      }
    
      return hoursArray;
    };
    
    const SubData=operation?.subdata?.map((data,index)=>{
      const startDate1 = new Date(data.start_time);
      const endDate1 = new Date(data.end_time);

      const StartMinutes1=startDate1.getMinutes();  
      const EndMinutes1=endDate1.getMinutes();

// console.log(generateDatesArray1());
      const startDateIndex1 = generateDatesArray1().findIndex(date => date === startDate1.toISOString().split('T')[0]);
    const topMargin1 = ((startDateIndex1==-1)?0:startDateIndex1+1) * fhight;

// console.log(generateHoursArray1());
    const currentHour2 = new Date(data.start_time).getHours();
    const HourIndex2 = generateHoursArray1().findIndex(hour => hour === currentHour2);

      const hoursArray1 = [];
      let currentHour3 = new Date(data.start_time);
      // currentHour.setHours(currentHour.getHours());
      while (currentHour3 <= new Date(data.end_time)) {
        hoursArray1.push(currentHour3.toISOString().split('T')[1].substring(0, 5)); // Extract only hours and minutes
        currentHour3.setHours(currentHour3.getHours() + 1);
      }  

      const datesArray1 = [];
      let currentDate2 = new Date(data.start_time);
      currentDate2.setDate(currentDate2.getDate() + 1);
      
      while (currentDate2 <= new Date(data.end_time)) {
        datesArray1.push(currentDate2.toISOString().split('T')[0]);
        currentDate2.setDate(currentDate2.getDate() + 1);
      } 

       return <>
         <div key={index} className='border rounded text-dark' style={{
          width:`${100/operation.subdata.length}%`,
          height:`${(((hoursArray1.length-1)*Shight)+((datesArray1.length+1)*5))}px`,
          position:'absolute',
          top:`${((topMargin1)+((
            (startDateIndex1==-1)?
            (((startDateIndex1+1)*5)+((HourIndex2)*Shight))+((StartMinutes1==30)?Hhight:0)-((StartMinutes==30)?Hhight:0)
            :(((startDateIndex1+1)*5)+((HourIndex2)*Shight))+((StartMinutes1==30)?Hhight:0)-((StartMinutes==30)?Hhight:0)
            ))
            )}px`,
          left:`${(index==0)?0:(index==1)?50:100}%`,
          backgroundColor:"#41a9c6"
         }}>
           {data.length}
           <p>{data.start_time}</p> 
           <p>{data.end_time}</p>
         </div>
       </>
     })

    return (
      <div
        className='border rounded first_div'
        key={index}
        style={{
          width:`${(operation.position==1)?50:(operation.position==undefined)?100:100/operation.position}%`,
          position: 'absolute',
          top: `${((topMargin+10)+((
            (startDateIndex==-1)?
            (((startDateIndex+1)+5)+((HourIndex)*Shight))
            :(((startDateIndex+1)*5)+((HourIndex)*Shight)+((StartMinutes==30)?Hhight:0))
            ))
            )}px`,
          left: `${(operation.position==1)?0:100/operation.position}%`,
          height: `${((((hoursArray.length)*Shight)+((datesArray.length+1)*5))-((StartMinutes==30)?Hhight:0)-((EndMinutes==30)?Hhight:0))}px`,
          backgroundColor:"#4dd2ff"
        }}
      >
        <button className='btn btn-primary' onClick={() => toggleSecondDiv(index)} style={{position:"absolute",
         top: 0,
          right:0,
          zIndex:1
      }}>
            {showSecondDiv[index] ? '-' : '+'}
          </button>
        <div className='' style={{ display: showSecondDiv[index] ? 'none' : 'block' }}>
          <h5 className='text-dark'>{operation.name}</h5>
          <p className='mt-2 text-dark fw-bold'>{operation.start_time}</p>
          <p className='text-dark fw-bold'>{operation.end_time}</p>  
        </div>
        <div className='second_div' style={{ display: showSecondDiv[index] ? 'block' : 'none' }}>
          <div className='bg-danger' style={{position:"relative"}}>
            {SubData}
          </div>
        </div>
      </div>   
    );
  });

  return (
    <>
    <div className='container-fluid row d-flex justify-content-center py-5'>
      <div className='col-12 hide ' style={{ display: ScreenSize? 'none' : 'block' }}>
        <DateTime/>
      </div>
      <div className='col-3 border-end text-dark' style={{position:"relative"}}>
        <button onClick={OnHandleminus} className='btn btn-primary' style={{position:"absolute",top:"-35px",right:"15%"}}>-</button>
        <button onClick={OnHandlePlus} className='btn btn-primary' style={{position:"absolute",top:"-35px",right:0}}>+</button>
        <button onClick={()=>{setScreenSize(false)}} className='btn btn-primary' style={{position:"absolute",top:"-35px",left:"32%"}}>Default Screen</button>
        <button onClick={()=>{setScreenSize(true)}} className='btn btn-primary' style={{position:"absolute",top:"-35px",left:0}}>Full Screen</button>
        {renderDates}</div>
      <div className='col-9' style={{ position: 'relative' }}>
        {operationNames}
      </div>
    </div>
    </>
  );
}

export default Test;
