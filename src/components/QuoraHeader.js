import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
//  import Modal from "react-modal";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import CloseIcon from "@mui/icons-material/Close";
//import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'react-responsive-modal/styles.css';
import "./css/QuoraHeader.css";
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import { Modal } from 'react-responsive-modal';

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[inputUrl,setInputUrl] = useState("");
  const Close = <CloseIcon />;
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <QuestionMarkIcon />
          {/* <img src="" alt="Logo" /> */}
        </div>

        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInIcon />
          </div>
          <div className="qHeader__icon">
            <PeopleAltIcon />
          </div>
          <div className="qHeader__icon">
            <NotificationsActiveIcon />
          </div>
        </div>
        <div className="qHeader__input">
          <SearchIcon />
          <input type="text" placeholder="Search Questions" />
        </div>
        <div className="qHeader__Rem">
          <Avatar />
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
        <Modal
          open={isModalOpen}
          CloseIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height:"auto",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar className="avatar"/>
            <div className="model__scope">
              <PeopleAltOutlinedIcon/>
              <p>Public</p>
              <ExpandMoreIcon/>
            </div>
          </div>
          <div className="modal__Field">
            <Input type="text" placeholder="start your question with 'what' , 'how' ,'why',etc"/>
            <div style={{
              display: "flex",
              flexDirection: "column",
            }}>
            <input type="text"
            value = {inputUrl}
            onChange = {(e) => setInputUrl(e.target.value)}
            style={{
              margin:"5px 0",
              border: "1px solid lightgray" ,
              padding: "10px",
              outline: "2px solid #000"
            }} placeholder="Optional : include a link that gives Context"/>
            {
              inputUrl !== "" &&  <img style={{
                height: "40vh",
                objectFit: "contain",
              }} src={inputUrl} alt="displayimage" />
            }
            
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick = {()=>setIsModalOpen(false)}>
            Cancle
            </button>
            <button type="submit" className="add" >
            Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default QuoraHeader;
