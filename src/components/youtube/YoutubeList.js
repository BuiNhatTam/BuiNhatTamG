import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./Youtubeitem";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
        {
          /* const newClass = index ===1? "abc" : ''; */
        }
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar}
            title={item.title}
            author={item.author}
            className={newClass}
          ></YoutubeItem>
          
        );
      })}
    </div>
  );
};

export default YoutubeList;
