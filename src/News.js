import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitems from './Newsitems'
import Spiner from './components/Spiner';

import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps ={
    country :"in",
    pageSize :5,
    category :"general"
  }
  static propTypes ={
country  : PropTypes.string,
pageSize : PropTypes.number,
category : PropTypes.string
  }

  capital = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);

  }
 
  constructor(props){
    super(props);
    console.log("hello");
    this.state={
      articles : [],
      loading : false,
      page :1,

    }
    document.title=`${this.capital(this.props.category)}-NEWS`;
  }

async updateNews(){
  this.props.setProgress(10);

  let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=40196e7862954787a90d5ead2636fa95&page=${this.state.page}&pageSize=${this.props.size}`;
this.setState({loading:true})
    let data = await fetch (url);
    this.props.setProgress(40);
let parsedData = await data.json()
this.props.setProgress(80);
// console.log(parsedData);
this.setState({articles :parsedData.articles,totalresults: parsedData.totalResults,loading :false})
this.props.setProgress(100);
}

  async componentDidMount(){
  this.updateNews();
  }



prev = async()=>{
  // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}
  // egory=${this.props.category}&apiKey=40196e7862954787a90d5ead2636fa95&page=${this.state.page-1}&pageSize=${this.props.size}`;
  // this.setState({loading:true})
  // let data = await fetch (url);
  // let parsedData = await data.json()

  this.setState({

    page:this.state.page-1  });
  //   articles :parsedData.articles,
  //   loading: false

  this.updateNews();
}


next = async ()=>{
  // if(this.state.page+1 > Math.ceil(this.state.totalresults/20)){

  // }
  // else{
  // console.log("next");
  // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=40196e7862954787a90d5ead2636fa95&page=${this.state.page+1}&pageSize=${this.props.size}`;
  // this.setState({loading:true})
  // let data = await fetch (url);
  // let parsedData = await data.json()

  this.setState({

    page:this.state.page+1  });
  //   articles :parsedData.articles,
  //   loading :false

  this.updateNews();
  // }
}
fetchMoreData = async () => {



let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=40196e7862954787a90d5ead2636fa95&page=${this.state.page}&pageSize=${this.props.size}`;
// this.setState({loading:true})
  let data = await fetch (url);
 
let parsedData = await data.json()

// console.log(parsedData);
this.setState({articles :this.state.articles.concat(parsedData.articles),
  totalresults: parsedData.totalResults,
  // loading :false
})
  this.setState({
    page :this.state.page +1
  })

};

    render() {
     
        return (
            <>
       
              <h2 class="my-5 text-center">Top Headlines on {this.capital(this.props.category)}</h2>
            {/*this.state.loading && <Spiner/>*/}  

             
        <div className="container">
        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={true}
        loader={<Spiner/>}
      >
              <div className="row">

            
            
              {!this.state.loading && this.state.articles.map((element)=>{
                
                return <div key={element.url} className="col-md-4">
              
                <Newsitems title = {element.title?element.title.slice(0,20):""} description={element.description?element.description.slice(0,20):""} imgUrl={element.urlToImage} readmore={element.url} author={element.author} date={element.publishedAt}/>
                </div>
                
              })}
              </div>
              </InfiniteScroll>
              </div>
            

             {/*<div className="container d-flex justify-content-between my-2">
              <button type="button" disabled = {this.state.page<=1}onClick ={this.prev} class="btn btn-dark btn-sm">	&larr;Previous</button>
              <button type="button" onClick={this.next} class="btn btn-dark btn-sm">Next&rarr;</button>
            </div>*/}
             
              
                </>
           
        )
    }
}

export default News
