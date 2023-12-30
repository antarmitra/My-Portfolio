
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactMe = () => {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_x2pr8nn', 'template_mpt0sxi', form.current, 'RMKmgddaHRouMt4LY')
//       .then((result) => {
//         console.log(result.text);
//       }, (error) => {
//         console.log(error.text);
//       });
//   };



//   return (
//     <div>
//       <div className="text-center space-y-4 mt-20">
//         <h1 className="text-4xl font-semibold">Contact Me</h1>
//       </div>

//       <div>
//         <div className="hero">
//           <div className="hero-content flex-col lg:flex-row-reverse">
//             <div>
//               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15026993.331516529!2d82.4511481!3d23.1446551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1702624277539!5m2!1sen!2sbd" width="400" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//             </div>

//             <div className="card shrink-0 w-full max-w-sm border-2">
//               <form onSubmit={sendEmail} ref={form} className="card-body">
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Name</span>
//                   </label>
//                   <input type="name" name="user_name" placeholder="name" className="input input-bordered" required />
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Email</span>
//                   </label>
//                   <input type="email" name="user_email" placeholder="email" className="input input-bordered" required />
//                 </div>
//                 <textarea className="textarea textarea-bordered" name='message' placeholder="Write your message here"></textarea>

//                 {/* <button className="btn bg-[#f75023] text-white text-xl">Submit</button> */}
//                 <input type="Submit" value='Submit' className='border-2 border-[#f75023] p-2 rounded-full bg-[#f75023] text-white text-xl' />

//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactMe;




const ContactMe = () => {
  return (
    <div className="max-w-screen-6xl mx-tuo">

    </div>
  );
};

export default ContactMe;



