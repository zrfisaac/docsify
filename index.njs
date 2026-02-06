// # [ zrfisaac ]

// # [ about ]
// # - author : Isaac Caires Santana
// # . - email : zrfisaac@gmail.com
// # . - site : zrfisaac.github.io

// # [ node ]

// # - constant
const c_express = require("express");
const c_path = require("path");
const c_app = c_express();
const c_port = 8080;
const c_folder = c_path.join(__dirname, "../");

// # - main
c_app.use(c_express.static(c_folder));
c_app.listen(c_port, () => {
	console.log(`http://localhost:${c_port}`);
});
