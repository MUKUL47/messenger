import validator from 'validator';
import { Subject } from 'rxjs';
export const toggleLoader = new Subject<boolean>();
export const toastMessage = new Subject<{ type: boolean, message: String, duration?: Number, logout?: boolean }>();
export const setGlobalToggleFunc = (toggle: any, data: any) => { return { ...toggle, ...data } }
export default class Utils {
    public static validateEmailMobile(value: string): boolean {
        if (value.includes('@')) {
            return validator.isEmail(value);
        }
        return validator.isMobilePhone(value);
    }
    public static globalDefaultError = 'Unknown error occured'
    public static parseError = (e: any) => e.response && e.response.data ? (e.response.data.message ? e.response.data.message : Utils.globalDefaultError) : Utils.globalDefaultError
    public static getRandomNumber = (min: any, max: any) => { return Math.floor(Math.random() * (max - min) + min) };
    public static convertBaseToBlob = (b64Data: string, mimeType: string) => {
        const byteCharacters = atob(b64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: mimeType });
    }
}