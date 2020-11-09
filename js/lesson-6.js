// Exercie 1:

String.prototype.filter = function (bannedWords) {
    let str = ""
    let wordsArr = this.split(' ');
    for (let i = 0; i < wordsArr.length; i++) {
        if(bannedWords.indexOf(wordsArr[i]) < 0){
            str+= " "+wordsArr[i]
        }
    }
    console.log("--------- after filter --------------");
    console.log(str)
}


function testExercice1() {
    console.log("*********** Exercice 1***********")
    console.log("Original text: ")
    console.log("This house is not nice!");
    let word ="This house is not nice!".filter(["not"])
};


//Exercice 2:
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            } }
    }
    return inputArr;
};

function testExercice2() {
    console.log("*********** Question2***********")
    console.log("--------- original numbers --------------")
    console.log("1, 8, 4,3,9,10");
    const nums=[1, 8, 4,3,9,10];
    console.log(bubbleSort(nums));
    // console.log("--------- after filter --------------")
    // console.log(str) };
};


// Exercice 3:
function Person(name, age) {
    this.name = name;
    this.age = age;
};

function Teacher(name, age) {
    Person.call(this, name, age, "M");
};

Teacher.prototype.teach = function(subject) {
    this.subject = subject;
    console.log(this.name + ' is now teaching ' +subject )
};
//Teacher.prototype = Object.create(Person.prototype);

function testExercice3() {
    console.log("*********** Question3***********")
    let teacher1 = new Teacher("Joe","27");
    teacher1.teach("Computer science");
}

// Exercice 3 with Object.create();
const teacherObject = {
    name: "",
    age: 27,
    teach: function(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
};

function testExercice3b() {
    console.log("*********** Question3 b Object.create***********")
    let teacher2 = Object.create(teacherObject);
    teacher2.age = 27;
    teacher2.name = "Joe";
    teacher2.teach("Computer science");
}

//-------------question4:

Person.prototype.greeting = function() {
    console.log('Greetings, my name is '+this.name +' and I am '+this.age+' years old.')
};

Person.prototype.salute = function() {
    console.log('Good morning!, and in case I dont see you, good afternoon, good evening and good night!')
};


function Student(name, age,major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype.greeting = function() {
    console.log('Hey, my name is ' + this.name + ' and I am studying ' + this.major )
};


function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype.greeting = function() {
    console.log('Good day, my name is' + this.name + ' and I am in the ' + this.department + ' department.')
};

function testExercice4() {
    console.log("Exercie 4: ")
    let professor1 = new Professor("Joe Sleiman","27","Computer Science Department");
    let student1 = new Student("Chady Sleiman", "35","Chemistry")
    professor1.greeting();
    // professor1.salute();
    student1.greeting();
    //  student1.salute();
}
