<<<<<<< HEAD
const notifier = require("node-notifier");
const path = require("path");
const open = require("open");
const config = require("./config/config.json");
notifier.on("click", function(notifierObject, options, event) {
  open(config.cmsURL);
});

module.exports = {
  run(message) {
    notifier.notify({
      title: "Attendance Reminder",
      message: message,
      icon: path.join(__dirname, config.notificationIcon),
      sound: true,
      wait: true
    });
  }
};

//module.exports = run;
=======
const notifier = require('node-notifier')
const path = require('path')
const open = require('open')

module.exports = {
    run(message){
            notifier.notify(
            {
                title: 'Attendance Reminder',
                message: message,
                icon: path.join(__dirname, 'fofx.png'),
                sound: true,
                wait: true, 
            },
            function() {
                open("https://fofxacademy.com")
            }
            );    
    }
}

   

//module.exports = run;
>>>>>>> 75599287c50c1c8610ac28248c303658f19deca3
