import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {

let {title,description,imageUrl,newsUrl}=this.props;

    return (
      <div className="card" style={{border:"3px solid black",padding:"3px"}}>
        <img style={{height:"28vh" }}src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQf0L4f0exDxDgX4NrZQrUjJknPOW1b010tENUNSJDs5arM_HYregjCoj4Vhb3zIoDm0&usqp=CAU" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title?title:"Breaking News!"}</h5>
          <p className="card-text">{description?description:"Click on Read More to get the news description and much more ..."} </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
