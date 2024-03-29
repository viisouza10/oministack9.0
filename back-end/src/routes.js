const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const AppovalController = require("./controllers/AppovalController");
const RejectionController = require("./controllers/RejectionController");

routes.post("/sessions", SessionController.store);
routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.post("/bookings/:booking_id/approvals", AppovalController.store);
routes.post("/bookings/:booking_id/rejections", RejectionController.store);
module.exports = routes;
