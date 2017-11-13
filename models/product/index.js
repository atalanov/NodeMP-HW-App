let mock =[
    {
        id:0,
        name:"Product0"
    },
    {
        id:1,
        name:"Product1"
    }
];
export default class Product{
    constructor(){
        console.log("Product module");
    }
    static get(id){
        if(id){
            return mock[id];
        }
        return mock;
    }
    static add(product){
        mock.push(product);
        return product;
    }
    static getReviews(){
        return "Many-many reviews";
    }
}

