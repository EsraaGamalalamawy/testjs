// Filtering an array
var arr1=[1,2,3,4,5,6,7,8,9,10]
var newarr1=arr1.filter(ele=>{return ele%2==0})
document.write(`<h3>the array: ${arr1} <br> array after filtering: ${newarr1}</h3><hr>`)

// find the largest number
var arr2=[85,78,44,88,1000,54,0,-5000]
var newarr2=arr2.reduce((item,current)=>{
    if(current>=item){
        return current
    }else{
        return item
    }
})
document.write(`<h3>the array: ${arr2} <br> largest number is: ${newarr2}</h3><hr>`)

// Reverse a string
var str3="the world"
var arr3=str3.split("")
var newarr3=(arr3.map((e,index)=>{
    return arr3[arr3.length-(index+1)]
})).join("")
document.write(`<h3>the string: ${str3} <br> string after Reverse a string: ${newarr3}</h3><hr>`)

// Remove Dublication
var arr4=[1,2,3,1,5,1,2,3,1]
var newarr4=arr4.filter((ele,index)=>{
    if(arr4.indexOf(ele)===index){
        return ele
    }
})
document.write(`<h3>the array: ${arr4} <br> string after remove dublication: ${newarr4}</h3><hr>`)