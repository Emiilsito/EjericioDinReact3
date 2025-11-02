import ProductList from "../components/ProductList";

function Productos() {
  return (
    <div className="min-h-screen bg-[var(--color-white)] text-[var(--color-black-1)] flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-2 text-center">
        Nuestros Productos
      </h1>
      <p className="text-[var(--color-grey-3)] mb-10 text-center max-w-2xl">
        Nuestro compromiso es claro: ofrecer calidad al mejor precio para nuestros clientes.
      </p>
      <ProductList />
    </div>
  );
}

export default Productos; 
