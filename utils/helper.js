export const isEmail = (val) => {
 let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 return reg.test(val);
};

export const generateToken = () => {
 let rand = () => Math.random().toString(36).substr(2);
 return rand() + rand();
};

export const alphabetically = (ascending) => (a, b) => {
 if (a === b) {
   return 0;
 } else if (a === null) {
   return 1;
 } else if (b === null) {
   return -1;
 } else if (ascending) {
   return a < b ? -1 : 1;
 } else {
   return a < b ? 1 : -1;
 }
};