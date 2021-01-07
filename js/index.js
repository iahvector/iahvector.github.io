function generateEmail() {
  const hostname = window.location.hostname
  return `i@${hostname}`
}

function setEmailLink(email) {
  const link = `mailto:${email}`
  const element = document.querySelector("#email")
  element.href = link
  element.textContent = email
}

const link = generateEmail()
setEmailLink(link)
