import React from 'react';



export default function(){
    const data = JSON.parse(localStorage.getItem('formsData'));
    
    if(data && !data.length) return null;

    return data && data.map((p) => <p>{p.name}</p>
    
)
} 