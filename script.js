     let toggle = document.querySelector(".toggle");
    //  console.log(toggle);


    let toggleImg = document.querySelector(".toggle-img img");
    // console.log(toggleImg);
    


    let toggleFunction = ()=>{

        toggle.style="display:flex"
        toggleImg.style="display:none"
    }

    let closeFunction =()=>{
        toggle.style="display:none"
        toggleImg.style="display:flex"
    }