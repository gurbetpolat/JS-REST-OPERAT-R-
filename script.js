/**************JS REST OPERATÖRÜ****************/

//Bir fonksiyonda sadece bir kere rest operatörü kullanabiliriz. Birden fazla kullanamayız.

// Rest parametremiz herdaim sonuncu eleman olmak zorunda.

//Fonsiyonlarda paremetre olarak kullandığımız bir operatör

const names=["Emre","Gurbet","Buse","Deniz","Derya"]

function getName(name1,name2,...devam)
{
    console.log(name1);
    console.log(name2);
    console.log(devam)
    
}
getName(...names)

