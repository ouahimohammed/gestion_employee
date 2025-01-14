import { Users, Calendar, FileText, Settings, User, LogOut } from 'lucide-react'

export default function Sidebar({ onLogout }) {
  return (
    <div className="w-64 bg-gray-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">ComplexeC</h1>
      <nav>
        <ul className="space-y-4">
          <li><a href="#" className="flex items-center hover:text-blue-400 transition-colors"><Users className="mr-2" /> Gestion des employés</a></li>
          <li><a href="#" className="flex items-center hover:text-blue-400 transition-colors"><Calendar className="mr-2" /> Présences / Absences</a></li>
          <li><a href="#" className="flex items-center hover:text-blue-400 transition-colors"><FileText className="mr-2" /> Rapports</a></li>
          <li><a href="#" className="flex items-center hover:text-blue-400 transition-colors"><Settings className="mr-2" /> Paramètres</a></li>
          <li><a href="#" className="flex items-center hover:text-blue-400 transition-colors"><User className="mr-2" /> Profil</a></li>
          <li>
            <button 
              onClick={onLogout}
              className="flex items-center text-red-400 hover:text-red-300 transition-colors"
            >
              <LogOut className="mr-2" /> Déconnexion
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

