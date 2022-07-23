//soal 1
for(let y = 1; y <= 9; y++){
    for (let x = 1; x<=9; x++){
        if(x==y || x+y == 10 || x==5 || y==5){
            document.write("*")
        }else{
            document.write("&ensp;")
        }
    }
    document.write("<br>")
}

document.write("<br>")

//soal 2
for(let y = 1; y <= 9; y++){
    for (let x = 1; x<=9; x++){
        if(x+y >= 10){
            document.write("*")
        }else{
            document.write("&ensp;")
        }
    }
    document.write("<br>")
}

document.write("<br>")

//soal 3
for(let y = 1; y <= 9; y++){
    for (let x = 1; x<=9; x++){
        if(x<=y && x+y <= 10 || x>=y && x+y>=10){
            document.write("*")
        }else{
            document.write("&ensp;")
        }
    }
    document.write("<br>")
}

document.write("<br>")

//soal 4
for(let y = 1; y <= 9; y++){
    for (let x = 1; x<=9; x++){
        if(x==y && y<=5 || x+y==10 && y<=5 || x==5 && y>=5){
            document.write("*")
        }else{
            document.write("&ensp;")
        }
    }
    document.write("<br>")
}

document.write("<br>")


for(let y = 1; y <= 9; y++){
    for (let x = 1; x<=9; x++){
        if(x==1 || y==1 || x==9 || y==5){
            document.write("*")
        }else{
            document.write("&ensp;")
        }
    }
    document.write("<br>")
}

document.write("<br>")

for(let y = 1; y <= 9; y++){
    for (let x = 1; x<=9; x++){
        if(x==1 || y==1 || y==5){
            document.write("*")
        }else{
            document.write("&ensp;")
        }
    }
    document.write("<br>")
}

document.write("<br>")

for(let y = 1; y <= 9; y++){
    for (let x = 1; x<=9; x++){
        if(y==1 || x==5 || y==9){
            document.write("*")
        }else{
            document.write("&ensp;")
        }
    }
    document.write("<br>")
}

document.write("<br>")












