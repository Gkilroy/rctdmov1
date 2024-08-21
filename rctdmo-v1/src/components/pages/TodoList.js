import { useEffect, useState } from "react";



const list_array = [
    {id:1,name:"item one", completed:false},
    {id:2,name:"item two", completed:false},
    {id:3,name:"item three", completed:true},
    {id:4,name:"item four", completed:false},
    {id:5,name:"item five", completed:true}
];

const TodoList = (props) => {

    const [msg, setMsg] = useState("");


    const [list, setList] = useState(list_array);
    const [filteredlist, setFilteredList] = useState(null);
    const [txtnewitem, setTxtNewItem] = useState("");

    useEffect(()=>{


        setFilteredList(list);

        return () =>{
    
        }

    },[]);

    const handleAddNewItem = (e) => {
        e.preventDefault();

        const _function_name = "** handleAddNewItem";

        try {
            
            let _msg = `${_function_name}`;
            
            if(txtnewitem === null || txtnewitem === undefined || txtnewitem === "" 
                || txtnewitem.trim().length === 0)
                {
                    _msg = "* please enter a valid item name";
                    setMsg(_msg);

                    return true;                
            }

            var _newitem = {id: (new Date()).getTime(),name:txtnewitem, completed:false};

   

            setList((prevval)=>{
                const _lst = [...prevval,_newitem]
                

                setFilteredList(_lst);

                return _lst;
            });


            setTxtNewItem("");

            _msg = "** item added";
            setMsg(_msg);

            
        } catch (error) {            
            const _msg = `${_function_name}::Error - ${error}`;
            setMsg(_msg);
            console.log(_msg);
        }
    }

    
    const handleDisplayAllItems = (e) => {
        e.preventDefault();

        const _function_name = "** handleDisplayAllItems";

        try {
            

            setFilteredList(list);

            setTxtNewItem("");
            
        } catch (error) {            
            const _msg = `${_function_name}::Error - ${error}`;
            setMsg(_msg);
            console.log(_msg);
        }
    }

    const handleDisplayUncompleteItems = (e) => {
        e.preventDefault();

        const _function_name = "** handleDisplayUncompleteItems";

        try {
            

            setFilteredList(list.filter((item)=>{
                return (item.completed === false)
            }));
            
            setTxtNewItem("");
            
        } catch (error) {            
            const _msg = `${_function_name}::Error - ${error}`;
            setMsg(_msg);
            console.log(_msg);
        }
    }

    const handleDisplayCompletedItems = (e) => {
        e.preventDefault();

        const _function_name = "** handleDisplayCompletedItems";

        try {
            
  
            setFilteredList(list.filter((item)=>{
                return (item.completed === true)
            }));
            
            setTxtNewItem("");
            
        } catch (error) {            
            const _msg = `${_function_name}::Error - ${error}`;
            setMsg(_msg);
            console.log(_msg);
        }
    }

    
    const handleDeleteItem = (e, id) => {
        e.preventDefault();

        const _function_name = "** handleDeleteItem";

        try {
            
            let _msg = "";

            let _index = -1;

            const _item_found = list.find((item,index)=>{
                _index = index;
                return item.id == id;
            })

            const _name = (_item_found !== null )? _item_found.name:"";


            const _ret = window.confirm(`Delete item - ${_name} ?`);

            if(!_ret || _index === -1){
                return true;
            }

            setList((prevval)=>{

                let _lst = [...prevval]
                
                _lst.splice(_index,1);
                
                setFilteredList(_lst);

                return _lst;
            })
            
            _msg = `* item deleted: ${id}`;
            setMsg(_msg);

            setTxtNewItem("");

        } catch (error) {            
            const _msg = `${_function_name}::Error - ${error}`;
            setMsg(_msg);
            console.log(_msg);
        }
    }

    const handleItemToggle = (e, id) => {

        const _function_name = "** handleItemToggle";

        try
        {
            let _msg = "";


            let _lst1 = list.map((item)=>{
                return   (item.id == id)?                  
                       {...item,completed:!item.completed}
                  :
                       {...item};                
              });

              let _lst2 = filteredlist.map((item)=>{
                return   (item.id == id)?                  
                       {...item,completed:!item.completed}
                  :
                       {...item};                
              });

            setList(_lst1);
            setFilteredList(_lst2);

            setTxtNewItem("");

        } catch (error) {            
            const _msg = `${_function_name}::Error - ${error}`;
            setMsg(_msg);
            console.log(_msg);
        }
    }

    return(
    <>
        <div>
            <div>
                <input type="text" name="txtnewitem" 
                    value={txtnewitem} maxLength={20} placeholder="* add item"
                    onChange={(e)=>setTxtNewItem(e.target.value)}
                />
                {" "}
                <button onClick={handleAddNewItem}>add</button>
                <p>
                    {msg}
                </p>
                <a href="/" onClick={handleDisplayAllItems}>all</a>{" | "}
                <a href="/" onClick={handleDisplayCompletedItems}>completed</a>{" | "}
                <a href="/" onClick={handleDisplayUncompleteItems}>un-complete</a>
            </div>
            <div>
                {filteredlist && filteredlist.map((item)=><p key={item.id}>{
                <>
                    <input type="checkbox" checked={item.completed} 
                    onChange={(e)=>handleItemToggle(e,item.id)}/>
                    {" "}
                    <span key={item.id} style={{'text-decoration':(item.completed)?"line-through":""}}>
                        {item.name}</span>
                    {" "}
                    <button onClick={(e) => handleDeleteItem(e, item.id)}>x</button>
                </>
                }</p>)}
            </div>
        </div>
    </>
    )
}
 
export default TodoList;