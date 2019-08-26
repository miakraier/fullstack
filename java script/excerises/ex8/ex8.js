function print1(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = n-i+1; j >=1 ; j--) {
           
            document.write(j)
        }
        document.write("<br>")
    } 
}
/*---- main program----*/

print1(4)


