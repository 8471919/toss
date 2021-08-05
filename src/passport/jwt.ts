import { NextFunction } from "express";
import passport from "passport";
import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import userService from "../user/user.service";

// const fromAuthHeaderAsBearertoken = (req) => {
//     const auth = req.headers['authentication'];
//     if (auth) {
//         // const token = 'abcd123';
//         // auth = 'bearer abcd123';
//         return abcd123;
//     }
// }

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    // jwtFromRequest: (req: Request, res: Response, next: NextFunction) => {
    //     const headers: any = req.headers;
    //     const auth = headers["authorization"];
    //     if (auth) {
    //         const token = auth.split("");
    //         const bearer = token.splice(0, 7);
    //         return token.join("");
    //     }

    //     next();
    // },
    secretOrKey: "secret",
    // issuer: "accounts.examplesoft.com",
    // audience: "yoursite.net",
};

const jwtPassportConfig = () => {
    passport.use(
        "jwt",
        new JwtStrategy(opts, function (jwt_payload, done) {
            // User.findOne({ id: jwt_payload.sub }, function (err, user) {
            //     if (err) {
            //         return done(err, false);
            //     }
            //     if (user) {
            //         return done(null, user);
            //     } else {
            //         return done(null, false);
            //         // or you could create a new account
            //     }
            // });
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
