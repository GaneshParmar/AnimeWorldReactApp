// import React from 'react'
import '../Css/AnimeInfo.css'
import Footer from './Footer'
import Header from './header.js'

// function AnimeInfo() {
//   return (
//   )
// }

// export default AnimeInfo


import React, { Component } from 'react'

export class AnimeInfo extends Component {

  constructor(props){
    super(props);
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const animeid = params.get('animeid');
    console.log(typeof(animeid))
    this.state={
      data_:[],
      loading:true,
      animeid_:animeid
    }
  }
  fetchData = () => {
    const url="https://ghibliapi.herokuapp.com/films/"+this.state.animeid_;
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
            
            this.setState({data_:data,loading:false})
      })
  };
  componentWillMount(){
      this.fetchData()
    }

   
    



  render() {
    return (
    <div>
      <Header/>
      
      <div className='animeWrap'>
      {this.state.loading && <div className='loaderWrap'><img  className='loader' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif" width={200}/><p>Taking time to load Make sure connected to network and refresh page</p></div>
      }
      
          {!this.state.loading &&
            
           <>
          <div className='animeImg'>
            <img src={this.state.data_.image} alt="animeImage"/>
          </div>
          <div className='animeInfo'>
              <div className='animeBasicInfo'>
                  <h1>{this.state.data_.title}</h1>
                  <p>
                    {this.state.data_.description}
                  </p>
              </div>
              <div class="teamInfo">
                    <div>Director <strong>{this.state.data_.director}</strong></div>
                    <div>Producer <strong>{this.state.data_.producer}</strong></div>
                    <p>
                        Release Date <i>{this.state.data_.release_date}</i>
                    </p>
                    <p>
                        Running_time <i>{this.state.data_.running_time}</i>
                    </p>
                    <p>
                        Rt_score <i>{this.state.data_.rt_score}</i>
                    </p>
                </div>
                <div class="pictures">
                    <h3>Glimpse Of the anime</h3>
                    <img src={this.state.data_.movie_banner} alt="banner"/>
                </div>
          </div>
          </>
          }
      </div>
      <Footer />
    </div>
      
    )
  }
}

export default AnimeInfo