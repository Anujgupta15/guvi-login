import { useEffect, useState } from "react";
import React from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import "./MyNotes.css";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");

    setNotes(data);
  };

  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="rang">
      <MainScreen title="Hey Welcome..">
        <div className="centerone">
          <h4>To Update</h4>
          <h4> Go To the Profile Tab</h4>
        </div>
      </MainScreen>
    </div>
  );
};

export default MyNotes;
