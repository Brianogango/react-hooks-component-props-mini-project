import React from "react";

function Articles({date,title,preview, time}){
    
return(
<div>

        <h3>{title}</h3>
        <small>{date}. - 
        {time}
        </small>
        <p>{preview}</p>
</div>
)
}

export default Articles;