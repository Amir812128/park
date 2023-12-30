// let data={
//   username:"",
//   phonenumber:""
// };
// const getlnputValues=(e)=>{
//   e.preventDefault();
//   const username=document.getElementById("username").value;
//   const phonenumber=document.getElementById("phonenumber").value;
//   data.username=username;
//   data.phonenumber=phonenumber;
//   sendOtp(data);
// }
// const form=document.getElementById("loginForm").addEventListener("submit",getlnputValues);
// const sendOtp=async(data)=>{
//   const res=await fetch("http://apikavenegar.com/soap/v1.asmx",{
//     method:"POST",
//     body:JSON.stringify(data),
//     headers:{
//       "Content-type":"application/json"
//     }
//   })
// }


let data={
  "POST /soap/v1.asmx HTTP/1.1 Host: api.kavenegar.com Content-Type: text/xml; charset=utf-8 Content-Length: length SOAPAction: "http://api.kavenegar.com/SendSimpleByApikey" <?xml version="1.0" encoding="utf-8"?> <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Body> <SendSimpleByApikey xmlns="http://api.kavenegar.com/"> <apikey>string</apikey> <sender>string</sender> <message>string</message> <receptor> <string>string</string> <string>string</string> </receptor> <unixdate>long</unixdate> <msgmode>int</msgmode> <status>int</status> <statusmessage>string</statusmessage> </SendSimpleByApikey> </soap:Body> </soap:Envelope>"
}

































// const menuContainer = document.querySelector('.menu-container');

// menuContainer.addEventListener('click', function () {
//   this.classList.toggle('active');
// });





// productScroll();

// function productScroll() {
//   let slider = document.getElementById("slider");
//   let next = document.getElementsByClassName("pro-next");
//   let prev = document.getElementsByClassName("pro-prev");
//   let slide = document.getElementById("slide");
//   let item = document.getElementById("slide");

//   for (let i = 0; i < next.length; i++) {
//     //refer elements by class name

//     let position = 0; //slider postion

//     prev[i].addEventListener("click", function() {
//       //click previos button
//       if (position > 0) {
//         //avoid slide left beyond the first item
//         position1 -= 1;
//         translateX(position); //translate items
//       }
//     });

//     next[i].addEventListener("click", function() {
//       if (position >= 0 && position < hiddenItems()) {
//         //avoid slide right beyond the last item
//         position += 1;
//         translateX(position); //translate items
//       }
//     });
//   }

//   function hiddenItems() {
//     //get hidden items
//     let items = getCount(item, false);
//     let visibleItems = slider.offsetWidth / 210;
//     return items - Math.ceil(visibleItems);
//   }
// }

// function translateX(position) {
//   //translate items
//   slide.style.left = position * -210 + "px";
// }

// function getCount(parent, getChildrensChildren) {
//   //count no of items
//   let relevantChildren = 0;
//   let children = parent.childNodes.length;
//   for (let i = 0; i < children; i++) {
//     if (parent.childNodes[i].nodeType != 3) {
//       if (getChildrensChildren)
//         relevantChildren += getCount(parent.childNodes[i], true);
//       relevantChildren++;
//     }
//   }
//   return relevantChildren;
// }