import React,{Component} from 'react';
 import Colorbox from '../Component/Colorbox';
import QuoteBox from '../Component/QuoteBox';
import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state={
      color:"green",
      quote:"When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
      author:"Mark Twain",
      randomquote: []
    }
    this.onClickHandler = this.onClickHandler.bind(this);
    // this.onClicktwitter= this.onClicktwitter.bind(this);
  }

  


   onClickHandler=()=>{

    var letters = '0123456789ABCDEF';
    var colory = '#';
    for (var i = 0; i < 6; i++ ) {
      colory += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({color: colory});
    
     if(this.state.randomquote.length === 0 ){ return undefined
   }else {
    const randNum = Math.floor(Math.random() * 20)
    const answer = this.state.randomquote[randNum].quote
    const answerauthor = this.state.randomquote[randNum].author
     console.log(answerauthor)
    
    this.setState({quote: answer})
    this.setState({author: answerauthor})
  }
}

  // componentDidMount(){
  //   fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  //   .then(quotes =>quotes.json())
  //   .then(data =>{
  //     let pictures=data.quotes.map((pic)=> {
  //       return(
  //         <div key={pic.quote}>
  //         <p> {pic.quote}</p>
  //        {/* author:{ pic.author} */}
  //        </div>
  //       )
      
  //     })
  //     this.setState({randomIndex:pictures});
      
  //   })
  // }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(response =>{
      const quotes = response.quotes
      console.log(quotes[0])
      this.setState({randomquote:quotes});
    })
    //
 
}


  render(){
    // const possibleAnswers = [
    //   'It is certain',
    //   'It is decidedly so',
    //   'Without a doubt',
    //   'Yes, definitely',
    //   'You may rely on it',
    //   'As I see it, yes',
    //   'Outlook good',
    //   'Yes',
    //   'Signs point to yes',
    //   'Reply hazy try again',
    //   'Ask again later',
    //   'Better not tell you now',
    //   'Cannot predict now',
    //   'Concentrate and ask again',
    //   'Don\'t count on it',
    //   'My reply is no',
    //   'My sources say no',
    //   'Most likely',
    //   'Outlook not so good',
    //   'Very doubtful'
    // ];
     
let tweet = "https://twitter.com/intent/tweet?text=" + this.state.quote + " "+ " "+ "Author:" + " "  + this.state.author;
//  let tweet = "https://twitter.com/intent/tweet?text=" ${`this.state.quote`} " " " " "Author:" + " "  + this.state.author;
  

  // if(this.state.randomquote.length === 0 ){ return <h2 style={{color:"black"}}>loading...</h2>
  // }else {

    return (
      <div >
        <Colorbox color={this.state.color}/>

        
        <QuoteBox onclick={this.onClickHandler} data = {this.state} color={this.state.color} tweet={tweet}/>
        {/* //  color={this.state.color} author={this.state.author} quote={this.state.quote} */}
        
        


      
        

      </div>
    );
  
}
}

export default App;
