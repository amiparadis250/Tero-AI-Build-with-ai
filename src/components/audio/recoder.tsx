// import { useState } from "react";
// import MicRecorder from "mic-recorder-to-mp3";

// const recorder = new MicRecorder({ bitRate: 128 });

// export default function AudioRecorder() {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [audioUrl, setAudioUrl] = useState(null);

//   const startRecording = () => {
//     recorder
//       .start()
//       .then(() => setIsRecording(true))
//       .catch((e) => console.error(e));
//   };

//   const stopRecording = () => {
//     recorder
//       .stop()
//       .getMp3()
//       .then(([buffer, blob]) => {
//         setIsRecording(false);
//         setAudioBlob(blob);
//         setAudioUrl(URL.createObjectURL(blob));
//       })
//       .catch((e) => console.error("Error retrieving audio", e));
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <h1 className="text-2xl font-bold mb-4">Audio Recorder</h1>
//       <button
//         onClick={isRecording ? stopRecording : startRecording}
//         className={`px-4 py-2 rounded text-white ${
//           isRecording ? "bg-red-500" : "bg-green-500"
//         }`}
//       >
//         {isRecording ? "Stop Recording" : "Start Recording"}
//       </button>
//       {audioUrl && (
//         <div className="mt-4">
//           <audio controls src={audioUrl}></audio>
//         </div>
//       )}
//     </div>
//   );
// }
