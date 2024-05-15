function closure () {
    let a = 2;
     function closure2 () {
        console.log(a);
        let b = 8
         function closure3() {
            console.log(b);   
        }
        return closure3()
    }
    return closure2()
}
closure()