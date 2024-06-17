type StrOrNum = string | number;
type objWithName = { name: string; uid: StrOrNum };

const logoDetails = (uid: StrOrNum, item: string) => {
  console.log(`${item} has a  uid of ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says Hello`);
};
