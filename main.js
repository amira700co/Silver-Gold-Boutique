console.log("main.js works");


// 1. Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".mnu-list");

if (menuBtn && menuList) {
  menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
  });
}

// 2. Dark & Light Mode
const darkBtn = document.querySelector(".darkmod");

if (darkBtn) {
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// 3. Shopping Cart
let count = Number(localStorage.getItem("count")) || 0;

const addcarts = document.querySelectorAll(".add-to-cart");
const countofcart = document.querySelector(".cart-count");

if (countofcart) {
  if (count > 0) {
    countofcart.classList.remove("hidden");
  }
  countofcart.textContent = count;
}

addcarts.forEach((button) => {
  button.addEventListener("click", () => {
    count++;
    if (countofcart) {
      countofcart.textContent = count;
      countofcart.classList.remove("hidden");
    }
    console.log("clicked");
    localStorage.setItem("count", count);
  });
});

//   Form Validation (JustValidate)
const formElement = document.querySelector('#formcomi');

if (formElement) {
  const validation = new JustValidate('#formcomi');

  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Name is required',
      }
    ])
    .addField('#commintyou', [
      {
        rule: 'required',
        errorMessage: 'Comment is required',
      }
    ])
    .onSuccess((event) => {
      event.preventDefault();
      console.log("Comment submitted successfully!");

swal("Are you sure?", {
    dangerMode: true,
    buttons: true,
}).then((result) => {

// then يحفظ اختيار المستخدم في متغيرريزلت

if (result) {     // يقرر وش يسوي عند الضغط ع النتيجه اللي اختارها  .. هنا فرضنا
 console.log(" successfully!");
//SAVE IN THE LOCAL STORGE
const commentform =document.forms["formcomi"]  // امسك الفورم
let commntsa=[];
    // نقرأ الذاكرة مجدداً للتأكد من جلب أحدث مصفوفة قبل التعديل وماتنمسح مع التعديل
if (localStorage.getItem("commntsa") != null) {
  // جلب البيانات القديمة فوراً عند فتح الصفحة، وإذا كانت الخزانة فارغة، اجعلها مصفوفة فارغة []
commntsa=JSON.parse(localStorage.getItem("commntsa"))  //or const commntsa = JSON.parse(localStorage.getItem("spendsall")) || [];
} 
const yourcomntas = {
    name: commentform.name.value,
    commenta: commentform.commintyou.value,
};
commntsa.push(yourcomntas)
localStorage.setItem("commntsa",JSON.stringify(commntsa)); //  يحول الاري اللي فيها المصاريف الى سترنق لان لوكل ستورج تتتعامل مع سترنق فقط,, ونضيفها الى  اللوكل الستورج 


dipplay_comentats();
 commentform.reset();

}

else {
      console.log("تم الإلغاء");
    }
 // استدعاء دالة العرض الخارجية من الداخل لتحديث الشاشة

  });


    });
}





//داله العرض
const dipplay_comentats= () => {


 // الدالة مستقلة: أول سطر فيها يذهب للـ LocalStorage مباشرة ويجلب أحدث نسخة طازجة
  const commntsa = JSON.parse(localStorage.getItem("commntsa")) || [];
const comentatk=commntsa.map((con, index) => {
return`



 <div class="commint  mb-[64px]">

<span class=" text-secondry pb-[4px] text-[7px] leading-[10 px]  tracking-[1px]  md:pb-[16.5px] md:text-[11px] md:leading-[11.5px]  md:tracking-[1.1px] ">  ${con.name}  </span>
<img src= "" alt="">

<h3 class="text-[18px] leading-[18px]  mb-[16px] mt-[16px]"> ${con.commenta}  </h3>



</div>
 `;

}).join("");

document.querySelector(".dynamicComments").innerHTML = comentatk ;

}

dipplay_comentats();


// Formsell Validation (JustValidate)
const formSell1 = document.querySelector('#formsell');

if (formSell1) {
  const validation = new JustValidate('#formsell');

  validation
    .addField('#namesell', [
      {
        rule: 'required',
        errorMessage: 'Name is required',
      }
    ])
    .addField('#phonenum', [
      {
        rule: 'required',
        errorMessage: 'Phone number is required',
      },
      {
        rule: 'number',
        errorMessage: 'Value should be a number',
      },
      {
        rule: 'minLength',
        value: 10,
        errorMessage: 'Phone number must be at least 10 digits',
      }
    ])
    .addField('#ghrams', [
      {
        rule: 'required',
        errorMessage: 'Grams value is required',
      },
      {
        rule: 'customRegexp',
        value: /^[0-9]+(\.[0-9]+)?$/,
        errorMessage: 'Value must be a number only (e.g. 10 or 10.5)', // ✔ تم تعديل الفاصلة الزائدة
      },
    ])
    .onSuccess((event) => {
      event.preventDefault();
      console.log("Form submitted successfully!");

    });
}