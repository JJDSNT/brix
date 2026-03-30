'use client'

import dynamic from 'next/dynamic'

const Brix3D = dynamic(() => import('@/components/Brix3D'), { ssr: false })

export default function Page() {
  return (
    <main className='min-h-screen bg-black text-white grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20'>
      {/* TEXTO */}
      <div className='max-w-xl'>
        <p className='mb-4 text-sm uppercase tracking-[0.25em] text-white/40'>Agência de eventos</p>

        <h1 className='text-5xl md:text-7xl font-semibold leading-tight'>
          Eventos que
          <span className='block text-white/70'>marcam presença.</span>
        </h1>

        <p className='mt-6 text-white/60 text-lg'>
          A Brix Comunicação cria experiências memoráveis com estratégia, produção e execução impecável.
        </p>

        <div className='mt-8 flex gap-4'>
          <button className='rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:scale-105 transition'>
            Solicitar orçamento
          </button>

          <button className='rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition'>
            Área do cliente
          </button>
        </div>
      </div>

      {/* 3D */}
      <div className='relative h-[400px] md:h-[600px] w-full'>
        {/* glow */}
        <div className='absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-3xl' />

        <Brix3D />
      </div>
    </main>
  )
}
