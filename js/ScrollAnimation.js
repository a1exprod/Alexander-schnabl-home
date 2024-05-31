












//Observe all html elements with the class="js_hidden"
const observer = new IntersectionObserver((entries) =>
{
    entries.forEach((entry) => 
    {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('js_show');
        }

    });
});
    

const hiddenElements = document.querySelectorAll('.js_hidden'); 
hiddenElements.forEach((el) => observer.observe(el));
