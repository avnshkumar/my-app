import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import { Button, CheckBox, FlatList } from 'react-native-web';




function App (){

  const [Data, setData] = useState([]);
  const [formValue, setFormValue] = useState('');
  const [completedDataList, setCompletedDataList] = useState([]);

const Item = ({ item }) => (
  <div style={styles.MainContainer} id= {item.title}>
      <Text  className="flex-item" style = {styles.item}>{item.title}</Text>
      <input  type="checkbox"  checked={item.isChecked} onChange={e => handleCheckBox( e, item.title )} ></input>
  </div>
);

const handleChange = (event) => {
  setFormValue(event.target.value);
}
const handleSubmit = (event) =>{
  
  if (formValue !== "" && (Data.filter( data => data.title===formValue )).length===0 && ( completedDataList.filter( data => data.title === formValue ) ).length===0 ){
    var form = document.getElementById("form");
    var x = {
      title: formValue,
      isChecked: false
    }
    setData( [ x, ...Data]);
    setFormValue("");
    form.reset();
    console.log(Data);
  }
  else {
    alert("Empty Task or Task already added");
  }
  event.preventDefault();
}

const handleCheckBox = (e, item_title) => {
  var checked_status = e.target.checked;
  console.log(checked_status)
  if (checked_status){
    var parent = e.target.parentNode.parentNode;
    console.log(parent);
    var newData = Data.filter( data => data.title !== item_title );
    var [oldData] = Data.filter( data => data.title === item_title );

    oldData.isChecked = true;
    console.log(oldData)
    console.log(newData)
    setData(newData);
    setCompletedDataList( [oldData, ...completedDataList] );
    console.log(completedDataList)
  }else{
    console.log('Some thing change !! Unexprected')
    var parent = e.target.parentNode.parentNode;
    console.log(parent);
    var newData = completedDataList.filter( data => data.title !== item_title );
    var [oldData] = completedDataList.filter( data => data.title === item_title );

    oldData.isChecked = checked_status;
    
    setCompletedDataList(newData);
    setData( [oldData, ...Data] );
  }


}

const RenderItem = ({ item }) => (
    <Item item={item} />
  );

  return(
    <div className='App' >
      <header className='App-header'>
        <p> To Do List: </p>

        <form  onSubmit={handleSubmit} id="form">
          <label>
            <input type="text" name="name" onChange={handleChange} placeholder="Add a task ..." ></input>
          </label>
          <input type="submit" name="submit"></input> 
        </form>

        {/* <SafeAreaView>
          <p>Pending Items :</p>
          <FlatList
            data = {Data}
            keyExtractor = {(item, index) => item.title + index}
            renderItem={({ item }) => (<RenderItem item={item.title} />)}
            extraData = {Data}
          ></FlatList>
        </SafeAreaView> */}
        <p>Pending Items: </p>
        <ol id='PendingItemsList'>
          { Data.map( (data, index)=> {
            return(
            <Item className="flex-container" key={'Pending' +data.title + index} item={data}></Item>
            );
          })}
        </ol>

        <p>Completed Items: </p>
        <ol id='CompletedItemsList'>
          { completedDataList.map( (data, index)=> {
            return(
            <Item className="flex-container" key={'Completed' + data.title + index} item={data}></Item>
            );
          })}
        </ol>
      </header>

    </div>
  );
}


const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
 
  item: {
    fontSize: 24,
    color: 'black',
    paddingLeft: 10
  },
 
  button: {
    width: '90%',
    height: 45,
    padding: 5,
    backgroundColor: 'green',
    borderRadius: 6,
    alignSelf: 'center',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  buttonText:{
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  }
 
});

export default App;
