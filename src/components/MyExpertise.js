import React from 'react';
import '../App.css';
import '../style/Expertise.css';
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GrLanguage } from "react-icons/gr";
import { GrServer } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";

const MyExpertise = () => {
    return (
        <>
        <secition>
            <div className='expertise-container' id='expertise'>
                <div className='expertise-title'>
                <h1>My Expertise</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis incidunt voluptates assumenda quibusdam libero?</p>
                </div>
                <div className='cards'>
                    <div className="card-items">
                    <LiaLaptopCodeSolid style={{width:68, height:68, color: '#FFB400'}}/>
                        <h3>Web Development</h3>
                        <p>HTML, CSS, JavaScript, React.js , Redux </p>
                    </div>

                    <div className="card-items">
                        <GrLanguage style={{width:68, height:68, color: '#FFB400'}}/>
                        <h3>Language Skills</h3>
                        <p>HTML,CSS,JavaScript, Python</p>
                    </div>

                    <div className="card-items">
                        <GrServer style={{width:68, height:68, color: '#FFB400'}}/>
                        <h3>Backend Developer</h3>
                        <p>Node.js, Express,Django, Flask</p>
                    </div>

                    <div className="card-items">
                    <FaDatabase style={{width:68, height:68, color: '#FFB400'}}/>
                        <h3>Database Management</h3>
                        <p>MongoDB, Mongoose </p>
                    </div>

                    <div className="card-items">
                        <GrDeploy style={{width:68, height:68, color: '#FFB400'}}/>
                        <h3>Depolyment Operations</h3>
                        <p>Docker, AWS EC2 Deployment with Linux</p>
                    </div>

                    <div className="card-items">
                        <BsPersonWorkspace style={{width:68, height:68, color: '#FFB400'}}/>
                        <h3>Currently Learning</h3>
                        <p>Redis, Cacendra, Kafka, Bootstrap CSS, Tailwind CSS,PyTorch,etc</p>
                    </div>

                </div>
            </div>
            </secition>
        </>
    )
}

export default MyExpertise;






// import React from 'react';
// import '../App.css';

// const MyExpertise = () => {
//     return (
//         <>
//             <div className='my-expertise'>
//                 <a style={{color: 'black', textDecoration: 'none'}} href='/'><h1> My Expertise </h1></a>
//                 <p className='expertise'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repudiandae sunt impedit cumque dolore praesentium voluptatibus, alias suscipit fugit in, qui atque voluptatum doloribus assumenda unde consequuntur? Quisquam totam aperiam officiis perspiciatis exercitationem corrupti!</p>
//             </div>
//             <div className='card-container'>
//                 <div className='card1'>
//                     <img src={''} alt="card1"></img>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi neque magni voluptatem natus commodi similique, inventore architecto vitae nostrum sapiente debitis omnis at voluptas.</p>
//                 </div>

//                 <div className='card1'>
//                     <img src={''} alt="card1"></img>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi neque magni voluptatem natus commodi similique, inventore architecto vitae nostrum sapiente debitis omnis at voluptas.</p>
//                 </div>

//                 <div className='card1'>
//                     <img src={''} alt="card1"></img>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi neque magni voluptatem natus commodi similique, inventore architecto vitae nostrum sapiente debitis omnis at voluptas.</p>
//                 </div>

//                 <div className='card1'>
//                     <img src={''} alt="card1"></img>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi neque magni voluptatem natus commodi similique, inventore architecto vitae nostrum sapiente debitis omnis at voluptas.</p>
//                 </div>

//                 <div className='card1'>
//                     <img src={''} alt="card1"></img>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi neque magni voluptatem natus commodi similique, inventore architecto vitae nostrum sapiente debitis omnis at voluptas.</p>
//                 </div>

//                 <div className='card1'>
//                     <img src={''} alt="card1"></img>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi neque magni voluptatem natus commodi similique, inventore architecto vitae nostrum sapiente debitis omnis at voluptas.</p>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MyExpertise