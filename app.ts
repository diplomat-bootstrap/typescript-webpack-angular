/// <reference path="./typings/tsd.d.ts" />

class A {
    static a() {
        console.log("hello: a")
    }

    b() {
        console.log("hello: b")
    }
}

window.addEventListener("load", ()=>{
    A.a();
    throw("Some error");
});
