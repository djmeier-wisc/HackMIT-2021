import React from 'react';
import './scholar.css';
import data from '../items.json';
import ScholarCard from '../contactCard/scholarCard';
function Scholarships () {
    return (
        <div className='Scholarship'>
        <h1 className="text-center">Finding Scholarships</h1>
        <br />
        <h1 className="text-center">Scholarship Search</h1>
        <div className="container">
            <div className="row">
                {
                data.map( (data)=>{
                    return (
                        <>
                        <div className="col-md-3">
                                <ScholarCard  title={data.title} deadline = {data.deadline} description={data.description}  link={data.link}/>
                        </div>
                        <br />
                        </>
                    )
                })
                }
            </div>
        </div>
    </div>
    );
}

export default Scholarships;