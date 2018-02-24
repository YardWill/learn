class a {
    static aa() {
        console.log(1);
    }
    bb() {

        console.log(this.aa);
    }
}
a.aa();
a.prototype.bb();
