import React from "react";

//Import Components
import List from "./components/list";

function Props() {
  return (
    // Code Inside div
    <div>
      <p>On the image using default page, namely src</p>
      <img
        src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1542354895/ulaqus4ev5ihhqkpbhuz.jpg"
        alt=""
      />

      <List Data="Bebek Merah Warnanya (BMW)" />
      <List Data="Mercedez" />
      <List Data="Lemberjember" />
    </div>
  );
}

export default Props;
