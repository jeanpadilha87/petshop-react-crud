import { useState } from 'react';

import OwnersPage from './pages/OwnersPage';
import PetsPage from './pages/PetsPage';

export default function App() {
  const [page, setPage] = useState('owners');

  return (
    <div>
      <button
        onClick={() => setPage('owners')}
      >
        Donos
      </button>

      <button
        onClick={() => setPage('pets')}
      >
        Pets
      </button>

      <hr />

      {page === 'owners' ? (
        <OwnersPage />
      ) : (
        <PetsPage />
      )}
    </div>
  );
}