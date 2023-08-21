import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" style={{border:'2px solid black',minHeight:'74vh',padding:'2px'}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-primary"> {source} </span>
                    </div>
                    <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQf0L4f0exDxDgX4NrZQrUjJknPOW1b010tENUNSJDs5arM_HYregjCoj4Vhb3zIoDm0&usqp=CAU" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body" >
                        <h5 className="card-title">{title?title.slice(0,58)+"...":"Breaking News!"}  </h5>
                        <p className="card-text">{description?description.slice(0,70)+"...":"Click on Read More to get the news description and much more ..."}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem

