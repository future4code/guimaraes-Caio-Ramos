import React, { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const headers = {
    headers: {
      Authorization: "caio-ramos-guimaraes",
    },
  };
  const [user, setUser] = useState([]);
  const [like, setLike] = useState(false);

  const getProfileToChoose = (profile) => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${profile.id}/person
`,
        headers
      )
      .then((res) => {
        console.log(res.data.result.list);
        setUser(res.data.result.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);
  return <div>App</div>;
}
