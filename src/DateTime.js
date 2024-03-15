import React, { useState } from 'react';
import { DatePicker, Stack } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

function DateTime(props) {
    const [Name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [value,setValue]=useState(1)

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    
    const handleSubmit = () => {
       
        const formattedStartDate = startDate ? formatDate(startDate) : '';
        const formattedEndDate = endDate ? formatDate(endDate) : '';

    
        const newdata = {
            startDate: formattedStartDate,
            endDate: formattedEndDate
        };
        const newdata1={
            "name":Name,
            "start_time":formattedStartDate,
            "end_time":formattedEndDate,
            "position":1
        }

        console.log(newdata1);
    

        fetch('http://localhost:8000/users')
        .then((res)=>{return res.json()})
        .then((data)=>{
            const UodatedData={
                ...data, 
                unit_operation:[...data.unit_operation,newdata1]
            }            
            fetch('http://localhost:8000/users',{
                method:'POST',
                headers:{"Content-type":"application/json"},
                body:JSON.stringify(UodatedData)
            })
            .then((res)=>{
                if(res)
                {
                    alert("saved successfully")
                    setName('')
                    setStartDate('')
                    setEndDate('')
                }
                else{
                    alert("Please enter correct information")
                }
            })
            .catch((err)=>{
                console.log("Post error:",err);
            })
        })
        .catch((err)=>{
            console.log("send error:",err);
        })
        
    };

    const formatDate = (date) => {
        const formattedDate = new Date(date);
        formattedDate.setSeconds(0)

        return formattedDate.toISOString().slice(0, 19);
    };

    
    return (
        <Stack spacing={10} direction="column" alignItems="flex-start" className='align-items-center mb-5'>
            <label>Enter Name:</label>
            <input type='text' value={Name} onChange={(e)=>{setName(e.target.value)}}/>
            <label>Start Date & Time</label>
            <DatePicker 
                defaultValue={startDate} 
                onChange={handleStartDateChange} 
                format="MM/dd/yyyy hh:mm" 
                showMeridian 
                min={new Date('12/04/2023 03:00')}
                max={new Date('12/30/2023 06:00')} 
            />
            <label>End Date & Time</label>
            <DatePicker value={endDate} onChange={handleEndDateChange} format="MM/dd/yyyy hh:mm " showMeridian/>
            <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
        </Stack>
    );
}

export default DateTime;
