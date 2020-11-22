class EmployeePayrollData {
    get id() { return this._id; } 
    set id(id) { this._id = id; 
    }

    get name() { return this._name; } 
    set name(name) { 
    let nameRegex = RegExp('(^[A-Z]{1})([a-zA-Z]{2,})$') 
    if (nameRegex. test (name) ) 
    this._name = name; 
    else throw 'Name is Incorrect!';
    }

    get profilePic() { return this._profilePic; }  
    set profilePic(profilePic) {
    this._profilePic = profilePic; 
    }

    get gender() { return this._gender; }
    set gender(gender) { this._gender = gender;}

    get department(){ return this._department;}
    set department(department) { 
    this._department = department;
    }

    get salary(){return this._salary;}
    set salary(salary) {
     this._salary = salary;}
    
     get note() { return this._note; }
     set note(note) {this. _note = note;}

     get startDate() { return this._startDate; }
     set startDate(startDate) {
        var nowdate=new Date();
        var nowtime=nowdate.getTime();
        if(startDate-nowtime>0) throw 'Start date cannot be a future event';
        else{
           if(((nowtime-startDate)/(1000*60*60*24))>30) throw 'Start date cannot be 30 days before current dates';
           else  this. _startDate = startDate;
         }
      }

     toString(){
        var empDate=new Date(this.startDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDateString = empDate.toLocaleString("en-US", options);
        return "id=" + this.id + ", name='" + this.name + "', gender='" + this.gender +
        "' profilePic='" + this.profilePic + ", department=" + this.department +
        ", salary="+ this.salary + ", startDate=" + empDateString + ", note=" + this.note;
     }

}


