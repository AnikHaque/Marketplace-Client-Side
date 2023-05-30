import React from "react";
import clock from "../../../Assets/clock.png"
import check from "../../../Assets/bluecheck.png"
import "./GigDetails.css";
import {
Tabs,
TabsHeader,
TabsBody,
Tab,
TabPanel,
} from "@material-tailwind/react";
import star from "../../../Assets/star.png"
function GigDetails() {
const data = [
  // basic cards
{
label: "Basic",
value: "basic",
// icon: Square3Stack3DIcon,
desc: 
<div>
   <div className="price">
      <h3 className="text-lg font-bold text-gray-900">1 AI generated image</h3>
      <h2 >$ 59.99</h2>
   </div>
   <p className="text-md py-5 text-start font-semibold text-gray-700">
      I will create a unique high quality AI generated image based on a
      description that you give me
   </p>
   <div className="details">
      <div className="item">
         <img className="mb-2" src={clock} alt="" />
         <span  aria-hidden="true" width="16px" height="16px" className="font-bold text-gray-600 mb-2" > 2 Days Delivery</span>
      </div>
      <div className="item">
         <img src="/img/recycle.png" alt="" />
         <span className="font-semibold text-gray-600">3 Revisions</span>
      </div>
   </div>
   <div className="features ">
      <div className="item">
         <img src={check} alt="" />
         <span className="text-gray-600 font-semibold text-sm">Prompt writing</span>
      </div>
      <div className="item">
         <img src={check} alt="" />
         <span className="text-gray-600 font-semibold text-sm">Artwork delivery</span>
      </div>
      <div className="item">
         <img src={check} alt="" />
         <span className="text-gray-600 font-semibold text-sm">Image upscaling</span>
      </div>
      <div className="item">
         <img src={check} alt="" />
         <span className="text-gray-600 font-semibold text-sm">Additional design</span>
      </div>
   </div>
   <button className="rounded-lg  w-full mt-5">Continue</button>
</div>
,
},

// standard
{
  label: "Standard",
  value: "standard",
  // icon: Square3Stack3DIcon,
  desc: 
  <div>
     <div className="price">
        <h3 className="text-lg font-bold text-gray-900">3 AI generated image</h3>
        <h2 >$ 159.99</h2>
     </div>
     <p className="text-md py-5 text-start font-semibold text-gray-700">
        I will create a unique high quality AI generated image based on a
        description that you give me
     </p>
     <div className="details">
        <div className="item">
           <img className="mb-2" src={clock} alt="" />
           <span  aria-hidden="true" width="16px" height="16px" className="font-bold text-gray-600 mb-2" > 5 Days Delivery</span>
        </div>
        <div className="item">
           <img src="/img/recycle.png" alt="" />
           <span className="font-semibold text-gray-600">5 Revisions</span>
        </div>
     </div>
     <div className="features ">
        <div className="item">
           <img src={check} alt="" />
           <span className="text-gray-600 font-semibold text-sm">Prompt writing</span>
        </div>
        <div className="item">
           <img src={check} alt="" />
           <span className="text-gray-600 font-semibold text-sm">Artwork delivery</span>
        </div>
        <div className="item">
           <img src={check} alt="" />
           <span className="text-gray-600 font-semibold text-sm">Image upscaling</span>
        </div>
        <div className="item">
           <img src={check} alt="" />
           <span className="text-gray-600 font-semibold text-sm">Additional design</span>
        </div>
     </div>
     <button className="rounded-lg  w-full mt-5">Continue</button>
  </div>
  ,
  },

  // premium card
  {
    label: "Premium",
    value: "premium",
    // icon: Square3Stack3DIcon,
    desc: 
    <div>
       <div className="price">
          <h3 className="text-lg font-bold text-gray-900">1 AI generated image</h3>
          <h2 >$ 59.99</h2>
       </div>
       <p className="text-md py-5 text-start font-semibold text-gray-700">
          I will create a unique high quality AI generated image based on a
          description that you give me
       </p>
       <div className="details">
          <div className="item">
             <img className="mb-2" src={clock} alt="" />
             <span  aria-hidden="true" width="16px" height="16px" className="font-bold text-gray-600 mb-2" > 2 Days Delivery</span>
          </div>
          <div className="item">
             <img src="/img/recycle.png" alt="" />
             <span className="font-semibold text-gray-600">3 Revisions</span>
          </div>
       </div>
       <div className="features ">
          <div className="item">
             <img src={check} alt="" />
             <span className="text-gray-600 font-semibold text-sm">Prompt writing</span>
          </div>
          <div className="item">
             <img src={check} alt="" />
             <span className="text-gray-600 font-semibold text-sm">Artwork delivery</span>
          </div>
          <div className="item">
             <img src={check} alt="" />
             <span className="text-gray-600 font-semibold text-sm">Image upscaling</span>
          </div>
          <div className="item">
             <img src={check} alt="" />
             <span className="text-gray-600 font-semibold text-sm">Additional design</span>
          </div>
       </div>
       <button className="rounded-lg  w-full mt-5">Continue</button>
    </div>
    ,
    },
];
return (
<div className="gig lg:p-9">
   <div className="container p-5">
      <div className="left lg:pl-9">
         <div class="text-sm breadcrumbs text-black">
            <ul>
               <li><a>Home</a></li>
               <li><a>Documents</a></li>
               <li>Add Document</li>
            </ul>
         </div>
         <h1 className="text-3xl font-semibold text-start">Building Responsive and User-Friendly Websites: Best Practices in Modern Web Development</h1>
         <span className="text-black text-sm text-blue-900 text-start ">Graphics & Design </span>
         <div className="user">
            <img
               src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt="Gig"
               height={1000}
               width={1000}
               className="pp "
               />
            <span>Anna Bell</span>
            <div className="stars">
               <img className="heartpic" src={star} alt="" />
               <img className="heartpic" src={star} alt="" />
               <img className="heartpic" src={star} alt="" />
               <img className="heartpic" src={star} alt="" />
               <img className="heartpic" src={star} alt="" />
               <span>5</span>
               <p className="pl-72">(15)
                  3 Orders in Queue
               </p>
            </div>
         </div>
            <img
               src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
               alt=""
               className="hover:scale-110 transition-all duration-500"
               />
            
         <h2>About This Gig</h2>
         <p className="text-start">
            **B2B Lead Generation Expert**
            <br></br>
            Note: please contact me before placing an order to discuss complete project details.
            <br></br>
            Welcome to my Lead generation gig:
            <br></br>
            If you want to hire a skilled lead generation expert who will provide you b2b lead generation collection like Data Collection, Data Entry, Data Scraping, Lead Generation, Web Research, Email Collection, company Details Research. I will provide you 100% verified lead collections.
            <br></br>
            I will be need to your:
            <br></br>
            Targeted industry
            Targeted Location
            Targeted person
            <br></br>
            Which Info I Will Provide to you:
            <br></br>
            Company Name
            <br></br>
            Company website URL
            <br></br>
            Address (Street, City, State, Zip Code)
            <br></br>
            Person Name (Your target person First name and Last name)
            <br></br>
            Person Job Title
            <br></br>
            E-mail (Valid)
            <br></br>
            Phone number
            <br></br>
            LinkedIn Profile
            <br></br>
            My Expertise:
            <br></br>
            Data Entry
            <br></br>
            Web Research
            <br></br>
            Web Scrapping
            <br></br>
            Excel Data Entry
            <br></br>
            Data Scraping
            <br></br>
            Copy Paste Work
            <br></br>
            Word Press Data Entry
            <br></br>
            Data Collection from Linkedln/Instagram
            <br></br>
            Real Estate Research and Data Entry (Name, Email, Phone, Address, etc)
            <br></br>
            Why should you trust me to hire:
            <br></br>
            100% Verified lead
            Quick delivery
            Good quality assured
            100% valid emails delivery 
         </p>
         <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
               <img
                  src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  />
               <div className="info">
                  <span>Anna Bell</span>
                  <div className="stars">
                     <img className="heartpic" src={star} alt="" />
                     <img className="heartpic" src={star} alt="" />
                     <img className="heartpic" src={star} alt="" />
                     <img className="heartpic" src={star} alt="" />
                     <img className="heartpic" src={star} alt="" />
                     <span>5</span>
                  </div>
                  <button>Contact Me</button>
               </div>
            </div>
            <div className="box">
               <div className="items">
                  <div className="item">
                     <span className="title">From</span>
                     <span className="desc">USA</span>
                  </div>
                  <div className="item">
                     <span className="title">Member since</span>
                     <span className="desc">Aug 2022</span>
                  </div>
                  <div className="item">
                     <span className="title">Avg. response time</span>
                     <span className="desc">4 hours</span>
                  </div>
                  <div className="item">
                     <span className="title">Last delivery</span>
                     <span className="desc">1 day</span>
                  </div>
                  <div className="item">
                     <span className="title">Languages</span>
                     <span className="desc">English</span>
                  </div>
               </div>
               <hr />
               <p>
                  My name is Anna, I enjoy creating AI generated art in my spare
                  time. I have a lot of experience using the AI program and that
                  means I know what to prompt the AI with to get a great and
                  incredibly detailed result.
               </p>
            </div>
         </div>
         <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
               <div className="user">
                  <img
                     className="pp"
                     src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                     alt=""
                     />
                  <div className="info">
                     <span>Garner David</span>
                     <div className="country">
                        <img
                           src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                           alt=""
                           />
                        <span>United States</span>
                     </div>
                  </div>
               </div>
               <div className="stars">
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <span>5</span>
               </div>
               <p>
                  I just want to say that art_with_ai was the first, and after
                  this, the only artist Ill be using on Fiverr. Communication was
                  amazing, each and every day he sent me images that I was free to
                  request changes to. They listened, understood, and delivered
                  above and beyond my expectations. I absolutely recommend this
                  gig, and know already that Ill be using it again very very soon
               </p>
               <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
               </div>
            </div>
            <hr />
            <div className="item">
               <div className="user">
                  <img
                     className="pp"
                     src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                     alt=""
                     />
                  <div className="info">
                     <span>Sidney Owen</span>
                     <div className="country">
                        <img
                           src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                           alt=""
                           />
                        <span>Germany</span>
                     </div>
                  </div>
               </div>
               <div className="stars">
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <span>5</span>
               </div>
               <p>
                  The designer took my photo for my book cover to the next level!
                  Professionalism and ease of working with designer along with
                  punctuality is above industry standards!! Whatever your project
                  is, you need this designer!
               </p>
               <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
               </div>
            </div>
            <hr />
            <div className="item">
               <div className="user">
                  <img
                     className="pp"
                     src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                     alt=""
                     />
                  <div className="info">
                     <span>Lyle Giles </span>
                     <div className="country">
                        <img
                           src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                           alt=""
                           />
                        <span>United States</span>
                     </div>
                  </div>
               </div>
               <div className="stars">
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <img className="heartpic" src={star} alt="" />
                  <span>5</span>
               </div>
               <p>
                  Amazing work! Communication was
                  amazing, each and every day he sent me images that I was free to
                  request changes to. They listened, understood, and delivered
                  above and beyond my expectations. I absolutely recommend this
                  gig, and know already that Ill be using it again very very soon
               </p>
               <div className="helpful">
                  <span>Helpful?</span>
                  <img src="/img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="/img/dislike.png" alt="" />
                  <span>No</span>
               </div>
            </div>
         </div>
      </div>
      {/* right */}
      <div className="right ">
         <Tabs value="dashboard">
            <TabsHeader>
               {data.map(({ label, value, }) => (
               <Tab key={value} value={value}>
                  <div className="flex items-center gap-2">
                     {label}
                  </div>
               </Tab>
               ))}
            </TabsHeader>
            <TabsBody>
               {data.map(({ value, desc }) => (
               <TabPanel key={value} value={value}>
                  {desc}
               </TabPanel>
               ))}
            </TabsBody>
         </Tabs>
      </div>
   </div>
</div>
);
}
export default GigDetails;