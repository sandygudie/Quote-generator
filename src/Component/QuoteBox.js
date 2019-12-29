import React from 'react'

 const QuoteBox =({data, color,onclick,tweet})=> {
   
    let quoteStyle={
       
        backgroundColor:"white",
       
        outline:data.color,
     
       
   
 
   
        
    }

    let Style={
            color:data.color,
            fontSize:'20px',
            padding:'20px',
            textAlign:'center',
        }

        let pStyle={
            color:data.color,
            fontSize:'20px',
            padding:'10px 20px 0px 10px' ,
            textAlign:'center',
            fontWeight: "bold",
            textTransform: "uppercase",
            
           
        }

       

        return (
            <div  className="boxed" style={quoteStyle}>

                 <h2 style={Style}>"{data.quote}"</h2> 
                 <p style={pStyle}> {data.author} </p> 
            
                 {/* <div className="buttondiv"> */}
                 <button className="tweet" style={{backgroundColor:color}}> 
                <a href= {tweet} target="_blank" > Twitter </a>
                </button>
            
                <button style={{backgroundColor:color}}
                onClick={onclick}>New Quote
                </button>
                 {/* </div> */}
                

            </div>

        )
    
}
export default QuoteBox