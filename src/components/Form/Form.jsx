import React, { useState } from 'react'
// import nodemailer from 'nodemailer';
import './Form.css'

function Form() {

    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    // const transporter = nodemailer.createTransport({
    //     host: "smtp.hostinger.com",
    //     port: 587,
    //     secure: false, // Use `true` for port 465, `false` for all other ports
    //     auth: {
    //       user: "dev@tapabrata.me",
    //       pass: "tapa8637@A",
    //     },
    // });

    // const sendMail = async ()=>{
    //     const info = await transporter.sendMail({
    //         from: '"Tapabrata Goswami 👻" <dev@tapabrata.me>', // sender address
    //         to: email, // list of receivers
    //         subject: "Hello ✔", // Subject line
    //         text: msg, // plain text body
    //         html: "<b>Hello world?</b>", // html body
    //     });
    //     return info;
    // }

    const submit = (e) =>{
        e.preventDefault();
        // console.log(sendMail());
        console.log("Mail send Succesfully");
    }

  return (
    <div className='container my-3'>
        <div className='row justify-content-center ml-100 get-in-touch-contaier'>
            <div className='col-md-6 d-flex align-items-center'>
                <div>
                    <h6 className='contact-heading pb-3'>Get in touch</h6>
                    <p className='get-in-touch-info'><b>Email:</b> tapabratagoswami21@gmail.com</p>
                    <p className='get-in-touch-info'><b>Phone:</b> +91 86378 15595</p>
                </div>

            </div>
            <div className="col-md-6">
                <form action="">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <input 
                                type="text" 
                                placeholder='First Name'
                                className='form-control'
                                // value={Fname}
                                onChange={(e)=>setFname(e.target.value)}
                                />
                        </div>
                        
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                                <input 
                                    type="text" 
                                    placeholder='Last Name'
                                    className='form-control'
                                    onChange={(e)=>setLname(e.target.value)}
                                    />
                            </div>
                    </div>
                </div>
                <div className="from-group mt-2">
                    <input 
                    type="email" 
                    className='form-control'
                    placeholder='Email' 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group mt-2'>
                <textarea className="form-control" rows="5" onChange={(e)=>setMsg(e.target.value)}></textarea>
                </div>
                <div className='from-group'>
                    <button className='btn btn-primary mt-2 download-resume' onClick={(e) => submit(e)}>Submit</button>
                </div>
            </form> 
            </div>
        </div>

    </div>
  )
}

export default Form