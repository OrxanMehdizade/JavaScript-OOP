class MyBotton{
    constructor(ClassName, ClassValue,btnText) {
        this.btnName=ClassName
        this.btnValue=ClassValue
        this.btntxt=btnText
    }
    btnshow(){
        let btnTag=`<button class="${this.btnName} ${this.btnValue}">`
        let btnendTag='</button>';
        document.write(btnTag+this.btntxt+btnendTag);
    }

}
let btnColor= new MyBotton('btn',"btn-danger","See more",)
let btnColorblue= new MyBotton('btn',"btn-secondary","See more",)

btnColor.btnshow();
btnColorblue.btnshow();



