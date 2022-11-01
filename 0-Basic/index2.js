// export var x=10;
// export var y=20; this is not the way node export the content.

module.exports={
    x: 50,
    y:20,
    z(){
      return this.x;
    }
}