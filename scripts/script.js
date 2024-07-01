/* const faq1 = document.getElementById("faq1").addEventListener("click",()=>{
    let resp1 = document.getElementById("resp1");
    
    switch (resp1.style.display) {
        case resp1.style.display = "block":
            resp1.style.display = "none"
        break;
        
        case resp1.style.display = "none":
            resp1.style.display = "block"
        break;
        default:
            break;
    }
    
}) */
function faqAccordion(value) {
    const faq1 = document.getElementById("faq1");
    let resp1 = document.getElementById("resp1");

    const faq2 = document.getElementById("faq2");
    let resp2 = document.getElementById("resp2");

    const faq3 = document.getElementById("faq3");
    let resp3 = document.getElementById("resp3");

    const faq4 = document.getElementById("faq4");
    let resp4 = document.getElementById("resp4");


    if (value === '1') {
        if (resp1.style.display === 'none' || resp1.style.display === '') {
            resp1.style.display = 'block';
        }
        else{
            resp1.style.display = 'none';
        }
    }
    else if (value === '2') {
        if (resp2.style.display === 'none' || resp2.style.display === '') {
            resp2.style.display = 'block';
        }
        else{
            resp2.style.display = 'none';
        }
    }
    else if (value === '3') {
        if (resp3.style.display === 'none' || resp3.style.display === '') {
            resp3.style.display = 'block';
        }
        else{
            resp3.style.display = 'none';
        }
    }
    else{
        if (resp4.style.display === 'none' || resp4.style.display === '') {
            resp4.style.display = 'block';
        }
        else{
            resp4.style.display = 'none';
        }
    }
    
}