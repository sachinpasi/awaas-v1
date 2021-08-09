import axios from "axios";
import React, { useState } from "react";
import { API } from "../../../API";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Redux/_features/_userSlice";
import Login from "../Login/Login";

const Banner = () => {
  const [Name, setName] = useState("");
  const [Amount, setAmount] = useState("");
  const [Phone, setPhone] = useState("");
  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);

  const user = useSelector(selectUser);
  const history = useHistory();

  const HandleSubmit = async () => {
    const res = await axios.post(`${API}/leads/store-home-loan`, {
      name: Name,
      amount: Amount,
      phone: Phone,
    });
    if (res.status === 200) {
      return toast.success("You Will Get A Callback Soon!");
    }
  };

  const HandleTrackApplication = () => {
    if (user.isLoggedIn) {
      history.push("/profile/home-loan");
    } else {
      setisLoginModalOpen(true);
    }
  };

  return (
    <>
      <Login
        isLoginModalOpen={isLoginModalOpen}
        setisLoginModalOpen={setisLoginModalOpen}
      />
      <section
        style={{
          background: "url(/assets/images/homeloans/bannerbg.png)",
          height: "50vh",
          overflowY: "visible",
          backgroundPosition: "center",
        }}
        className=" bg-center"
      >
        <div
          style={{ background: "rgba(0,0,0,0.2yygg)" }}
          className="w-full h-full "
        >
          <div className="customContainer flex justify-between items-center h-full">
            <div className="w-2/4 flex-col flex items-start">
              <p
                style={{
                  textShadow: "rgb(0 0 0) -7px 2px 20px",
                }}
                className="text-3xl text-white my-8 "
              >
                Fill Loan Application Online now, and track Daily progress!
              </p>
              <Link
                to="/home-loans/apply"
                className="text-lg text-white  text-center font-medium bg-blue py-2 px-5 w-64"
              >
                Apply for new Home Loan
              </Link>
              <div
                onClick={HandleTrackApplication}
                className="text-lg text-blue text-center  font-medium bg-white cursor-pointer py-2 px-5 w-64 my-2"
              >
                Track Your Application
              </div>
            </div>
            <div
              style={{
                width: "30%",
              }}
              className=" h-full flex justify-end"
            >
              <div
                style={{
                  background: " rgb(9 27 92 / 62%)",
                }}
                className="rounded shadow-lg mt-14 w-4/5 h-full  text-white flex flex-col justify-between items-start px-6"
              >
                <p className="text-2xl tracking-tight border-b-1 py-2 w-full text-white">
                  Apply for loan
                </p>
                <div className="w-full">
                  <p className="text-base py-1 text-white tracking-tight">
                    Name
                  </p>
                  <input
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full h-11 border-1 rounded px-2"
                  />
                </div>{" "}
                <div className="w-full">
                  <p className="text-base py-1 text-white tracking-tight ">
                    Phone Number
                  </p>
                  <input
                    type="text"
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full h-11 border-1 rounded px-2"
                  />
                </div>
                <div className="w-full">
                  <p className="text-base py-1 text-white tracking-tight ">
                    Amount
                  </p>
                  <input
                    type="text"
                    value={Amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    className="w-full h-11 border-1 rounded px-2"
                  />
                </div>
                <button
                  onClick={HandleSubmit}
                  className="w-full h-12 bg-blue text-white text-lg font-medium my-4 rounded"
                >
                  {" "}
                  Get Call Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
