const container = document.getElementById("container");
const img = document.querySelector("img");

container.addEventListener("mousemove", (e) =>{
  const x = e.pageX - e.currentTarget.offsetLeft;
  const y = e.pageY - e.currentTarget.offsetTop;

  console.log(x,y);

  img.style.transformOrigin = `${x}px ${y}px`;
  img.style.transform = `scale(2)`;
})

container.addEventListener("mouseleave", () => {
img.style.transformOrigin = "center";
img.style.transform = "scale(1)"
})