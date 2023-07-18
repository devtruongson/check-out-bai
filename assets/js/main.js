const Form = document.querySelector("form");
const Modal = document.querySelector(".modal-custom");
const Body = document.querySelector("body");

if (Form) {
    Form.onsubmit = (e) => {
        e.preventDefault();

        Modal.classList.toggle("active");
    };
}

Body.onclick = () => {
    Modal.classList.remove("active");
};
