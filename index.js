const submitForm=()=>{
   let firstName=document.getElementById('first-name').value
   let lastName=document.getElementById('last-name').value
   let emailID=document.getElementById('email').value
   let phoneNumber=document.getElementById('phone-number').value
   let batchNo=document.getElementById('batch-no').value
   let moduleNo=document.getElementById('module-no').value
   let tAndc=document.getElementById('t-and-c').checked 

   let errorFlag=false;

//    -------------------------------First name Validtion---------------
    if(firstName=='' || firstName.length<3){
      document.getElementById('invalid-firstName').style.display='block';
      document.getElementById('valid-firstName').style.display='none';
      errorFlag=true;
    }
    else{
        document.getElementById('valid-firstName').style.display='block';
        document.getElementById('invalid-firstName').style.display='none';
    }
    // -----------------Last name Validtion-------------------------
    if(lastName=='' || lastName.length<3){
        document.getElementById('invalid-lastName').style.display='block';
        document.getElementById('valid-laststName').style.display='none';
        errorFlag=true;
      }
    else{
          document.getElementById('valid-laststName').style.display='block';
          document.getElementById('invalid-lastName').style.display='none';
    }

    //----------------- Email Id Validation-------------------------------

    if(emailID==''||emailID.charAt(0)=='@'|| emailID.length<=10||!(emailID.includes("@"))||!(emailID.includes(".")) ||emailID.lastIndexOf(".")>(emailID.length-3) ){
        document.getElementById('invalid-email').style.display='block';
        document.getElementById('valid-email').style.display='none';
        errorFlag=true;
      }
    else{
          document.getElementById('valid-email').style.display='block';
          document.getElementById('invalid-email').style.display='none';
    }

    // ----------------Phone Number Validation---------------------------

    if(phoneNumber=='' || phoneNumber.length!=10||parseInt(phoneNumber).toString().length!=10){
        document.getElementById('invalid-phoneNo').style.display='block';
        document.getElementById('valid-phoneNo').style.display='none';
        errorFlag=true;
      }
    else{
          document.getElementById('valid-phoneNo').style.display='block';
          document.getElementById('invalid-phoneNo').style.display='none';
    }

    // ------------------Batch Number Validation----------------------------

    if(batchNo=='none'){
        document.getElementById('invalid-batchNo').style.display='block';
        document.getElementById('valid-batchNo').style.display='none';
        errorFlag=true;
      }
    else{
          document.getElementById('valid-batchNo').style.display='block';
          document.getElementById('invalid-batchNo').style.display='none';
    }

    
    // ------------------Module Validation----------------------------

    if(moduleNo=='none'){
        document.getElementById('invalid-module').style.display='block';
        document.getElementById('valid-module').style.display='none';
        errorFlag=true;
      }
    else{
          document.getElementById('valid-module').style.display='block';
          document.getElementById('invalid-module').style.display='none';
    }

    // ------------------Terms and Condition  Validation----------------------------

    
        if(!(tAndc)){
            document.getElementById('invalid-t-and-c').style.display='block';
            errorFlag=true;
          }
        else{
              document.getElementById('invalid-t-and-c').style.display='none';
        }

   // ---------------------Clear and Reset All Fields---------------------------------
    if(!(errorFlag)){
        alert('Your details have been saved successfully!');


       document.getElementById('first-name').value=''
       document.getElementById('last-name').value=''
       document.getElementById('email').value=''
       document.getElementById('phone-number').value=''
       document.getElementById('batch-no').value='none'
       document.getElementById('module-no').value='none'
       document.getElementById('t-and-c').checked =false;

       document.getElementById('invalid-firstName').style.display='none';
       document.getElementById('valid-firstName').style.display='none';

       document.getElementById('invalid-lastName').style.display='none';
       document.getElementById('valid-laststName').style.display='none';

       document.getElementById('invalid-email').style.display='none';
       document.getElementById('valid-email').style.display='none';

       document.getElementById('invalid-phoneNo').style.display='none';
        document.getElementById('valid-phoneNo').style.display='none';

        document.getElementById('invalid-batchNo').style.display='none';
        document.getElementById('valid-batchNo').style.display='none';

        document.getElementById('invalid-module').style.display='none';
        document.getElementById('valid-module').style.display='none';

        document.getElementById('invalid-t-and-c').style.display='none';

    }    
}