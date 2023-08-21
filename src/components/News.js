import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'


export class News extends Component {

  static defaultProps={
    category:'general',
    pageSize:12
    
  }
  static propTypes={
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  articles = [
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Yahoo Sports Staff",
      "title": "Wimbledon 2023: No. 1 Carlos Alcaraz vs. No. 2 Novak Djokovic in Men's Final - Yahoo Sports",
      "description": "Novak Djokovic is looking to capture his third major title of 2023 and 24th of his illustrious career.",
      "url": "https://sports.yahoo.com/wimbledon-2023-no-1-carlos-alcaraz-vs-no-2-novak-djokovic-in-mens-final-133824787.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/8vHsNnlJH4GSJvd0ZRM2HA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03ODk-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/f58e1ca0-23dd-11ee-baad-c5b0555f1e28",
      "publishedAt": "2023-07-16T14:14:51Z",
      "content": "Serbia's Novak Djokovic returns to Spain's Carlos Alcaraz in the final of the men's singles on day fourteen of the Wimbledon tennis championships in London, Sunday, July 16, 2023. (AP Photo/Alastair … [+1603 chars]"
    },

    
  ]

  constructor(props) {
    super(props);

    this.state = {
      articles: this.articles,
      loading: false,
      page:1,

    }
    document.title="NEWSJ - "+this.capitalise(this.props.category)

  }

 capitalise=(a)=>{
    let b=a.charAt(0);
    let c= b.toUpperCase();
    // console.log(c);
    c+=a.slice(1);
    return c;
 }

 async updateNews(){

   this.setState({
     loading:true,
   })
   let url =`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6b8c3641928f42b29bd8b38a32c84b10 &page=${this.state.page}&pageSize=${this.props.pageSize}`;
   let data= await fetch(url);
  
   let parsedData=await data.json();
   console.log(parsedData);
  
   this.setState({
    articles:parsedData.articles,
    totalResults:parsedData.totalResults,
    loading:false
   })
 }

  async componentDidMount(){
    this.updateNews();
  }
  
  handlePrevClick=async()=>{
    this.setState({
      page:this.state.page-1,
    })
    this.updateNews()
  }
  
  handleNextClick=async()=>{
    
    this.setState({
      page:this.state.page+1,
    })
    this.updateNews()
  }

  
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'35px 0px'}}>NEWSJ - Top {this.capitalise(this.props.category)} Headlines</h1>
       {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4 my-3' key={element.url}>
              {}
              <NewsItem  title={element.title?element.title.slice(0,63)+"...":""} description={element.description?element.description.slice(0,89)+"...":""}  imageUrl={element.urlToImage}
              newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          }
          )}

        </div>
        <div className="container d-flex justify-content-between" style={{width:"100vw"}}>
          <button disabled={this.state.page<=1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-success" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
