import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import userService from "../user/user.service";

const passportConfig = () => {
    passport.use(
        "local",
        new LocalStrategy(
            { usernameField: "email", passwordField: "password" },
            async (email, password, done) => {
                console.log("passport : ", email, password);
                const user = await userService.getUserByEmail(email);
                if (!user) {
                    return done(null, false);
                }

                if (user.password !== password) {
                    return done(null, false);
                }
                return done(null, user);
            }
        )
    );
};

export default passportConfig;
