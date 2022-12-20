import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://heuft.com/upload/image/400x267/no_image_placeholder.png":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
