function obtenerCarrito(){
  return JSON.parse(localStorage.getItem("carrito") || "[]");
}

function guardarCarrito(c){
  localStorage.setItem("carrito", JSON.stringify(c));
}

function agregarAlCarrito(id){
  const productos = [
    {id:1,nombre:"Auriculares Bluetooth",precio:79.90,imagen:"img/producto1.jpg"},
    {id:2,nombre:"Cargador Rápido 30W",precio:25.90,imagen:"img/producto1.jpg"},
    {id:3,nombre:"Smartwatch Básico",precio:99.90,imagen:"img/producto1.jpg"},
    {id:4,nombre:"USB 64GB",precio:15.90,imagen:"img/producto1.jpg"}
  ];

  const prod = productos.find(p=>p.id===id);
  if(!prod) return;

  const carrito = obtenerCarrito();
  const existe = carrito.find(i=>i.id===id);

  if(existe){
    existe.cantidad++;
  } else {
    carrito.push({...prod, cantidad:1});
  }

  guardarCarrito(carrito);
  actualizarContador();
  alert("Producto agregado");
}

function actualizarContador(){
  const total = obtenerCarrito().reduce((s,i)=>s+i.cantidad,0);
  document.querySelectorAll("#contador").forEach(e=>e.textContent=total);
}
