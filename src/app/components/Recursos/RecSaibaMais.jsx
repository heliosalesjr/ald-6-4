import React from 'react';

const RecSaibaMais = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-tl from-primary to-primary-focus sm:flex-row md:h-80">
           
            <div className="order-first h-48 w-full sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
                src="images/mobile.jpg"
                loading="lazy"
                alt="Photo by Helio Sales Jr."
                className="h-full w-full object-cover object-center"
            />
            </div>
            
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="mb-4 mx-4 mt-4 text-xl font-bold text-white md:text-2xl lg:text-3xl">Artigos interessantes sobre as redes sociais</h2>
    
            <p className=" mx-4 text-white py-2">
                As 10 maiores redes sociais utilizadas no mundo.
            </p>
            <p className="mx-4 text-white py-2">
                Vantagens e desvantagens do uso das redes sociais.
            </p>
            <p className="mx-4 text-white py-2 mb-4">
                Usando redes sociais na educação.
            </p>
            
            </div>
            
        </div>
        </div>
    </div>
  

  );
};

export default RecSaibaMais;