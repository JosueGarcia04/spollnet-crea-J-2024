  export default function Id() {
    return (
      <div className='bg-black'> 
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 md:px-0">
          <div className="flex flex-col items-center max-w-sm mx-4">
            <div 
              className="bg-cover bg-center bg-gray-300 h-64 w-full rounded-xl shadow-xl "
              style={{ backgroundImage: "url('src/assets/id.png')" }}
            />
            <div className="w-full max-w-sm bg-black -mt-10 shadow-xl rounded-xl overflow-hidden border-2 border-[#E31FAE]"> 
              <div className="py-4 text-center font-semibold tracking-wide text-lg text-[#E31FAE]">
                Carnét de estudiante
              </div>
              <div className="flex items-center justify-center py-4 px-6 bg-[#380B99] rounded-b-xl">
                <p className="text-white font-semibold text-center">
                  Documento esencial para la validación de identidad del votante.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-sm mx-4">
            <div 
              className="bg-cover bg-center bg-gray-300 h-64 w-full rounded-xl shadow-xl"
              style={{ backgroundImage: "url('src/assets/registro.png')" }}
            />
            <div className="w-full max-w-sm bg-black -mt-10 shadow-xl rounded-xl overflow-hidden border-2 border-[#E31FAE]"> 
              <div className="py-4 text-center font-semibold tracking-wide text-lg text-[#E31FAE]">
                Registro del estudiante
              </div>
              <div className="flex items-center justify-center py-4 px-6 bg-[#380B99] rounded-b-xl">
                <p className="text-white font-semibold text-center">
                Documento crucial para el proceso de registro y validación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
