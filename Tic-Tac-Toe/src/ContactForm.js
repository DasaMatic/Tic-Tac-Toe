import React, { useState, useEffect } from "react";
import "./index.css";
import { db } from "./firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (


    <div className="contrainer col-md-8 con">
      <form className="form " onSubmit={handleSubmit}>
        <div className="col-md-6" >
          <article className="card  py-2 px-4" >
            <div className="container con1 text-center" >

              <h4>Let us know if you liked the game 🤳</h4>
            </div>
            <div className="card-body">

              <div className="form-group">

                <label>Name</label>
                <input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">

                <label>Email</label>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />

              </div>

              <div className="form-group">

                <label>Message</label>
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                ></textarea>


              </div>

              <div className="form-group text-center">

                <button
                  className="btn btn-warning"
                  type="submit"
                  style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                >
                  Submit
                  </button>
              </div>

            </div>

          </article>

        </div>
      </form>
    </div>

  );
};


// return (
//   <form className="form" onSubmit={handleSubmit}>
//     <h1>Contact Us 🤳</h1>

//     <label>Name</label>
//     <input
//       placeholder="Name"
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//     />

//     <label>Email</label>
//     <input
//       placeholder="Email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//     />

//     <label>Message</label>
//     <textarea
//       placeholder="Message"
//       value={message}
//       onChange={(e) => setMessage(e.target.value)}
//     ></textarea>

//     <button
//       type="submit"
//       style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
//     >
//       Submit
//     </button>
//   </form>
// );
// };
export default Contact;