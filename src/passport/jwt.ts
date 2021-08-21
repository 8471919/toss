import { NextFunction } from "express";
import passport from "passport";
import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import userService from "../user/user.service";

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret",
};

const jwtPassportConfig = () => {
    passport.use(
        "jwt",
        new JwtStrategy(opts, function (jwt_payload, done) {
            console.log("payload : ", jwt_payload);
            console.log("payload : ", jwt_payload.email);

            const user = userService.getUserByEmail(jwt_payload.email);
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        })
    );
};

export default jwtPassportConfig;
