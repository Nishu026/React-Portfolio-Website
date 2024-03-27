import React from 'react';
import '../App.css';
import '../style/Expertise.css';
import ProfilePhoto from '../assets/images/My_Profile_Photo-removebg-preview.png';
const MyExpertise = () => {
    return (
        <>
            <div className='expertise-container'>
                <h1>My Expertise</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis incidunt voluptates assumenda quibusdam libero?</p>
                <div className='cards'>
                    <div className="card-items">
                        <img src={ProfilePhoto} style={{ width: 100, height: 100, borderRadius: 100, border: '3px solid black' }} alt="card1"></img>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro non mollitia, deserunt saepe cupiditate corrupti debitis culpa omnis velit quod tempora </p>
                    </div>

                    <div className="card-items">
                        <img src={ProfilePhoto} style={{ width: 100, height: 100, borderRadius: 100, border: '3px solid black' }} alt="card1"></img>
                        <h3>Langugae Skills</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro non mollitia, deserunt saepe cupiditate corrupti debitis culpa omnis velit quod tempora </p>
                    </div>

                    <div className="card-items">
                        <img src={ProfilePhoto} style={{ width: 100, height: 100, borderRadius: 100, border: '3px solid black' }} alt="card1"></img>
                        <h3>Backend Developer</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro non mollitia, deserunt saepe cupiditate corrupti debitis culpa omnis velit quod tempora </p>
                    </div>

                    <div className="card-items">
                        <img src={ProfilePhoto} style={{ width: 100, height: 100, borderRadius: 100, border: '3px solid black' }} alt="card1"></img>
                        <h3>Database Management</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro non mollitia, deserunt saepe cupiditate corrupti debitis culpa omnis velit quod tempora </p>
                    </div>

                    <div className="card-items">
                        <img src={ProfilePhoto} style={{ width: 100, height: 100, borderRadius: 100, border: '3px solid black' }} alt="card1"></img>
                        <h3>Depolyment Operations</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro non mollitia, deserunt saepe cupiditate corrupti debitis culpa omnis velit quod tempora </p>
                    </div>

                    <div className="card-items">
                        <img src={ProfilePhoto} style={{ width: 100, height: 100, borderRadius: 100, border: '3px solid black' }} alt="card1"></img>
                        <h3>Currently Learning</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro non mollitia, deserunt saepe cupiditate corrupti debitis culpa omnis velit quod tempora </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MyExpertise






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