Telephone Number Validator:

SOLUTION:

function telephoneCheck(str) {
  let regex = str.match(/^\d{10}$/);
  let regex1 = str.match(/^(\d{3}-|[1]\s\d{3}-|[1]\s\(\d{3}\)\s|\(\d{3}\)|[1]\(\d{3}\)|[1]\s\d{3}\s)(\d{3})(\s|-)(\d{4})$/)

  if (regex||regex1){
    return true;
  } else {
    return false;
  }
};
