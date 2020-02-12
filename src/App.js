import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Ccard from "./components/Ccard"
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
  let [visible, setVisible] = useState(false)
  let [title, setTitle] = useState("")
  let [imageUrl, setImageUrl] = useState("")
  let [indexs, setIndex] = useState(-1)
  let [bookList, setList] = useState([
    {
      title: "tie",
      img: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/p960x960/81443883_1775132312617366_7346507212954533888_o.jpg?_nc_cat=100&_nc_eui2=AeG2uvxHKDKFt_C6j4aAY9vu93dOvVG4TbbosXAyQV9egS897vmtW99FKeCpQOrXj5tC3EK3mc6wPfnQXSZQjK-DvGuHHMYnKmLAI3IB-1ndLA&_nc_oc=AQnCxqTokkaRoIWbnt9y396aEa_-VOj4y1EUUwpiNV0ULw5oVGziLvcjX2TBuxfK0Y0&_nc_ht=scontent.fbkk14-1.fna&_nc_tp=6&oh=80681f3772f62a68bb261ab6d928471f&oe=5EC0E710"
    },
    {
      title: "tie",
      img: "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/p960x960/81443883_1775132312617366_7346507212954533888_o.jpg?_nc_cat=100&_nc_eui2=AeG2uvxHKDKFt_C6j4aAY9vu93dOvVG4TbbosXAyQV9egS897vmtW99FKeCpQOrXj5tC3EK3mc6wPfnQXSZQjK-DvGuHHMYnKmLAI3IB-1ndLA&_nc_oc=AQnCxqTokkaRoIWbnt9y396aEa_-VOj4y1EUUwpiNV0ULw5oVGziLvcjX2TBuxfK0Y0&_nc_ht=scontent.fbkk14-1.fna&_nc_tp=6&oh=80681f3772f62a68bb261ab6d928471f&oe=5EC0E710"
    }
  ])

  let addList = () => {
    let list = []
    let arr = { title: "", img: "" }

    arr.title = title
    arr.img = imageUrl

    list.push(arr)


    setList([...bookList, ...list])


  }

  let showModal = (index) => {
    setIndex(index)
    setVisible(true)
  };

  let handleOk = e => {
    updateList()
    setVisible(false)
  };

  let handleCancel = e => {
    setVisible(false)
  };

  let updateList = () => {
    console.log(indexs);
    const arr = []
    bookList.forEach((item, index) => {

      if (index == indexs) {
        item.title = title
        item.img = imageUrl
      }
      arr.push(item)


    })
    setList(arr)
  }

  let deleteList = (index) => {
    const filtedBookList = bookList.filter((book, i) => {
      return i !== index;
    });




    setList(filtedBookList)
  }

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  }

  const handleChangeImageUrl = e => {
    setImageUrl(e.target.value)
  }



  return (
    <>
      <div className="z-inde">
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            <input placeholder='Title' onChange={handleChangeTitle} /> <br />
            <input placeholder='Image Url' onChange={handleChangeImageUrl} /> <br />
          </div>

        </Modal>
      </div>
      <div className="App">

        <div className="book-list" >
          {
            bookList.map((item, index) => {
              return (
                <>
                  <Ccard lst={{ title: item.title, img: item.img }} index={index} update={updateList} showModal={showModal} deleteList={deleteList} />
                </>
              )
            })
          }



        </div>
        <div className="container">
          <input placeholder='Title' onChange={handleChangeTitle} /> <br />
          <input placeholder='Image Url' onChange={handleChangeImageUrl} /> <br />
          <button onClick={addList}>add</button>

        </div>



      </div>

    </>
  );


}

export default App;
