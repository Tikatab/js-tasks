/* 
    Task 1 : 
    ანა არის 28 წლის , ხოლო მისი ძმა ლევანი 21ის .
    გამოიყენეთ ცვლადები , რომელშიც შეინახავთ თითოეულის ასაკს და სახელს.
    განსაზღვრეთ ახალი სტრინგ ტიპის ცვლადი რომელიც შეინახასვს ტექსტს :
    'ანა ლევანზე 7 წლით უფროსია'
    სხვაობა დათვალეთ დინამიურად ცვლადების და არითმეტიკული ოპერატორების გამოყენებით
    დალოგეთ ზემოაღნიშნული ცვლადი . 
*/
let sister = 'ანა';
let brother = 'ლევანი';
let sistersAge = 28
let brothersAge = 21
let text =  `${sister} არის ${brother}ზე ${sistersAge - brothersAge} წლით უფროსი`
console.log(text)

/*
    Task 2 : 
        გვაქვს სტუდენტების სახელების მასივი ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
        დალოგეთ სიის ზუსტად შუაში მყოფი სახელი.
*/
let students = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den']
let i=0 
if (students.length%2 === 0) {
    let middle = (students.length - students.length/2)
    let middle2 = (students.length - students.length/2 ) - 1
    console.log(students[middle])
    console.log(students[middle2])
} else {
    let middle3 = ((students.length-1)/2)
    console.log(students[middle3])
}


/*
    Task 3 : 
    Part 1 : შექმენით სტუდენტის ობიექტი , რომელსაც აქვს 5 property : firstName; lastName; age; subjects; roommate;
    firstname,lastname - string type
    age - number
    subject - object (array of strings)
    roommate - object (რომელსაც აქვს თავის მხრივ ორი property : fullname , age )
    მნიშვნელობები მიანიჭეთ ტიპების მიხედვით . subject- მასივი უნდა შედგებოდეს არანაკლებ 5 ელემენტისგან
    Part 2 : 
        for ციკლის გამოყენებით დალოგეთ თუ რა საგნებს სწავლობს სტუდენტი , subject arrayს ელემენტები.
        ასევე შექმენით ახალი ცვლადი fullName რომელშიც შეინახავთ სტუდენტის სრულ სახელ და გვარს.
        ეს fullName მნიშვნელობასთან ერთად დაამატეთ სტუდენტის ობიექტს. 
         
        დაამატეთ ცვლადი result რომლის მნიშვნელობაც იქნება წინადადება : 
            ' (სტუდენტის სახელი და გვარი) არის age წლის და მისი რუმმეითი არის : roommate fullname
        
*/
let roommateinfo = {
    fullname: 'Mary Watson',
    age: 25
}
let subjects = ['მათემატიკა', 'პროგრამირება', 'ინგლისური', 'ქიმია', 'ფიზიკა']
let studentobject = {
    firstName: 'John',
    lastName: 'Jones',
    age: 25,
    roommate: roommateinfo, 
    subject: subjects

}

console.log(studentobject)

for (let i=0; i<subjects.length; i++){
    console.log(subjects[i])
}

studentobject.fullName = studentobject.firstName + ' '+ studentobject.lastName;

let result = `${studentobject.fullName} არის ${studentobject.age} წლის და მისი რუმმეითი არის ${roommateinfo.fullname}`
console.log(result)
/*
    Task 4 : 
        გვაქვს  მასივი : ["Banana", "Orange", "Apple", "Mango",2,12]
        გამოიყენეთ while ციკლი და მანამ სანამ მასივის ელემენტის ტიპი არის სტრინგი
        დალოგეთ ეს ელემენტი.
*/

const fruits= ["Banana", "Orange", "Apple", "Mango",  2,12];
let y=0;
while (y<fruits.length){
    if(typeof(fruits[y])== 'string'){
        console.log(fruits[y])
    } else break;
    y++;
}
/*
    Task 5 : 
    გვაქვს მასივი : [12,23,43,11,9,2,121,90]
    თუ მასივის ელემენტი მეტია 31ზე და თან არის ლუწი მაშინ დალოგეთ : 'Element is greater than provided value and is EVEN'
    თუ მასივის ელემენტი ნაკლებია 31ზე და თან არის კენტი მაშინ დალოგეთ : 'Element is less than provided value and is ODD'
*/

const n = [12,23,43,11,9,2,121,90]
for (let z = 0; z<n.length; z++){
    let element = n[z]
    if (element>31 && element%2==0){
        console.log('Element is greater than provided value and is EVEN')
    } else if (element<31 && element%2==0){
        console.log('Element is less than provided value and is EVEN')
    }else if (element>31 && element%2!=0){
        console.log('Element is greater than provided value and is ODD')
    }else {console.log('Element is less than provided value and is ODD')}


}