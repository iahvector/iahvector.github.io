function generateEmail() {
  var hostname = window.location.hostname
  if (hostname.startsWith('www')) {
    parts = hostname.split('.')
    parts.shift()
    hostname = parts.join('.')
  }
  if (hostname == null || hostname == "") {
    hostname = "iahvector.com"
  }
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
