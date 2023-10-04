export default class helpers{

    static  generateUniqueID() {
        return Math.random().toString(36).substr(2, 8);
    }

}