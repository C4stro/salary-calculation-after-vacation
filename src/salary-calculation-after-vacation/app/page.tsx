export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="max-w-md p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Calculo Salário pós Férias</h1>
        <div className="mb-4">
          <label className="block text-lg mb-2">Salário Mensal</label>
          <div className="relative rounded-md shadow-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">R$</span>
            <input
              type="number"
              className="w-full pl-12 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite o salário mensal"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Dias de Férias</label>
          <input
            type="number"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o número de dias de férias"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md w-full">
          Calcular Salário pós Férias
        </button>
      </div>
    </main>
  );
}
