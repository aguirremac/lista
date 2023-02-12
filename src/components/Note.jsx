import React, { useRef } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';


const style = {
  noteContainer: `w-full flex justify-evenly xl:justify-start gap-y-3 xl:gap-4 pt-3 md:pt-6 flex-wrap flex-start pb-2 md:px-5 xl:px-5 z-11 absolute`,
  note: `font-mont w-[170px] h-[180px] md:h-[250px] md:w-[300px]  overflow-hidden  shadow-xl rounded-xl cursor-pointer hover:scale-105 duration-200`,
  textContainer: `relative px-2 md:px-5 pt-3 h-full`,
  delete: `absolute top-3 right-3 text-[15px] md:text-[20px] text-gray-600 cursor-pointer hover:text-red-700 hover:scale-125`,
  title: `font-bold  text-xs md:text-xl pb-2 truncate max-w-[130px] md:max-w-[240px]`,
  contentContainer: `md:h-[170px] h-[110px] truncate`,
  content: `h-full whitespace-pre-wrap text-[10px] md:text-[15px] font-medium leading-relaxed`,
  dateTime: ` text-[8px] text-gray-600 md:text-[12px] pt-3 md:pt-2 text-right`,
  // seeMore: `absolute bottom-2 font-semibold text-[10px] md:text-sm text-black hover:text-red-700 hover:font-bold`,
};

const Note = (props) => {
  // const [notes, setNotes]= useState ([])

  return (
    <div>
      <div className={style.noteContainer}>
        {props.notes
          .map((item, idNumber) => {
            return (
              <div
                onClick={()=> {props.clickSeeMore(idNumber)}}
                key={idNumber}
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
                      props.onDelete(idNumber);
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
                      props.clickSeeMore(idNumber);
                    }}
                    className={style.seeMore}
                  >
                    See more..
                  </p> */}
                </div>
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default Note;
