import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {

let {title,description,imageUrl,newsUrl}=this.props;

    return (
      <div className="card" style={{border:"3px solid black",padding:"3px"}}>
        <img style={{height:"28vh" }}src={imageUrl?imageUrl:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F006%2F299%2F370%2Foriginal%2Fworld-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg&tbnid=z8af4Y-6O6zlMM&vet=12ahUKEwjj1te1lpaAAxX06DgGHeBUAggQMygBegUIARCDAg..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-videos%2Fnews&docid=wazIDNr7AUvTEM&w=3840&h=2160&q=news&ved=2ahUKEwjj1te1lpaAAxX06DgGHeBUAggQMygBegUIARCDAg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description} </p>
          <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
