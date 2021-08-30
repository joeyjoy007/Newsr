import React, { Component } from 'react'


export class Newsitems extends Component {


    render() {
     
        let {title,description,imgUrl,readmore,author,date}=this.props;
        return (
            <div>
            <div className="card" style={{}}>
            <img src={!imgUrl?"https://c.ndtvimg.com/2021-08/glk6pv5_minissha-lamba_625x300_27_August_21.jpg":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p class="card-text"><small class="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={readmore} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
         
            </div>
            
        )
    }
}

export default Newsitems
