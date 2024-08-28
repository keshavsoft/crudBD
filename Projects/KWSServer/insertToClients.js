// let CommonSaveToJsonOnConnections = require("./LogHistory/OnConnection/EntryFile")

let StartFunc = ({ inClients, ws }) => {
  const id = uuidv4();
  const color = Math.floor(Math.random() * 360);
  const Name = "Anonymous";
  // const loginDateTime = getDate();
  const loginDateTime = new Date();
  const metadata = { id, color, Name, loginDateTime };
  // console.log("IP address of the connected user: ",ws._socket.address());
  inClients.set(ws, metadata);
};

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getDate() {
  var today = new Date();
  var dateTime = {
    year: today.getFullYear(),
    month: today.getMonth(),
    date: today.getDate(),
    hours: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds()
  };

  return dateTime;
}


//module.exports = StartFunc;
export { StartFunc };
