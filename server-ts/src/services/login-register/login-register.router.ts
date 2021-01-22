import express from 'express'
import { Mysql, connection} from '../../database/mySql/mysql.db';
import InputValidatorMiddleware from '../../middlewares/inputvalidator.middleware';
import routes from '../../properties/routes';
import RegisterLoginController from './register-login.controller';
export default class LoginRegister{
    private serviceApp : express.Application;
    constructor(){
        this.serviceApp = express();
        this.initializeLoginRegister()
    }
    private initializeLoginRegister(){
        // this.serviceApp.post(routes.LOGIN,  InputValidatorMiddleware.valdiatePost)
        const registerLoginController = new RegisterLoginController();
        this.serviceApp.post(
            routes.REGISTER, 
            InputValidatorMiddleware.valdiatePost, 
            registerLoginController.register)
        // this.serviceApp.get(routes.LOGOUT,(req,res) => res.send('WORKING'))
    }
    public getRouter(): express.Application{
        return this.serviceApp;
    }
}