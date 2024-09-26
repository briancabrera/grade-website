import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#8E7EE0] text-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:flex-row md:items-center mb-4 md:mb-0">
          <span role="img" aria-label="School" className="text-3xl leading-none mb-2 md:mb-0 md:mr-2">🏫</span>
          <p className="text-gray-100 text-center md:text-left">© 2024 Grade. Innovando en educación.</p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0">
          <Link href="#" className="text-gray-100 hover:text-[#FF8C42]">Acerca de Grade</Link>
          <Link href="#" className="text-gray-100 hover:text-[#FF8C42]">Soluciones</Link>
          <Link href="#" className="text-gray-100 hover:text-[#FF8C42]">Aviso legal</Link>
          <Link href="#" className="text-gray-100 hover:text-[#FF8C42]">Política de datos</Link>
        </nav>
      </div>
    </footer>
  )
}