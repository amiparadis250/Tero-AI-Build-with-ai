import React, { useState } from "react";

import { Button, Input, Typography, Select } from "antd";
import ReactPlayer from 'react-player'
import TextInput from "../antd/Input";

export const TextPrompt = () => {
  const [speed, setSpeed] = useState("1.0");

  return (
    <div className="flex flex-row w-[100%] gap-3 relative bottom-6">
      <div className="w-[40%] h-[60vh] relative right-5">
        <div>
          <h6 className="text-sm font-medium ">Text Prompt</h6>
          <TextInput />
        </div>
        <div></div>
        <div className="mt-5">
          <h6 className="text-sm font-medium ">Language</h6>
          <Select
            style={{ width: 200, color: "white" }}
            options={[
              { value: "English", label: "English" },
              { value: "Spanish", label: "Spanish" },
              { value: "French", label: "French" },
              { value: "German", label: "German" },
              { value: "Italian", label: "Italian" },
            ]}
            onChange={(value) => console.log(`selected ${value}`)}
            placeholder="English (Us)"
            dropdownStyle={{
              backgroundColor: "white",
              color: "black",
            }}
            defaultValue="English"
          />
        </div>
        <div className="mt-5">
          <h6 className="text-sm font-medium ">Style & Time</h6>
          <Select
            style={{ width: 200, color: "white" }}
            options={[{ value: "Entertaining", label: "Entertaining" }]}
            onChange={(value) => console.log(`selected ${value}`)}
            placeholder="English (Us)"
            dropdownStyle={{
              backgroundColor: "white",
              color: "black",
            }}
            defaultValue="English"
          />
        </div>
        <div className="mt-5">
          <h6 className="text-sm font-medium ">Speed</h6>
          <div className="flex gap-1">
            <Button className="hover:bg-blue-700">0.75x</Button>
            <Button>1.0x</Button>
            <Button>1.5x</Button>
            <Button>2.0x</Button>
          </div>
        </div>
        <div className="mt-5">
          <Button className="bg-blue-700 text-white w-[250px] rounded-lg">
            Generate Video
          </Button>
        </div>
      </div>
      <div className="w-[60%] h-[60vh] bg-black">
       <ReactPlayer url='https://zmooz-bucket.s3.bhs.io.cloud.ovh.net/asset/media-d6b7b4b2-74a8-4d2b-b7b2-47bec7fb3682/Best-Practices-for-Storing-and-Preserving-Maize-Harvest-BJYAJ.mp4' 
         width='100%'
         height='100%'
         controls={true}
         playing={true}
         muted={true}
         className='video-player'
         playbackRate={parseFloat(speed)}
        

       
       />
      </div>
    </div>
  );
};

export default TextPrompt;
