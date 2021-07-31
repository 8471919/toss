import userSerivce from "./user.serivce";
var UserController = /** @class */ (function () {
    function UserController(userSerivce) {
        this.service = userSerivce;
    }
    UserController.prototype.getAdmin = function (req, res, next) {
        var email = "adimn";
        var password = "admin";
        var admin = this.service.getOne(email, password);
        res.status(200).send(admin);
    };
    UserController.prototype.login = function (req, res, next) {
        var _a = req.body, email = _a.email, password = _a.password;
        var alreadyExist = this.service.getOne(email, password);
        if (alreadyExist) {
            res.status(400).send("NO USER");
        }
        var userEmail = alreadyExist.email;
        res.status(200).send(userEmail);
    };
    return UserController;
}());
export default new UserController(userSerivce);
