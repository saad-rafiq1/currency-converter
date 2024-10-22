
 const Base_URL = "https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json";
 
  
  
 

     


 

/**  JS Of changes flags starts  here */
let countryCode = Object.keys(countryList);
let countryNames = Object.values(countryList);


let toDropDown = document.querySelectorAll("#to");
let fromDropDown = document.querySelectorAll("#from");


 for(let i = 0; i<countryCode.length;i++){
    let newOption = document.createElement("option");

if(countryCode[i]==="USD"){
   newOption.selected = "selected";
}
    newOption.innerText = countryCode[i];
    newOption.value =countryNames[i].toLowerCase();
    fromDropDown[0].append(newOption);
 }

for(let i = 0 ; i < countryCode.length; i++){

    let newOption = document.createElement("option");
    if(countryCode[i]==="PKR"){
        newOption.selected ="selected";
    }
    newOption.innerText =countryCode[i];
    newOption.value= countryNames[i].toLowerCase();
    newOption.id =countryCode[i];
    toDropDown[0].append(newOption);  
    

}
 let fromFlag = fromDropDown[0].addEventListener("change",(evt)=>{
    let value = evt.target.value;  
    let img = document.querySelector("img");
    let newSrc = `https://flagcdn.com/16x12/${value1}.png`
   img.src = newSrc;
})

let  toFlag = toDropDown[0].addEventListener("change",(evt)=>{
     let value = evt.target.value;
     let selectedOption = evt.target.options[evt.target.selectedIndex]; 
    let selectedOptionId = selectedOption.id;  
    console.log(selectedOptionId);
     
     
     let img = document.querySelector("#toimg");
     let newSrc = `https://flagcdn.com/16x12/${value}.png`;
     img.src =newSrc;


     let getData =async ()=>{
        let response = await fetch(Base_URL);
        let data = await response.json();  // Converting the response into json
                 let exchangeRates = data.quotes;
                 
                 let selectedRate = exchangeRates[selectedOptionId];
                  
          // Button
                 let btn = document.querySelector("form button");
                 btn.addEventListener("click",(evt)=>{
                evt.preventDefault();
                let amount = document.querySelector("#amount");
                  
                let totalAmount = amount.value;
                let totalPrice = totalAmount*selectedRate;
                 console.log(totalPrice);
                
                if(totalAmount==="" || totalAmount<1){
                    totalAmount=1;
                }

                let msg = document.querySelector(".msg");
              msg.innerText =`${totalAmount} USD =  ${totalPrice }    ${selectedOptionId} `;
                   
                 })

             
     }
     
     getData();
})

  
/** It ends Here */

/** GET Exchange rate js starts here */




 
 






