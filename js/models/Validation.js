function Validation (){
    this.CheckValid = function(id , SpanId , Message){
        if(!id){
            getEle(SpanId).style.display = "block"
            getEle(SpanId).innerHTML = Message;
            return false;
        }else{
            getEle(SpanId).style.display = "none"
            getEle(SpanId).innerHTML = "";
            return true;
        }
    }
    this.checkDuplicate = function(value , SpanId , Message , arr){
        var exits = false;
        for(var i = 0 ; i < arr.length ; i ++){
            var valid = arr[i];
            if(valid.taskName === value){
                exits = true
                break;
            }
        }
        if(exits){
            getEle(SpanId).style.display = "block"
            getEle(SpanId).innerHTML = Message;
            return false;
        }
        getEle(SpanId).style.display = "none"
        getEle(SpanId).innerHTML = "";
        return true;
    }
    this.checkDuplicateComple = function(value , SpanId , Message , arr){
        var exits = false;
        for(var i = 0 ; i < arr.length ; i ++){
            var valid = arr[i];
            if(valid.taskName === value){
                exits = true
                break;
            }
        }
        if(exits){
            getEle(SpanId).style.display = "block"
            getEle(SpanId).innerHTML = Message;
            return false;
        }
        getEle(SpanId).style.display = "none"
        getEle(SpanId).innerHTML = "";
        return true;
    }
}