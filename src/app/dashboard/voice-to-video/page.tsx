"use client";
import React, { useState, useRef } from "react";
import { Button, Select } from "antd";
import ReactPlayer from "react-player";
import { AudioOutlined, StopOutlined, DeleteOutlined } from "@ant-design/icons";

 const AudioPrompt = () => {
  const [speed, setSpeed] = useState("1.0");
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    setStream(stream);
    mediaRecorderRef.current = new MediaRecorder(stream);
    const audioChunks: Blob[] = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioURL(audioUrl);
      stream.getTracks().forEach((track) => track.stop()); // Stop the stream tracks
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const deleteRecording = () => {
    setAudioURL(null); 
  };

  return (
    <div className="flex w-full gap-6">
      {/* Left Side: Controls */}
      <div className="w-[40%] p-6 bg-gray-50 rounded-lg shadow-sm">
        {/* Audio Prompt Section */}
        <div>
          <h6 className="text-sm font-medium mb-2">Audio Prompt</h6>
          <div className="flex items-center gap-3">
            <Button
              onClick={recording ? stopRecording : startRecording}
              shape="circle"
              icon={recording ? <StopOutlined /> : <AudioOutlined />}
              className={`flex items-center justify-center w-12 h-12 ${
                recording ? "bg-red-500" : "bg-blue-500"
              } text-white border-none`}
            />
            {recording && (
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4,5, 6,9,10,11,12,13,14,15,16,17,18,19,20].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-6 bg-blue-500 animate-wave"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            )}
          </div>
          {/* Recorded Audio Preview */}
          {audioURL && (
            <div className="mt-4 flex items-center gap-3">
              <audio controls className="w-full">
                <source src={audioURL} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
              <Button
                icon={<DeleteOutlined />}
                onClick={deleteRecording}
                className="flex items-center justify-center bg-red-500 text-white border-none"
              />
            </div>
          )}
        </div>

        {/* Language Select */}
        <div className="mt-6">
          <h6 className="text-sm font-medium mb-2">Language</h6>
          <Select
            className="w-full"
            options={[
              { value: "English", label: "English" },
              { value: "Spanish", label: "Spanish" },
              { value: "French", label: "French" },
              { value: "German", label: "German" },
              { value: "Italian", label: "Italian" },
            ]}
            placeholder="Select Language"
            defaultValue="English"
            dropdownStyle={{ backgroundColor: "white" }} // Fix for black background
          />
        </div>

        {/* Style & Time Select */}
        <div className="mt-6">
          <h6 className="text-sm font-medium mb-2">Style & Time</h6>
          <Select
            className="w-full"
            options={[{ value: "Entertaining", label: "Entertaining" }]}
            placeholder="Select Style"
            defaultValue="Entertaining"
            dropdownStyle={{ backgroundColor: "white" }} 
          />
        </div>

        {/* Speed Controls */}
        <div className="mt-6">
          <h6 className="text-sm font-medium mb-2">Speed</h6>
          <div className="flex gap-2">
            {["0.75x", "1.0x", "1.5x", "2.0x"].map((s) => (
              <Button
                key={s}
                onClick={() => setSpeed(s)}
                className={`flex-1 ${
                  speed === s
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-blue-500 hover:text-white"
                } transition-colors duration-200`}
              >
                {s}
              </Button>
            ))}
          </div>
        </div>

        {/* Generate Video Button */}
        <div className="mt-6">
          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
            Generate Video
          </Button>
        </div>
      </div>

      {/* Right Side: Video Preview */}
      <div className="w-[60%] h-[60vh] bg-black rounded-lg overflow-hidden">
        <ReactPlayer
          url="https://youtu.be/lv37ygwXnc4?si=x1H5ojWrpYkff1ZH"
          width="100%"
          height="100%"
          controls
          playing
          muted
          playbackRate={parseFloat(speed)}
        />
      </div>
    </div>
  );
};

export default AudioPrompt;