(() => {
    let container = document.querySelector("#container");
    let email = document.querySelector("#email");
    let fullname = document.querySelector("#fullname");
    let issuetitle = document.querySelector("#issuetitle");
    let issuedesc = document.querySelector("#issuedesc");
    let submit = document.querySelector("#submitBtn");

    submit.addEventListener("click", (event) => {

        var emailr = document.createElement("p");
        var emailrr = document.createTextNode(email.value);
        emailr.appendChild(emailrr);

        var fullnamer = document.createElement("p");
        var fullnamerr = document.createTextNode(fullname.value);
        fullnamer.appendChild(fullnamerr);

        var issuetitler = document.createElement("p");
        var issuetitlerr = document.createTextNode(issuetitle.value);
        issuetitler.appendChild(issuetitlerr);

        var issuedescr = document.createElement("p");
        var issuedescrr = document.createTextNode(issuedesc.value);
        issuedescr.appendChild(issuedescrr);

        console.log(email);
        console.log(event.target);
        container.appendChild(emailr);
        container.appendChild(fullnamer);
        container.appendChild(issuetitler);
        container.appendChild(issuedescr);
    }, false);

})();