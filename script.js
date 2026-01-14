function sendMail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const mailtoLink = `mailto:eswararao.raparthi@gmail.com
?subject=Portfolio Contact from ${encodeURIComponent(name)}
&body=Name: ${encodeURIComponent(name)}
%0DEmail: ${encodeURIComponent(email)}
%0DPhone: ${encodeURIComponent(phone)}
%0D%0DMessage:%0D${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
}