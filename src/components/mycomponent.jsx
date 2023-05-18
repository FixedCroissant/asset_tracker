import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import FormTemp from "./FormTemp";


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isEditable: false,
      items: [],
    };
    //Binding this keyword.
    this.handleClick = this.handleClick.bind(this) 
    this.edits = this.edits.bind(this) 
  }
  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "/index")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  handleButton() {
    this.setState({ isEditable: false });
  }

  //Switch to editable
  handleClick() {
    this.setState({isEditable: true});
    //alert('want to make it editable');
  }

  //Allow for edits.   
  edits(data){
    //console.log(id);
    //console.log(data);
    if(this.state.isEditable){
        return <Form editMode={true} state={data}/>
    }        
 }

//Start
editTask(id, newName) {
 
}
//End


  render() {
    const { error, isLoaded, items } = this.state;
    let button;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else 
    {
    
      return (
        <ul>
          Edit this page? {this.props.editPage}
          {/* {items.map((item) => (
            <li key={item.Id}>
              <Link to={`/cities/${item.Id}`} onClick={this.handleClick}>
                EDIT
              </Link>
              {this.edits(item.Id,item)} | {item.Name} - {item.Population}
            </li>
          ))} */}

              {items.map((item)=>(
                    <FormTemp key={item.Id} Name={item.Name}/>
           ))} 

        </ul>
      );
    }
  }
}

export default MyComponent;
