import AnimeCard from './AnimeCard'
import '../Css/MainContent.css';
import React, {Component } from "react";
import Header from '../Components/header';
import Footer from '../Components/Footer';
// function MaineContent() {
//     const [data_, setData] = useState(null);

//     const fetchData = () => {
//         fetch("https://ghibliapi.herokuapp.com/films")
//           .then(response => {
//             return response.json()
//           })
//           .then(data => {
//             setData(data)
//           })
//       };
//       usecomponentWillMount(()=> {
//           fetchData();
//       });

//   return (
//     <div className='mainContainer'> 


//         {
//             data_.map((data, i) => {     
//                 console.log("Entered");                 
//                 // Return the element. Also pass key     
//                 return ( 
//                 <AnimeCard 
//                     img= {data.image}
//                     title={data.title} 
//                     detail={data.description}
//                 />
//             )})
//         }


//     </div>
//   )
// }

// export default MaineContent



export default class MaineContent extends Component {
    // const [data_, setData] = useState(NULL);
    constructor(props) {
        super(props);
        this.state = {
          data_: [],
          loading:true
        };
      }
  
      fetchData = () => {
                fetch("https://ghibliapi.herokuapp.com/films")
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
          <Header />
          <div className='mainContainer'> 
          {this.state.loading && <div className='loaderWrap'><img  className='loader' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif" width={200}/><p>Taking time to load Make sure connected to network and refresh page</p></div>
      }

        {
            this.state.data_.map((data, i) => {                   
                // Return the element. Also pass key     
                return (
                <AnimeCard 
                    img= {data.image}
                    title={data.title} 
                    detail={data.description}
                    animeid={data.id}
                />
            )})
        }


    </div>
    <Footer />
      </div>

    )
  }
}
