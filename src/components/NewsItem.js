import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author , date ,source} = this.props;
        return (
            <>
                <div>
                    <div className="card">
                        <div>
                            <span className="badge rounded-pill bg-danger" style={{display:'flex' , justifyContent:
                        'flex-end' , position: 'absolute' , right: '0'}}>{source}</span>
                        </div>
                        
                        <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date (date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
