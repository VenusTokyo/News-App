import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={!imageUrl ? "https://heuft.com/upload/image/400x267/no_image_placeholder.png" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" >{title}<span className="position-absolute top-0 start-10  badge rounded-pill bg-danger" style={{display:'flex',justifyContent:'flex-end',right:0}}>
                            {source}
                           
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                        <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
