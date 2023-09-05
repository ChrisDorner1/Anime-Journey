
export function checkPassword(input) {
    const password = /^[A-Za-z]\w{7,14}$/;
    if (input.match(password)) {
      return true;
    }
    return false;
  }
  

export function validateEmail(email) {
    const emailAdress = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailAdress.test(String(email).toLowerCase());
  }
  
