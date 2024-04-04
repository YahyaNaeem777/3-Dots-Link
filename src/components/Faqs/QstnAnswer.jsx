import React, { useState } from 'react';
import icon1 from './../../Assets/Images/Frame 53.png'

const QstnAnswer = ({question,answer}) => {
  const [show, setShow] = useState(false);

  return (
    <div>
          <>
                    <div className="qstn-answer text-white">
                    {/* <div className="qstn-asnw"> */}
                      <div className={`question-row ${show ? 'open' : ''}`}>
                        <p className="question">{question}</p>
                        <p
                          className="icon"
                          onClick={() => {
                            setShow(!show);
                            console.log(show)
                          }}
                        >
                          <img src={icon1} alt="" className='img-fluid'  style={{cursor:"pointer !important"}}/>
                        </p>
                      </div>
                      <div className="answer">
                        <p>{show && answer}</p>
                      </div>
                    {/* </div> */}
                  </div>
                    <br />
                    </>
    </div>
  )
}

export default QstnAnswer
