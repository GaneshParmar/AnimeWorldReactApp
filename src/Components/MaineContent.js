import AnimeCard from './AnimeCard'
import '../Css/MainContent.css';
import React, {Component } from "react";

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
          <div className='mainContainer'> 
            {this.state.loading && <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif"/>}

        {
            this.state.data_.map((data, i) => {     
                console.log("Entered");                 
                // Return the element. Also pass key     
                return ( 
                <AnimeCard 
                    img= {data.image}
                    title={data.title} 
                    detail={data.description}
                />
            )})
        }


    </div>

    )
  }
}
