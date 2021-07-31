var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.create = function () { };
    UserService.prototype.getOne = function (email, password) {
        // DB에 접근해서 ID와 패스워드가 일치하는 것을 찾는다.
        var createdUser = {
            email: "hansu@naver.com",
            password: "123456789@",
        };
        return createdUser;
    };
    return UserService;
}());
export { UserService };
export default new UserService();
