import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import { FlatList } from 'react-native-web';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


function App (){

  const [Data, setData] = useState([]);

  const handleChange = (event) => {
    setData(event);
    console.log(event);
  }
  const AddNewItem = () =>{
    
  }

    return(
      <div className='App' >
        <header className='App-header'>
          <p> To Do List: </p>

          <form  onSubmit={AddNewItem} id="form">
            <label>
              <input type="text" name="name" onChange={handleChange} ></input>
            </label>
            <input type="submit" name="submit"></input> 
          </form>
          {/* <SafeAreaView>
            <FlatList id="to_do_items_flatlist"
              data = { Data }
              keyExtractor = {(item, index) => item + index}
              renderItem = { ({item}) => <Item title={item} ></Item> }
              extraData = {this.state.to_do_items}
              // renderSectionHeader={({ section: { title } }) => ( <Text >{title}</Text> )}
            ></FlatList>

            <FlatList
              data = { this.state.completed_items }
              keyExtractor = {(item, index) => item + index}
              renderItem = { ({item}) => <Item title={item} ></Item> }
              extraData = {this.state.completed_items}
              // renderSectionHeader={({ section: { title } }) => ( <Text >{title}</Text> )}
            ></FlatList>
          </SafeAreaView> */}

        </header>

      </div>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#a9cfff",
    padding: 8,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 16
  }
});

export default App;
