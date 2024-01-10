// user={name="something",age="8",hobbies=["football",cricket]}

import { useState } from "react";

const UserInfoState= () => {
  const [user, setUser] = useState({ name: "", age: "3", hobbies: [] });
  return (
    <div className="border border-blue-500 p-10 m-10">
      <form>
        <input
        onChange={(e)=>setUser({...user,name:e.target.value})}
          className="border border-purple-400 m-10"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
        <input
          className="border border-purple-400 m-10"
          type="number"
          name="age"
          id="age"
          placeholder="age"
        />
        <input
          className="border border-purple-400 m-10"
          type="text"
          name="hobbies"
          id="hobbies"
          placeholder="hobby"
        />

        <button className="btn btn-success" type="submit">submit</button>
      </form>
    </div>
  );
};
export default UserInfoState;
