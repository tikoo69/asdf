import { Component } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
 } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  //FormGroup
loginForm!: FormGroup;
  //สร้าตัวแปรไว้เช็คว่า Submit form หรือยัง
submitted = false;
  //ตัวแปรสำหรับผูกกับฟอร์ม
  userLogin ={
    "email": "",
    "password": "",
  }
  constructor(private FormBuilder: FormBuilder) {

  }

  ngOnInit(){
    this.loginForm = this.FormBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
    })
  }
  //ปุ่มล็อกอิน
  submitLogin(){
    this.submitted = true;
    // ถ้าฟอร์มไม่ถูกต้อง (Invalid)
    if(this.loginForm.invalid){
      return
    }else{
      this.userLogin.email = this.loginForm.value.email
      this.userLogin.password = this.loginForm.value.password
      if(this.userLogin.email == "admin@gmail.com"
        && this.userLogin.password == "123456"){
          alert("เข้าสู่ระบบสำเร็จ")
      }else{
        alert("ไม่สามารถเข้าสู่ระบบได้")
      }
    }
  }

  //ปุ่มเซ็ตฟอร์ม
  resetForm(){
    this.submitted == false;
    this.loginForm.reset();
  }
}
