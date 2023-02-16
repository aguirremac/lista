import React, { useContext, useEffect, useMemo, useState} from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { doc, deleteDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';
import { db } from '../config/firebase';
import Edit from './Edit';
import Header from './Header';
import Input from './Input';


const style = {
  noteContainer: `w-full flex justify-evenly  xl:justify-start gap-y-3 xl:gap-4 pt-3 md:pt-6 flex-wrap flex-start pb-2 md:px-5 xl:px-5 z-11 absolute `,
  empty: `flex items-center justify-center md:text-5xl font-mont font-bold text-black/30 w-full h-screen`,
  note: `font-mont w-[170px] h-[180px] md:h-[250px] md:w-[300px]  overflow-hidden  shadow-xl rounded-xl cursor-pointer hover:scale-105 duration-200`,
  textContainer: `relative px-2 md:px-5 pt-3 h-full`,
  delete: `absolute top-3 right-3 text-[15px] md:text-[20px] text-gray-600 cursor-pointer hover:text-red-700 hover:scale-125`,
  title: `font-bold  text-xs md:text-xl pb-2 truncate max-w-[130px] md:max-w-[240px]`,
  contentContainer: `md:h-[170px] h-[110px] truncate`,
  content: `h-full whitespace-pre-wrap text-[10px] md:text-[15px] font-medium leading-relaxed`,
  dateTime: ` text-[8px] text-gray-600 md:text-[12px] pt-3 md:pt-2 text-right`,
  // seeMore: `absolute bottom-2 font-semibold text-[10px] md:text-sm text-black hover:text-red-700 hover:font-bold`,
};

const Note = () => {
  // const [notes, setNotes]= useState ([])
  
  const {loggedUser} = useContext(AuthContext);
  const [seeMore, setSeeMore] = useState(false)
  const [selectedNote, setSelectedNote] = useState("");
  const [notes, setNotes] = useState([]);
 
  
  let notesList = [];
  
const notesQuery = useMemo(()=> 
  query(collection(db, "notes"), where("userId", "==", loggedUser.uid)),[loggedUser.uid]
)

  useEffect(()=> {

    const fetchData = async() => {
    try{
    
    const querySnapshot = await getDocs(notesQuery);
  querySnapshot.forEach((doc) => {    
    notesList.push({...doc.data(), noteId: doc.id}) //id of notes to array
     
  }); 
     setNotes(notesList)

}catch (err) {
  console.log(err.message)


    }
    
  }; fetchData()
  

  },[notesList])

const handleSeeMore = (index) => {
  setSeeMore(true)
  setSelectedNote(notes[index])
}

const handleClose = () => {
  setSeeMore(false)
}


const onDelete = async (index) => {
  console.log(doc)
  await deleteDoc(doc(db, "notes", notes[index].noteId));
}


  return (
    <div>
      <div className={style.noteContainer}>
{notes.length === 0 ? <div className={style.empty}><h1>No Notes Added</h1></div> : notes
          .map((item, index) => {
            return (
              <div
                id={index}
                onClick={()=> {handleSeeMore(index)}}
                key={index}
                className={style.note}
              >
                <div
                  style={{
                    backgroundColor:
                      item.noteColor !== '' ? item.noteColor : '#fffd8d',
                  }}
                  className={style.textContainer}
                >
                  <RiDeleteBin6Line
                  
                    onClick={(e) => { 
                      e.stopPropagation();
                      onDelete(index);
                    }}
                    className={style.delete}
                  />
                  <h2 className={style.title}>{item.title}</h2>

                  <div className={style.contentContainer}>
                    <p className={style.content}>{item.content}</p>
                  </div>
                  <p className={style.dateTime}>{item.dateTime}</p>
                   {/* <p
                    onClick={() => {
                      clickSeeMore(idNumber);
                    }}
                    className={style.seeMore}
                  >
                    See more..
                  </p>  */}
              </div>
              </div>
            );
          })}

        
      </div>
      {seeMore && <Edit  selectedNote={selectedNote} handleClose={handleClose} />}
      
      
    </div>
  );
};

export default Note;
