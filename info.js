function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i=1; i<arr.length; i++){
        if(arr[0]>max){
            max = arr[0];
        }
        if(arr[0]<min){
            min = arr[0];
        }
        sum = sum + arr[i];
    }
    var avg = sum/arr.length;
    return [max, min, avg];
}
