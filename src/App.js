import React, {useState } from "react";
import {View, Text, FlatList, Alert, TouchableOpacity} from 'react-native';
import styles from './App.style';

//Components
import ToDoCard from "./components/ToDoCard/ToDoCard";
import Input from "./components/Input/Input";
import InfoCard from "./components/InfoCard/InfoCard";


const App = () => {

  //States
  const [list, setList] = useState([]);
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(list.length);
  const [showHide, setShowHide] = useState(false);


  const handleRenderItem = ({item}) => {
   return <ToDoCard toDo={item} changeIsDone={changeIsDone} deleteToDo={deleteToDo}/>
  };

  const handleAddGorev = () => {
    if (text === ''){
      return Alert.alert('Boş bir yapılacak giremezsiniz!');
    }

    setList([...list, {id : Date.now() + Math.random(), name : text, isDone : false}]);
    setText('');

    //counter
    const newerList = list.filter(gorev => {
      if(gorev.isDone === false) {
        return gorev;
      }
    })
    setCounter(newerList.length + 1);
    setShowHide(false);
  }

  const changeIsDone = (id) => {
    const newList = list.map(e => {
      if(e.id === id){
        e.isDone = !e.isDone;
      }
      return e;
    })
    setList(newList);

    //counter 
    const newerList = list.filter(gorev => {
      if(gorev.isDone === false) {
        return gorev;
      }
    })
    setCounter(newerList.length);
  }

  const deleteToDo = (id) => {
    const newList = list.filter(e => e.id !== id);
    setList(newList);

    //counter
    const newerList = newList.filter(gorev => {
      if(gorev.isDone === false) {
        return gorev;
      }
    })
    setCounter(newerList.length);
  }

  const resetAllGorev = () => {
        setList([]);
        setCounter(0);
        setText('');
        Alert.alert('Liste temizlendi!')
  }

  const infoShow = () => setShowHide(!showHide);

  return (
      <View style={styles.container}>
        
        <View style={styles.title_container}>
          <Text style={styles.title}>Yapılacaklar</Text>

          <TouchableOpacity onPress={infoShow} style={styles.info_button}>
          <View style={styles.info_cont}>
            <Text style={styles.info_text}>Info</Text>
          </View>
        </TouchableOpacity>

          <Text style={styles.counter}>{counter}</Text>
        </View>

        <View style={styles.flat}>
          <FlatList 
            data={list}
            renderItem={handleRenderItem}
          />
        </View>

        
        {showHide && <InfoCard setShowHide={setShowHide}/>}
        

        <Input
         text={text} 
         handleAddGorev={handleAddGorev} 
         resetAllGorev={resetAllGorev}
         setText={setText}
        />

      </View>    
  )
}

export default App;