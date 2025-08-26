import {ThrottleEnum} from "./beeoclock/common/enum/ThrottleEnum";

declare namespace Cypress {
    interface Chainable<Subject = any> {
        loginOnPanel(): void;
    }
}
