import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled("div")(({ theme }) => ({
  width: "80%",
  margin: "20px auto",
  padding: "30px",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
}));

const TODoContainer = styled("div")(({ theme }) => ({
  width: "50%",
  margin: "auto",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
  backgroundColor: "#f0efe9",
  padding: "20px",
}));

const Header = styled("h1")(({ theme }) => ({
  // color: "#6ce8b3",
  textAlign: "center",
  fontWeight: "bold",
  marginBottom: "50px",
}));

const FlexDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
  padding: "5px",
  borderRadius: "10px",
  '&.border':{
    backgroundColor: "#fff",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
  }

}));
const Input = styled("input")(({ theme }) => ({
  width: "80%",
  marginRight:"5%" , 
  borderRadius: "5px",
  border:"none",
  boxShadow : "0 0 10px 0 rgba(0, 0, 0, 0.3)",
  padding: "7px",
  fontWeight: "bold",
  '&:focus':{
    outline:"none",
    boxShadow : "0 0 10px 0 rgba(0, 0, 0, 0.6)",
  } 
}));

const AddButton = styled("div")(({ theme }) => ({
    width: "15%",
    backgroundColor: "#48d17e",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition:"background-color 0.2s ease-in-out" , 
    '&:hover':{
        cursor: "pointer",
        backgroundColor: "#48d17ed4",
    }
}));
const DeleteButton = styled(AddButton)(({ theme }) => ({
    backgroundColor: "#dc3545",
    '&:hover':{
        cursor: "pointer",
        backgroundColor: "#b02a37",
    }  
}));
const List = styled("ul")(({ theme }) => ({
    listStyle: "none",
    padding: "0",
}));
const ListItem = styled("li")(({ theme }) => ({
    width : "80%",
    marginRight:"5%" , 
    borderRadius: "5px",
    padding: "5px",
    fontWeight: "bold",
}));
const ToDoList = () => {

const [newItem , setNewItem] = useState("") ;
const [items , setItems] = useState([]) ;

const AddToItems =  () =>{
    if (newItem==="") {
        alert("Please Enter a task toDo !") ;
        return ; 
    }
    const item = {
        id: Math.random()*1000, 
        value: newItem
    }
    setItems ([...items,item] )   ; 
    setNewItem("") ;
    console.log(items) ;
}

const deleteItem = (id) =>{
    const newItems  = [];
    for (var i = 0 ; i<items.length ; i++){
        if (items[i].id!==id ) {
            newItems.push(items[i]) ;
        }
    } 
    setItems(newItems) ;
}
  return (
    <>
      <Container>
        <TODoContainer>
          <Header>ToDo List</Header>
          <FlexDiv>
            <Input value = {newItem}  onChange={(e)=>{setNewItem(e.target.value)}}/>
            <AddButton onClick={()=>{AddToItems()}}> Add</AddButton>
          </FlexDiv>
            <List>
                { items.map((item)=>{
                    return (
                        <FlexDiv className="border" key = {item.id}>
                            <ListItem>{item.value}</ListItem> 
                            <DeleteButton onClick={()=>{deleteItem(item.id)}} >Delete</DeleteButton>
                        </FlexDiv>
                    )
                })}
            </List>
        </TODoContainer>
      </Container>
    </>
  );
};

export default ToDoList;
