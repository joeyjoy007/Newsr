import React ,{useEffect} from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'
import Newsitems from './Newsitems'
import Spiner from './components/Spiner';

import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {

const [articles, setarticles] = useState([])    //this.state.articles for state varialbes   
const [loading, setLoading] = useState(false)   //this.setState
const [page, setPage] = useState(1) 
const [totalresults, setTotalresults] = useState(0)
 const capital = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //   document.title=`${this.capital(props.category)}-NEWS`;
 


const updateNews= async()=>{
  props.setProgress(10);

  let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=40196e7862954787a90d5ead2636fa95&page=${page}&pageSize=${props.size}`;
// this.setState({loading:true})
setLoading(true)
    let data = await fetch (url);
    props.setProgress(40);
let parsedData = await data.json()
props.setProgress(80);
// console.log(parsedData);


setarticles(parsedData.articles)
setTotalresults(parsedData.totalResults)
setLoading(false)


props.setProgress(100);


}
useEffect(() => {    //componentdid mount
  updateNews();
}, [])
 



const prev = async()=>{
  // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}
  // egory=${props.category}&apiKey=40196e7862954787a90d5ead2636fa95&page=${this.state.page-1}&pageSize=${props.size}`;
  // this.setState({loading:true})
  // let data = await fetch (url);
  // let parsedData = await data.json()

  // setState({

  //   page:state.page-1  });
  //   articles :parsedData.articles,
  //   loading: false
setPage(page-1)
  updateNews();
}


const next = async ()=>{
  // if(this.state.page+1 > Math.ceil(this.state.totalresults/20)){

  // }
  // else{
  // console.log("next");
  // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=40196e7862954787a90d5ead2636fa95&page=${this.state.page+1}&pageSize=${props.size}`;
  // this.setState({loading:true})
  // let data = await fetch (url);
  // let parsedData = await data.json()

  // setState({

  //   page:state.page+1  });
  //   articles :parsedData.articles,
  //   loading :false
setPage(page+1)
  updateNews();
  // }
}
const fetchMoreData = async () => {



let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=40196e7862954787a90d5ead2636fa95&page=${page}&pageSize=${props.size}`;
// this.setState({loading:true})
  let data = await fetch (url);
 
let parsedData = await data.json()

// console.log(parsedData);
// this.setState({articles :this.state.articles.concat(parsedData.articles),
//   totalresults: parsedData.totalResults,
//   // loading :false
// })

setarticles(articles.concat(parsedData.articles))
setTotalresults(parsedData.totalResults)
setLoading(false)
  // this.setState({
  //   page :this.state.page +1
  // })
setPage(page+1)
};


     
        return (
            <>
       
              <h2 class="my-5 text-center">Top Headlines on {capital(props.category)}</h2>
            {/*this.state.loading && <Spiner/>*/}  

             
        <div className="container">
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Spiner/>}
      >
              <div className="row">

            
            
              {!loading && articles.map((element)=>{
                
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

News. defaultProps ={
  country :"in",
  pageSize :5,
  category :"general"
}
News. propTypes ={
country  : PropTypes.string,
pageSize : PropTypes.number,
category : PropTypes.string
}

export default News
