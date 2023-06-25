import {useState} from 'react'
import ModalVideo from 'react-modal-video';
import '../../../../Assets/modal-video.min.css';
import './Video.scss';
import {VscRunAll} from 'react-icons/vsc';
function Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div id="video" className="sec">
      <ModalVideo channel='youtube'  autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <div className="container">
        <div className="circle" onClick={()=> setOpen(true)}><VscRunAll/></div>
      </div>
    </div>
  )
}

export default Video